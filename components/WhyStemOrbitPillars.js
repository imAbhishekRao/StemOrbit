import Image from "next/image";

const FEATURES = [
  { label: "Critical Thinking", icon: "Vector (6).png" },
  { label: "Creativity", icon: "Vector (5).png" },
  { lines: ["Entrepreneurial", "Mindset"], icon: "Vector (4).png" },
  { label: "Collaboration", icon: "Vector (3).png" },
  { lines: ["Technical", "Confidence"], icon: "Vector (2).png" },
];

const PAGE_WRAP = "mx-auto w-full max-w-[90rem] px-3 sm:px-4 md:px-5 lg:px-6";

function WhyStemOrbitIcon({ type }) {
  const common = "relative h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11";
  return (
    <div className={common}>
      <Image src={`/${type}`} alt="" fill className="object-contain" />
    </div>
  );
}

function PillarLabel({ item }) {
  if (item.lines) {
    return (
      <p className="mt-3 text-center text-[0.8rem] font-bold leading-tight text-gray-900 sm:mt-3.5 sm:text-sm md:text-[0.95rem]">
        {item.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    );
  }
  return (
    <p className="mt-3 text-center text-[0.8rem] font-bold leading-tight text-gray-900 sm:mt-3.5 sm:text-sm md:text-[0.95rem]">
      {item.label}
    </p>
  );
}

/**
 * “Why STEMOrbit” — single row of five magenta discs (matches camp landing mock).
 */
export default function WhyStemOrbitPillars({ accentColor = "#D4007A" }) {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className={PAGE_WRAP}>
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:mb-12 sm:text-4xl md:mb-14 md:text-[2.75rem] md:leading-tight">
          Why STEMOrbit
        </h2>

        {/* Mobile / tablet: horizontal scroll; lg+: one even row like the design */}
        <div className="-mx-3 overflow-x-auto px-3 pb-1 sm:-mx-4 sm:px-4 lg:mx-0 lg:overflow-visible lg:px-0">
          <ul className="mx-auto flex w-max min-w-full items-start justify-between gap-6 sm:gap-5 md:max-w-4xl lg:w-full lg:max-w-5xl lg:gap-3 xl:max-w-6xl xl:gap-4">
            {FEATURES.map((item) => (
              <li
                key={item.label ?? item.lines.join(" ")}
                className="flex w-[5.25rem] flex-shrink-0 flex-col items-center sm:w-[5.75rem] md:w-[6.5rem] lg:w-auto lg:flex-1 lg:max-w-[9.5rem]"
              >
                <div
                  className="flex aspect-square w-[4.75rem] items-center justify-center rounded-full text-white sm:w-[5.25rem] md:w-[5.75rem] lg:w-[6.25rem] xl:w-[6.75rem]"
                  style={{ backgroundColor: accentColor }}
                  aria-hidden
                >
                  <WhyStemOrbitIcon type={item.icon} />
                </div>
                <PillarLabel item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
