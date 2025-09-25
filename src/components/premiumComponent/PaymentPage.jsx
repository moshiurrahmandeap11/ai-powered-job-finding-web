"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Building, Smartphone, Wallet, Check } from "lucide-react";

const PaymentPage = ({ selectedPackage, billingPeriod, onBack, onPaymentSuccess }) => {
  const [email, setEmail] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Pay with Visa, MasterCard, or American Express",
      icon: CreditCard,
      gateway: "stripe"
    },
    {
      id: "bank",
      name: "Internet Banking",
      description: "Pay through your local bank",
      icon: Building,
      gateway: "sslcommerz"
    },
    {
      id: "bkash",
      name: "bKash",
      description: "Pay using bKash mobile wallet",
      icon: Smartphone,
      gateway: "sslcommerz"
    },
    {
      id: "nagad",
      name: "Nagad",
      description: "Pay using Nagad mobile wallet",
      icon: Wallet,
      gateway: "sslcommerz"
    },
    {
      id: "rocket",
      name: "Rocket",
      description: "Pay using DBBL Rocket",
      icon: Smartphone,
      gateway: "sslcommerz"
    }
  ];

  const prices = {
    monthly: { Standard: 9.99, Premium: 19.99 },
    yearly: { Standard: 95.90, Premium: 191.90 }
  };

  const handlePayment = async () => {
    if (!email || !selectedMethod) {
      alert("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    try {
      const paymentData = {
        package: selectedPackage,
        billingPeriod,
        amount: prices[billingPeriod][selectedPackage],
        email,
        paymentMethod: selectedMethod
      };

      // Here you would typically make an API call to your backend
      // to process the payment with the selected gateway
      console.log("Processing payment:", paymentData);

      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        onPaymentSuccess();
      }, 2000);

    } catch (error) {
      console.error("Payment error:", error);
      setIsProcessing(false);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <button
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Plans
          </button>
          <h1 className="text-2xl font-bold">Complete Your Payment</h1>
          <p className="text-blue-100">Secure payment processed with encryption</p>
        </div>

        <div className="p-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Order Summary</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{selectedPackage} Plan ({billingPeriod})</span>
              <span>${prices[billingPeriod][selectedPackage]}</span>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Select Payment Method *
            </label>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-3 ${
                      selectedMethod === method.id ? "bg-blue-100" : "bg-gray-100"
                    }`}>
                      <method.icon size={20} className={
                        selectedMethod === method.id ? "text-blue-600" : "text-gray-600"
                      } />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{method.name}</div>
                      <div className="text-sm text-gray-600">{method.description}</div>
                    </div>
                    {selectedMethod === method.id && (
                      <Check size={20} className="text-blue-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing || !email || !selectedMethod}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isProcessing ? "Processing..." : `Pay $${prices[billingPeriod][selectedPackage]}`}
          </button>

          {/* Security Notice */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              🔒 Your payment is secure and encrypted. We never store your card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;