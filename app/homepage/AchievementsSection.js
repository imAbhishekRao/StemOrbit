import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// List of achievement images and info
const achievementImages = [
  {
    src: "/achievement1.jpg",
    title: "Project Showcase Winner",
    desc: "Our students presented an innovative STEM project and won accolades.",
  },
  {
    src: "/Achievement2.jpg",
    title: "National Science Award",
    desc: "Recognized for outstanding performance in a national science competition.",
  },
  {
    src: "/achievement3.jpeg",
    title: "Tech Fest Champions",
    desc: "Secured first place in the inter-school tech fest for creative solutions.",
  },
  // Add more images here if needed
];

export default function AchievementsSection() {
  const scrollRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrame;
    let scrollAmount = scrollContainer.scrollLeft;
    const speed = 1;
    function animate() {
      // Pause only when any card is hovered
      if (hoveredIdx === null) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [hoveredIdx]);

  // Duplicate images for infinite effect
  const imagesToRender = [...achievementImages, ...achievementImages];

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FFF0F6] overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-10 text-center drop-shadow-lg font-fredoka">
        Achievements Gallery
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
              style={{ width: '500px', height: '340px', perspective: '1200px', maxWidth: '500px' }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] rounded-3xl shadow-2xl`}
                style={{ overflow: 'hidden', borderRadius: '1.5rem' }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full backface-hidden"
                  style={{
                    zIndex: 2,
                    borderRadius: 'inherit',
                    overflow: 'hidden',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    transition: 'transform 0.5s',
                    transform: hoveredIdx === idx ? 'rotateY(180deg)' : 'none',
                  }}
                >
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
                <div
                  className="absolute w-full h-full flex flex-col items-center justify-center bg-[#2aaadf] text-white backface-hidden"
                  style={{
                    zIndex: 3,
                    borderRadius: 'inherit',
                    overflow: 'hidden',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    transition: 'transform 0.5s',
                    transform: hoveredIdx === idx ? 'none' : 'rotateY(180deg)',
                  }}
                >
                  <div className="flex flex-col items-center justify-center w-full h-full px-4">
                    <h3 className="text-2xl font-bold mb-2 font-fredoka text-center" style={{wordBreak: 'break-word', whiteSpace: 'normal'}}>{img.title}</h3>
                    <p className="text-lg font-quicksand text-center" style={{wordBreak: 'break-word', whiteSpace: 'normal'}}>{img.desc}</p>
                    <p className="mt-3 text-base font-quicksand flex items-center gap-2 text-white/90">
                      <span role="img" aria-label="location">📌</span>
                      <span>Saint Soldier's School, Jalandhar</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
} 