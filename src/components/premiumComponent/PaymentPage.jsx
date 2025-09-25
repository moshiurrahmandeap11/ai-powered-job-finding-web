"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft, CreditCard, Building, Smartphone, Wallet, Check,
    Shield, Lock, Zap, Star, Globe, BadgeCheck
} from "lucide-react";
import Image from "next/image";
import Logo from "../sharedItems/logo/Logo";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const PaymentPage = ({ selectedPackage, billingPeriod, onBack, onPaymentSuccess }) => {
    const [email, setEmail] = useState("");
    const [selectedMethod, setSelectedMethod] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isHovered, setIsHovered] = useState(null);

    const paymentMethods = [
        {
            id: "card",
            name: "Credit/Debit Card",
            description: "Visa, MasterCard, AmEx",
            icon: CreditCard,
            gateway: "stripe",
            color: "from-blue-500 to-blue-600",
            badge: "Popular"
        },
        {
            id: "bank",
            name: "Bank Transfer",
            description: "Local bank payment",
            icon: Building,
            gateway: "sslcommerz",
            color: "from-green-500 to-green-600"
        },
        {
            id: "bkash",
            name: "bKash",
            description: "bKash mobile wallet",
            icon: Smartphone,
            gateway: "sslcommerz",
            color: "from-red-500 to-red-600",
            badge: "Fast"
        },
        {
            id: "nagad",
            name: "Nagad",
            description: "Nagad mobile wallet",
            icon: Wallet,
            gateway: "sslcommerz",
            color: "from-purple-500 to-purple-600"
        },
        {
            id: "rocket",
            name: "Rocket",
            description: "DBBL Rocket",
            icon: Zap,
            gateway: "sslcommerz",
            color: "from-orange-500 to-orange-600"
        },
    ];

    const prices = {
        monthly: { Standard: 9.99, Premium: 19.99 },
        yearly: { Standard: 95.90, Premium: 191.90 },
    };

    const features = [
        "AI-powered job matching",
        "Unlimited applications",
        "Priority support",
        "Resume optimization",
        "Interview preparation"
    ];

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
                paymentMethod: selectedMethod,
            };
            console.log("Processing payment:", paymentData);
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

    const selectedMethodData = paymentMethods.find(method => method.id === selectedMethod);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center p-4 overflow-hidden max-h-[100vh]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-6xl h-[90vh] max-h-[900px]">
                {/* Enhanced Left Side */}
                <motion.div
                    className="hidden lg:block w-full lg:w-2/5 h-full"
                    variants={leftSideVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-2xl p-8 h-full flex flex-col justify-between text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                                    <Image
                                        src="https://i.ibb.co.com/20dV1H0y/logo.png"
                                        alt="AI Job Seeker"
                                        width={48}
                                        height={48}
                                        className="filter brightness-0 invert"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">AI Job Seeker</h2>
                                    <p className="text-blue-100 text-sm">Smart Career Platform</p>
                                </div>
                            </div>

                            {/* Package Details */}
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20"
                                variants={itemVariants}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">
                                            {selectedPackage} PLAN
                                        </span>
                                        <h3 className="text-2xl font-bold">
                                            ${prices[billingPeriod][selectedPackage]}
                                            <span className="text-sm font-normal text-blue-100 ml-1">
                                                /{billingPeriod === 'monthly' ? 'month' : 'year'}
                                            </span>
                                        </h3>
                                    </div>
                                    <BadgeCheck size={24} className="text-green-300" />
                                </div>

                                <div className="space-y-2">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-blue-100"
                                            variants={itemVariants}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Check size={16} className="text-green-300 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Security Badge */}
                        <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-2 rounded-lg">
                                    <Shield size={20} className="text-green-300" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Secure Payment</p>
                                    <p className="text-blue-100 text-xs">256-bit SSL encryption</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Enhanced Right Side */}
                <motion.div
                    className="w-full lg:w-3/5 h-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="bg-white rounded-2xl shadow-2xl h-full flex flex-col overflow-hidden border border-gray-100">
                        {/* Enhanced Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                            <div className="relative z-10">
                                <button
                                    onClick={onBack}
                                    className="flex items-center text-white/90 hover:text-white mb-3 transition-all duration-200 hover:translate-x-1 group"
                                >
                                    <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Back to Selection
                                </button>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-2xl font-bold mb-1">Complete Your Payment</h1>
                                        <p className="text-blue-100 flex items-center gap-2">
                                            <Lock size={14} />
                                            Secure and encrypted transaction
                                        </p>
                                    </div>
                                    <Globe size={24} className="text-white/30" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 flex-1 overflow-y-auto">
                            {/* Enhanced Order Summary */}
                            <motion.div
                                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 mb-6 border border-gray-200/60"
                                variants={itemVariants}
                            >
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <span>Order Summary</span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </h3>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-sm text-gray-600">
                                            {selectedPackage} Plan ({billingPeriod})
                                        </span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                                AI Powered
                                            </span>
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                {billingPeriod === 'yearly' ? 'Save 20%' : 'Flexible'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-gray-900">
                                            ${prices[billingPeriod][selectedPackage]}
                                        </span>
                                        <div className="text-xs text-gray-500">
                                            {billingPeriod === 'monthly' ? 'per month' : 'per year'}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enhanced Email Input */}
                            <motion.div
                                className="mb-6"
                                variants={itemVariants}
                                transition={{ delay: 0.1 }}
                            >
                                <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <span>Email Address</span>
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                                        required
                                    />
                                    {email && (
                                        <Check size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                                    )}
                                </div>
                            </motion.div>

                            {/* Enhanced Payment Method Selection */}
                            <motion.div
                                className="mb-6"
                                variants={itemVariants}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Select Payment Method
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {paymentMethods.map((method) => (
                                        <motion.div
                                            key={method.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div
                                                onClick={() => setSelectedMethod(method.id)}
                                                onMouseEnter={() => setIsHovered(method.id)}
                                                onMouseLeave={() => setIsHovered(null)}
                                                className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 group relative overflow-hidden ${selectedMethod === method.id
                                                        ? `border-blue-500 bg-gradient-to-r ${method.color} text-white shadow-lg`
                                                        : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                                                    }`}
                                            >
                                                {method.badge && (
                                                    <span className={`absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full ${selectedMethod === method.id
                                                            ? 'bg-white text-blue-600'
                                                            : 'bg-blue-500 text-white'
                                                        }`}>
                                                        {method.badge}
                                                    </span>
                                                )}

                                                <div className="flex items-center">
                                                    <div className={`p-2 rounded-lg mr-3 transition-all duration-200 ${selectedMethod === method.id
                                                            ? 'bg-white/20'
                                                            : 'bg-gray-100 group-hover:bg-gray-200'
                                                        }`}>
                                                        <method.icon
                                                            size={20}
                                                            className={
                                                                selectedMethod === method.id ? 'text-white' : 'text-gray-600'
                                                            }
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className={`font-semibold text-sm ${selectedMethod === method.id ? 'text-white' : 'text-gray-900'
                                                            }`}>
                                                            {method.name}
                                                        </div>
                                                        <div className={`text-xs ${selectedMethod === method.id ? 'text-blue-100' : 'text-gray-500'
                                                            }`}>
                                                            {method.description}
                                                        </div>
                                                    </div>
                                                    {selectedMethod === method.id && (
                                                        <div className="bg-white/20 p-1 rounded-full">
                                                            <Check size={16} className="text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Selected Method Info */}
                            <AnimatePresence>
                                {selectedMethodData && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`bg-gradient-to-r ${selectedMethodData.color} p-2 rounded-lg`}>
                                                <selectedMethodData.icon size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-blue-900">Paying with {selectedMethodData.name}</p>
                                                <p className="text-blue-700 text-sm">Secure and fast transaction</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Enhanced Payment Button */}
                            <motion.div
                                variants={itemVariants}
                                transition={{ delay: 0.3 }}
                            >
                                <button
                                    onClick={handlePayment}
                                    disabled={isProcessing || !email || !selectedMethod}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl relative overflow-hidden group"
                                >
                                    <div className="relative z-10 flex items-center justify-center gap-2">
                                        {isProcessing ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Processing Payment...
                                            </>
                                        ) : (
                                            <>
                                                <Lock size={16} />
                                                Pay ${prices[billingPeriod][selectedPackage]}
                                            </>
                                        )}
                                    </div>

                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                </button>

                                {/* Security Assurance */}
                                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Shield size={12} />
                                        <span>SSL Secure</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Lock size={12} />
                                        <span>Encrypted</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star size={12} />
                                        <span>Trusted</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PaymentPage;