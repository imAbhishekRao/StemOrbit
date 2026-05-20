import Image from "next/image";

const PAGE_WRAP = "mx-auto w-full max-w-[90rem] px-3 sm:px-4 md:px-5 lg:px-6";

const SOCIAL = [
  { href: "https://instagram.com/stemorbit", icon: "/instagram.svg", alt: "Instagram" },
  { href: "https://www.facebook.com/StemOrbit0", icon: "/facebook.svg", alt: "Facebook" },
  { href: "https://twitter.com", icon: "/twitter.svg", alt: "Twitter" },
  { href: "https://linkedin.com/company/stemorbit", icon: "/linkedin.svg", alt: "LinkedIn" },
];

const PERKS = [
  "Every student will receive a Certificate of Participation",
  "Students enrolling in the 1-Month Summer Camp will receive a STEMOrbit Credit Coupon worth ₹500, valid until August 2026",
];

const WA_ENROLL =
  "https://wa.me/917009594410?text=Hi!%20I%20want%20to%20enroll%20my%20child%20in%20STEMOrbit%20Summer%20Camp%202026.";

const MISSION =
  "Empowering young minds through innovative STEM education and hands-on learning experiences. We inspire the next generation of scientists, engineers, and innovators by making complex concepts accessible and exciting through interactive projects and real-world applications.";

/**
 * Summer camp closing block: offers strip, perks list, gradient CTA card.
 */
export default function SummerCampOffersCta({
  enrollColor = "#EF476F",
  offersGradient = "linear-gradient(90deg, #7EC8E8 0%, #B8A9E8 50%, #C9B8F0 100%)",
  cardGradient = "linear-gradient(105deg, #00A3E0 0%, #5B6FD6 45%, #6B2D8E 100%)",
}) {
  return (
    <section className="relative z-20 bg-white pt-0">
      {/* Special offers banner */}
      <div
        className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen px-4 py-5 text-center text-white sm:py-6"
        style={{ background: offersGradient }}
      >
        <p className="text-sm font-bold sm:text-base">Special Summer Camp Offers</p>
        <p className="mt-1 text-base font-bold leading-snug sm:text-lg md:text-xl">
          Get 10% OFF for the first 10 students who enrol | Enjoy a flat ₹500 sibling discount
        </p>
      </div>

      {/* Perks */}
      <div className={`${PAGE_WRAP} py-6 sm:py-8`}>
        <ul className="mx-auto max-w-4xl space-y-3 text-center text-base font-bold text-gray-900 sm:text-lg">
          {PERKS.map((perk) => (
            <li key={perk} className="leading-relaxed">
              &bull; {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Main CTA card */}
      <div className="relative mt-2 w-full">
        <div className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen">
          <article
            className="mx-auto w-full overflow-hidden rounded-t-[1.75rem] border-t-4 border-gray-300 px-5 py-10 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.15)] sm:rounded-t-[2.5rem] sm:px-8 sm:py-12 md:px-10 md:py-16"
            style={{ background: cardGradient }}
          >
            <div className={PAGE_WRAP}>
              <p className="mx-auto max-w-4xl text-center text-sm font-medium leading-relaxed text-white/95 sm:text-base md:text-lg">
                {MISSION}
              </p>
              <h2 className="mt-6 text-center text-3xl font-bold sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Secure Your Child&apos;s Spot Today
              </h2>

          <div className="mt-10 flex flex-col items-center gap-8 sm:mt-12 md:mt-14 md:flex-row md:items-end md:justify-between">
            <div className="flex shrink-0 justify-center md:justify-start">
              <Image
                src="/With%20Strock%20(2).png"
                alt="STEM Orbit"
                width={160}
                height={64}
                className="h-20 w-auto sm:h-24 md:h-28 object-contain"
              />
            </div>

            <a
              href={WA_ENROLL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-12 py-3 text-center text-xl font-bold text-white shadow-lg transition hover:scale-105 hover:brightness-110 sm:px-16 sm:py-4 sm:text-2xl"
              style={{ backgroundColor: enrollColor }}
            >
              Enroll Now
            </a>

            <div className="flex items-center justify-center gap-5 md:justify-end">
              {SOCIAL.map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-80"
                  aria-label={s.alt}
                >
                  <Image src={s.icon} alt="" width={24} height={24} className="brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
          </article>
        </div>
      </div>
    </section>
  );
}
