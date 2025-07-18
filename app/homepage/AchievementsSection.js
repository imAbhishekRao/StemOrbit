import Image from "next/image";

const achievements = [
  {
    icon: "/schools.svg",
    number: "100+",
    label: "Schools",
  },
  {
    icon: "/students.svg",
    number: "10000+",
    label: "Students",
  },
  {
    icon: "/city.svg",
    number: "20+",
    label: "Cities",
  },
  {
    icon: "/trophy.svg",
    number: "50+",
    label: "Competitions Won",
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#FFF0F6] overflow-hidden flex items-center justify-center">
      {/* Floating playful letters/numbers */}
      <span className="absolute left-10 top-10 text-5xl font-bold text-sky-300 opacity-20 select-none">a</span>
      <span className="absolute left-1/4 top-1/3 text-4xl font-bold text-yellow-200 opacity-20 select-none">b</span>
      <span className="absolute left-1/2 top-8 text-5xl font-bold text-sky-400 opacity-20 select-none">4</span>
      <span className="absolute right-1/4 top-1/2 text-4xl font-bold text-yellow-400 opacity-20 select-none">5</span>
      <span className="absolute right-10 bottom-10 text-5xl font-bold text-orange-200 opacity-20 select-none">z</span>
      {/* Wavy SVG top border */}
      <div className="absolute left-0 right-0 top-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 rotate-180">
          <path d="M0 30 Q360 60 720 30 T1440 30 V60 H0 V30Z" fill="#fff" />
        </svg>
      </div>
      {/* Achievements grid */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center justify-center mb-4">
              <Image src={a.icon} alt={a.label} width={64} height={64} className="object-contain" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-pink-700 drop-shadow-lg mb-1 font-fredoka">{a.number}</div>
            <div className="text-lg md:text-xl font-bubblegum text-pink-700 drop-shadow-sm">{a.label}</div>
          </div>
        ))}
      </div>
      {/* Wavy SVG bottom border */}
      <div className="absolute left-0 right-0 bottom-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path d="M0 30 Q360 60 720 30 T1440 30 V60 H0 V30Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
} 