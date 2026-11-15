"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  product: string;
  comment: string;
  likes: number;
  replies: number;
}

const reviews: Review[] = [
  { id: 1, user: "Minh Anh", avatar: "MA", rating: 5, date: "14/05/2024", product: "Brown Sugar Boba", comment: "Soft, chewy boba and fragrant brown sugar. Every cup tastes as good as the first!", likes: 12, replies: 2 },
  { id: 2, user: "Thanh Ha", avatar: "TH", rating: 5, date: "13/05/2024", product: "Matcha Latte", comment: "Rich matcha flavor without the bitterness. Great iced or hot. I'll order again!", likes: 8, replies: 1 },
  { id: 3, user: "Duc Phong", avatar: "DP", rating: 4, date: "12/05/2024", product: "Taro Milk Tea", comment: "Creamy taro flavor and plenty of topping options. Just a little sweeter than I usually like.", likes: 5, replies: 0 },
  { id: 4, user: "Ngoc Tram", avatar: "NT", rating: 5, date: "11/05/2024", product: "Peach Lemongrass Tea", comment: "Ice cold with the perfect sweet-and-sour balance. The ultimate summer drink!", likes: 15, replies: 3 },
  { id: 5, user: "Hoang Nam", avatar: "HN", rating: 5, date: "10/05/2024", product: "Oolong Milk Tea", comment: "Fragrant oolong tea with just the right amount of creamy milk. Fast delivery, carefully packed.", likes: 7, replies: 1 },
  { id: 6, user: "Phuong Linh", avatar: "PL", rating: 4, date: "09/05/2024", product: "Strawberry Smoothie", comment: "Fresh, tasty strawberries and a smooth blend. A bit small for the price, but the quality is solid.", likes: 3, replies: 0 },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        <section className="bg-gradient-to-b from-cream-100 to-cream-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4"
            >
              What Our Customers Say
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-500 dark:text-gray-400">4.9/5 from 2,000+ reviews</span>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-sm font-semibold text-brand-700 shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-50 text-sm">{review.user}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{review.date} • {review.product}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{review.comment}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {review.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {review.replies}
                      </button>
                    </div>
                  </div>
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
