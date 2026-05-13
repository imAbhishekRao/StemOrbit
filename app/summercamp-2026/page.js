"use client";

import Link from "next/link";
import { handleBookCallClick } from "../../lib/calendly";

const SUMMER_BLOCKS = [
  {
    title: "What they'll explore",
    icon: "🚀",
    description: "Robotics, coding, engineering, and STEM projects — balanced for curiosity and confidence.",
    bullets: ["Robotics", "Coding", "Engineering", "STEM Projects"],
    color: "from-pink-300 to-rose-400",
  },
  {
    title: "Tech they'll use",
    icon: "💻",
    description: "Friendly tools that make abstract ideas tangible.",
    bullets: [
      "Coding with Scratch",
      "Robotics kits & sensors",
      "Circuits, LEDs & simple electronics",
    ],
    color: "from-blue-300 to-indigo-400",
  },
  {
    title: "Skills they'll build",
    icon: "🧠",
    description: "Habits that carry beyond summer.",
    bullets: [
      "Problem-solving",
      "Logical thinking",
      "Creativity & innovation",
      "Confidence with technology",
    ],
    color: "from-green-300 to-emerald-400",
  },
  {
    title: "Why STEMOrbit?",
    icon: "✨",
    description: "Learning that feels like play — with structure.",
    bullets: ["Hands-on projects", "Real-world learning", "Fun + future-ready skills"],
    color: "from-purple-300 to-violet-400",
  },
];

const BATCHES = [
  {
    label: "Batch 1",
    range: "1st June – 15th June",
    color: "from-cyan-300 to-blue-400",
  },
  {
    label: "Batch 2",
    range: "16th June – 30th June",
    color: "from-violet-300 to-purple-400",
  },
  {
    label: "Batch 3",
    range: "1st July – 15th July",
    color: "from-amber-300 to-orange-400",
  },
];

const FEES = [
  { label: "1 week program", price: "₹1800" },
  { label: "15 days program", price: "₹3500" },
  { label: "1 month program", price: "₹5999" },
];

const ADDRESS =
  "SCO-04, 1st Floor, Mehna Singh Complex, Sunny Enclave Kharar, Sec-125.";

const PHONE_DISPLAY = "+91 70095 94410";
const PHONE_TEL = "+917009594410";

const GRADE_GROUPS_INTRO =
  "Students are placed in a group with others in the same grade band (for example early primary, upper primary, or middle school). Each group follows its own track — the projects, tools, and challenges are chosen so they stay fun, safe, and just the right level of difficulty.";

const GRADE_GROUP_CARDS = [
  {
    icon: "👥",
    text: "One cohort per grade band so instructors can give steady attention.",
    color: "from-cyan-300 to-blue-400",
  },
  {
    icon: "🧩",
    text: "Different groups tackle different activity sets — not a single one-size-fits-all week.",
    color: "from-pink-300 to-rose-400",
  },
  {
    icon: "🎯",
    text: "Same camp spirit across batches; you pick the dates that suit your family.",
    color: "from-emerald-300 to-teal-400",
  },
];

const groupCardClass =
  "flex flex-col items-center rounded-2xl border-2 border-transparent p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-emerald-200/60 hover:shadow-2xl sm:p-8";

