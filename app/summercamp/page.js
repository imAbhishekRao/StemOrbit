"use client";

import { useState } from "react";
import Image from "next/image";
import WhyStemOrbitPillars from "@/components/WhyStemOrbitPillars";
import LittleExplorers from "@/components/LittleExplorers";
import ParentTestimonials from "@/components/ParentTestimonials";
import SummerCampOffersCta from "@/components/SummerCampOffersCta";

const MAGENTA = "#D4007A";
const ORANGE = "#F7941D";
const SKY = "#00A3E0";
const YELLOW = "#FFC400";
const PURPLE = "#6B2D8E";

const PAGE_MAX = "max-w-[90rem]";
const PAGE_X = "px-3 sm:px-4 md:px-5 lg:px-6";
const PAGE_CONTAINER = `mx-auto w-full ${PAGE_MAX} ${PAGE_X}`;

const THREE_COL = "grid gap-6 md:grid-cols-3";
const ABOUT_CARD =
  "flex min-h-[168px] flex-col items-start gap-4 rounded-3xl p-6 text-white shadow-lg sm:min-h-[180px] sm:flex-row sm:items-center sm:gap-5 sm:p-8";
function CampStructureBlock({ item }) {
  return (
    <div
      className="flex min-h-[140px] flex-col items-center justify-center px-6 py-10 text-center text-white md:min-h-[160px] lg:min-h-[180px]"
      style={{ backgroundColor: item.bg }}
    >
      <p className="font-fredoka text-lg font-bold uppercase tracking-wide sm:text-xl md:text-2xl">{item.label}:</p>
      {item.lines.map((line, i) => (
        <p
          key={line}
          className={`font-fredoka font-normal ${
            item.lines.length > 1 && i === 0
              ? "mt-2 text-2xl sm:text-3xl md:text-4xl"
              : item.lines.length > 1 && i === 1
                ? "mt-1 text-base sm:text-lg md:text-xl"
                : "mt-2 text-xl sm:text-2xl md:text-3xl"
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

const LEARN_ITEMS = [
  { label: "Robotics", src: "/Clip%20path%20group.png", alt: "Robotics" },
  { label: "Coding", src: "/software-development-icon%201.png", alt: "Coding" },
  { label: "AI", src: "/Vector.png", alt: "Artificial intelligence" },
  { label: "Drone", src: "/Vector%20(1).png", alt: "Drone" },
  { label: "3D Printing", src: "/Layer_1.png", alt: "3D printing" },
];

const BATCHES = [
  { label: "Batch 1", range: "1 June – 15 June" },
  { label: "Batch 2", range: "16 June – 30 June" },
  { label: "Batch 3", range: "1 July – 15 July" },
];

const ABOUT_CARDS = [
  {
    title: "Hands-on projects",
    text: "From idea to reality — kids don't just learn, they make it happen.",
    icon: "puzzle",
  },
  {
    title: "Real lab experience",
    text: "Every child gets hands-on access to the technology that is already shaping the world around them.",
    icon: "lab",
  },
  {
    title: "Future ready skills",
    text: "We prepare children not just for the next grade — but for the world that is waiting for them.",
    icon: "skills",
  },
];

const CAMP_STRUCTURE = [
  { label: "DAYS", lines: ["Monday - Friday"], bg: "#EAB308" },
  { label: "TIMING", lines: ["10AM–12PM"], bg: "#EF476F" },
  { label: "GRADE", lines: ["1 - 10", "(Age group: 6–17years)"], bg: "#0EA5E9" },
];

const FAQS = [
  {
    q: "What is the STEM course about?",
    color: MAGENTA,
    a: "Our Summer Camp is a hands-on STEM program where students explore robotics, coding, AI concepts, drones, and 3D printing through guided projects — building real skills while having fun.",
  },
  {
    q: "Who can join this course?",
    color: ORANGE,
    a: "The camp is open to students in Grades 1–10. Activities are grouped by grade band so every child learns at the right pace.",
  },
  {
    q: "What skills will students learn?",
    color: SKY,
    a: "Students develop critical thinking, creativity, collaboration, technical confidence, and an entrepreneurial mindset — along with practical skills in coding, robotics, and engineering.",
  },
  {
    q: "What technologies or tools are covered?",
    color: YELLOW,
    a: "Campers work with Scratch coding, robotics kits & sensors, circuits and electronics, drone basics, and 3D design — all in a safe, supervised lab environment.",
  },
];

const WA_ENROLL =
  "https://wa.me/917009594410?text=Hi!%20I%20want%20to%20enroll%20my%20child%20in%20STEMOrbit%20Summer%20Camp%202026.";

function AboutCardIcon({ type }) {
  const className = "h-9 w-9 sm:h-10 sm:w-10";
  if (type === "lab") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M5 9H3M5 15H3M21 9h-2M21 15h-2M7 8h10v8a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8z" />
      </svg>
    );
  }
  if (type === "skills") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
        <path d="M16.5 11.5l2 2M19 9l1 1" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2h-2V4h-2v2H8z" />
    </svg>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-8 text-center font-fredoka text-2xl font-bold uppercase tracking-wide text-gray-900 sm:mb-10 sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
}

function EnrollButton({ className = "" }) {
  return (
    <a
      href={WA_ENROLL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full px-10 py-3.5 text-center text-lg font-bold uppercase tracking-wide text-white shadow-lg transition hover:scale-105 hover:brightness-110 sm:text-xl ${className}`}
      style={{ backgroundColor: ORANGE }}
    >
      Enroll Now
    </a>
  );
}

export default function SummerCampPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen min-h-[min(92vh,720px)]">
        <Image
          src="/stemcamps (1).jpg"
          alt="STEMOrbit Summer Camp students"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className={`relative z-10 mx-auto flex min-h-[min(92vh,720px)] w-full ${PAGE_MAX} flex-col items-center justify-center py-16 text-center text-white ${PAGE_X}`}>
          <Image src="/logo.svg" alt="STEM Orbit" width={140} height={56} className="mb-6 h-12 w-auto sm:h-14" />
          <h1
            className="font-fredoka text-4xl font-extrabold uppercase leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: MAGENTA, textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            Summer Camp 2026
          </h1>
          <p className="mt-3 font-fredoka text-xl font-semibold sm:text-2xl md:text-3xl" style={{ color: SKY }}>
            Where Curiosity Meets Innovation
          </p>
          <p className="mt-6 max-w-2xl text-base font-semibold uppercase leading-relaxed sm:text-lg md:text-xl">
            <span className="text-white/90">Starting from: </span>
            <span style={{ color: MAGENTA }}>1st June – 15th July</span>
            <span className="mt-1 block text-white/95">(Available in 3 batches)</span>
          </p>
          <div className="mt-8">
            <EnrollButton />
          </div>
        </div>
      </section>

      {/* What kids will learn */}
      <section className="py-14 md:py-16">
        <div className={PAGE_CONTAINER}>
          <SectionTitle>What kids will learn</SectionTitle>
          <div className="rounded-2xl p-4 sm:p-6" style={{ backgroundColor: SKY }}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {LEARN_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center px-3 py-6 text-center"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={64}
                    height={64}
                    className="mb-3 h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
                  />
                  <span className="text-lg font-bold uppercase text-white sm:text-xl md:text-2xl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Batches */}
      <section className="bg-gray-50 py-14 md:py-16">
        <div className={PAGE_CONTAINER}>
          <SectionTitle>Available Batches</SectionTitle>
          <div className="grid gap-8 sm:grid-cols-3">
            {BATCHES.map((batch) => (
              <div key={batch.label} className="flex flex-col items-center text-center">
                <div
                  className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl text-4xl text-white shadow-md sm:h-24 sm:w-24 sm:text-5xl"
                  style={{ backgroundColor: MAGENTA }}
                  aria-hidden
                >
                  📅
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-gray-900 sm:text-3xl">{batch.label}</h3>
                <p className="mt-2 text-xl font-medium text-gray-700 sm:text-2xl md:text-3xl">{batch.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About camp */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-14">
        <div className={PAGE_CONTAINER}>
          <SectionTitle>About Camp</SectionTitle>
          <div className={THREE_COL}>
            {ABOUT_CARDS.map((card) => (
              <article key={card.title} className={ABOUT_CARD} style={{ backgroundColor: MAGENTA }}>
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <AboutCardIcon type={card.icon} />
                </div>
                <div className="text-left">
                  <h3 className="font-fredoka text-lg font-bold uppercase tracking-wide sm:text-xl md:text-2xl">{card.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-white/95 sm:text-xl md:text-2xl">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Camp structure — full-width banner strip */}
      <section className="bg-white pb-8 pt-8 sm:pb-10 sm:pt-10 md:pb-12 md:pt-12">
        <div className={PAGE_CONTAINER}>
          <SectionTitle>Camp Structure</SectionTitle>
        </div>
        <div className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen">
          <div className="grid w-full grid-cols-1 md:grid-cols-3">
            {CAMP_STRUCTURE.map((item) => (
              <CampStructureBlock key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <WhyStemOrbitPillars accentColor={MAGENTA} />

      <LittleExplorers borderColor={MAGENTA} />

      <ParentTestimonials />

      {/* FAQ */}
      <section className="py-14 md:py-16">
        <div className={PAGE_CONTAINER}>
          <SectionTitle>FAQs</SectionTitle>
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-xl shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold uppercase text-white sm:text-lg"
                    style={{ backgroundColor: faq.color }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl leading-none">{isOpen ? "▼" : "▶"}</span>
                  </button>
                  {isOpen && (
                    <div className="bg-pink-50 px-5 py-4 text-base leading-relaxed text-gray-700 sm:text-lg">{faq.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SummerCampOffersCta enrollColor={ORANGE} />

    </main>
  );
}
