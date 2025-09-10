"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  return (
    <section className="relative w-screen h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] lg:h-[calc(100vh-8rem)] bg-white overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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

      {/* Get in Touch Button - Fixed at bottom center on mobile, right on desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:bottom-20 sm:right-6 md:bottom-24 md:right-8 lg:bottom-28 lg:right-10 xl:bottom-32 xl:right-12 z-10">
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="px-6 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-bounce whitespace-nowrap"
        >
          Get in Touch
        </button>
      </div>

      {/* Carousel Indicators - Mobile Only */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden z-10">
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
