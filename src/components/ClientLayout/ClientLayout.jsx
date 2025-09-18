"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../useAuth/useAuth";
import Hero from "../homeComponents/Hero/Hero";

export default function ClientLayout({ children }) {
  const { user } = useAuth(); 
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (!user) setShowHero(true);
    else setShowHero(false);
  }, [user]);

  return (
    <>
      {showHero && <Hero onClose={() => setShowHero(false)} />}
      {children}
    </>
  );
}