export default function SummerCamp2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — same full-bleed pattern as whats-stem-lab */}
      <section className="relative px-0 py-0">
        <div className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen">
          <div className="relative overflow-hidden">
            <picture>
              <source media="(max-width: 767px)" srcSet="/stemcampbannerhoemmobo.png" />
              <img
                src="/stemcampbannerrhoem.png"
                alt="STEMOrbit Summer Camp"
                className="block h-[52vw] w-full max-h-[min(85vh,560px)] object-cover object-center sm:h-auto sm:max-h-none"
                loading="eager"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-6 top-6 h-6 w-6 animate-ping rounded-full bg-pink-400/60 sm:h-8 sm:w-8" />
              <div
                className="absolute right-10 top-8 h-4 w-4 animate-bounce rounded-full bg-blue-400/60 sm:h-6 sm:w-6"
                style={{ animationDelay: "0.4s" }}
              />
              <div
                className="absolute bottom-8 left-12 h-5 w-5 animate-pulse rounded-full bg-purple-400/60 sm:h-7 sm:w-7"
                style={{ animationDelay: "0.8s" }}
              />
              <div
                className="absolute bottom-6 right-8 h-8 w-8 animate-ping rounded-full bg-yellow-400/60 sm:h-10 sm:w-10"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute left-1/3 top-1/2 h-3 w-3 animate-bounce rounded-full bg-cyan-400/60 sm:h-4 sm:w-4"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-gray-100 bg-white px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-fredoka text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            STEM <span className="text-blue-600">Summer</span> Camp 2026
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            Build · Code · Create · Innovate — morning sessions for{" "}
            <span className="font-semibold text-gray-900">grades 1–10</span>. Three batches across June and July;
            each grade band learns in its own small group with activities matched to their level.
          </p>
        </div>
      </section>

      {/* Grade groups — intro + cards (matches batch card style) */}
      <section className="border-y border-gray-100 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl lg:text-4xl">
            Groups by <span className="text-blue-600">grade</span>, activities by{" "}
            <span className="text-pink-600">group</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            <article
              className={`${groupCardClass} bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 lg:col-span-3`}
            >
              <p className="text-center text-sm leading-relaxed text-gray-800 sm:text-base lg:max-w-4xl lg:mx-auto">
                {GRADE_GROUPS_INTRO}
              </p>
            </article>
            {GRADE_GROUP_CARDS.map((card) => (
              <article
                key={card.text}
                className={`${groupCardClass} bg-gradient-to-br ${card.color}`}
              >
                <div className="mb-3 text-4xl sm:text-5xl" aria-hidden>
                  {card.icon}
                </div>
                <p className="text-sm leading-relaxed text-gray-800 sm:text-base">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Four blocks — same card language as STEM components on whats-stem-lab */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl lg:mb-12 lg:text-4xl xl:text-5xl">
            What&apos;s in{" "}
            <span className="bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 bg-clip-text text-transparent">
              Summer Camp
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {SUMMER_BLOCKS.map((block, idx) => (
              <div
                key={block.title}
                className={`flex flex-col items-center rounded-2xl border-2 border-transparent bg-gradient-to-br ${block.color} p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-pink-200/60 hover:shadow-2xl sm:p-6`}
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-gradient-to-r from-white/70 to-white/40 text-2xl font-bold text-gray-900 shadow-lg backdrop-blur-sm sm:mb-4 sm:h-20 sm:w-20 sm:text-3xl">
                  {String(idx + 1)}
                </div>
                <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">{block.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">{block.title}</h3>
                <p className="mb-3 text-xs leading-relaxed text-gray-700 sm:mb-4 sm:text-sm">
                  {block.description}
                </p>
                <div className="w-full">
                  <h4 className="mb-2 text-left text-sm font-semibold text-gray-800">Highlights:</h4>
                  <ul className="space-y-1 text-left text-xs text-gray-700">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-center">
                        <span className="mr-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who & when — benefits-style section */}
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl lg:mb-12 lg:text-4xl xl:text-5xl">
            Batches &{" "}
            <span className="bg-gradient-to-r from-green-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
              who it&apos;s for
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600 sm:mb-10 sm:text-base">
            Choose any of the three windows below. When you enrol, tell us your child&apos;s grade so we can place
            them in the right group and activity track.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            <div className={`${groupCardClass} bg-gradient-to-br from-emerald-300 to-teal-400`}>
              <div className="mb-3 text-4xl sm:text-5xl">🎯</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">Open for</h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                <span className="font-semibold text-gray-900">Grades 1 – 10</span> — age-friendly pacing and
                support.
              </p>
            </div>
            {BATCHES.map((batch) => (
              <div
                key={batch.label}
                className={`${groupCardClass} bg-gradient-to-br ${batch.color}`}
              >
                <div className="mb-3 text-4xl sm:text-5xl">📅</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">{batch.label}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-800 sm:text-base">{batch.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees + timings — lab-features-style (indigo / purple band) */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl lg:mb-12 lg:text-4xl xl:text-5xl">
            Fees &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 bg-clip-text text-transparent">
              timings
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="flex items-start space-x-4 rounded-2xl border-2 border-transparent bg-gradient-to-br from-pink-300 to-rose-400 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-indigo-200/60 hover:shadow-2xl sm:space-x-6 sm:p-8">
              <div className="flex-shrink-0 text-4xl sm:text-5xl">💰</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">Fee structure</h3>
                <ul className="space-y-3 text-sm text-gray-800 sm:text-base">
                  {FEES.map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-4 border-b border-white/30 pb-2 last:border-0">
                      <span className="capitalize">{row.label}</span>
                      <span className="font-fredoka text-lg font-bold text-gray-900">{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-300 to-cyan-400 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-indigo-200/60 hover:shadow-2xl sm:space-x-6 sm:p-8">
              <div className="flex-shrink-0 text-4xl sm:text-5xl">⏰</div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">Daily timings</h3>
                <p className="font-fredoka text-2xl font-bold text-gray-900 sm:text-3xl">10:00 AM – 12:00 PM</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  Same window each camp day — easy for families to plan around.
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-800">Limited seats · small groups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — matches whats-stem-lab bottom strip */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 px-4 py-16 md:px-0">
        <div className="absolute left-0 top-0 h-32 w-32 -translate-x-16 -translate-y-16 rounded-full bg-white opacity-10" />
        <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-20 translate-y-20 rounded-full bg-white opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">Ready to enrol?</h2>
          <p className="mb-8 text-lg text-pink-100">
            Tell us your child&apos;s grade and preferred batch (June or July) — we&apos;ll help you pick the right
            option.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleBookCallClick}
              className="inline-block w-full transform rounded-xl bg-white px-10 py-4 text-center text-lg font-semibold text-purple-700 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-pink-100 hover:shadow-2xl sm:w-auto"
            >
              Book a call
            </button>
            <a
              href={`https://wa.me/917009594410?text=${encodeURIComponent(
                "Hi! I'd like to enroll in STEMOrbit Summer Camp 2026. Please share availability and fee options."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full transform rounded-xl border-2 border-white px-10 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-700 sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-pink-100">
            <Link
              href="/summercamp"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-white/90"
            >
              Explore more camp formats →
            </Link>
          </p>
        </div>
      </section>

      {/* Footer — light, simple */}
      <footer className="border-t border-gray-200 bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-10 text-center sm:px-6">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">{ADDRESS}</p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-3 inline-block text-base font-semibold text-blue-600 hover:underline"
        >
          {PHONE_DISPLAY}
        </a>
        <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} STEMOrbit</p>
      </footer>
    </div>
  );
}
