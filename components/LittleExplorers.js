import Image from "next/image";

const PHOTOS = [
  { src: "/camps_(1).jpg", alt: "Student building a tall yellow robot structure" },
  { src: "/camps_(7).jpg", alt: "Student working on a motorized vehicle project" },
  { src: "/camps_(12).jpg", alt: "Student crafting a hands-on STEM project" },
  { src: "/camps_(15).jpg", alt: "Student with a wheeled robot on the mat" },
];

const PAGE_WRAP = "mx-auto w-full max-w-[90rem] px-3 sm:px-4 md:px-5 lg:px-6";

/**
 * NEP gradient strip + “Little Explorers” photo row (magenta-bordered cards).
 */
export default function LittleExplorers({
  borderColor = "#D4007A",
  bannerGradient = "linear-gradient(90deg, #3498db 0%, #6B2D8E 55%, #8e44ad 100%)",
}) {
  return (
    <section className="bg-white">
      {/* Full-width NEP banner */}
      <div
        className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 w-screen px-4 py-4 text-center sm:py-5"
        style={{ background: bannerGradient }}
      >
        <p className="mx-auto max-w-5xl text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-base md:text-lg">
          Aligned with NEP 2020 — Experiential Learning, Hands-on Projects, Critical Thinking
        </p>
      </div>

      <div className={`${PAGE_WRAP} py-10 sm:py-12 md:py-14`}>
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:mb-10 sm:text-4xl md:mb-12 md:text-[2.75rem] md:leading-tight">
          Little Explorers
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 lg:gap-8">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-[1.75rem] border-[5px] sm:rounded-[2rem] sm:border-[6px]"
              style={{ borderColor }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={320}
                height={420}
                className="aspect-[3/4] h-full w-full object-cover object-center"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
