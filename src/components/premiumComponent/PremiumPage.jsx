"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown, Star, ArrowRight } from "lucide-react";
import Navbar from "../navbar/Navbar";
import PaymentModal from "../PaymentModal/PaymentModal";
import PaymentPage from "../PaymentPage/PaymentPage";

const PremiumPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [billingPeriod, setBillingPeriod] = useState("");

  // Base package data (monthly pricing)
  const basePackages = [
    {
      name: "Free",
      price: 0,
      description: "Get started with basic features",
      features: [
        { name: "AI Resume Score", value: "3 checks", unlimited: false },
        { name: "AI Suggestions", value: "5 times", unlimited: false },
        { name: "Basic Job Matching", value: "Limited", unlimited: false },
        { name: "Email Support", value: "Standard", unlimited: false },
        { name: "Resume Templates", value: "3 templates", unlimited: false },
      ],
      cta: "Current Plan",
      popular: false,
    },
    {
      name: "Standard",
      price: 9.99,
      description: "For serious job seekers",
      features: [
        { name: "AI Resume Score", value: "20 checks", unlimited: false },
        { name: "AI Suggestions", value: "30 times", unlimited: false },
        { name: "Advanced Job Matching", value: "Yes", unlimited: false },
        { name: "Priority Support", value: "Yes", unlimited: false },
        { name: "Resume Templates", value: "15 templates", unlimited: false },
        { name: "Cover Letter AI", value: "10 letters", unlimited: false },
      ],
      cta: "Upgrade Now",
      popular: true,
    },
    {
      name: "Premium",
      price: 19.99,
      description: "Unlock all possibilities",
      features: [
        { name: "AI Resume Score", value: "Unlimited", unlimited: true },
        { name: "AI Suggestions", value: "Unlimited", unlimited: true },
        { name: "Advanced Job Matching", value: "Yes", unlimited: true },
        { name: "24/7 Priority Support", value: "Yes", unlimited: true },
        { name: "Resume Templates", value: "Unlimited", unlimited: true },
        { name: "Cover Letter AI", value: "Unlimited", unlimited: true },
        { name: "Interview Prep", value: "Unlimited", unlimited: true },
        { name: "LinkedIn Optimization", value: "Yes", unlimited: true },
      ],
      cta: "Upgrade Now",
      popular: false,
    },
  ];

  // Compute packages based on selectedPlan
  const packages = basePackages.map((pkg) => {
    if (selectedPlan === "annual" && pkg.name !== "Free") {
      // Calculate annual price with 20% discount
      const annualPrice = (pkg.price * 12 * 0.8).toFixed(2);
      return {
        ...pkg,
        price: `$${annualPrice}`,
        period: "/year",
      };
    }
    return {
      ...pkg,
      price: `$${pkg.price}`,
      period: pkg.name !== "Free" ? "/month" : "",
    };
  });

  const handleUpgradeClick = (pkgName) => {
    if (pkgName !== "Free") {
      setSelectedPackage(pkgName);
      setShowPaymentModal(true);
    }
  };

  const handleProceedToPayment = (pkg, period) => {
    setSelectedPackage(pkg);
    setBillingPeriod(period);
    setShowPaymentModal(false);
    setShowPaymentPage(true);
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful! Thank you for your purchase.");
    setShowPaymentPage(false);
  };

  if (showPaymentPage) {
    return (
      <PaymentPage
        selectedPackage={selectedPackage}
        billingPeriod={billingPeriod}
        onBack={() => setShowPaymentPage(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Upgrade Your Job Search
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Choose the plan that works best for you and unlock powerful AI tools to land your dream job
          </motion.p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 rounded-lg p-1 flex">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedPlan === "monthly" ? "bg-white text-gray-900 shadow" : "text-gray-600"
              }`}
              onClick={() => setSelectedPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedPlan === "annual" ? "bg-white text-gray-900 shadow" : "text-gray-600"
              }`}
              onClick={() => setSelectedPlan("annual")}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                pkg.popular ? "ring-2 ring-blue-500 ring-offset-2" : "border border-gray-200"
              } shadow-lg`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-md">
                  <Star size={14} className="mr-1 fill-white" />
                  Most Popular
                </div>
              )}

              <div className="bg-white p-6 pt-7">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  {pkg.name === "Premium" && (
                    <Crown size={20} className="ml-2 text-yellow-500 fill-yellow-200" />
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.period && <span className="text-gray-600 ml-1">{pkg.period}</span>}
                  </div>
                  <p className="text-gray-600 mt-1">{pkg.description}</p>
                </div>

                <button
                  onClick={() => handleUpgradeClick(pkg.name)}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${
                    pkg.name === "Free"
                      ? "bg-gray-200 text-gray-700"
                      : pkg.name === "Standard"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700"
                  } transition-colors`}
                >
                  {pkg.cta}
                  {pkg.name !== "Free" && <ArrowRight size={16} className="ml-2" />}
                </button>
              </div>

              <div className="border-t border-gray-200 bg-gray-50 p-6">
                <ul className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check
                        size={18}
                        className={`mt-0.5 mr-3 flex-shrink-0 ${
                          feature.unlimited ? "text-green-500" : "text-gray-400"
                        }`}
                      />
                      <div>
                        <span className="font-medium text-gray-900">{feature.name}</span>
                        <span
                          className={`block text-sm ${
                            feature.unlimited ? "text-green-600 font-medium" : "text-gray-600"
                          }`}
                        >
                          {feature.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features are available
                immediately. When downgrading, the changes take effect at the end of your billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, mobile banking (bKash, Nagad, Rocket), and internet banking through secure
                payment gateways like Stripe and SSLCommerz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedPackage={selectedPackage}
        onProceedToPayment={handleProceedToPayment}
      />
    </div>
  );
};

export default PremiumPage;