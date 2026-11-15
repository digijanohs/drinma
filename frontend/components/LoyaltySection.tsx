"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Star,
  Sparkles,
  Gift,
  Truck,
  ShoppingBag,
  TrendingUp,
  Trophy,
  Check,
  ArrowRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const tiers = [
  {
    id: "bronze",
    name: "Bronze",
    nameEn: "Bronze",
    emoji: "🥉",
    pointRange: "0 – 500 points",
    minPoints: 0,
    maxPoints: 500,
    discount: "5%",
    color: {
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-800",
      icon: "bg-amber-100 text-amber-600",
      accent: "text-amber-600",
      glow: "shadow-amber-100",
      bar: "bg-amber-400",
    },
    benefits: [
      { icon: Star, text: "5% off every order" },
      { icon: Gift, text: "Earn points on every purchase" },
      { icon: ShoppingBag, text: "Birthday Treat" },
    ],
  },
  {
    id: "silver",
    name: "Silver",
    nameEn: "Silver",
    emoji: "🥈",
    pointRange: "500 – 2.000 points",
    minPoints: 500,
    maxPoints: 2000,
    discount: "10%",
    color: {
      bg: "from-slate-50 to-gray-50",
      border: "border-slate-200",
      badge: "bg-slate-100 text-slate-700",
      icon: "bg-slate-100 text-slate-600",
      accent: "text-slate-600",
      glow: "shadow-slate-100",
      bar: "bg-slate-400",
    },
    benefits: [
      { icon: Star, text: "10% off every order" },
      { icon: Truck, text: "Free shipping" },
      { icon: Gift, text: "Special birthday treat" },
    ],
    popular: true,
  },
  {
    id: "gold",
    name: "Yellow",
    nameEn: "Gold",
    emoji: "🥇",
    pointRange: "2.000+ points",
    minPoints: 2000,
    maxPoints: null,
    discount: "15%",
    color: {
      bg: "from-yellow-50 to-amber-50",
      border: "border-yellow-300",
      badge: "bg-yellow-100 text-yellow-800",
      icon: "bg-yellow-100 text-yellow-600",
      accent: "text-yellow-600",
      glow: "shadow-yellow-100",
      bar: "bg-yellow-400",
    },
    benefits: [
      { icon: Star, text: "15% off every order" },
      { icon: Truck, text: "Free shipping" },
      { icon: Gift, text: "Premium birthday gift" },
    ],
  },
];

