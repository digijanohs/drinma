import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Privacy Policy | Drinma",
  description: "Drinma privacy and data protection policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-10">
            Last updated: May 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                1. Information collection
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We collect personal information when you place an order, create an account, or contact us. This includes your name, phone number, email address, delivery address, and transaction history. We only collect what we need to give you the best possible service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                2. How we use information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your information is used to: process and deliver orders, provide customer support, send promotional updates (if you agree), improve service quality, and personalize your shopping experience. We never use your information for anything beyond these purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                3. Data security
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We apply industry-standard security measures to protect your personal information, including SSL/TLS encryption on every connection, strict access controls, and continuous system monitoring. Payment data is encrypted and never stored directly on our systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                4. Your rights
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You have full rights over your personal data, including the right to view and correct your information, to request deletion of your account and data, to unsubscribe from marketing emails, and to request an export of all your data. To exercise these rights, contact us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                5. Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have any questions about our privacy policy, please contact us:
              </p>
              <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-400">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:hello@drinma.com"
                    className="text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    hello@drinma.com
                  </a>
                </li>
                <li>Hotline: 1900 1234</li>
                <li>Address: 123 Nguyen Hue, District 1, Ho Chi Minh City</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
