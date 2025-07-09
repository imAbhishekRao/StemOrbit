"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSolution, setCurrentSolution] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState("");
  
  const solutions = [
    "STEM LABS",
    "AI LABS", 
    "Robotics Labs",
    "3D Printing Labs"
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
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center md:pr-24">
          {/* Hero Content: Headline, Animation, Buttons, Stats */}
          <div className="w-full flex flex-col justify-center items-center md:pr-0">
            <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight mb-8 text-center">
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
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8 word-animate text-center" style={{animationDelay: '0.6s'}}>
              Discover the future of education through cutting-edge technology, 
              hands-on learning experiences, and innovative solutions designed 
              to inspire the next generation of innovators.
            </p>
            <div className="flex gap-4 mb-8 word-animate justify-center" style={{animationDelay: '0.8s'}}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover-lift">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-base rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover-lift">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 w-full max-w-2xl">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-soft hover-lift word-animate" style={{animationDelay: '1s'}}>
                <div className="text-3xl font-bold text-blue-600 mb-2"><span className="font-poppins">500+</span></div>
                <div className="text-sm text-gray-600 font-medium">Students Enrolled</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-soft hover-lift word-animate" style={{animationDelay: '1.2s'}}>
                <div className="text-3xl font-bold text-purple-600 mb-2"><span className="font-poppins">50+</span></div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-soft hover-lift word-animate" style={{animationDelay: '1.4s'}}>
                <div className="text-3xl font-bold text-green-600 mb-2"><span className="font-poppins">95%</span></div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
