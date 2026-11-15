import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | Drinma",
  description: "The Drinma Story – Every Sip Is an Experience",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
