"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Logo from '@/components/sharedItems/logo/Logo'; // Make sure your Logo component path is correct

const ForgetPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Password reset request for:", email);

        // Simulate an API call to send the reset link
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true); // Switch to success view
        }, 2000);
    };

    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
            {/* Back Button */}
            {!isSubmitted && (
                 <button
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
            )}
           
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
                {isSubmitted ? (
                    // Success View
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <CheckCircle className="w-16 h-16 text-green-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Check your email</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            We have sent a password reset link to <br/>
                            <strong className="text-gray-700 dark:text-gray-200">{email}</strong>.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Didn't receive the email? Check your spam folder.
                        </p>
                        <div className="pt-2">
                             <Link href="/signin" legacyBehavior>
                                <a className="w-full inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition">
                                    Back to Sign In
                                </a>
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Initial Form View
                    <>
                        {/* Header */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Logo />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Forgot Your Password?
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                No worries! Enter your email and we'll send you a reset link.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading || !email}
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Sending Link...' : 'Send Reset Link'}
                            </button>

                            {/* Back to Sign In Link */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                Suddenly remembered?{' '}
<Link 
  href="/signin" 
  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
>
  Sign in
</Link>

                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgetPassword;