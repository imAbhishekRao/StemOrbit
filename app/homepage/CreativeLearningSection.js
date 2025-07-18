import Image from "next/image";

export default function CreativeLearningSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 bg-white gap-8 md:gap-16 max-w-7xl mx-auto px-4">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
        <div className="flex items-center gap-3 mb-2">
          {/* Cap SVG */}
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 14L20 4L38 14" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 16V22C6 25.3137 11.3726 28 18 28C24.6274 28 30 25.3137 30 22V16" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Giraffe SVG (placeholder for animal) */}
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="16" rx="16" ry="12" fill="#FFF7E6" />
            <circle cx="20" cy="16" r="8" fill="#FFD6E0" />
          </svg>
        </div>
        <span className="text-pink-600 font-bold text-lg mb-1 font-bubblegum">Harmonious</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight font-fredoka">
          Creative Learning<br />Opportunity For Kids
        </h2>
        <p className="text-lg text-gray-500 mb-8 font-quicksand">
          Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.
        </p>
        <button className="px-10 py-4 bg-pink-600 text-white font-semibold text-lg rounded-full shadow-soft hover:bg-sky-500 transition-all duration-300 font-fredoka">
          Creative Works
        </button>
      </div>
      {/* Right: Images */}
      <div className="flex-1 flex items-center justify-center gap-4 relative min-w-[320px]">
        {/* Main Image 1 */}
        <div className="w-80 h-56 md:w-96 md:h-64 overflow-hidden rounded-[40%_60%_60%_40%/60%_40%_60%_40%] shadow-lg z-10">
          <Image src="/about-img.webp" alt="Creative Play 1" fill className="object-cover" />
        </div>
        {/* Overlapping Image 2 */}
        <div className="w-72 h-56 md:w-80 md:h-64 overflow-hidden rounded-[60%_40%_40%_60%/40%_60%_40%_60%] shadow-md absolute top-16 left-48 hidden md:block">
          <Image src="/public/about-img.webp" alt="Creative Play 2" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 