import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Terms of use | Drinma",
  description: "Terms and conditions for using Drinma services",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-2">
            Terms of Use
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-10">
            Last updated: May 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                1. General terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By using Drinma services, you agree to comply with all the terms set out in this document. We may update these terms at any time and will notify you by email or through a notice on the website. Continuing to use the service after the terms are updated means you accept those changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                2. Ordering &amp; Payment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Orders are confirmed once payment succeeds or COD is confirmed. Product prices may change without prior notice. We accept these payment methods: MoMo, ZaloPay, VNPay, bank transfer and cash on delivery (COD). All transactions are secured with standard encryption technology.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                3. Delivery
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Estimated delivery time is 30–45 minutes within the city area. Delivery is free for orders from 100.000đ within a 5km radius of the nearest store. We are not liable for force majeure events such as bad weather, traffic jams or natural disasters that affect delivery times.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                4. Returns
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You can cancel your order within 5 minutes of placing it. After that, the order is already being prepared and can no longer be cancelled. If a product is faulty or not what you ordered, please contact us within 2 hours of receiving it and include photos as proof. Refunds are processed within 3–5 business days via the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                5. Intellectual property
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                All content on the Drinma website and app — including logos, images, text, designs and source code — is the intellectual property of Drinma. Copying, distributing, modifying or using it for commercial purposes without our written consent is strictly prohibited.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
