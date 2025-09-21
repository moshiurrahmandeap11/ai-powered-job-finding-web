import Banner from "@/components/homeComponents/Banner/Banner";
import FeaturesSection from "@/components/homeComponents/feturedSection/feturedSection";
import Hero from "@/components/homeComponents/Hero/Hero"
import InsightsSection from "@/components/homeComponents/InsightsSection/InsightsSection";
import MentorshipSection from "@/components/homeComponents/MentorshipSection/MentorshipSection";
import RoadmapSection from "@/components/homeComponents/RoadmapSection/RoadmapSection";
import SkillsSection from "@/components/homeComponents/SkilsSection/SkillsSection";
import Navbar from "@/components/navbar/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav><Navbar></Navbar></nav>
      <div className="min-h-screen md:w-7xl md:mx-auto md:px-0 w-full px-2">
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <RoadmapSection></RoadmapSection>
      <SkillsSection></SkillsSection>
      <InsightsSection></InsightsSection>
      <MentorshipSection></MentorshipSection>
      </div>
      <footer></footer>
    </div>
  );
}
