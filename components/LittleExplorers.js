import Image from "next/image";

const PHOTOS = [
  { src: "/summercampimages1.png", alt: "Summer Camp Image 1" },
  { src: "/summercampimages2.png", alt: "Summer Camp Image 2" },
  { src: "/summercampimages3.png", alt: "Summer Camp Image 3" },
  { src: "/summercampimages4.png", alt: "Summer Camp Image 4" },
];

const PAGE_WRAP = "mx-auto w-full max-w-[100rem] px-3 sm:px-4 md:px-6 lg:px-8";

/**
 * NEP gradient strip + “Little Explorers” photo row (magenta-bordered cards).
 */
export default function LittleExplorers({
  borderColor = "#D4007A",
  bannerGradient = "linear-gradient(90deg, #26ABE2 0%, #716ABA 100%)",
}) {
  return (
    <section className="bg-white">
      {/* Full-width NEP banner */}
      <div
        className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen px-4 py-4 text-center sm:py-5"
        style={{ background: bannerGradient }}
      >
        <p className="mx-auto max-w-none text-xs sm:text-xl md:text-[34px] font-bold uppercase leading-snug tracking-wide text-white whitespace-normal md:whitespace-nowrap">
          Aligned with NEP 2020 — Experiential Learning, Hands-on Projects, Critical Thinking
        </p>
      </div>

      <div className={`${PAGE_WRAP} py-10 sm:py-12 md:py-14`}>
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:mb-10 sm:text-4xl md:mb-12 md:text-[2.75rem] md:leading-tight">
          Little Explorers
        </h2>

        <div className="mx-auto grid max-w-[95rem] grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 lg:gap-8">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={320}
                height={420}
                className="h-auto w-full"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
