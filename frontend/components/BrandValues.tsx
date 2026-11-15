"use client";

import { motion } from "framer-motion";
import { Users, Heart, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Dedication",
    description: "Every cup is crafted with love and care",
  },
  {
    icon: Target,
    title: "Quality",
    description: "No compromise on ingredients or process",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a space where young people connect",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Always refreshing the menu and the customer experience",
  },
];

export default function BrandValues() {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
            Core values
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The values behind every decision we make
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
