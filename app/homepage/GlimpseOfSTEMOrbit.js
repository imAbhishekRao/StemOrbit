"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

// Glimpse section redesigned to match Achievements carousel style
export default function GlimpseOfSTEMOrbit() {
  const scrollRef = useRef(null);

  // Use moments images for the gallery
  const moments = [
    { src: "/moments (1).jpg", title: "Moment 1" },
    { src: "/moments (2).JPG", title: "Moment 2" },
    { src: "/moments (3).jpg", title: "Moment 3" },
    { src: "/moments (4).jpg", title: "Moment 4" },
    { src: "/moments (5).jpg", title: "Moment 5" },
    { src: "/moments (6).jpg", title: "Moment 6" },
    { src: "/moments (7).jpg", title: "Moment 7" },
    { src: "/moments (8).jpg", title: "Moment 8" },
    { src: "/moments (9).jpg", title: "Moment 9" },
    { src: "/moments (10).jpg", title: "Moment 10" },
  ];

  // Duplicate for seamless infinite scroll
  const imagesToRender = [...moments, ...moments];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let rafId;
    let x = el.scrollLeft;
    const speed = 1.1; // px per frame
    const loop = () => {
      x += speed;
      const halfWidth = el.scrollWidth / 2;
      if (x >= halfWidth) x = 0;
      el.scrollLeft = x;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FFF7FB] overflow-hidden flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-700 mb-6 sm:mb-8 md:mb-10 text-center drop-shadow-lg font-fredoka">
        STEM ORBIT Gallery
      </h2>
      <div
        ref={scrollRef}
        className="w-screen overflow-x-auto whitespace-nowrap scrollbar-hide relative flex items-center glimpse-carousel"
        style={{ scrollBehavior: "smooth", maxWidth: '100vw' }}
      >
        <div className="flex items-center glimpse-carousel-inner">
          {imagesToRender.map((img, idx) => (
            <div
              key={idx}
              className="inline-block px-2 sm:px-3 md:px-4 glimpse-carousel-item flex-shrink-0"
            >
              <div className="relative w-full h-full shadow-lg rounded-xl overflow-hidden bg-white ring-1 ring-pink-100/60 group [transform-style:preserve-3d]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image 
                    src={img.src}
                    alt={img.title}
                    width={500}
                    height={340}
                    className="object-cover w-full h-full"
                    draggable={false}
                    priority={idx < 3}
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
          />
        </div>
                {/* Back */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div>
                    <div className="text-xl font-bold font-fredoka mb-2">{img.title}</div>
                    <div className="text-sm opacity-90">STEMOrbit Moments</div>
            </div>
          </div>
                {/* Hover Flip */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"></div>
            </div>
            </div>
          ))}
            </div>
          </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        /* Enable 3D flip context on the card wrapper */
        .group { perspective: 1200px; }
        
        .glimpse-carousel {
          height: 240px;
        }
        .glimpse-carousel-item {
          width: 300px;
          height: 240px;
          max-width: 300px;
        }
        .glimpse-carousel-inner {
          display: inline-flex;
          height: 240px;
        }
        
        @media (min-width: 640px) {
          .glimpse-carousel {
            height: 280px;
          }
          .glimpse-carousel-item {
            width: 350px;
            height: 280px;
            max-width: 350px;
          }
          .glimpse-carousel-inner {
            height: 280px;
          }
        }
        
        @media (min-width: 768px) {
          .glimpse-carousel {
            height: 300px;
          }
          .glimpse-carousel-item {
            width: 400px;
            height: 300px;
            max-width: 400px;
          }
          .glimpse-carousel-inner {
            height: 300px;
          }
        }
        
        @media (min-width: 1024px) {
          .glimpse-carousel {
            height: 340px;
          }
          .glimpse-carousel-item {
            width: 500px;
            height: 340px;
            max-width: 500px;
          }
          .glimpse-carousel-inner {
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
} 