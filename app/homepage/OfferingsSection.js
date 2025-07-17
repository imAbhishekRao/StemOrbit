import Image from "next/image";

// Vibrant card backgrounds (mix of light and dark)
const cardColors = [
  { bg: "#FFB347", hover: "#FFA500", text: "#222" }, // orange, light
  { bg: "#FF6961", hover: "#FF4C4C", text: "#fff" }, // red, dark
  { bg: "#77DD77", hover: "#4CAF50", text: "#222" }, // green, light
  { bg: "#AEC6CF", hover: "#7BAFD4", text: "#222" }, // blue-gray, light
  { bg: "#F49AC2", hover: "#E75480", text: "#fff" }, // pink, dark
  { bg: "#FFD700", hover: "#FFC300", text: "#222" }, // yellow, light
  { bg: "#B39EB5", hover: "#8D6E97", text: "#fff" }, // purple, dark
  { bg: "#FFB7B2", hover: "#FF7F7F", text: "#222" }, // peach, light
  { bg: "#779ECB", hover: "#4682B4", text: "#fff" }, // blue, dark
];

const offerings = [
  {
    title: "STEM Classes (Grade 1-12)",
    desc: "Engaging sessions in robotics, coding, AI, and more—fostering curiosity and innovation.",
    svg: "/reshot-icon-cmos-T2BZYAXHGV.svg",
    img: "/about-img.webp",
  },
  {
    title: "STEM/Atal Tinkering Lab Setup",
    desc: "Complete support for setting up and running ATLs, driving innovation in schools.",
    svg: "/reshot-icon-web-design-ZD36AXCWJB.svg",
    img: "/about-img.webp",
  },
  {
    title: "School Sessions",
    desc: "Interactive STEM activities and experiments, tailored to your school’s curriculum.",
    svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
    img: "/about-img.webp",
  },
  {
    title: "Technical Event Support",
    desc: "Planning, resources, and mentorship for impactful school tech events.",
    svg: "/reshot-icon-cmos-T2BZYAXHGV.svg",
    img: "/about-img.webp",
  },
  {
    title: "Teacher Training Program",
    desc: "Hands-on modules in 3D printing, drones, IoT, and robotics for educators.",
    svg: "/reshot-icon-web-design-ZD36AXCWJB.svg",
    img: "/about-img.webp",
  },
  {
    title: "Skill Summer/Winter Camp",
    desc: "Fun camps with workshops, projects, and team-building during school breaks.",
    svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
    img: "/about-img.webp",
  },
  {
    title: "Technical Competition Support",
    desc: "Coaching and mentoring for students to excel in technical competitions.",
    svg: "/reshot-icon-cmos-T2BZYAXHGV.svg",
    img: "/about-img.webp",
  },
  {
    title: "Six-Week Internship Program",
    desc: "Real-world engineering experience, mentorship, and hands-on projects.",
    svg: "/reshot-icon-web-design-ZD36AXCWJB.svg",
    img: "/about-img.webp",
  },
  {
    title: "Custom STEM Solutions",
    desc: "Tailored programs and support to meet your school’s unique STEM needs.",
    svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
    img: "/about-img.webp",
  },
];

export default function OfferingsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-[#FFF7F0] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full px-4">
        {offerings.map((item, idx) => {
          const color = cardColors[idx % cardColors.length];
          return (
            <div
              key={item.title}
              className={`group rounded-[2.5rem] shadow-strong p-6 flex flex-row items-center transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[220px] border-2 border-pink-100 hover:border-pink-300 animate-childish-bounce`}
              style={{ background: color.bg }}
            >
              {/* Left: Blob Image */}
              <div className="relative w-28 h-28 min-w-[7rem] mr-4 flex-shrink-0">
                <svg viewBox="0 0 112 112" className="absolute w-full h-full z-0">
                  <path d="M28 28 Q56 0 84 28 Q112 56 84 84 Q56 112 28 84 Q0 56 28 28Z" fill="#FDE68A" />
                </svg>
                <div className="absolute w-24 h-24 left-2 top-2 rounded-full overflow-hidden z-10">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
              </div>
              {/* Right: Content */}
              <div className="flex-1 z-20">
                <h3
                  className={`text-lg font-bold mb-2 font-bubblegum transition-colors duration-300`}
                  style={{ color: color.text }}
                >
                  {item.title}
                </h3>
                <p
                  className={`mb-4 font-quicksand transition-colors duration-300`}
                  style={{ color: color.text }}
                >
                  {item.desc}
                </p>
                <a
                  className={`text-base font-semibold transition-colors duration-300 flex items-center gap-2`}
                  style={{ color: color.text }}
                  href="#"
                >
                  Learn More
                  <span
                    className={`block h-1 w-10 rounded-full mt-1 transition-colors duration-300`}
                    style={{ background: color.text }}
                  />
                </a>
              </div>
              {/* SVG appears only on hover, bottom right, original color */}
              <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Image src={item.svg} alt="Card SVG" width={48} height={48} className="drop-shadow-lg" />
              </div>
              {/* Hover overlay for color change */}
              <div
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                style={{
                  background: color.hover,
                  opacity: 0,
                  zIndex: 1,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Add this to your globals.css:
// @keyframes childish-bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04) rotate(-2deg); } }
// .animate-childish-bounce { animation: childish-bounce 2.5s infinite cubic-bezier(0.4,0,0.2,1); } 