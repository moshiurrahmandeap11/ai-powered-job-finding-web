"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession(); // NextAuth hook
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return; 
    if (status === "authenticated") {
      setUser(session.user); // NextAuth user object
    } else {
      setUser(null); // logged out
    }
    setLoading(false);
  }, [session, status]);

  return { user, loading };
}
