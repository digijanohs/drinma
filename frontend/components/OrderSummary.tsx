"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Star } from "lucide-react";

interface OrderSummaryProps {
  items: Array<{
    name: string;
    size: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

export default function OrderSummary({
  items,
  subtotal,
  deliveryFee,
  discount,
  total,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Order summary</h3>

      <div className="space-y-3 mb-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">
                {item.quantity}
              </span>
              <span className="text-gray-700">
                {item.name} <span className="text-gray-400">({item.size})</span>
              </span>
            </div>
            <span className="text-gray-900 font-medium">
              {(item.price * item.quantity).toLocaleString("vi-VN")}đ
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-3 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-700">{subtotal.toLocaleString("vi-VN")}đ</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Delivery fee</span>
          <span className="text-gray-700">
            {deliveryFee === 0 ? (
              <span className="text-green-600 font-medium">Free</span>
            ) : (
              `[fee]đ`
            )}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Discount</span>
            <span className="text-green-600 font-medium">
              -{discount.toLocaleString("vi-VN")}đ
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between">
        <span className="font-semibold text-gray-900">Total</span>
        <span className="font-bold text-lg text-brand-600">
          {total.toLocaleString("vi-VN")}đ
        </span>
      </div>
    </div>
  );
}
