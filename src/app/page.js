import Banner from "@/components/homeComponents/Banner/Banner";
import FeaturesSection from "@/components/homeComponents/feturedSection/feturedSection";
import Hero from "@/components/homeComponents/Hero/Hero"
import RoadmapSection from "@/components/homeComponents/RoadmapSection/RoadmapSection";
import SkillsSection from "@/components/homeComponents/SkilsSection/SkillsSection";
import Navbar from "@/components/navbar/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav><Navbar></Navbar></nav>
      <div className="min-h-screen w-7xl mx-auto">
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <RoadmapSection></RoadmapSection>
      <SkillsSection></SkillsSection>
      </div>
      <footer></footer>
    </div>
  );
}
