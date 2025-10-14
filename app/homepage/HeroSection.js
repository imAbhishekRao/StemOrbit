"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Calendly integration
const handleBookCallClick = (e) => {
  e.preventDefault();
  const url = "https://calendly.com/abhishek-stemorbit";
  if (typeof window === "undefined") return false;

  // Ensure CSS is present
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  const openPopup = () => {
    try {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url });
        return true;
      }
    } catch (_) {}
    return false;
  };

  if (openPopup()) return false;

  // If Calendly not loaded yet, load script on demand and open when ready
  let script = document.getElementById("calendly-widget-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => openPopup();
    document.body.appendChild(script);
  } else {
    script.addEventListener("load", () => openPopup(), { once: true });
  }

  // Final fallback after short delay
  setTimeout(() => {
    if (!openPopup()) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  return false;
};

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/webbanner1.png",
    "/webbanner2.png", 
    "/webbanner3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative w-screen h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] xl:h-[calc(100vh-8rem)] bg-white overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Website Banner ${index + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
            sizes="100vw"
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Get in Touch Button - Fixed at bottom center on mobile, right on desktop */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:bottom-16 sm:right-4 md:bottom-20 md:right-6 lg:bottom-24 lg:right-8 xl:bottom-28 xl:right-10 z-10">
        <button 
          onClick={handleBookCallClick}
          className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-bounce whitespace-nowrap"
        >
          Get in Touch
        </button>
      </div>

      {/* Carousel Indicators - Mobile Only */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
