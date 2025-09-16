"use client";
import { signIn } from "next-auth/react";

// GitHub login handler
export const handleGitHubLogin = async () => {
  try {
    await signIn("github", { callbackUrl: "/" }); // redirect after login
  } catch (error) {
    console.error("GitHub login failed:", error);
  }
};

// Similarly, Google login
export const handleGoogleLogin = async () => {
  try {
    const result = await signIn("google", { redirect: false });
    if (result?.url) {
      window.location.href = result.url; // manually redirect
    }
  } catch (error) {
    console.error("Google login failed:", error);
  }
};


// Facebook login
export const handleFacebookLogin = async () => {
  try {
    await signIn("facebook", { callbackUrl: "/" });
  } catch (error) {
    console.error("Facebook login failed:", error);
  }
};
