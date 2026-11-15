import { NextRequest, NextResponse } from "next/server";
import { limiter } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

const FALLBACK_REPLY =
  "Hi there! I'm the Drinma virtual assistant. Our chat is being set up right now, so please call our hotline 1900-xxxx for help.";

const PRIVATE_HOSTS = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
  "169.254.169.254",
];

function isAllowedWebhook(rawUrl: string): boolean {
  try {
    const url = new URL(rawUrl);
    if (url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase();
    if (PRIVATE_HOSTS.includes(host)) return false;
    if (/^10\./.test(host)) return false;
    if (/^192\.168\./.test(host)) return false;
    if (/^172\.(1[6-9]|2\d|3[01])\./.test(host)) return false;
    const allowlist = (process.env.N8N_HOSTNAMES ?? "")
      .split(",")
      .map((h) => h.trim().toLowerCase())
      .filter(Boolean);
    if (allowlist.length > 0 && !allowlist.includes(host)) return false;
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "anonymous";

    try {
      await limiter.check(10, ip);
    } catch {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 }
      );
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl || !isAllowedWebhook(n8nWebhookUrl)) {
      return NextResponse.json({
        reply: FALLBACK_REPLY,
        source: "fallback",
      });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const n8nResponse = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim() }),
        signal: controller.signal,
      });

      if (!n8nResponse.ok) {
        return NextResponse.json({
          reply: "Sorry, I can't handle that request right now. Please try again later.",
          source: "error",
        });
      }

      const data = await n8nResponse.json();

      return NextResponse.json({
        reply: data.reply || data.message || "Thanks for getting in touch!",
        source: "n8n",
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch {
    return NextResponse.json(
      { error: "Chat system error" },
      { status: 500 }
    );
  }
}
