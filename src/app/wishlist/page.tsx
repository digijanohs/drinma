import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WishlistContent from "./WishlistContent";

export const metadata = {
  title: "Favorites | Drinma",
  description: "Your favorite products at Drinma",
};

export default function WishlistPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50">
        <WishlistContent />
      </main>
      <Footer />
    </>
  );
}
