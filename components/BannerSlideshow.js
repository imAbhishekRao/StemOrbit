'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const BannerSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const banners = [
    {
      src: '/webbanner1.png',
      alt: 'STEMOrbit Banner 1 - Empowering Young Minds',
      title: 'EMPOWERING YOUNG MINDS',
      subtitle: 'Discover the future of education through cutting-edge technology'
    },
    {
      src: '/webbanner2.png',
      alt: 'STEMOrbit Banner 2 - Empowering Students with Next Gen Labs',
      title: 'EMPOWERING STUDENTS WITH NEXT GEN LABS',
      subtitle: 'Comprehensive lab setups with curriculum for hands-on learning'
    },
    {
      src: '/webbanner3.png',
      alt: 'STEMOrbit Banner 3 - Innovation Focus Area',
      title: 'INNOVATION FOCUS AREA',
      subtitle: 'Tech adventures tailored for young innovators'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-5.5rem)] xl:h-[calc(100vh-6rem)] bg-white overflow-hidden mt-16 sm:mt-18 md:mt-20 lg:mt-22 xl:mt-24">
      {/* Slideshow Container */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-contain object-center"
              priority={index === 0}
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-xl max-w-4xl mx-auto px-4">
                  {banner.subtitle}
                </p>
                {/* Get in Touch Button - Consistent across all banners */}
                <div className="mb-8">
                  <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 ease-linear"
          style={{
            width: `${((currentSlide + 1) / banners.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default BannerSlideshow;

