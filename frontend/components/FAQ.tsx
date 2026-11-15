"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I order online?",
    answer:
      "You can order right on our website or in the Drinma app. Pick your favorite drink, customize it your way, add it to your cart and check out. We accept cards, e-wallets and cash on delivery.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery takes 20-30 minutes on average, depending on distance and traffic. At peak hours it can take another 10-15 minutes. You can track your order in real time in the app.",
  },
  {
    question: "Can I customize my drink?",
    answer:
      "Yes! Choose your sugar level (0%, 30%, 50%, 70%, 100%), your ice level (no ice, light ice, regular, extra ice) and add your favorite toppings. Some drinks also let you pick your milk: fresh milk, oat milk or soy milk.",
  },
  {
    question: "What's your exchange and refund policy?",
    answer:
      "If your drink isn't what you ordered or there's a quality issue, contact us within 15 minutes of delivery. We'll refund you or send a fresh replacement free of charge.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes! Earn points with every order: 1.000đ = 1 point. Redeem them for free drinks, discount vouchers and more great perks. Gold and Diamond members also get priority delivery and a special birthday gift.",
  },
  {
    question: "Does Drinma take party or event orders?",
    answer:
      "Yes! Call our hotline 1800 xxxx or email events@drinma.com for advice on party and event packages. We serve orders of 20 cups or more at special prices, with custom packaging on request.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-cream-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
            Questions <span className="text-brand-500">frequently asked</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Answers to the questions our customers ask most
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-gray-900 dark:text-gray-50 text-sm sm:text-base">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-brand-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
