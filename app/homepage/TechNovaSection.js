"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function TechNovaSection() {
  const images = [
    "/technova (1).jpg",
    "/technova (2).jpg",
    "/technova (3).jpg",
    "/technova (4).jpg",
    "/technova (5).jpg",
    "/technova (6).jpg",
    "/technova (7).jpg",
    "/technova (8).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-300 rounded-full animate-pulse"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-16 left-20 animate-float">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-32 animate-float-delayed">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin-slow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-yellow-400 font-bold text-xl font-bubblegum tracking-wide">Flagship Event</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight font-fredoka">
            Tech<span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Nova</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-2 font-quicksand max-w-3xl mx-auto">
            Where Young Minds Ignite Innovation
          </p>
          <p className="text-lg text-yellow-400 mb-4 font-fredoka font-bold">
            May 20-21, 2025 | Classes 6-10
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-fredoka">
                The Ultimate Student Ideathon
              </h3>
              
              <p className="text-lg text-gray-200 mb-6 font-quicksand leading-relaxed">
                TechNova 2.0 is our flagship ideathon where students from Classes 6-10 collaborate to "Invent. Imagine. Inspire" - building innovative solutions from scratch in our exciting Maker's Arena format.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-white font-quicksand">Multiple schools participate with their brightest students</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="text-white font-quicksand">Maker's Arena: Build innovative solutions from scratch</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"/>
                    </svg>
                  </div>
                  <span className="text-white font-quicksand">Hosted at Saint Soldier's Divine Public School, Panchkula</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              {/* Main image carousel */}
              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`TechNova Event ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-yellow-400"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400/80 rounded-full flex items-center justify-center animate-float z-20 backdrop-blur-sm">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute bottom-16 left-4 w-10 h-10 bg-pink-400/80 rounded-full flex items-center justify-center animate-float-delayed z-20 backdrop-blur-sm">
                <span className="text-xl">🚀</span>
              </div>

              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full z-20">
                <span className="text-white text-sm font-fredoka">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail strip below main image */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-yellow-400 scale-110 shadow-lg shadow-yellow-400/50"
                      : "border-white/30 hover:border-white/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`TechNova thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-fredoka">Multiple Schools</h4>
            <p className="text-gray-300 font-quicksand">Students from various schools collaborate and compete</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-fredoka">Ideathon Format</h4>
            <p className="text-gray-300 font-quicksand">Intensive brainstorming and solution development</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-fredoka">Saint Soldier's School</h4>
            <p className="text-gray-300 font-quicksand">Prestigious venue in Panchkula, Haryana</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="https://technovafest.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold text-lg rounded-full shadow-2xl hover:from-yellow-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-fredoka mr-4"
          >
            Register Your School
          </a>
          <button 
            onClick={() => window.open('https://technovafest.in/', '_blank')}
            className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold text-lg rounded-full shadow-2xl hover:from-yellow-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-fredoka mr-4"
          >
            Visit TechNova 2.0
          </button>
        </div>
        
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(40px) rotate(360deg); }
        }
        @keyframes orbit-slow {
          0% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-orbit { animation: orbit 8s linear infinite; }
        .animate-orbit-reverse { animation: orbit-reverse 10s linear infinite; }
        .animate-orbit-slow { animation: orbit-slow 12s linear infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
