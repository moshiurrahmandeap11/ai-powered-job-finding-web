import Banner from "@/components/homeComponents/Banner/Banner";
import Hero from "@/components/homeComponents/Hero/Hero"
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav><Navbar></Navbar></nav>
      <div className="min-h-screen flex items-center justify-center">
      <Banner></Banner>
      </div>
      <footer></footer>
    </div>
  );
}
