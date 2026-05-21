import Image from "next/image";

const FEATURES = [
  { label: "Critical Thinking", icon: "Vector (6).png" },
  { label: "Creativity", icon: "Vector (5).png" },
  { lines: ["Entrepreneurial", "Mindset"], icon: "Vector (4).png" },
  { label: "Collaboration", icon: "Vector (3).png" },
  { lines: ["Technical", "Confidence"], icon: "Vector (2).png" },
];

const PAGE_WRAP = "mx-auto w-full max-w-[100rem] px-3 sm:px-4 md:px-6 lg:px-8";

function WhyStemOrbitIcon({ type }) {
  const common = "relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16";
  return (
    <div className={common}>
      <Image src={`/${type}`} alt="" fill className="object-contain" />
    </div>
  );
}

function PillarLabel({ item }) {
  if (item.lines) {
    return (
      <p className="mt-3 text-center text-lg sm:text-2xl md:text-[34px] font-medium leading-tight text-gray-900 whitespace-normal md:whitespace-nowrap sm:mt-3.5">
        {item.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    );
  }
  return (
    <p className="mt-3 text-center text-lg sm:text-2xl md:text-[34px] font-medium leading-tight text-gray-900 whitespace-normal md:whitespace-nowrap sm:mt-3.5">
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
          <ul className="mx-auto flex w-max min-w-full items-start justify-between gap-4 sm:gap-3 md:max-w-5xl lg:w-full lg:max-w-[85rem] lg:gap-4 xl:max-w-[95rem] xl:gap-6">
            {FEATURES.map((item) => (
              <li
                key={item.label ?? item.lines.join(" ")}
                className="flex w-[6rem] flex-shrink-0 flex-col items-center sm:w-[6.5rem] md:w-[7.5rem] lg:w-auto lg:flex-1 lg:max-w-[16rem]"
              >
                <div
                  className="flex aspect-square w-[5.5rem] items-center justify-center rounded-full text-white sm:w-[6.25rem] md:w-[7rem] lg:w-[7.75rem] xl:w-[8.5rem]"
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
