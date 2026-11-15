"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Flame, Leaf, Snowflake, Coffee, Candy, Milk, Circle, CupSoda } from "lucide-react";

interface Ingredient {
  name: string;
  origin: string;
  icon: React.ReactNode;
}

const ingredients: Ingredient[] = [
  { name: "Oolong tea", origin: "Taiwan", icon: <Leaf className="w-7 h-7 text-green-600" /> },
  { name: "Matcha Uji", origin: "Kyoto, Japan", icon: <CupSoda className="w-7 h-7 text-emerald-600" /> },
  { name: "Brown sugar", origin: "Okinawa, Japan", icon: <Candy className="w-7 h-7 text-amber-600" /> },
  { name: "Fresh milk", origin: "TH True Milk, Vietnam", icon: <Milk className="w-7 h-7 text-blue-400" /> },
  { name: "Tapioca pearls", origin: "Made fresh daily", icon: <Circle className="w-7 h-7 text-gray-800" /> },
  { name: "Black tea", origin: "Assam, India", icon: <Coffee className="w-7 h-7 text-red-800" /> },
];

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No artificial colors or flavors" },
  { icon: Snowflake, title: "Keep refrigerated", desc: "Ingredients always kept at the ideal temperature" },
  { icon: Flame, title: "Cooked fresh", desc: "Pearls and toppings cooked fresh every 4 hours" },
  { icon: Clock, title: "Fresh stock daily", desc: "Fresh milk and fruit delivered daily" },
];

export default function IngredientsShowcase() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-3">
            Premium ingredients
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Carefully selected from the most trusted suppliers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4 rounded-2xl bg-cream-50 border border-cream-100 hover:border-brand-200 transition-colors dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.name}</h4>
              <p className="text-[10px] text-gray-400 mt-1">{item.origin}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                <feature.icon className="w-4 h-4 text-brand-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{feature.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
