"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const nearbyStores = [
  {
    id: 1,
    name: "Drinma Nguyen Hue",
    address: "123 Nguyen Hue, District 1, Ho Chi Minh City",
    distance: "0.5 km",
    hours: "07:00 - 22:00",
    phone: "028 1234 5678",
    isOpen: true,
  },
  {
    id: 2,
    name: "Drinma Pham Ngoc Thach",
    address: "45 Phạm Ngọc Thạch, Q.3, TP.HCM",
    distance: "1.2 km",
    hours: "07:00 - 22:00",
    phone: "028 2345 6789",
    isOpen: true,
  },
  {
    id: 3,
    name: "Drinma Le Van Sy",
    address: "78 Lê Văn Sỹ, Q.3, TP.HCM",
    distance: "2.1 km",
    hours: "07:00 - 22:00",
    phone: "028 3456 7890",
    isOpen: true,
  },
  {
    id: 4,
    name: "Drinma Nguyen Trai",
    address: "200 Nguyễn Trãi, Q.5, TP.HCM",
    distance: "3.5 km",
    hours: "07:00 - 21:30",
    phone: "028 4567 8901",
    isOpen: false,
  },
];

export default function NearbyPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-950">
        <section className="bg-gradient-to-b from-cream-100 to-cream-50 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-5"
            >
              <Navigation className="w-6 h-6 text-brand-600 dark:text-brand-300" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-gray-900 dark:text-gray-50 mb-4"
            >
              Stores near you
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              Find your nearest Drinma and drop by
            </motion.p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-4">
            {nearbyStores.map((store, i) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">{store.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {store.address}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-brand-600 dark:text-brand-300">{store.distance}</span>
                    <div className="mt-1">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        store.isOpen ? "bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-red-50 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                      }`}>
                        {store.isOpen ? "Open now" : "Closed"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {store.hours}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {store.phone}
                  </span>
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
