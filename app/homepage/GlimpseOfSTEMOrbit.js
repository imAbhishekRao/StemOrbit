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
      if (x >= el.scrollWidth / 2) x = 0;
      el.scrollLeft = x;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FFF7FB] overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-10 text-center drop-shadow-lg font-fredoka">
        STEM ORBIT Gallery
      </h2>
      <div
        ref={scrollRef}
        className="w-screen overflow-x-auto whitespace-nowrap scrollbar-hide relative flex items-center"
        style={{ scrollBehavior: "smooth", maxWidth: '100vw', height: '340px' }}
      >
        <div className="flex items-center" style={{ width: `${imagesToRender.length * 520}px`, height: '340px' }}>
          {imagesToRender.map((img, idx) => (
            <div
              key={idx}
              className="inline-block px-4 max-w-[500px]"
              style={{ width: '500px', height: '340px', maxWidth: '500px' }}
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
                    sizes="500px"
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
      `}</style>
    </section>
  );
} 