const steps = [
  {
    icon: ShoppingBag,
    label: "Order",
    desc: "Buy any product",
    color: "bg-brand-100 text-brand-600",
    num: "01",
  },
  {
    icon: Star,
    label: "Earn points",
    desc: "1.000đ = 1 reward point",
    color: "bg-amber-100 text-amber-600",
    num: "02",
  },
  {
    icon: TrendingUp,
    label: "Level up",
    desc: "Automatic membership upgrade",
    color: "bg-emerald-100 text-emerald-600",
    num: "03",
  },
  {
    icon: Trophy,
    label: "Get rewards",
    desc: "Enjoy top-tier perks",
    color: "bg-purple-100 text-purple-600",
    num: "04",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// ─── Decorative sparkle positions ────────────────────────────────────────────

const sparkles = [
  { top: "8%", left: "4%", size: 18, delay: 0 },
  { top: "15%", right: "6%", size: 14, delay: 0.4 },
  { top: "55%", left: "2%", size: 10, delay: 0.8 },
  { top: "70%", right: "3%", size: 16, delay: 0.2 },
  { top: "88%", left: "8%", size: 12, delay: 0.6 },
  { top: "30%", right: "2%", size: 20, delay: 1.0 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TierCard({
  tier,
  index,
}: {
  tier: (typeof tiers)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative"
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full shadow-md">
            <Sparkles className="w-3 h-3" />
            Most popular
          </span>
        </div>
      )}

      <Card
        className={`
          relative overflow-hidden border-2 ${tier.color.border}
          bg-gradient-to-br ${tier.color.bg}
          shadow-lg ${tier.color.glow}
          ${tier.popular ? "ring-2 ring-brand-400 ring-offset-2" : ""}
          h-full
        `}
      >
        {/* Top accent bar */}
        <div className={`h-1.5 w-full ${tier.color.bar} rounded-t-sm`} />

        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="text-3xl mb-1">{tier.emoji}</div>
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-gray-50">
                Tier {tier.name}
              </h3>
              <p className={`text-sm font-medium mt-0.5 ${tier.color.accent}`}>
                {tier.pointRange}
              </p>
            </div>
            <div
              className={`w-14 h-14 rounded-2xl ${tier.color.icon} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-2xl font-display font-black">
                {tier.discount}
              </span>
            </div>
          </div>

          {/* Discount badge */}
          <div className="mb-5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${tier.color.badge}`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Save {tier.discount} mỗi orders
            </span>
          </div>

          {/* Benefits */}
          <ul className="space-y-3 flex-1">
            {tier.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <span
                  className={`w-5 h-5 rounded-full ${tier.color.icon} flex items-center justify-center flex-shrink-0`}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{benefit.text}</span>
              </li>
            ))}
          </ul>

          {/* Point requirement footer */}
          <div className="mt-5 pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {tier.maxPoints
                ? `Earn [min] – [max] points`
                : `From [min] points and up`}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function StepItem({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  return (
    <motion.div variants={stepVariants} className="flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        {/* Step number */}
        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-1.5">
          {step.num}
        </span>

        {/* Icon circle */}
        <div
          className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-sm mb-3`}
        >
          <step.icon className="w-7 h-7" />
        </div>

        {/* Arrow connector (hidden on last) */}
        {!isLast && (
          <div className="hidden md:flex absolute top-10 left-full w-full items-center justify-center px-2 -translate-y-1/2">
            <ArrowRight className="w-5 h-5 text-gray-300 ml-2" />
          </div>
        )}
      </div>

      <h4 className="font-semibold text-gray-900 dark:text-gray-50 text-sm text-center">
        {step.label}
      </h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-0.5 max-w-[90px]">
        {step.desc}
      </p>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LoyaltySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800"
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-800/40 rounded-full blur-3xl" />

        {/* Floating sparkles */}
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300/60"
            style={{ top: s.top, left: s.left, right: s.right }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles style={{ width: s.size, height: s.size }} />
          </motion.div>
        ))}

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/20 border border-amber-400/30 text-amber-300 rounded-full text-sm font-medium mb-5"
          >
            <Trophy className="w-4 h-4" />
            Membership program
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Membership program{" "}
            <span className="text-amber-400">Drinma</span>
          </h2>
          <p className="text-brand-200 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Every sip of milk tea earns you a reward point. Collect them, level up and unlock perks made just for you.
          </p>
        </motion.div>

        {/* ── Tier cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} index={i} />
          ))}
        </motion.div>

        {/* ── How it works ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-bold text-white">
              How it works
            </h3>
            <p className="text-brand-200 mt-2 text-sm">
              Just 4 simple steps to start your membership journey
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {steps.map((step, i) => (
              <StepItem key={step.num} step={step} isLast={i === steps.length - 1} />
            ))}
          </motion.div>

          {/* Points info strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { label: "1.000đ", value: "= 1 point" },
              { label: "500 points", value: "→ Silver tier" },
              { label: "2.000 points", value: "→ Gold tier" },
            ].map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20"
              >
                <span className="text-amber-300 font-semibold text-sm">
                  {info.label}
                </span>
                <span className="text-brand-200 text-sm">{info.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold px-8 py-6 text-base rounded-2xl shadow-lg shadow-amber-400/30 hover:shadow-amber-300/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Tham gia ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              Learn more
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <p className="text-brand-300 text-sm mt-5">
            Free to join · Start earning points on your very first order
          </p>
        </motion.div>
      </div>
    </section>
  );
}
