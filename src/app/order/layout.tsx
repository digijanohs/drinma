import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Tracking | Drinma",
  description:
    "Track your milk tea order in real time. Enter your phone number to check your order.",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
