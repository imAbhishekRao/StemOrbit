import Image from "next/image";
import { useRef, useEffect } from "react";

// List of achievement images and info
const achievementImages = [
  {
    src: "/WhatsApp Image 2025-08-21 at 10.41.29.jpeg",
    title: "Student Achievement 1",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.16.01 (1).jpeg",
    title: "Student Achievement 2",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.19.28 (2).jpeg",
    title: "Student Achievement 3",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.23.01.jpeg",
    title: "Student Achievement 4",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.28.30.jpeg",
    title: "Student Achievement 5",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.32.03.jpeg",
    title: "Student Achievement 6",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.39.14.jpeg",
    title: "Student Achievement 7",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 12.45.21.jpeg",
    title: "Student Achievement 8",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 13.00.37.jpeg",
    title: "Student Achievement 9",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 13.04.03.jpeg",
    title: "Student Achievement 10",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 13.08.17.jpeg",
    title: "Student Achievement 11",
    desc: "Celebrating our students' recent accomplishments.",
  },
  {
    src: "/WhatsApp Image 2025-08-20 at 13.08.17 (1).jpeg",
    title: "Student Achievement 12",
    desc: "Celebrating our students' recent accomplishments.",
  },
];

export default function AchievementsSection() {
  const scrollRef = useRef(null);

  // Duplicate images for infinite effect
  const imagesToRender = [...achievementImages, ...achievementImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationFrame;
    let scrollAmount = scrollContainer.scrollLeft;
    const speed = 1;
    function animate() {
      scrollAmount += speed;
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollAmount >= halfWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FFF0F6] overflow-hidden flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-700 mb-6 sm:mb-8 md:mb-10 text-center drop-shadow-lg font-fredoka">
        Achievements Gallery
      </h2>
      <div
        ref={scrollRef}
        className="w-screen overflow-x-auto whitespace-nowrap scrollbar-hide relative flex items-center achievements-carousel"
        style={{ scrollBehavior: "smooth", maxWidth: '100vw' }}
      >
        <div className="flex items-center achievements-carousel-inner">
          {imagesToRender.map((img, idx) => (
            <div
              key={idx}
              className="inline-block px-2 sm:px-3 md:px-4 achievements-carousel-item flex-shrink-0"
            >
              <div className="relative w-full h-full shadow-lg rounded-xl overflow-hidden flex items-center justify-center bg-white ring-1 ring-pink-100/60">
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
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .achievements-carousel {
          height: 240px;
        }
        .achievements-carousel-item {
          width: 300px;
          height: 240px;
          max-width: 300px;
        }
        .achievements-carousel-inner {
          display: inline-flex;
          height: 240px;
        }
        
        @media (min-width: 640px) {
          .achievements-carousel {
            height: 280px;
          }
          .achievements-carousel-item {
            width: 350px;
            height: 280px;
            max-width: 350px;
          }
          .achievements-carousel-inner {
            height: 280px;
          }
        }
        
        @media (min-width: 768px) {
          .achievements-carousel {
            height: 300px;
          }
          .achievements-carousel-item {
            width: 400px;
            height: 300px;
            max-width: 400px;
          }
          .achievements-carousel-inner {
            height: 300px;
          }
        }
        
        @media (min-width: 1024px) {
          .achievements-carousel {
            height: 340px;
          }
          .achievements-carousel-item {
            width: 500px;
            height: 340px;
            max-width: 500px;
          }
          .achievements-carousel-inner {
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
} 