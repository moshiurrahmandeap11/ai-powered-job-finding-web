"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Github, Facebook, ArrowLeft, User, AlertCircle } from 'lucide-react';
import Logo from '@/components/sharedItems/logo/Logo'; // Ensure your Logo component path is correct
import { handleFacebookLogin, handleGitHubLogin, handleGoogleLogin } from '@/lib/actions/auth';

// Reusing the GoogleIcon component from the SignIn page
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 6.638C34.522 2.934 29.632 1 24 1C12.954 1 4 9.954 4 21s8.954 20 20 20s20-8.954 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.841-5.657C34.522 6.934 29.632 5 24 5C16.318 5 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.417 44 32.095 44 26c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const SignUp = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);
        console.log("Form Submitted:", formData);
        
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            console.log("Registration successful!");
            // Optionally, redirect the user
            // router.push('/dashboard');
        }, 2000);
    };

    const isSubmitDisabled = !formData.fullName || !formData.email || !formData.password || !agreedToTerms || isLoading;

    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4 py-12">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Go back"
            >
                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
                
                {/* Header */}
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <Logo />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create an account</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Start your journey with us today.</p>
                </div>

                {/* Social Logins */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button onClick={() => handleGoogleLogin()} className="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><GoogleIcon /></button>
                    <button onClick={() => handleGitHubLogin()} className="inline-flex cursor-pointer items-center justify-center p-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><Github className="w-5 h-5" /></button>
                    <button onClick={() => handleFacebookLogin()} className="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><Facebook className="w-5 h-5 text-blue-600" /></button>
                </div>
                
                {/* Divider */}
                <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
                    <span className="flex-shrink mx-4 text-xs text-gray-400 dark:text-gray-500">OR SIGN UP WITH EMAIL</span>
                    <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><User className="w-5 h-5 text-gray-400" /></div>
                            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
                        </div>
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><Mail className="w-5 h-5 text-gray-400" /></div>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                    </div>
                    {/* Password */}
                    <div>
                        <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><Lock className="w-5 h-5 text-gray-400" /></div>
                            <input type={passwordVisible ? 'text' : 'password'} name="password" id="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                            <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3">{passwordVisible ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}</button>
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><Lock className="w-5 h-5 text-gray-400" /></div>
                            <input type={confirmPasswordVisible ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                            <button type="button" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3">{confirmPasswordVisible ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}</button>
                        </div>
                    </div>
                    
                    {/* Error Message */}
                    {error && (
                        <div className="flex items-center text-sm text-red-600 dark:text-red-500">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </div>
                    )}

                    {/* Terms and Conditions */}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                I accept the <Link href="/terms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Terms and Conditions</Link>
                            </label>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button type="submit" disabled={isSubmitDisabled} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed transition">
                        {isLoading ? 'Creating account...' : 'Create an account'}
                    </button>

                    {/* Sign In Link */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Already have an account?{' '}
                        <Link href="/signin" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;