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
    <section className="relative w-full h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)] md:h-[calc(100vh-7rem)] lg:h-[calc(100vh-7.5rem)] xl:h-[calc(100vh-8rem)] bg-white overflow-hidden mt-24 sm:mt-26 md:mt-28 lg:mt-30 xl:mt-32">
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Website Banner ${index + 1}`}
            fill
            className={`object-contain object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Get in Touch Button - Fixed at bottom right */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-32 right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 z-10">
        <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-bounce">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
