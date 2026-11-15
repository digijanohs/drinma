import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.topping.deleteMany();
  await prisma.category.deleteMany();

  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Traditional Milk Tea",
        slug: "tra-sua-truyen-thong",
        description: "Classic milk tea flavor, rich, creamy and aromatic.",
        image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop",
        order: 1,
      },
    }),
    prisma.category.create({
      data: {
        name: "Fruit Tea",
        slug: "tra-trai-cay",
        description: "Tea blended with fresh fruit, refreshing and cooling.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
        order: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: "Special",
        slug: "dac-biet",
        description: "Unique creations you will only find at Drinma.",
        image: "https://images.unsplash.com/photo-1525803377221-4de0e3d3efec?w=400&h=400&fit=crop",
        order: 3,
      },
    }),
    prisma.category.create({
      data: {
        name: "Fresh Milk & Cream",
        slug: "sua-tuoi-kem",
        description: "Drinks made with pure fresh milk and rich cream.",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
        order: 4,
      },
    }),
    prisma.category.create({
      data: {
        name: "Green Tea & Matcha",
        slug: "tra-xanh-matcha",
        description: "Premium Japanese green tea, pure matcha.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop",
        order: 5,
      },
    }),
  ]);

  const [traSua, traTraiCay, dacBiet, suaTuoi, traXanh] = categories;

  await prisma.topping.createMany({
    data: [
      { name: "Black Tapioca Pearls", price: 10000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=100&h=100&fit=crop" },
      { name: "White boba", price: 10000, image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=100&h=100&fit=crop" },
      { name: "Coconut jelly", price: 8000, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=100&h=100&fit=crop" },
      { name: "Egg Pudding", price: 12000, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=100&h=100&fit=crop" },
      { name: "Kem cheese", price: 15000, image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=100&h=100&fit=crop" },
      { name: "Fruit Jelly", price: 10000, image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=100&h=100&fit=crop" },
      { name: "Grass Jelly", price: 8000, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=100&h=100&fit=crop" },
      { name: "Peach Slices", price: 12000, image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=100&h=100&fit=crop" },
      { name: "Shot espresso", price: 15000, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=100&h=100&fit=crop" },
      { name: "Kem whipping", price: 12000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=100&h=100&fit=crop" },
      { name: "Golden Boba", price: 12000, image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=100&h=100&fit=crop" },
      { name: "Coffee Jelly", price: 10000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop" },
    ],
  });

  // Traditional Milk Tea
  await prisma.product.createMany({
    data: [
      {
        name: "Drinma Signature Milk Tea",
        slug: "tra-sua-iku-signature",
        description: "Ceylon black tea blended with pure fresh milk for a rich, beautifully balanced cup. Our signature drink, made with a proprietary recipe and finished with golden boba.",
        basePrice: 45000,
        image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&h=600&fit=crop",
        categoryId: traSua.id,
        isBestSeller: true,
      },
      {
        name: "Golden Boba Milk Tea",
        slug: "tra-sua-tran-chau-hoang-kim",
        description: "Rich milk tea with chewy, fragrant golden boba and a layer of creamy cheese foam. The best seller at every branch.",
        basePrice: 55000,
        image: "https://images.unsplash.com/photo-1525803377221-4de0e3d3efec?w=600&h=600&fit=crop",
        categoryId: traSua.id,
        isBestSeller: true,
        isNew: true,
      },
      {
        name: "Classic Black Milk Tea",
        slug: "hong-tra-sua",
        description: "Premium Ceylon black tea brewed with Moc Chau fresh milk, a light, delicate aroma and gently natural sweetness.",
        basePrice: 42000,
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=600&fit=crop",
        categoryId: traSua.id,
      },
      {
        name: "Roasted Oolong Milk Tea",
        slug: "tra-sua-o-long-nuong",
        description: "Taiwanese oolong lightly roasted over charcoal, combined with fresh milk for a distinctly fresh, unforgettable flavor.",
        basePrice: 48000,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop",
        categoryId: traSua.id,
      },
      {
        name: "Belgian Chocolate Milk Tea",
        slug: "tra-sua-socola-bi",
        description: "Pure Callebaut Belgian chocolate blended into milk tea, rich and sweet, finished with whipped cream.",
        basePrice: 50000,
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=600&fit=crop",
        categoryId: traSua.id,
      },
      {
        name: "Hokkaido Milk Tea",
        slug: "tra-sua-hokkaido",
        description: "A Japanese milk tea recipe with creamy Hokkaido milk, robust Assam black tea and a hint of caramel.",
        basePrice: 52000,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=600&fit=crop",
        categoryId: traSua.id,
        isNew: true,
      },
    ],
  });

  // Fruit Tea
  await prisma.product.createMany({
    data: [
      {
        name: "Peach Lemongrass Tea",
        slug: "tra-dao-cam-sa",
        description: "Green tea with generous peach slices, fresh orange and fragrant lemongrass. Crisp and cooling, perfect for summer days.",
        basePrice: 45000,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop",
        categoryId: traTraiCay.id,
        isBestSeller: true,
      },
      {
        name: "Lychee Rose Tea",
        slug: "tra-vai-lychee-rose",
        description: "Bulgarian rose tea with fresh Bac Giang lychee, fragrant and naturally sweet.",
        basePrice: 48000,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=600&fit=crop",
        categoryId: traTraiCay.id,
        isNew: true,
      },
      {
        name: "Passion Fruit Tea",
        slug: "tra-chanh-day-passion",
        description: "Fresh Da Lat passion fruit, perfectly balanced sweet and tart, with refreshing Thai Nguyen green tea and chia seeds.",
        basePrice: 42000,
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&h=600&fit=crop",
        categoryId: traTraiCay.id,
      },
      {
        name: "Mango Tropical Tea",
        slug: "tra-xoai-tropical",
        description: "Ripe, honey-sweet Cat Hoa Loc mango paired with jasmine tea for a refreshing tropical taste.",
        basePrice: 45000,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=600&fit=crop",
        categoryId: traTraiCay.id,
      },
      {
        name: "Fresh Strawberry Tea",
        slug: "tra-dau-tay-tuoi",
        description: "Whole fresh Da Lat strawberries with black tea, lightly tart, gently sweet, with strawberry jelly.",
        basePrice: 48000,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=600&fit=crop",
        categoryId: traTraiCay.id,
        isNew: true,
      },
    ],
  });

  // Special
  await prisma.product.createMany({
    data: [
      {
        name: "Brown Sugar Boba Milk",
        slug: "brown-sugar-boba-milk",
        description: "Pure fresh milk with handmade caramelized brown sugar boba, creating the signature tiger stripes. The signature drink of Tiger Sugar.",
        basePrice: 55000,
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&h=600&fit=crop",
        categoryId: dacBiet.id,
        isBestSeller: true,
        isNew: true,
      },
      {
        name: "Dirty Matcha Latte",
        slug: "dirty-matcha-latte",
        description: "Premium Japanese Uji matcha with a double espresso shot, a striking contrast between bitter and sweet.",
        basePrice: 58000,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=600&fit=crop",
        categoryId: dacBiet.id,
        isNew: true,
      },
      {
        name: "Taro Cream Cheese",
        slug: "taro-cream-cheese",
        description: "Finely blended purple Da Lat taro topped with a perfectly balanced sweet and salty cheese foam, finished with special purple boba.",
        basePrice: 52000,
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&h=600&fit=crop",
        categoryId: dacBiet.id,
        isBestSeller: true,
      },
      {
        name: "Drinma Cloud Nine",
        slug: "iku-cloud-nine",
        description: "A special oolong tea crowned with cloud-soft cream foam, dusted with Valrhona cocoa and caramel.",
        basePrice: 55000,
        image: "https://images.unsplash.com/photo-1560023907-5f339617ea55?w=600&h=600&fit=crop",
        categoryId: dacBiet.id,
        isNew: true,
      },
      {
        name: "Mochi Milk Tea",
        slug: "mochi-milk-tea",
        description: "Japanese milk tea with soft handmade mochi filled with Hokkaido red bean, dusted with kinako powder.",
        basePrice: 58000,
        image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&h=600&fit=crop&crop=top",
        categoryId: dacBiet.id,
        isNew: true,
      },
    ],
  });

  // Fresh Milk & Cream
  await prisma.product.createMany({
    data: [
      {
        name: "Brown Sugar Boba Fresh Milk",
        slug: "sua-tuoi-tran-chau-duong-nau",
        description: "100% pure Moc Chau fresh milk with handmade brown sugar boba, cooked fresh every day.",
        basePrice: 45000,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=600&fit=crop",
        categoryId: suaTuoi.id,
        isBestSeller: true,
      },
      {
        name: "Tropical Coconut Cream",
        slug: "kem-sua-dua-tropical",
        description: "Creamy Ben Tre coconut ice cream with fresh milk, fragrant coconut milk and a shredded coconut topping.",
        basePrice: 48000,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop",
        categoryId: suaTuoi.id,
      },
      {
        name: "Strawberry Yogurt Smoothie",
        slug: "smoothie-dau-tay-yogurt",
        description: "Fresh Da Lat strawberries blended with Greek yogurt and ice, topped with whipped cream and granola.",
        basePrice: 52000,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=600&fit=crop",
        categoryId: suaTuoi.id,
        isNew: true,
      },
      {
        name: "Oreo Cookie Cream",
        slug: "oreo-cookie-cream",
        description: "Fresh milk blended with Oreo cookies, vanilla ice cream and chocolate chips. A favorite with the younger crowd.",
        basePrice: 50000,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop",
        categoryId: suaTuoi.id,
      },
    ],
  });

  // Green Tea & Matcha
  await prisma.product.createMany({
    data: [
      {
        name: "Matcha Latte Premium",
        slug: "matcha-latte",
        description: "Grade A Uji matcha powder whisked with Hokkaido fresh milk. Served hot or iced, with an optional espresso shot.",
        basePrice: 52000,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=600&fit=crop",
        categoryId: traXanh.id,
        isBestSeller: true,
      },
      {
        name: "Thai Nguyen Green Milk Tea",
        slug: "tra-xanh-sua",
        description: "Premium Thai Nguyen green tea with fresh milk, a light astringency wrapped in creamy richness, with red beans.",
        basePrice: 42000,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=600&fit=crop",
        categoryId: traXanh.id,
      },
      {
        name: "Japanese Matcha Red Bean",
        slug: "matcha-dau-do",
        description: "Matcha with Hokkaido red beans simmered for 8 hours, the gentle sweetness of traditional Japan.",
        basePrice: 55000,
        image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&h=600&fit=crop",
        categoryId: traXanh.id,
        isNew: true,
      },
      {
        name: "Matcha Cream Cheese",
        slug: "matcha-cream-cheese",
        description: "Bold matcha topped with rich, salty cream cheese, a perfect balance of bitter, sweet and savory.",
        basePrice: 55000,
        image: "https://images.unsplash.com/photo-1575487426842-f3e46e994c0a?w=600&h=600&fit=crop",
        categoryId: traXanh.id,
        isBestSeller: true,
      },
    ],
  });

  console.log("Seed completed successfully!");
  const productCount = await prisma.product.count();
  const toppingCount = await prisma.topping.count();
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${productCount} products`);
  console.log(`Created ${toppingCount} toppings`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
