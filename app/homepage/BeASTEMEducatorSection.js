"use client";

import Image from "next/image";
import Link from "next/link";

export default function BeASTEMEducatorSection() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-pink-50 relative overflow-hidden px-4 sm:px-6">
      {/* Decorative Background Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-12 right-12 w-12 h-12 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-orange-200 rounded-full opacity-25"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        {/* Left: Image */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto">
            {/* Background decorative circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full transform scale-110 opacity-20"></div>
            
            {/* Main image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/TeacherTraining.JPG" 
                alt="STEM Educator Training" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#ec4899">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-2 -left-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ec4899">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-pink-600 font-bold text-lg font-bubblegum">Join Our Mission</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight font-fredoka">
            Be a <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">STEM Educator</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-lg font-quicksand leading-relaxed">
            Transform young minds and shape the future! Join our passionate team of educators and inspire the next generation of innovators, thinkers, and problem-solvers through hands-on STEM learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/be-a-stem-educator#application-form">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-fredoka">
                Apply Now
              </button>
            </Link>
            <Link href="/be-a-stem-educator">
              <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-semibold text-lg rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 font-fredoka">
                Learn More
              </button>
            </Link>
          </div>
          
          {/* Quick stats */}
          <div className="flex justify-center md:justify-start gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-500 font-fredoka">500+</div>
              <div className="text-sm text-gray-600 font-quicksand">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 font-fredoka">50+</div>
              <div className="text-sm text-gray-600 font-quicksand">Educators Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 font-fredoka">25+</div>
              <div className="text-sm text-gray-600 font-quicksand">Schools Partnered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

