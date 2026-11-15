import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact | Drinma",
  description: "Contact Drinma – we're always ready to listen and help.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
