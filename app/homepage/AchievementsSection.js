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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrame;
    let scrollAmount = scrollContainer.scrollLeft;
    const speed = 1;
    function animate() {
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

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
              style={{ width: '500px', height: '340px', maxWidth: '500px' }}
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
                  sizes="500px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
} 