"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentSolution, setCurrentSolution] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState("");
  
  const solutions = [
    "STEM Solutions",
    "AI Labs Solutions", 
    "Robotics Labs Solutions",
    "3D Labs Solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSolution((prev) => (prev + 1) % solutions.length);
        setIsAnimating(false);
      }, 400);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Letter-by-letter animation effect
  useEffect(() => {
    const currentSolutionText = solutions[currentSolution];
    
    if (isAnimating) {
      setDisplayText("");
      return;
    }

    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentSolutionText.length) {
        setDisplayText(currentSolutionText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Type each letter with 100ms delay

    return () => clearInterval(typeInterval);
  }, [currentSolution, isAnimating]);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full py-24 md:py-32 px-4 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-0">
          {/* Left: Text/Animation/Buttons */}
          <div className="flex-1 flex flex-col justify-center md:pr-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              <span className="block mb-2 word-animate">Empowering</span>
              <span className="block mb-2 word-animate" style={{animationDelay: '0.2s'}}>Young Minds</span>
              <span className="block mb-4 word-animate" style={{animationDelay: '0.4s'}}>with Our</span>
              <span className="relative inline-block">
                <span className={`bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-700 text-transition ${
                  isAnimating ? 'opacity-0 transform translate-y-4 scale-95' : 'opacity-100 transform translate-y-0 scale-100'
                }`}>
                  {displayText}
                  <span className="inline-block w-1 h-10 bg-gradient-to-r from-blue-600 to-purple-600 ml-1 animate-pulse"></span>
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full animate-enhanced-pulse"></span>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8 word-animate" style={{animationDelay: '0.6s'}}>
              Discover the future of education through cutting-edge technology, 
              hands-on learning experiences, and innovative solutions designed 
              to inspire the next generation of innovators.
            </p>
            <div className="flex gap-4 mb-8 word-animate" style={{animationDelay: '0.8s'}}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover-lift">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-base rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover-lift">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-soft hover-lift word-animate" style={{animationDelay: '1s'}}>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Students Enrolled</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-soft hover-lift word-animate" style={{animationDelay: '1.2s'}}>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-soft hover-lift word-animate" style={{animationDelay: '1.4s'}}>
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
          {/* Right: Image/Visual */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-strong"></div>
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float shadow-medium"></div>
              <div className="absolute top-24 right-16 w-16 h-16 bg-purple-400/20 rounded-full animate-float shadow-medium" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-24 left-16 w-12 h-12 bg-green-400/20 rounded-full animate-float shadow-medium" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-float shadow-medium" style={{animationDelay: '1.5s'}}></div>
              {/* Main Image Container */}
              <div className="absolute inset-6 bg-white rounded-3xl shadow-strong flex items-center justify-center overflow-hidden border border-gray-100">
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {/* Placeholder for your main image */}
                  <div className="text-center space-y-8">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-enhanced-pulse shadow-strong">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="space-y-4">
                      <div className="text-3xl font-bold text-gray-800">
                        Innovation Hub
                      </div>
                      <div className="text-gray-600 text-lg">
                        Where ideas come to life
                      </div>
                    </div>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-size-200 animate-gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 