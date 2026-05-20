"use client";

import { useState } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "NEERAJ JHULKA",
    quote:
      "My child was excited to attend every day and learned so many creative and science-based activities in a fun way. We could really see an improvement in confidence and skills. Thank you to the team at STEMORBIT for such a wonderful summer camp.",
    attribution: "— Parent of Mounish Jhulka, Grade - 4",
    bg: "#D4A017",
    photo: "/neeraj.png",
  },
  {
    name: "GEETIKA GUPTA",
    quote:
      "My son used to spend hours just watching videos, but after joining the STEM course, he started building his own robotics projects at home. The confidence and curiosity we've seen in him is incredible.",
    attribution: "— Parent of Grade 6 Student",
    bg: "#00A3E0",
    photo: null,
  },
  {
    name: "PRIYA SHARMA",
    quote:
      "The robotics camp was amazing! My child built their first robot and learned so much about programming. The instructors were really helpful and patient with every student.",
    attribution: "— Parent of STEM Camper, Grade 5",
    bg: "#D4007A",
    photo: null,
  },
];

const PAGE_WRAP = "mx-auto w-full max-w-[90rem] px-3 sm:px-4 md:px-5 lg:px-6";

function ParentAvatar({ photo }) {
  const box = (
    <div
      className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-2xl border-[4px] border-white bg-white/25 sm:h-20 sm:w-20"
      style={!photo ? { backgroundColor: "rgba(255,255,255,0.2)" } : undefined}
    >
      {photo ? (
        <Image src={photo} alt="" fill className="object-cover" sizes="80px" />
      ) : null}
    </div>
  );
  return box;
}

function TestimonialCard({ item, elevated }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[1.75rem] px-5 py-6 text-white shadow-lg transition-transform duration-300 sm:rounded-[2rem] sm:px-6 sm:py-7 md:px-7 md:py-8 ${
        elevated ? "md:-translate-y-6 lg:-translate-y-8" : ""
      }`}
      style={{ backgroundColor: item.bg }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <ParentAvatar photo={item.photo} />
        <h3 className="text-left text-base font-bold uppercase leading-tight tracking-wide sm:text-lg md:text-xl">
          {item.name}
        </h3>
      </div>

      <div className="relative mt-5 flex flex-1 items-start gap-2 sm:mt-6">
        <span
          className="pointer-events-none font-serif text-4xl leading-none text-white sm:text-5xl"
          aria-hidden
        >
          &ldquo;
        </span>
        <p className="relative z-10 text-left text-base leading-relaxed text-white/95 sm:text-lg">
          {item.quote}
        </p>
      </div>

      <p className="mt-5 text-left text-sm font-medium text-white/90 sm:mt-6 sm:text-base">{item.attribution}</p>
    </article>
  );
}

export default function ParentTestimonials() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className={PAGE_WRAP}>
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:mb-12 sm:text-4xl md:mb-14 md:text-[2.75rem] md:leading-tight">
          Parent&apos;s Testimonials
        </h2>

        {/* Desktop: three cards, middle elevated */}
        <div className="mx-auto hidden max-w-6xl md:grid md:grid-cols-3 md:items-end md:gap-5 lg:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={item.name} item={item} elevated={index === 1} />
          ))}
        </div>

        {/* Mobile / tablet: single card + dots */}
        <div className="md:hidden">
          <TestimonialCard item={TESTIMONIALS[active]} elevated={false} />
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

        {/* Dots below center card on desktop (decorative, matches mock) */}
        <div className="mt-10 hidden justify-center gap-2.5 md:flex" aria-hidden>
          {TESTIMONIALS.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${index === 1 ? "bg-gray-700" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
