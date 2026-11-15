import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Drinma",
  description: "Upcoming events and activities at Drinma",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
