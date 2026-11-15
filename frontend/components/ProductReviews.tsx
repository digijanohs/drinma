"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
  verified: boolean;
}

const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Minh Anh",
    avatar: "MA",
    rating: 5,
    date: "2 days ago",
    comment: "The milk tea here is so good! The boba is perfectly chewy and the tea is rich and fragrant. I'll definitely be back.",
    likes: 12,
    verified: true,
  },
  {
    id: 2,
    name: "Thanh Huong",
    avatar: "TH",
    rating: 5,
    date: "5 days ago",
    comment: "Amazing matcha latte – not too sweet but still full of matcha flavor. Carefully packed and delivered fast.",
    likes: 8,
    verified: true,
  },
  {
    id: 3,
    name: "Duc Phong",
    avatar: "DP",
    rating: 4,
    date: "1 week ago",
    comment: "The peach lemongrass tea is so refreshing – perfect for summer. A bit pricey, but the quality is worth it.",
    likes: 5,
    verified: false,
  },
  {
    id: 4,
    name: "Ngoc Tram",
    avatar: "NT",
    rating: 5,
    date: "1 week ago",
    comment: "I've tried the whole menu and everything tastes great. The Brown Sugar Boba is the star – that caramel aroma!",
    likes: 15,
    verified: true,
  },
  {
    id: 5,
    name: "Hoang Nam",
    avatar: "HN",
    rating: 4,
    date: "2 weeks ago",
    comment: "The app makes ordering easy and delivery is always on time. The traditional milk tea is still the best seller.",
    likes: 3,
    verified: true,
  },
];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProductReviews() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [likedReviews, setLikedReviews] = useState<Set<number>>(new Set());

  const avgRating = sampleReviews.reduce((sum, r) => sum + r.rating, 0) / sampleReviews.length;

  const toggleLike = (id: number) => {
    setLikedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-display font-bold text-gray-900">
            What Our Customers Say
          </h3>
          <div className="flex items-center gap-3 mt-2">
            <StarRating rating={Math.round(avgRating)} size="md" />
            <span className="text-lg font-semibold text-gray-900">
              {avgRating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500">
              ({sampleReviews.length} reviews)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MessageCircle className="w-4 h-4" />
          <span>{sampleReviews.length} reviews</span>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="space-y-4">
          {sampleReviews.slice(0, visibleCount).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </span>
                    {review.verified && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 bg-green-50 text-green-600 rounded-full border border-green-100">
                        Verified purchase
                      </span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">
                      {review.date}
                    </span>
                  </div>
                  <div className="mt-1">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                  <button
                    onClick={() => toggleLike(review.id)}
                    className={`mt-3 flex items-center gap-1.5 text-xs font-medium transition-colors ${
                      likedReviews.has(review.id)
                        ? "text-brand-600"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${likedReviews.has(review.id) ? "fill-brand-600" : ""}`} />
                    <span>Helpful ({review.likes + (likedReviews.has(review.id) ? 1 : 0)})</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {visibleCount < sampleReviews.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => setVisibleCount(sampleReviews.length)}
            className="px-6 py-2.5 text-sm font-medium text-brand-600 border border-brand-200 rounded-full hover:bg-brand-50 transition-colors"
          >
            See more reviews
          </button>
        </motion.div>
      )}
    </section>
  );
}
