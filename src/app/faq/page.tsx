import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FAQContent from "./FAQContent";

export const metadata = {
  title: "FAQ | Drinma",
  description: "Answers to every question about ordering, delivery, payment and Drinma products",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20">
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
