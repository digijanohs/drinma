"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Megaphone,
  TrendingUp,
  CheckCircle,
  Send,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const benefits = [
  {
    icon: Award,
    title: "Trusted brand",
    description:
      "Over 5 years of brand building with millions of loyal customers nationwide.",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    icon: BookOpen,
    title: "Full training",
    description:
      "Structured training covering everything from drink prep and daily operations to staff management and customer care.",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: Megaphone,
    title: "Marketing support",
    description:
      "National marketing campaigns, ready-to-use brand materials and support for your grand opening.",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Attractive returns",
    description:
      "Average gross margin of 60–70% and payback within 12–18 months with a proven model.",
    color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
];

const investmentItems = [
  { label: "Franchise fee", value: "150.000.000 đ" },
  { label: "Equipment & interior costs", value: "200.000.000 đ" },
  { label: "Initial working capital", value: "50.000.000 đ" },
  { label: "Estimated total investment", value: "400.000.000 đ", highlight: true },
  { label: "Payback period", value: "12 – 18 months" },
  { label: "Contract term", value: "5 years (renewable)" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "That email doesn't look right.";
  }
  if (!form.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[0-9+\s\-()]{7,15}$/.test(form.phone)) {
    errors.phone = "That phone number doesn't look right.";
  }
  if (!form.city.trim()) errors.city = "Please enter your province or city.";
  return errors;
}

export default function FranchisePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2";
  const inputNormal = `${inputBase} border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-brand-300 focus:border-brand-400`;
  const inputError = `${inputBase} border-red-300 dark:border-red-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-red-200 focus:border-red-400`;

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-b from-cream-100 to-cream-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium mb-5"
            >
              <Award className="w-3.5 h-3.5" />
              Franchise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4"
            >
              Franchise{" "}
              <span className="text-brand-600 dark:text-brand-400">
                brand
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
            >
              Grow with Drinma — build a successful business with Vietnam's best-loved milk tea brand
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          {/* Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">
              Why choose Drinma?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Investment info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">
              Investment details
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden max-w-2xl mx-auto">
              {investmentItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i < investmentItems.length - 1
                      ? "border-b border-gray-50 dark:border-gray-700"
                      : ""
                  } ${
                    item.highlight
                      ? "bg-brand-50 dark:bg-brand-900/20"
                      : ""
                  }`}
                >
                  <span
                    className={`text-sm ${
                      item.highlight
                        ? "font-semibold text-brand-700 dark:text-brand-300"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`font-semibold ${
                      item.highlight
                        ? "text-brand-700 dark:text-brand-300 text-base"
                        : "text-gray-900 dark:text-white text-sm"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
              * Costs vary depending on location and store size
            </p>
          </motion.section>

          {/* Contact form */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">
              Request a franchise consultation
            </h2>
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Request received!
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                      Our franchise team will reach out within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", city: "", message: "" });
                      }}
                      className="mt-6 px-5 py-2 rounded-full border border-brand-300 dark:border-brand-600 text-brand-600 dark:text-brand-400 text-sm hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-colors"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Full name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Nguyen Van A"
                          className={errors.name ? inputError : inputNormal}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Phone number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0901 234 567"
                          className={errors.phone ? inputError : inputNormal}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ban@email.com"
                        className={errors.email ? inputError : inputNormal}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Planned province / city <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Ho Chi Minh City"
                        className={errors.city ? inputError : inputNormal}
                      />
                      {errors.city && (
                        <p className="mt-1 text-xs text-red-500">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Additional notes
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Business experience, planned investment, questions..."
                        className={`${inputNormal} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-md"
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit request
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
