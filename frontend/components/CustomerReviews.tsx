"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ngoc Bich",
    rating: 5,
    text: "Drinma milk tea is truly amazing! I ordered the Brown Sugar Boba and couldn't believe how chewy and fragrant the pearls were. Delivery was right on time and everything was packed with care.",
    date: "12/05/2025",
    drink: "Brown Sugar Boba Milk",
  },
  {
    name: "Trong Khai",
    rating: 5,
    text: "Tried the Dirty Matcha Latte for the first time and got hooked instantly. The rich matcha paired with espresso is such a unique combo. I'll definitely be ordering again!",
    date: "08/05/2025",
    drink: "Dirty Matcha Latte",
  },
  {
    name: "Lan Phuong",
    rating: 4,
    text: "The Taro Milk Tea is delicious and the fresh cheese topping is so creamy. Only downside: delivery was about 10 minutes late that day, but the staff apologized and gave me a voucher. Great service!",
    date: "03/05/2025",
    drink: "Taro Milk Tea",
  },
  {
    name: "Minh Tuấn",
    rating: 5,
    text: "The Peach Lemongrass Tea is the perfect summer drink. Naturally sweet and tangy, never cloying. The ordering app is super easy to use and the points add up fast.",
    date: "28/04/2025",
    drink: "Peach Lemongrass Tea",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} sao`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gray-50">
            Reviews from <span className="text-brand-500">customers</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Real experiences from the Drinma community
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 scrollbar-hide"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              className="min-w-[280px] snap-start md:min-w-0 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
                  {review.date}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="font-semibold text-sm text-gray-900 dark:text-gray-50">
                  {review.name}
                </div>
                <div className="text-xs text-brand-500 font-medium mt-0.5">
                  {review.drink}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
