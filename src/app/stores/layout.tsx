import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store locator | Drinma",
  description:
    "Find your nearest Drinma store in Ho Chi Minh City and Hanoi. Open daily from 8:00 to 22:00.",
};

export default function StoresLayout({ children }: { children: React.ReactNode }) {
  return children;
}
