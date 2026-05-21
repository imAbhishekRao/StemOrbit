"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "NEERAJ JHULKA",
    quote:
      "My child was excited to attend every day and learned so many creative and science-based activities in a fun way. We could really see an improvement in confidence and skills. Thank you to the team at STEMORBIT for such a wonderful summer camp.",
    bg: "#D4A017",
    img: "/testimonial1.png",
    subtext: "— Parent of Mounish Jhulka,",
    grade: "Grade - 4"
  },
  {
    name: "MS. SUDHA",
    quote:
      "My son has learned circuits, coding, 3D designing, 3D printing and robotics at STEMOrbit. What impresses me most is how effortlessly complex topics are taught here. Grateful to the founders and educators for their dedication.",
    bg: "#00A3E0",
    img: "/Testimonial2.png",
    subtext: "— Parent of Tejas,",
    grade: "Grade - 6"
  },
  {
    name: "RAJVEER SHARMA",
    quote:
      "The robotics camp was amazing! My child built their first robot and learned so much about programming. The instructors were really helpful and patient with every student.",
    bg: "#D4007A",
    img: "/testimonial3sc.png",
    subtext: "— Father of Ansh Sharma,",
    grade: "Grade - 2"
  },
];

const PAGE_WRAP = "mx-auto w-full max-w-[100rem] px-3 sm:px-4 md:px-6 lg:px-8";

function TestimonialCard({ item, elevated }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[2rem] px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-8 text-white shadow-lg transition-transform duration-300 sm:rounded-[2.5rem] ${
        elevated ? "md:-translate-y-6 lg:-translate-y-8" : ""
      }`}
      style={{ backgroundColor: item.bg }}
    >
      {/* Parent photo in top-left, shown as-is */}
      <div className="flex items-center gap-4 sm:gap-6 -mt-5 -ml-8 sm:-mt-6 sm:-ml-10 md:-mt-8 md:-ml-12 mb-2">
        <div className="relative h-28 w-28 md:h-[8.5rem] md:w-[8.5rem] flex-shrink-0">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-left text-lg font-bold uppercase leading-tight tracking-wide sm:text-xl md:text-[34px] pr-4 self-center">
          {item.name}
        </h3>
      </div>

      {/* Quote text section */}
      <div className="relative mt-2 flex flex-1 flex-col items-start sm:mt-3">
        <span
          className="pointer-events-none font-serif text-5xl leading-none text-white sm:text-6xl"
          aria-hidden
        >
          &ldquo;
        </span>
        <p className="relative z-10 text-left text-base sm:text-xl md:text-[28px] font-medium leading-relaxed text-white/95">
          {item.quote}
        </p>
      </div>

      {/* Subtext info */}
      <div className="mt-4 text-left text-sm sm:text-lg md:text-2xl font-normal leading-relaxed text-white/90">
        <p>{item.subtext}</p>
        <p>{item.grade}</p>
      </div>
    </article>
  );
}

export default function ParentTestimonials() {
  const [active, setActive] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [active]);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        setActive((prev) => (prev + 1) % TESTIMONIALS.length);
      } else {
        setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      }
    }
  };

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className={PAGE_WRAP}>
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:mb-12 sm:text-4xl md:mb-14 md:text-[2.75rem] md:leading-tight">
          Parents Testimonials
        </h2>

        {/* Desktop: three cards, one elevated */}
        <div className="mx-auto hidden max-w-[95rem] md:grid md:grid-cols-3 md:items-end md:gap-5 lg:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div key={item.name} className="h-full cursor-pointer transition-transform" onClick={() => setActive(index)}>
              <TestimonialCard item={item} elevated={active === index} />
            </div>
          ))}
        </div>

        {/* Mobile / tablet: single card + dots with swipe support */}
        <div 
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="touch-pan-y cursor-grab active:cursor-grabbing">
            <TestimonialCard item={TESTIMONIALS[active]} elevated={false} />
          </div>
          <div className="mt-8 flex justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setActive(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  active === index ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dots below center card on desktop */}
        <div className="mt-10 hidden justify-center gap-2.5 md:flex" aria-hidden>
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                active === index ? "bg-gray-700" : "bg-gray-300"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
