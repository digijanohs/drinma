import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { limiter } from "@/lib/rate-limit";
import { isAuthorized, UNAUTHORIZED_HEADERS } from "@/lib/auth";

export const dynamic = "force-dynamic";

const orderItemSchema = z.object({
  productId: z.string().min(1, "Invalid product ID"),
  size: z.string().min(1, "Invalid size"),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
  sugarLevel: z.number().int().min(0).max(100),
  iceLevel: z.number().int().min(0).max(100),
  toppings: z.array(z.string()),
  subtotal: z.number().int().min(0, "Invalid total amount"),
});

const orderSchema = z.object({
  customerName: z.string().min(2, "Customer name must be at least 2 characters"),
  phone: z.string().min(9, "Invalid phone number"),
  address: z.string().optional(),
  note: z.string().optional(),
  items: z
    .array(orderItemSchema)
    .min(1, "Your order needs at least one item"),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "anonymous";
    try {
      await limiter.check(5, ip);
    } catch {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid data submitted" },
        { status: 400 }
      );
    }

    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstMessage =
        Object.values(fieldErrors).flat()[0] ??
        parsed.error.flatten().formErrors[0] ??
        "Invalid order data";

      return NextResponse.json(
        {
          error: firstMessage,
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { items, ...orderData } = parsed.data;

    const productIds = Array.from(new Set(items.map((i) => i.productId)));

    const productRecords = await prisma.product.findMany({
      where: { id: { in: productIds }, isAvailable: true },
      select: { id: true, basePrice: true },
    });

    if (productRecords.length !== productIds.length) {
      return NextResponse.json(
        { error: "One or more items are unavailable or have been discontinued" },
        { status: 422 }
      );
    }

    const priceMap = new Map(productRecords.map((p) => [p.id, p.basePrice]));

    const toppingNames = Array.from(
      new Set(items.flatMap((i) => i.toppings))
    );
    const toppingRecords = toppingNames.length
      ? await prisma.topping.findMany({
          where: { name: { in: toppingNames } },
          select: { name: true, price: true },
        })
      : [];
    const toppingPriceMap = new Map(
      toppingRecords.map((t) => [t.name, t.price])
    );

    const verifiedItems = items.map((item) => {
      const basePrice = priceMap.get(item.productId) ?? 0;
      const toppingsTotal = item.toppings.reduce(
        (sum, t) => sum + (toppingPriceMap.get(t) ?? 0),
        0
      );
      const serverSubtotal = (basePrice + toppingsTotal) * item.quantity;
      return { ...item, subtotal: serverSubtotal };
    });

    const total = verifiedItems.reduce((sum, item) => sum + item.subtotal, 0);

    const order = await prisma.order.create({
      data: {
        ...orderData,
        address: orderData.address ?? "",
        total,
        items: {
          create: verifiedItems.map((item) => ({
            productId: item.productId,
            size: item.size,
            quantity: item.quantity,
            sugarLevel: item.sugarLevel,
            iceLevel: item.iceLevel,
            toppings: JSON.stringify(item.toppings),
            subtotal: item.subtotal,
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("[POST /api/orders]", error);
    return NextResponse.json(
      { error: "We couldn't place your order. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: UNAUTHORIZED_HEADERS }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    const rawPage = parseInt(searchParams.get("page") ?? "1", 10);
    const rawLimit = parseInt(searchParams.get("limit") ?? "10", 10);
    const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
    const limit = isNaN(rawLimit) || rawLimit < 1 ? 10 : Math.min(rawLimit, 50);

    const where: Record<string, unknown> = {};
    if (phone) {
      where.phone = { contains: phone };
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: { items: { include: { product: true } } },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.order.count({ where }),
    ]);

    return NextResponse.json({
      data: orders,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("[GET /api/orders]", error);
    return NextResponse.json(
      { error: "Unable to load orders" },
      { status: 500 }
    );
  }
}
