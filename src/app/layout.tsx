import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ToastProvider from "@/components/ToastProvider";
import SearchModal from "@/components/SearchModal";
import PromoBanner from "@/components/PromoBanner";
import ScrollToTop from "@/components/ScrollToTop";
import MobileNav from "@/components/MobileNav";
import ThemeProvider from "@/components/ThemeProvider";
import CookieConsent from "@/components/CookieConsent";
import SkipLink from "@/components/SkipLink";
import JsonLd from "@/components/JsonLd";
import LocaleProvider from "@/components/LocaleProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drinmademo.vercel.app"),
  title: "Drinma | Premium Milk Tea",
  description:
    "Savor premium milk tea made with the freshest ingredients. Order online and we'll deliver it right to your door.",
  keywords: ["milk tea", "bubble tea", "boba", "topping", "order online"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drinmademo.vercel.app",
    siteName: "Drinma",
    title: "Drinma | Premium Milk Tea",
    description:
      "Savor premium milk tea made with the freshest ingredients. Order online and we'll deliver it right to your door.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=1200&h=630&fit=crop&auto=format,compress",
        width: 1200,
        height: 630,
        alt: "Drinma - Premium Milk Tea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drinma | Premium Milk Tea",
    description:
      "Savor premium milk tea made with the freshest ingredients. Order online and we'll deliver it right to your door.",
    images: ["https://images.unsplash.com/photo-1558857563-b371033873b8?w=1200&h=630&fit=crop&auto=format,compress"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable, "font-sans overflow-x-hidden")} suppressHydrationWarning>
      <body className="antialiased bg-cream-50 dark:bg-gray-900 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <JsonLd />
          <LocaleProvider />
          <SkipLink />
          <PromoBanner />
          <div id="main-content">
            {children}
          </div>
          <MobileNav />
          <ScrollToTop />
          <ToastProvider />
          <SearchModal />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
