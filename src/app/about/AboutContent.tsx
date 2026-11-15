"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/SafeImage";
import { Leaf, Palette, Heart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="w-8 h-8 text-green-600" />,
  palette: <Palette className="w-8 h-8 text-purple-600" />,
  heart: <Heart className="w-8 h-8 text-pink-600" />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-cream-100 dark:from-gray-800 to-white dark:to-gray-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            {...fadeInUp}
            className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6"
          >
            Every cup is{" "}
            <span className="text-brand-600">a work of art</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Drinma was born from the passion for crafting the perfect cup of milk tea, where every ingredient is carefully selected and every recipe is the result of hundreds of trials.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <SafeImage
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop"
                alt="Drinma story"
                width={600}
                height={400}
                className="rounded-3xl object-cover shadow-lg"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50 mb-6">
                Born from Passion
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  In 2020, in the heart of bustling Saigon, Drinma began with one simple idea: make the best milk tea possible with the best ingredients.
                </p>
                <p>
                  We believe a cup of milk tea is more than a drink: it's a moment to slow down, a small joy in a busy day, a bridge between friends.
                </p>
                <p>
                  From Oolong leaves grown high in the mountains of Taiwan to tapioca pearls cooked by hand every day, every detail is taken care of with love.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-50">
              Core values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "leaf",
                title: "Fresh ingredients",
                desc: "100% natural ingredients, no preservatives. Tea imported straight from the tea gardens.",
              },
              {
                icon: "palette",
                title: "Always Innovating",
                desc: "Our menu changes with the seasons, blending traditional flavors with fresh new ideas.",
              },
              {
                icon: "heart",
                title: "Sustainability",
                desc: "Paper cups and bamboo straws. We're committed to cutting plastic waste in everything we do.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex justify-center">{iconMap[value.icon]}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Flavor" },
              { value: "10K+", label: "Customers" },
              { value: "5", label: "Locations" },
              { value: "50+", label: "Staff" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-600">
                  {stat.value}
                </div>
                <div className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
