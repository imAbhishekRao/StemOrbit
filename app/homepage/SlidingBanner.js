import { useState } from "react";

const slides = [
  {
    text: "Welcome to STEMOrbit! Empowering Young Minds.",
    bg: "bg-gradient-to-r from-sky-400 to-pink-300",
  },
  {
    text: "Explore Robotics, Coding, AI, and More!",
    bg: "bg-gradient-to-r from-yellow-300 via-pink-200 to-blue-200",
  },
  {
    text: "Join 10000+ Students Across 100+ Schools!",
    bg: "bg-gradient-to-r from-pink-200 via-yellow-200 to-sky-200",
  },
];

export default function SlidingBanner() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 relative overflow-hidden">
      <div className={`w-full max-w-3xl mx-auto h-16 flex items-center justify-center rounded-2xl shadow-md transition-all duration-500 ${slides[current].bg}`}
        style={{ minHeight: 64 }}>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-pink-500 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-pink-100 active:scale-90 transition-all border-2 border-pink-200"
          aria-label="Previous slide"
        >
          <span className="text-2xl font-bold">&#8592;</span>
        </button>
        <div className="text-lg md:text-2xl font-fredoka font-bold text-white text-center px-8 select-none">
          {slides[current].text}
        </div>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-sky-500 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-sky-100 active:scale-90 transition-all border-2 border-sky-200"
          aria-label="Next slide"
        >
          <span className="text-2xl font-bold">&#8594;</span>
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${i === current ? 'bg-pink-400 border-pink-500 scale-125' : 'bg-white border-pink-200'} shadow`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 