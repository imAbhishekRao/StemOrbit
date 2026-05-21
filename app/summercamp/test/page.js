"use client";

import Image from "next/image";
import WhyStemOrbitPillars from "@/components/WhyStemOrbitPillars";
import LittleExplorers from "@/components/LittleExplorers";
import ParentTestimonials from "@/components/ParentTestimonials";
import SummerCampFAQ from "@/components/SummerCampFAQ";
import SummerCampOffersCta, { WA_ENROLL } from "@/components/SummerCampOffersCta";

const SUMMERCAMP_HERO_BANNER = "/Group%20105.png";
/** Square mobile hero — swap file in `public/` to try other assets */
const SUMMERCAMP_HERO_BANNER_MOBILE = "/summercamp-test-banner-mobile.png";
const HERO_PINK = "#E91E8C";
const HERO_SKY = "#00A3E0";

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
    image: "/aboutcamps1.png",
    imageClass: "translate-x-1",
  },
  {
    title: "Real lab experience",
    text: "Every child gets hands-on access to the technology that is already shaping the world around them.",
    image: "/aboutcamps2.png",
  },
  {
    title: "Future ready skills",
    text: "We prepare children not just for the next grade — but for the world that is waiting for them.",
    image: "/aboutcamps3.png",
  },
];

const CAMP_STRUCTURE = [
  { label: "DAYS", lines: ["Monday - Friday"], bg: "#EAB308" },
  { label: "TIMING", lines: ["10AM–12PM"], bg: "#EF476F" },
  { label: "GRADE", lines: ["1 - 10", "(Age group: 6–17years)"], bg: "#0EA5E9" },
];

/** Wide, consistent content width with minimal viewport gutters */
const PAGE_MAX = "max-w-[100rem]";
const PAGE_X = "px-3 sm:px-4 md:px-6 lg:px-8";
const PAGE_CONTAINER = `mx-auto w-full ${PAGE_MAX} ${PAGE_X}`;

const SECTION_TITLE =
  "mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl";
const SECTION_PAD = "py-10 sm:py-12 md:py-14";
const ABOUT_CARD =
  "flex min-h-[200px] flex-col items-start justify-center gap-5 p-6 text-white shadow-lg sm:min-h-[240px] sm:gap-6 sm:p-8 md:min-h-[280px] md:p-10";
function CampStructureBlock({ item }) {
  return (
    <div
      className="flex min-h-[140px] flex-col items-center justify-center px-6 py-10 text-center text-white md:min-h-[160px] lg:min-h-[180px]"
      style={{ backgroundColor: item.bg }}
    >
      <p className="text-2xl font-bold uppercase tracking-wide sm:text-3xl md:text-4xl">{item.label}:</p>
      {item.lines.map((line, i) => (
        <p
          key={line}
          className={
            item.lines.length > 1 && i === 0
              ? "mt-2 text-3xl font-normal sm:text-4xl md:text-5xl"
              : item.lines.length > 1 && i === 1
                ? "mt-1 text-lg font-normal sm:text-xl md:text-2xl"
                : "mt-2 text-2xl font-normal sm:text-3xl md:text-4xl"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default function SummerCampTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — desktop + mobile banners (test); both open WhatsApp enroll */}
      <section className="relative w-full overflow-hidden bg-white">
        <h1 className="sr-only">STEM Orbit Summer Camp 2026 — 1 June through 16 July, three batches.</h1>
        <a
          href={WA_ENROLL}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer outline-none transition-opacity hover:opacity-[0.98] focus-visible:opacity-[0.98] focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Enroll in STEM Orbit Summer Camp 2026 — message us on WhatsApp"
        >
          <Image
            src={SUMMERCAMP_HERO_BANNER}
            alt=""
            width={2017}
            height={789}
            priority
            sizes="(min-width: 768px) 100vw, 0px"
            className="pointer-events-none hidden h-auto w-full select-none md:block"
          />
          <Image
            src={SUMMERCAMP_HERO_BANNER_MOBILE}
            alt=""
            width={1024}
            height={1024}
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="pointer-events-none block h-auto w-full select-none md:hidden"
          />
        </a>
      </section>

      {/* What kids will learn (Figma) */}
      <section className="bg-white pb-0 pt-8 sm:pt-10 md:pt-12">
        <div className={PAGE_CONTAINER}>
          <h2 className="mb-6 text-center text-lg font-bold text-gray-900 sm:mb-8 sm:text-3xl md:text-4xl">
            What Kids Will Learn
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
                className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:flex-1 sm:px-3 sm:py-10 md:py-12 ${i === LEARN_ITEMS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  } ${i % 2 !== 0 && i !== LEARN_ITEMS.length - 1 ? "border-l border-white/70 sm:border-l-0" : ""
                  } ${i < 4 ? "border-b border-white/70 sm:border-b-0" : ""
                  }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="mb-3 h-14 w-14 object-contain sm:mb-4 sm:h-16 sm:w-16 md:h-20 md:w-20"
                />
                <span className="font-semibold text-white text-2xl sm:text-3xl md:text-[40px] md:leading-[47px]">{item.label}</span>
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
          <div className="flex flex-col divide-y divide-gray-900 lg:flex-row lg:divide-x lg:divide-y-0">
            {AVAILABLE_BATCHES.map((batch) => (
              <div
                key={batch.label}
                className="flex flex-1 items-center justify-start pl-10 xs:pl-16 sm:pl-24 md:pl-4 md:justify-center gap-4 px-4 py-8 sm:gap-5 sm:px-6 sm:py-6 md:py-8"
              >
                <svg
                  className="h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="M6 14h2 M11 14h2 M16 14h2" />
                  <path d="M6 18h2 M11 18h2 M16 18h2" />
                </svg>
                <div className="text-left">
                <p className="font-medium uppercase text-gray-900 text-xl sm:text-2xl md:text-[36px] md:leading-[42px] whitespace-nowrap">
                  {batch.label}
                </p>
                <p className="mt-1 font-black text-2xl sm:text-3xl md:text-[45px] md:leading-[42px] whitespace-nowrap" style={{ color: HERO_PINK }}>
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
              <article key={card.title} className={`w-[85vw] flex-shrink-0 snap-center sm:w-[60vw] md:w-auto ${ABOUT_CARD}`} style={{ backgroundColor: HERO_PINK, borderRadius: '40px' }}>
                <div className="flex w-full items-center gap-4 sm:gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center p-3 sm:h-[5.5rem] sm:w-[5.5rem] md:h-[6.5rem] md:w-[6.5rem]" style={{ border: '2px solid white', borderRadius: '50%' }}>
                    <Image src={card.image} alt={card.title} width={72} height={72} className={`h-full w-full object-contain ${card.imageClass || ''}`} />
                  </div>
                  <h3 className="font-bold uppercase text-left text-white text-2xl sm:text-3xl md:text-[48px] md:leading-[1.05]">{card.title}</h3>
                </div>
                <p className="text-left text-lg font-semibold text-white sm:text-xl md:text-[26px] md:leading-[1.4]">{card.text}</p>
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
        bannerGradient="linear-gradient(90deg, #26ABE2 0%, #716ABA 100%)"
      />

      <ParentTestimonials />

      <SummerCampFAQ />

      <SummerCampOffersCta enrollColor="#EF476F" />

    </div>
  );
}
