import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Drinma - Premium Milk Tea",
    short_name: "Drinma",
    description: "Order premium milk tea online, delivered to your door. Fresh ingredients, rich flavor.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf6ee",
    theme_color: "#d4792a",
    orientation: "portrait-primary",
    categories: ["food", "shopping"],
    icons: [
      {
        src: "/logo-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-icon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Menu",
        short_name: "Menu",
        url: "/menu",
        description: "View the milk tea menu",
      },
      {
        name: "Order",
        short_name: "Order",
        url: "/checkout",
        description: "Quick order",
      },
    ],
  };
}
