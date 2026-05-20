"use client";

import Image from "next/image";
import WhyStemOrbitPillars from "@/components/WhyStemOrbitPillars";
import LittleExplorers from "@/components/LittleExplorers";
import ParentTestimonials from "@/components/ParentTestimonials";
import SummerCampFAQ from "@/components/SummerCampFAQ";
import SummerCampOffersCta from "@/components/SummerCampOffersCta";

const HERO_BANNER = "/Rectangle%2033.png";
const HERO_PINK = "#E91E8C";
const HERO_SKY = "#00A3E0";
const WA_ENROLL =
  "https://wa.me/917009594410?text=Hi!%20I%27d%20like%20to%20enroll%20in%20STEMOrbit%20Summer%20Camp%202026.%20Please%20share%20availability%20and%20fee%20options.";

const LEARN_ITEMS = [
  { label: "Robotics", src: "/Clip%20path%20group.png", alt: "Robotics" },
  { label: "Coding", src: "/software-development-icon%201.png", alt: "Coding" },
  { label: "AI", src: "/Vector.png", alt: "Artificial intelligence" },
  { label: "Drone", src: "/Vector%20(1).png", alt: "Drone" },
  { label: "3D Printing", src: "/Layer_1.png", alt: "3D printing" },
];

const AVAILABLE_BATCHES = [
  { label: "Batch 1", range: "1 June - 15 June" },
  { label: "Batch 2", range: "16 June - 30 June" },
  { label: "Batch 3", range: "1 July - 16 July" },
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

/** Wide, consistent content width with minimal viewport gutters */
const PAGE_MAX = "max-w-[90rem]";
const PAGE_X = "px-3 sm:px-4 md:px-5 lg:px-6";
const PAGE_CONTAINER = `mx-auto w-full ${PAGE_MAX} ${PAGE_X}`;

const SECTION_TITLE =
  "mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl";
const SECTION_PAD = "py-10 sm:py-12 md:py-14";
const THREE_COL = "grid gap-6 md:grid-cols-3";
const ABOUT_CARD =
  "flex min-h-[168px] flex-col items-start gap-4 rounded-3xl p-6 text-white shadow-lg sm:min-h-[180px] sm:flex-row sm:items-center sm:gap-5 sm:p-8";
function CampStructureBlock({ item }) {
  return (
    <div
      className="flex min-h-[140px] flex-col items-center justify-center px-6 py-10 text-center text-white md:min-h-[160px] lg:min-h-[180px]"
      style={{ backgroundColor: item.bg }}
    >
      <p className="text-lg font-bold uppercase tracking-wide sm:text-xl md:text-2xl">{item.label}:</p>
      {item.lines.map((line, i) => (
        <p
          key={line}
          className={
            item.lines.length > 1 && i === 0
              ? "mt-2 text-2xl font-normal sm:text-3xl md:text-4xl"
              : item.lines.length > 1 && i === 1
                ? "mt-1 text-base font-normal sm:text-lg md:text-xl"
                : "mt-2 text-xl font-normal sm:text-2xl md:text-3xl"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

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

export default function SummerCampPage() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero banner — full page width; height grows with copy so text is never clipped */}
      <section className="relative w-full px-0">
        <div className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen overflow-x-hidden">
          <div className="relative w-full">
            <div className="absolute inset-0 z-0">
              <Image
                src={HERO_BANNER}
                alt="Happy children at STEMOrbit Summer Camp 2026"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[52%_22%] sm:object-[62%_30%] md:object-[70%_center] lg:object-[72%_center] xl:object-right"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white from-[38%] via-white/92 via-[48%] to-transparent to-[68%] sm:from-[32%] sm:via-white/85 sm:to-[62%]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-sky-50/40 via-transparent to-transparent sm:from-sky-100/30"
              aria-hidden
            />

            <div
              className={`relative z-10 mx-auto flex w-full ${PAGE_MAX} flex-col justify-center py-10 sm:py-11 md:py-12 lg:py-14 ${PAGE_X} min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[400px]`}
            >
              <div className="w-full max-w-md text-left sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <h1 className="font-black uppercase leading-tight tracking-tight md:leading-[0.95]">
                  <span
                    className="block text-3xl [text-shadow:1.5px_1.5px_0_#000] sm:text-4xl sm:[text-shadow:2px_2px_0_#000] md:text-6xl md:[text-shadow:3px_3px_0_#000] lg:text-7xl xl:text-8xl"
                    style={{ color: HERO_PINK }}
                  >
                    Summer Camp
                  </span>
                  <span
                    className="mt-0.5 block text-3xl [text-shadow:1.5px_1.5px_0_#000] sm:text-4xl sm:[text-shadow:2px_2px_0_#000] md:text-6xl md:[text-shadow:3px_3px_0_#000] lg:text-7xl xl:text-8xl"
                    style={{ color: HERO_PINK }}
                  >
                    2026
                  </span>
                </h1>

                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-gray-900 sm:mt-4 sm:text-base md:mt-5 md:text-xl lg:text-2xl">
                  Turning curiosity into creation
                </p>

                <p className="mt-4 text-xs font-bold uppercase text-gray-900 sm:text-sm md:mt-5 md:text-base lg:text-lg">
                  Starting from :-
                </p>
                <p className="text-lg font-black uppercase text-gray-900 sm:text-xl md:text-3xl lg:text-4xl">
                  1st June – 16th July
                </p>
                <p
                  className="mt-1 text-sm font-bold uppercase sm:text-base md:text-lg lg:text-xl"
                  style={{ color: HERO_PINK }}
                >
                  (Available in 3 batches)
                </p>

                <a
                  href={WA_ENROLL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(233,30,140,0.4)] transition hover:scale-105 hover:from-rose-400 hover:to-pink-500 sm:mt-6 sm:px-10 sm:py-3.5 sm:text-base md:mt-8 md:px-12 md:py-4 md:text-lg lg:px-14 lg:py-4 lg:text-xl"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What kids will learn (Figma) */}
      <section className="bg-white pb-0 pt-8 sm:pt-10 md:pt-12">
        <div className={PAGE_CONTAINER}>
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl md:text-4xl">
            What kids will learn
          </h2>
        </div>
        <div
          className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen"
          style={{ backgroundColor: HERO_SKY }}
        >
          <div className={`mx-auto grid w-full grid-cols-2 ${PAGE_MAX} ${PAGE_X} sm:flex sm:flex-row sm:divide-x sm:divide-white/70`}>
            {LEARN_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:flex-1 sm:px-3 sm:py-10 md:py-12 ${
                  i === LEARN_ITEMS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                } ${
                  i % 2 !== 0 && i !== LEARN_ITEMS.length - 1 ? "border-l border-white/70 sm:border-l-0" : ""
                } ${
                  i < 4 ? "border-b border-white/70 sm:border-b-0" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="mb-3 h-14 w-14 object-contain sm:mb-4 sm:h-16 sm:w-16 md:h-20 md:w-20"
                />
                <span className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Batches (Figma) */}
      <section className="bg-white py-10 sm:py-12 md:py-14">
        <div className={PAGE_CONTAINER}>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">
            Available Batches
          </h2>
          <div className="flex flex-col divide-y divide-gray-900 sm:flex-row sm:divide-x sm:divide-y-0">
          {AVAILABLE_BATCHES.map((batch) => (
            <div
              key={batch.label}
              className="flex flex-1 items-center justify-center gap-4 px-4 py-8 sm:gap-5 sm:px-6 sm:py-6 md:py-8"
            >
              <svg
                className="h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <div className="text-left">
                <p className="text-base font-bold uppercase tracking-wider text-gray-900 sm:text-lg md:text-xl">
                  {batch.label.toUpperCase()}
                </p>
                <p className="mt-1 text-2xl font-bold sm:text-3xl md:text-4xl" style={{ color: HERO_PINK }}>
                  {batch.range}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* About Camp (Figma) */}
      <section className={`bg-gray-50 ${SECTION_PAD}`}>
        <div className={PAGE_CONTAINER}>
          <h2 className={SECTION_TITLE}>About Camp</h2>
          <div className="-mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-6 sm:-mx-4 sm:gap-5 sm:px-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {ABOUT_CARDS.map((card) => (
              <article key={card.title} className={`w-[85vw] flex-shrink-0 snap-center sm:w-[60vw] md:w-auto ${ABOUT_CARD}`} style={{ backgroundColor: HERO_PINK }}>
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <AboutCardIcon type={card.icon} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold uppercase tracking-wide sm:text-xl md:text-2xl">{card.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-white/95 sm:text-xl md:text-2xl">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Structure — full-width banner strip */}
      <section className="bg-white pb-8 pt-8 sm:pb-10 sm:pt-10 md:pb-12 md:pt-12">
        <div className={PAGE_CONTAINER}>
          <h2 className={SECTION_TITLE}>Camp Structure</h2>
        </div>
        <div className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen">
          <div className="grid w-full grid-cols-1 md:grid-cols-3">
            {CAMP_STRUCTURE.map((item) => (
              <CampStructureBlock key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <WhyStemOrbitPillars accentColor={HERO_PINK} />

      <LittleExplorers
        borderColor={HERO_PINK}
        bannerGradient="linear-gradient(90deg, #00A3E0 0%, #6B2D8E 50%, #E91E8C 100%)"
      />

      <ParentTestimonials />

      <SummerCampFAQ />

      <SummerCampOffersCta enrollColor="#EF476F" />

    </div>
  );
}
