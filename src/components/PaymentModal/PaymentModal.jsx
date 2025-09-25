"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Building, Smartphone } from "lucide-react";

const PaymentModal = ({ isOpen, onClose, selectedPackage, onProceedToPayment }) => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const prices = {
    monthly: {
      Standard: 9.99,
      Premium: 19.99
    },
    yearly: {
      Standard: 95.90, // 9.99 * 12 * 0.8 (20% discount)
      Premium: 191.90  // 19.99 * 12 * 0.8
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-2xl max-w-md w-full mx-4 p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Upgrade to {selectedPackage}
          </h2>
          <p className="text-gray-600 mb-6">Choose your billing period</p>

          {/* Billing Period Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                billingPeriod === "monthly"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium text-gray-900">Monthly</div>
              <div className="text-2xl font-bold text-gray-900">
                ${prices.monthly[selectedPackage]}
              </div>
              <div className="text-sm text-gray-600">per month</div>
            </button>

            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                billingPeriod === "yearly"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium text-gray-900">Yearly</div>
              <div className="text-2xl font-bold text-gray-900">
                ${prices.yearly[selectedPackage]}
              </div>
              <div className="text-sm text-gray-600">
                Save 20% • ${(prices.monthly[selectedPackage] * 12 - prices.yearly[selectedPackage]).toFixed(2)}
              </div>
            </button>
          </div>

          {/* Total Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{selectedPackage} Plan</span>
              <span className="font-medium text-gray-900">
                ${billingPeriod === "monthly" ? prices.monthly[selectedPackage] : prices.yearly[selectedPackage]}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Billing period</span>
              <span className="text-sm text-gray-600 capitalize">{billingPeriod}</span>
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center">
              <span className="font-medium text-gray-900">Total due today</span>
              <span className="text-lg font-bold text-gray-900">
                ${billingPeriod === "monthly" ? prices.monthly[selectedPackage] : prices.yearly[selectedPackage]}
              </span>
            </div>
          </div>

          <button
            onClick={() => onProceedToPayment(selectedPackage, billingPeriod)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Proceed to Payment
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PaymentModal;