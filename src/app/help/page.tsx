"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

interface HelpItem {
  question: string;
  answer: string;
}

const helpTopics: { title: string; items: HelpItem[] }[] = [
  {
    title: "Order",
    items: [
      { question: "How do I place an order?", answer: "Order right on the website or in the Drinma app. Pick your drink, customize it your way, add it to the cart and check out." },
      { question: "Can I cancel my order?", answer: "You can cancel within 2 minutes of ordering. After that, your drink is already being made and can't be cancelled." },
      { question: "How long does delivery take?", answer: "Delivery usually takes 20-30 minutes within a 5km radius. Outside that area it may take longer depending on the distance." },
    ],
  },
  {
    title: "Checkout",
    items: [
      { question: "What payment methods do you accept?", answer: "Drinma accepts MoMo, ZaloPay, VNPay, bank transfer and cash on delivery (COD)." },
      { question: "Can I get a refund?", answer: "If your order isn't what you asked for or the quality isn't right, you'll get a full refund or a fresh replacement." },
    ],
  },
  {
    title: "Account & Drinma Stars",
    items: [
      { question: "How do I earn points?", answer: "Every 10.000đ spent = 1 Star. Collect Stars to level up and unlock special perks." },
      { question: "Do points expire?", answer: "Stars are valid for 12 months from the day you earn them. Membership tiers are reviewed every 6 months." },
    ],
  },
];

function AccordionItem({ item }: { item: HelpItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-gray-700 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-900 dark:text-gray-50">{item.question}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-4"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function HelpCenterPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        <section className="bg-gradient-to-b from-cream-100 to-cream-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-5"
            >
              <HelpCircle className="w-7 h-7 text-brand-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4"
            >
              Help Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-lg"
            >
              Find answers to all your questions
            </motion.p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-8">
            {helpTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden"
              >
                <div className="px-6 py-4 bg-cream-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                  <h2 className="font-semibold text-gray-900 dark:text-gray-50">{topic.title}</h2>
                </div>
                <div className="px-6">
                  {topic.items.map((item) => (
                    <AccordionItem key={item.question} item={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
