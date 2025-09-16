"use client";
import React, { useRef } from "react";
import { X } from "lucide-react";

const Hero = ({ onClose }) => {
  const videoRef = useRef(null);

  return (
    <section className="relative max-w-3xl bg-white/90 rounded-xl mx-auto px-4 py-6 lg:py-10 shadow-xl">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-4 right-4 text-gray-700 hover:text-gray-900 transition"
      >
        <X size={24} />
      </button>

      {/* Grid: Mobile stacked, Desktop 2-columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 leading-snug text-primary">
            Build Your Dream Career
          </h1>

          <p className="text-sm md:text-base lg:text-base mb-6 opacity-90 leading-relaxed text-primary/80">
            Connect with professionals, discover opportunities, and take your career to the next level.
          </p>

          <button className="bg-primary text-white font-semibold px-4 py-2 md:px-6 md:py-3 button text-sm md:text-base rounded-md">
            Join for Free
          </button>
        </div>

        {/* Right: Video */}
        <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg shadow-md order-1 lg:order-2">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="./header video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
