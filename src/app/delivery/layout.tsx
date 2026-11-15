import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery information | Drinma",
  description: "Drinma delivery areas, fees and times",
};

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
