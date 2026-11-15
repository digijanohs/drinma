"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const stores = [
  {
    name: "Drinma District 1",
    address: "123 Nguyen Hue, District 1, Ho Chi Minh City",
    hours: "07:00 - 22:00",
    phone: "028 1234 5678",
  },
  {
    name: "Drinma District 3",
    address: "456 Vo Van Tan, District 3, Ho Chi Minh City",
    hours: "07:00 - 22:00",
    phone: "028 2345 6789",
  },
  {
    name: "Drinma District 7",
    address: "789 Nguyen Thi Thap, District 7, Ho Chi Minh City",
    hours: "07:30 - 22:30",
    phone: "028 3456 7890",
  },
  {
    name: "Drinma Thu Duc",
    address: "321 Vo Van Ngan, Thu Duc City",
    hours: "07:00 - 23:00",
    phone: "028 4567 8901",
  },
];

export default function StoreLocator() {
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
            Our stores <span className="text-brand-500">store</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Find the Drinma store nearest you
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient left border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-400 to-brand-600 rounded-l-2xl" />

              <div className="p-6 pl-7">
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-gray-50 mb-4">
                  {store.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                      {store.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {store.hours}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                    <a
                      href={`tel:${store.phone.replace(/\s/g, "")}`}
                      className="text-sm text-brand-600 dark:text-brand-400 hover:underline font-medium"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
