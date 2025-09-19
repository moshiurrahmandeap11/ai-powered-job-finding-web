"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/AxiosInstance";

//  Login handlers
export const handleGitHubLogin = async () => {
  await signIn("github", { callbackUrl: "/where-listen" });
};

export const handleGoogleLogin = async () => {
  await signIn("google", { callbackUrl: "/where-listen" });
};

export const handleFacebookLogin = async () => {
  await signIn("facebook", { callbackUrl: "/where-listen" });
};

//  Logout handler
export const handleLogout = async () => {
  try {
    await signOut({ callbackUrl: "/" });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

//  Auto save user to DB (call in /where-listen)
export const useAutoSaveUser = () => {
  const { data: session, status } = useSession();
  const [userSaved, setUserSaved] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user && !userSaved) {
      const saveUserToDB = async () => {
        try {
          // ✅ First check if user exists
          const checkResponse = await axiosInstance.get(`/users/email/${session.user.email}`);
          console.log("User already exists:", checkResponse.data);
          setUserSaved(true);
        } catch (err) {
          if (err.response?.status === 404) {
            //  User doesn't exist, create new one
            try {
              const response = await axiosInstance.post("/users", {
                name: session.user.name || "Unknown",
                email: session.user.email,
                profilePicture: session.user.image || "",
                role: "user",
                premium: "free",
                provider: session.user?.provider || "unknown",
              });
              console.log("✅ User saved to DB:", response.data);
              setUserSaved(true);
            } catch (saveErr) {
              console.error("❌ Failed to save user:", saveErr.response?.data || saveErr.message);
            }
          } else {
            console.error("❌ Error checking user:", err.response?.data || err.message);
          }
        }
      };

      saveUserToDB();
    }
  }, [status, session, userSaved]);
};