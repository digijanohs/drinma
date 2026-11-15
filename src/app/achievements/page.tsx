"use client";

import { motion } from "framer-motion";
import { Award, PartyPopper, Trophy, Crown, Heart, Star, Gem, Coffee, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const achievements = [
  { id: 1, title: "Newcomer", description: "Place your first order", icon: <PartyPopper className="w-6 h-6" />, unlocked: true },
  { id: 2, title: "Milk Tea Fan", description: "Place 10 orders", icon: <Coffee className="w-6 h-6" />, unlocked: true },
  { id: 3, title: "Connoisseur", description: "Try 5 different teas", icon: <Sparkles className="w-6 h-6" />, unlocked: true },
  { id: 4, title: "Topping Master", description: "Try every topping", icon: <Trophy className="w-6 h-6" />, unlocked: false },
  { id: 5, title: "VIP", description: "Spend over 1 million", icon: <Crown className="w-6 h-6" />, unlocked: false },
  { id: 6, title: "Share the Love", description: "Refer 3 friends", icon: <Heart className="w-6 h-6" />, unlocked: false },
  { id: 7, title: "Reviewer", description: "Write 5 reviews", icon: <Star className="w-6 h-6" />, unlocked: true },
  { id: 8, title: "Collector", description: "Collect 20 Stars", icon: <Gem className="w-6 h-6" />, unlocked: false },
];

export default function AchievementsPage() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

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
              <Award className="w-7 h-7 text-brand-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4"
            >
              Achievements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-lg"
            >
              Unlocked {unlockedCount}/{achievements.length} achievements
            </motion.p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-5 flex items-center gap-4 ${
                  achievement.unlocked ? "border-brand-200 dark:border-brand-700" : "border-gray-100 dark:border-gray-700 opacity-60"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  achievement.unlocked ? "bg-brand-50 dark:bg-brand-900/30" : "bg-gray-50 dark:bg-gray-700 grayscale"
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-50 text-sm">{achievement.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{achievement.description}</p>
                </div>
                {achievement.unlocked && (
                  <span className="text-[10px] font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded-full">
                    Unlocked
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
