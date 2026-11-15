import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Drinma",
  description: "Join the Drinma team – where milk tea passion meets career opportunities",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
