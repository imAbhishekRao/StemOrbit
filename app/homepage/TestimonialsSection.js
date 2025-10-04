import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ms. Heena",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"The educators are knowledgeable and very supportive. Got to learn a lot from you people. Thanks a lot to your whole team for providing such a platform where we can enhance our skills and also make our students know about different technologies."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Heena.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Educator" }
    ],
    color: "#0369A1" // deep blue
  },
  {
    name: "Mr. Gurjinder Singh",
    subtitle: "JNV Patiala",
    text: `"STEMORBIT have provided us with excellent technical knowledge and their trainer have also been very energetic and supportive. We would definitely recommend STEMORBIT to our known schools when ATL lab setup and services."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Gurjinder.jpg",
    badges: [
      { icon: "/schools.svg", text: "JNV Patiala" },
      { icon: "/students.svg", text: "ATL/Technology Coordinator" }
    ],
    color: "#5B21B6" // rich indigo
  },
  {
    name: "Mr. Sandeep",
    subtitle: "JNV Amritsar",
    text: `"STEMORBIT training triggers curiosity among students to identify real life problem and find their solutions. I thank STEMORBIT and their team for providing their services to our school. Best wishes to your company, I believe your company will grow and flourish wonderfully."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Sandeep.jpg",
    badges: [
      { icon: "/schools.svg", text: "JNV Amritsar" },
      { icon: "/students.svg", text: "Teacher / Mentor" }
    ],
    color: "#0F766E" // teal
  },
  {
    name: "Ms. Gunjan",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"I am fortunate enough to work and learn with the experienced, expertise and cooperative team of Stemorbit . I found this learning full of educative, inspirational with a lot of fun filled programs and amazing experiments here. Thanks a lot to the team Stemorbit."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Gunjan.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Science Faculty" }
    ],
    color: "#7C3AED" // violet
  },
  {
    name: "Ms. Anita Kumari",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"Working with Stemorbit has been a joy. They are very detailed and organized. They make sure that the work is done correctly and in a timely manner. Their services have enabled us to reach an efficiency we hadn't previously experienced."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Anita.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Administrator" }
    ],
    color: "#BE185D" // rose
  },
  {
    name: "Ms. Shweta Shahi",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"In the 21st century , Stemorbit has given an opportunity to step into a new outlook for the theories we have learnt. Dedicated staff with on time practical knowledge is been provided by the faculty members."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Shweta.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Faculty" }
    ],
    color: "#047857" // emerald
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get three testimonials to display (left, center, right)
  const getCurrentTestimonials = () => {
    const prev = testimonials[(current - 1 + testimonials.length) % testimonials.length];
    const center = testimonials[current];
    const next = testimonials[(current + 1) % testimonials.length];
    return [prev, center, next];
  };

  const [tLeft, tCenter, tRight] = getCurrentTestimonials();

  const next = () => {
    setCurrent((c) => (c + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const TestimonialCard = ({ testimonial, size = 'center', position = 'center' }) => {
    const isCenter = size === 'center';
    const isSide = size === 'side';
    
    return (
      <div className={`relative rounded-xl sm:rounded-2xl shadow-xl flex flex-col items-center px-3 sm:px-4 py-4 sm:py-6 w-full transition-all duration-700 transform hover:scale-105 ${
        isCenter 
          ? 'min-h-[450px] sm:min-h-[420px] lg:min-h-[400px]' 
          : 'min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] opacity-80'
      } ${position === 'left' ? 'animate-slideInLeft' : position === 'right' ? 'animate-slideInRight' : 'animate-fadeIn'}`} 
      style={{ background: testimonial.color }}>
        {/* Profile image */}
        <div className={`mb-3 sm:mb-4 ${
          isCenter ? 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' : 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
        }`}>
          <div className={`rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-lg bg-white ${
            isCenter ? 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' : 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
          }`}>
            <Image 
              src={testimonial.img} 
              alt={testimonial.name} 
              width={isCenter ? 112 : 64} 
              height={isCenter ? 112 : 64} 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col items-center gap-1 mb-2">
            <div className="flex flex-col items-center gap-1">
              <span className={`text-white leading-none ${
                isCenter ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base'
              }`}>"</span>
              <div>
                <span className={`text-white font-extrabold font-fredoka ${
                  isCenter 
                    ? 'text-base sm:text-lg lg:text-xl xl:text-2xl' 
                    : 'text-xs sm:text-sm lg:text-base'
                }`}>{testimonial.name}</span>
                <div className={`text-white opacity-90 mt-1 font-medium ${
                  isCenter ? 'text-xs sm:text-sm' : 'text-xs'
                }`}>{testimonial.subtitle}</div>
              </div>
            </div>
          </div>
          
          <p className={`text-white font-quicksand mb-3 sm:mb-4 leading-relaxed ${
            isCenter 
              ? 'text-sm sm:text-base lg:text-lg line-clamp-4' 
              : 'text-xs sm:text-sm line-clamp-3'
          }`}>
            {testimonial.text}
          </p>
          
          <div className={`flex flex-wrap gap-1 sm:gap-2 justify-center ${
            isCenter ? 'gap-2 sm:gap-3' : 'gap-1'
          }`}>
            {testimonial.badges.slice(0, isCenter ? 2 : 1).map((badge, i) => (
              <div key={i} className={`flex items-center gap-1 bg-white/90 text-black font-bold rounded-lg px-2 py-1 shadow ${
                isCenter 
                  ? 'text-xs sm:text-sm px-2 sm:px-3 py-1' 
                  : 'text-xs px-1 py-0.5'
              }`}>
                <img src={badge.icon} alt="badge" className={`${
                  isCenter ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-2 h-2 sm:w-3 sm:h-3'
                }`} />
                <span className={isCenter ? 'text-xs sm:text-sm' : 'text-xs'}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-[#fafafa] flex flex-col items-center justify-center px-4 sm:px-6">
      {/* Heading with strawberry icon and playful text */}
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <span className="text-pink-500 font-bold text-lg font-bubblegum mb-2">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center font-fredoka text-sky-500">Voices from Our Partner Schools</h2>
      </div>
      
      {/* Three testimonials with center focus - carousel style */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div className="flex items-center justify-center gap-3 lg:gap-6">
          {/* Left testimonial (smaller) */}
          <div className="relative group order-2 md:order-1 w-1/3 max-w-[280px]">
            <TestimonialCard testimonial={tLeft} size="side" position="left" />
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-black/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          {/* Center testimonial (larger) */}
          <div className="relative group order-1 md:order-2 w-1/3 max-w-[400px]">
            <TestimonialCard testimonial={tCenter} size="center" position="center" />
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-black/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          {/* Right testimonial (smaller) */}
          <div className="relative group order-3 md:order-3 w-1/3 max-w-[280px]">
            <TestimonialCard testimonial={tRight} size="side" position="right" />
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-black/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Sliding indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-sky-500 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="ml-2 text-xs text-gray-600 font-medium">
              {current + 1} / {testimonials.length}
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={prev} 
            className="bg-white text-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-pink-100 active:scale-90 transition-all border-2 border-pink-200 hover:shadow-xl"
          >
            <img src="/arrow.svg" alt="Previous" className="w-5 h-5" />
          </button>
          <button 
            onClick={next} 
            className="bg-white text-sky-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-sky-100 active:scale-90 transition-all border-2 border-sky-200 hover:shadow-xl"
          >
            <img src="/arrow.svg" alt="Next" className="w-5 h-5 rotate-180" />
          </button>
        </div>
        
        {/* Auto-play indicator */}
        <div className="flex justify-center mt-3">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
            <span className="text-xs text-gray-600 font-medium">
              {isAutoPlaying ? 'Auto-sliding' : 'Paused'}
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.8);
          }
          to {
            opacity: 0.8;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.8);
          }
          to {
            opacity: 0.8;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
