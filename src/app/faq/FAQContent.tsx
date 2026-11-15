"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const categories = ["All", "Order", "Checkout", "Delivery", "Products", "Other"];

const faqs = [
  {
    id: 1,
    category: "Order",
    question: "How far in advance can I order?",
    answer:
      "You can order up to 7 days ahead. For large orders (over 20 cups), we recommend ordering at least 24 hours in advance so we can give you the best possible service.",
  },
  {
    id: 2,
    category: "Order",
    question: "Can I change or cancel my order?",
    answer:
      "You can change or cancel your order within 15 minutes of placing it. After that, the order has already gone to our bar and can no longer be changed. For help, call our hotline at 1800-DRINMA.",
  },
  {
    id: 3,
    category: "Order",
    question: "Can I customize my drink?",
    answer:
      "Absolutely! You can adjust the sweetness (0%, 30%, 50%, 70%, 100%), the ice level (no ice, light ice, regular, extra ice) and add toppings as you like. A few signature drinks have limited options so their original flavor stays exactly right.",
  },
  {
    id: 4,
    category: "Checkout",
    question: "Which payment methods does Drinma accept?",
    answer:
      "We accept a wide range of payment methods: cash on delivery (COD), bank transfer, the e-wallets MoMo, ZaloPay and VNPay, plus Visa/Mastercard credit and debit cards. Every online transaction is encrypted for security.",
  },
  {
    id: 5,
    category: "Checkout",
    question: "Can I use more than one promo code at a time?",
    answer:
      "Only one promo code applies per order. You can still combine a code with reward points from our Drinma Stars loyalty program to save as much as possible.",
  },
  {
    id: 6,
    category: "Checkout",
    question: "How does the Drinma Stars loyalty program work?",
    answer:
      "For every 10.000đ you spend, you earn 1 Drinma Star. Collect stars and redeem them for rewards: 50 stars = 10% off, 100 stars = a free drink, 200 stars = a special combo. Points are valid for 12 months from the date you earn them.",
  },
  {
    id: 7,
    category: "Delivery",
    question: "What is Drinma's delivery area?",
    answer:
      "We deliver within a 5km radius of each store. Delivery fees range from 15.000đ – 30.000đ depending on distance. Orders from 150.000đ get free delivery within a 3km radius.",
  },
  {
    id: 8,
    category: "Delivery",
    question: "How long does delivery usually take?",
    answer:
      "Delivery usually takes 20–40 minutes, depending on distance and traffic. At peak times (11h–13h and 17h–19h) it may take a little longer. You'll get real-time order tracking updates.",
  },
  {
    id: 9,
    category: "Products",
    question: "Do Drinma products contain preservatives?",
    answer:
      "No. All Drinma drinks are made with fresh, natural ingredients and contain no preservatives or artificial colors. Our boba is cooked by hand every day, and the tea is freshly brewed every 4 hours for the freshest taste.",
  },
  {
    id: 10,
    category: "Products",
    question: "Which drinks suit people with a milk allergy or lactose intolerance?",
    answer:
      "Our Drinma Pure line uses oat milk and almond milk instead of cow's milk. Pure fruit teas and green teas are dairy-free as well. Please let our team know about your allergy when you order.",
  },
  {
    id: 11,
    category: "Products",
    question: "What are Drinma's opening hours?",
    answer:
      "All Drinma stores are open 7:00 – 22:00 every day, including weekends and holidays. Our District 1 store (Nguyen Hue) stays open until 23:00 on Fridays and Saturdays.",
  },
  {
    id: 12,
    category: "Other",
    question: "Does Drinma sell gift cards?",
    answer:
      "Yes! Drinma Gift Cards come in values from 100.000đ to 1.000.000đ and can be bought in-store or ordered online. They never expire and work at every location.",
  },
  {
    id: 13,
    category: "Other",
    question: "Can I place large orders for events?",
    answer:
      "We love catering corporate events, birthday parties, conferences and more. Orders of 50 cups or more get special pricing and custom packaging on request. Email event@drinma.com and we'll help you plan.",
  },
  {
    id: 14,
    category: "Other",
    question: "What is Drinma's return and exchange policy?",
    answer:
      "If your drink isn't what you ordered or there's a quality issue, we'll remake it for free or refund you 100%. Just contact us within 30 minutes of receiving your order and send a photo of the drink so we can sort it out fast.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-cream-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-brand-600 transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-brand-500"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-cream-100 dark:border-gray-700 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-cream-100 dark:from-gray-800 to-cream-50 dark:to-gray-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6"
          >
            Customer Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6"
          >
            Questions{" "}
            <span className="text-brand-600">frequently asked</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Find quick answers to any question about ordering, delivery, payment and our drinks.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-cream-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300 text-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-10 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-brand-600 text-white shadow-md"
                    : "bg-cream-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ items */}
          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <FAQItem key={faq.id} faq={faq} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <HelpCircle size={48} className="mx-auto text-cream-300 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No matching questions found.
              </p>
              <p className="text-gray-400 dark:text-gray-500 mt-2">
                Try another keyword or{" "}
                <a href="/contact" className="text-brand-600 hover:underline">
                  contact us
                </a>
                .
              </p>
            </motion.div>
          )}

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gradient-to-br from-brand-50 to-cream-100 rounded-3xl p-10 text-center"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our support team is always happy to help with any question you have.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
            >
              Contact us now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
