"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Leaf, Clock, Award, Headphones } from "lucide-react";

const promises = [
  { icon: Leaf, title: "100% Natural", description: "No preservatives, no artificial flavors" },
  { icon: Clock, title: "Fresh Every Day", description: "Fresh ingredients delivered every morning" },
  { icon: Shield, title: "Food Safety", description: "HACCP and ISO 22000 certified" },
  { icon: Truck, title: "Giao nhanh 30'", description: "On-time delivery or your money back" },
  { icon: Award, title: "Satisfaction Guaranteed", description: "Free returns if your order isn't right" },
  { icon: Headphones, title: "24/7 Support", description: "Our support team is always here for you" },
];

export default function QualityPromise() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
            The Drinma Promise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Six golden promises we always keep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise, i) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-brand-200 hover:bg-brand-50/30 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                <promise.icon className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{promise.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{promise.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
