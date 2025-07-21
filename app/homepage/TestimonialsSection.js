import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: `“STEM Orbit's robotics classes sparked my son's curiosity and confidence. The hands-on projects and friendly mentors make learning fun and meaningful!”`,
    img: "/about-img.webp",
    badges: [
      {
        icon: "/graduation.svg",
        text: "Parent of Grade 6 Student"
      },
      {
        icon: "/project.svg",
        text: "Robotics Club Member"
      }
    ],
    color: "#60a5fa"
  },
  {
    name: "Aarav Patel",
    text: `“The coding camps at STEM Orbit are the highlight of our summer! My daughter built her first app and made new friends. Highly recommended!”`,
    img: "/WhatsApp Image 2025-07-17 at 10.51.25 (1).jpeg",
    badges: [
      {
        icon: "/graduation.svg",
        text: "Attended Summer Coding Camp"
      },
      {
        icon: "/project.svg",
        text: "Built a Weather App"
      }
    ],
    color: "#f472b6"
  },
  {
    name: "Simran Kaur",
    text: `“We love the playful approach at STEM Orbit. My child is excited for every session and has grown so much in teamwork and creativity!”`,
    img: "/yuvin.png",
    badges: [
      {
        icon: "/graduation.svg",
        text: "Parent of Grade 4 Student"
      },
      {
        icon: "/project.svg",
        text: "STEM Orbit Explorer"
      }
    ],
    color: "#fcb703"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-16 bg-[#fafafa] flex flex-col items-center justify-center">
      {/* Heading with strawberry icon and playful text */}
      <div className="flex flex-col items-center mb-8">
        <span className="text-pink-500 font-bold text-lg font-bubblegum mb-2">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-center font-fredoka text-sky-500">Voices from Our Partner Schools</h2>
      </div>
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Card */}
        <div className="relative rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center px-8 md:pl-40 py-12 w-full min-h-[340px] transition-colors duration-500" style={{ background: t.color }}>
          {/* Overlapping circular image */}
          <div className="absolute -top-20 left-1/2 md:left-12 -translate-x-1/2 md:translate-x-0 z-20">
            <div className="w-40 h-40 rounded-full border-8 border-white overflow-hidden shadow-lg bg-white">
              <Image src={t.img} alt={t.name} width={160} height={160} className="object-cover w-full h-full" />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center items-start mt-24 md:mt-0 md:ml-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white text-5xl leading-none">“</span>
              <span className="text-white text-3xl md:text-4xl font-extrabold font-fredoka">{t.name}</span>
            </div>
            <p className="text-white text-lg font-quicksand mb-8 max-w-3xl">
              {t.text}
            </p>
            <div className="flex flex-wrap gap-6 mt-auto">
              {t.badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/90 text-black font-bold rounded-xl px-4 py-2 text-base shadow">
                  <img src={badge.icon} alt="badge" className="w-6 h-6" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation buttons */}
          <button onClick={prev} className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-white text-pink-500 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 active:scale-90 transition-all border-2 border-pink-200 z-20">
            <img src="/arrow.svg" alt="Previous" className="w-7 h-7" />
          </button>
          <button onClick={next} className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-white text-sky-500 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-sky-100 active:scale-90 transition-all border-2 border-sky-200 z-20">
            <img src="/arrow.svg" alt="Next" className="w-7 h-7 rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
} 