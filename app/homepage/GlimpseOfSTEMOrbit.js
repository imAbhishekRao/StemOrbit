"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GlimpseOfSTEMOrbit() {
  const [currentMainImage, setCurrentMainImage] = useState(0);
  
  // All moments images in specified order
  const momentsImages = [
    "/moments (9).jpg", // Main image - starts with moments 9
    "/moments (1).jpg", // 1
    "/moments (5).jpg", // 5
    "/moments (4).jpg", // 4
    "/moments (6).jpg", // 6
    "/moments (2).JPG", // 2
    "/moments (3).jpg", // rest
    "/moments (7).jpg",
    "/moments (8).jpg",
    "/moments (10).jpg"
  ];

  // Auto-rotate main image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMainImage((prevIndex) => 
        (prevIndex + 1) % momentsImages.length
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [momentsImages.length]);

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 bg-white relative px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-10 font-fredoka gradient-text" style={{background: 'linear-gradient(90deg, #38bdf8 0%, #f472b6 50%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
        A Colorful Peek Into STEMOrbit Moments
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 max-w-6xl w-full">
        {/* Large main image with rotation */}
        <div className="rounded-3xl overflow-hidden shadow-lg relative w-full h-60 md:h-80 max-w-xl">
          <Image 
            src={momentsImages[currentMainImage]} 
            alt={`STEMOrbit Moments - ${currentMainImage + 1}`} 
            fill 
            className="object-cover transition-opacity duration-1000" 
          />
        </div>
        {/* Right grid of smaller images */}
        <div className="flex flex-col gap-6" style={{flex: '1 1 320px', minWidth: 260, maxWidth: 400}}>
          <div className="flex gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/moments (1).jpg" alt="STEMOrbit Moment 1" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/moments (2).JPG" alt="STEMOrbit Moment 2" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/moments (3).jpg" alt="STEMOrbit Moment 3" fill className="object-cover" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/moments (4).jpg" alt="STEMOrbit Moment 4" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/moments (5).jpg" alt="STEMOrbit Moment 5" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/moments (6).jpg" alt="STEMOrbit Moment 6" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 