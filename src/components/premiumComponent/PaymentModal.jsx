"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PaymentModal = ({ isOpen, onClose, selectedPackage, onProceedToPayment }) => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const prices = {
    monthly: {
      Standard: 9.99,
      Premium: 19.99,
    },
    yearly: {
      Standard: 95.90, // 9.99 * 12 * 0.8 (20% discount)
      Premium: 191.90, // 19.99 * 12 * 0.8
    },
  };

  if (!isOpen) return null;

  // Animation variants for the price and summary
  const priceVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-transparent backdrop-blur-2xl"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-2xl max-w-md w-full mx-4 p-6 border"
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
            <motion.button
              onClick={() => setBillingPeriod("monthly")}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                billingPeriod === "monthly"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium text-gray-900">Monthly</div>
              <motion.div
                key={`monthly-${selectedPackage}`}
                variants={priceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-2xl font-bold text-gray-900"
              >
                ${prices.monthly[selectedPackage]}
              </motion.div>
              <div className="text-sm text-gray-600">per month</div>
            </motion.button>

            <motion.button
              onClick={() => setBillingPeriod("yearly")}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                billingPeriod === "yearly"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium text-gray-900">Yearly</div>
              <motion.div
                key={`yearly-${selectedPackage}`}
                variants={priceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-2xl font-bold text-gray-900"
              >
                ${prices.yearly[selectedPackage]}
              </motion.div>
              <div className="text-sm text-gray-600">
                Save 20% • ${(prices.monthly[selectedPackage] * 12 - prices.yearly[selectedPackage]).toFixed(2)}
              </div>
            </motion.button>
          </div>

          {/* Total Summary */}
          <motion.div
            className="bg-gray-50 rounded-lg p-4 mb-6"
            key={billingPeriod}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{selectedPackage} Plan</span>
              <motion.span
                key={`plan-price-${billingPeriod}`}
                variants={priceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-medium text-gray-900"
              >
                ${billingPeriod === "monthly" ? prices.monthly[selectedPackage] : prices.yearly[selectedPackage]}
              </motion.span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Billing period</span>
              <motion.span
                key={`billing-period-${billingPeriod}`}
                variants={priceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-sm text-gray-600 capitalize"
              >
                {billingPeriod}
              </motion.span>
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center">
              <span className="font-medium text-gray-900">Total due today</span>
              <motion.span
                key={`total-${billingPeriod}`}
                variants={priceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-lg font-bold text-gray-900"
              >
                ${billingPeriod === "monthly" ? prices.monthly[selectedPackage] : prices.yearly[selectedPackage]}
              </motion.span>
            </div>
          </motion.div>

          <motion.button
            onClick={() => onProceedToPayment(selectedPackage, billingPeriod)}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Proceed to Payment
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PaymentModal;