"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ data
const faqData = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features are available immediately. When downgrading, the changes take effect at the end of your billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, mobile banking (bKash, Nagad, Rocket), and internet banking through secure payment gateways like Stripe and SSLCommerz.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Currently, we do not offer a free trial for the Standard or Premium plans, but you can explore our Free plan to get started with basic features at no cost.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access to paid features will continue until the end of your billing cycle, after which you’ll revert to the Free plan.",
  },
  {
    question: "How does the AI Resume Score work?",
    answer:
      "The AI Resume Score analyzes your resume based on industry standards, job requirements, and best practices, providing a score and actionable feedback to improve your chances of landing interviews.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ answer visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for answer
  const answerVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: { opacity: 1, height: "auto", marginTop: 16, transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
