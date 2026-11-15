export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Drinma",
    description: "Premium milk tea with the freshest ingredients. Order online, delivered to your door.",
    url: "https://drinmademo.vercel.app",
    logo: "https://drinmademo.vercel.app/logo.svg",
    image: "https://drinmademo.vercel.app/logo.svg",
    telephone: "+84-28-1234-5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Nguyen Hue",
      addressLocality: "District 1",
      addressRegion: "Ho Chi Minh City",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.7769,
      longitude: 106.7009,
    },
    servesCuisine: ["Bubble Tea", "Bubble Tea", "Vietnamese Tea"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2000",
      bestRating: "5",
    },
    hasMenu: "https://drinmademo.vercel.app/menu",
    acceptsReservations: false,
    sameAs: [
      "https://facebook.com/drinma",
      "https://instagram.com/drinma",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
