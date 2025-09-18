"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Facebook,
  ArrowLeft,
} from "lucide-react"; // Import new icons
import Logo from "@/components/sharedItems/logo/Logo"; // Make sure your Logo component path is correct
import Loader from "@/components/sharedItems/Loader/Loader";
import {
  handleFacebookLogin,
  handleGitHubLogin,
  handleGoogleLogin,
} from "@/lib/actions/auth";

// A simple SVG component for the Google icon as lucide-react doesn't have brand icons.
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 6.638C34.522 2.934 29.632 1 24 1C12.954 1 4 9.954 4 21s8.954 20 20 20s20-8.954 20-20c0-1.341-.138-2.65-.389-3.917z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.841-5.657C34.522 6.934 29.632 5 24 5C16.318 5 9.656 8.337 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.417 44 32.095 44 26c0-1.341-.138-2.65-.389-3.917z"
    ></path>
  </svg>
);

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize router

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
      {/* Back Button */}
      <button
        onClick={() => router.back(-1)}
        className="absolute cursor-pointer top-4 left-4 sm:top-6 sm:left-6 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
      <div className="flex justify-center items-center">
        <div className="hidden lg:block">SIr moshiur rahman</div>
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Logo />
              <h1 className="text-xl font-semibold">Career Crafter</h1>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button
              onClick={() => handleGoogleLogin()}
              className="w-full cursor-pointer inline-flex items-center justify-center py-2.5 px-4 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <GoogleIcon />
              <span className="ml-3">Sign in with Google</span>
            </button>
            <button
              onClick={() => handleGitHubLogin()}
              className="w-full cursor-pointer inline-flex items-center justify-center py-2.5 px-4 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="ml-3">Sign in with GitHub</span>
            </button>
            {/* NEW: Facebook Login Button */}
            <button
              onClick={() => handleFacebookLogin()}
              className="w-full cursor-pointer inline-flex items-center justify-center py-2.5 px-4 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="ml-3">Sign in with Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-400 dark:text-gray-500">
              OR
            </span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* ... (Email and Password inputs remain the same) ... */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {passwordVisible ? (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="/forget-password"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader></Loader> : "Sign in"}
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Don’t have an account yet?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </form>

          {/* UPDATED & HIGHLIGHTED: Footer Links */}
          <div className="text-center space-y-2 pt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By signing in, you agree to our
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/terms-and-conditions"
                className="font-medium text-xs text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-full hover:underline"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy-policy"
                className="font-medium text-xs text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-full hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
