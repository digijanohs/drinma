"use client";

import { motion } from "framer-motion";
import { Clock, ChefHat, ListChecks } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

interface Recipe {
  id: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  time: string;
  ingredients: number;
  gradient: string;
  emoji: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Brown Sugar Milk Tea",
    description:
      "Brown sugar milk tea with chewy tiger boba, rich and creamy — the authentic Drinma recipe, made at home.",
    difficulty: "Medium",
    time: "45 min",
    ingredients: 8,
    gradient: "from-amber-200 to-orange-300",
    emoji: "cup",
  },
  {
    id: 2,
    title: "Matcha Latte",
    description:
      "Iced matcha latte made with Japanese Uji matcha, fresh milk and ice — refreshing and easy to make.",
    difficulty: "Easy",
    time: "10 min",
    ingredients: 5,
    gradient: "from-green-200 to-emerald-300",
    emoji: "leaf",
  },
  {
    id: 3,
    title: "Taro Milk Tea",
    description:
      "Creamy taro milk tea made from freshly puréed taro — fragrant and gorgeous with its natural purple color.",
    difficulty: "Hard",
    time: "60 min",
    ingredients: 7,
    gradient: "from-purple-200 to-violet-300",
    emoji: "berry",
  },
];

const difficultyConfig: Record<
  Recipe["difficulty"],
  { label: string; classes: string }
> = {
  Easy: {
    label: "Easy",
    classes:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
  "Medium": {
    label: "Medium",
    classes:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  Hard: {
    label: "Hard",
    classes: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
};

export default function RecipesPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-b from-cream-100 to-cream-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4"
            >
              Make it at home
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400 text-lg"
            >
              Brew Drinma milk tea yourself at home
            </motion.p>
          </div>
        </section>

        {/* Recipe cards */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe, i) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Gradient image */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${recipe.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_25%_35%,white,transparent_55%)]" />
                  <svg className="relative w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8H7l1.5 12h7L17 8z"/><path d="M6 8h12l-.5-2H6.5L6 8z"/><circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none"/></svg>
                </div>

                <div className="p-5">
                  {/* Meta row */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${difficultyConfig[recipe.difficulty].classes}`}
                    >
                      <ChefHat className="w-3 h-3 inline mr-0.5" />
                      {difficultyConfig[recipe.difficulty].label}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                      <Clock className="w-3 h-3" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                      <ListChecks className="w-3 h-3" />
                      {recipe.ingredients} ingredients
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                    {recipe.description}
                  </p>

                  <button className="mt-4 w-full py-2.5 rounded-xl border border-brand-200 dark:border-brand-700 text-brand-600 dark:text-brand-400 text-sm font-medium hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-colors">
                    View recipe
                  </button>
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
