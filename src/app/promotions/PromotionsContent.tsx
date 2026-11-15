"use client";

import { motion } from "framer-motion";
import { Percent, ArrowRight, Gift, Sparkles, Truck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CouponGrid from "@/components/CouponGrid";

const highlights = [
  {
    icon: Percent,
    title: "Up to 50% off",
    description: "Great deals every week",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Gift,
    title: "Free gift",
    description: "When you reach Gold tier or higher",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Truck,
    title: "Free ship",
    description: "On city orders from 80.000đ",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    title: "Group deals",
    description: "Buy 5, get 1 free for groups",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function PromotionsPageContent() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        <section className="bg-gradient-to-b from-cream-100 to-cream-50 dark:from-gray-900 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 inline mr-1" />
              Promotions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4"
            >
              Deals <span className="text-brand-600">special</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
            >
              Enter your promo code at checkout to unlock great deals
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6">
              Available promo codes
            </h2>
            <CouponGrid />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-10 text-center text-white"
          >
            <h3 className="text-2xl font-display font-bold mb-3">
              Sign up for deals
            </h3>
            <p className="text-brand-100 max-w-md mx-auto mb-6">
              Get the latest promotions by email. No spam, just real deals.
            </p>
            <a
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 rounded-xl font-medium hover:bg-cream-100 transition-colors"
            >
              Order now
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
