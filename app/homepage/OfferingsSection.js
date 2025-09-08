import Image from "next/image";

// Vibrant card backgrounds (mix of light and dark)
const cardColors = [
  { bg: "#60a5fa", hover: "#3b82f6", text: "#fff" }, // blue
  { bg: "#f472b6", hover: "#ec4899", text: "#fff" }, // pink
  { bg: "#ffa726", hover: "#d97706", text: "#fff" }, // yellow
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
    desc: "End-to-end support for establishing and operating ATLs, enhancing  learning in schools..",
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
    desc: "STEM-focused camps offering robotics sessions, projects, and real-world problem-solving..",
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
    desc: "Real-world engineering experience, mentorship, and hands-on projects for gradutates and undergraduates.",
    svg: "/reshot-icon-web-design-ZD36AXCWJB.svg",
    img: "/about-img.webp",
  },
  {
    title: "Workshops",
    desc: "Hands-on STEM workshops designed to spark creativity and practical skills in students and teachers alike.",
    svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
    img: "/about-img.webp",
  },
  
    {
      title: "STEM Kits",
      desc: "DIY STEM kits with step-by-step guides that help students and teachers explore science, technology, engineering, and math in a practical way.",
      svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
      img: "/about-img.webp",
    },
    {
      title: "STEM Courses / STEM Programmes",
      desc: "Structured STEM courses and training programmes designed to build problem-solving, coding, and design-thinking skills for students and educators.",
      svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
      img: "/about-img.webp",
    },
    {
      title: "3D Printing Services",
      desc: "End-to-end 3D printing solutions including design, prototyping, and production support to bring creative ideas into real, tangible models.",
      svg: "/reshot-icon-3d-technology-X8JNDUBMQC.svg",
      img: "/about-img.webp",
    },
];

export default function OfferingsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-[#FFF7F0] relative">
      <h2 className="text-4xl md:text-5xl font-comicneue font-extrabold text-pink-600 mb-10 drop-shadow-lg text-center">Our Offerings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full px-4">
        {offerings.map((item, idx) => {
          // Calculate row and col for 3-column layout
          const row = Math.floor(idx / 3);
          const col = idx % 3;
          // Alternate color order by row
          let colorIdx;
          if (row % 3 === 0) colorIdx = col; // blue, pink, yellow
          else if (row % 3 === 1) colorIdx = (col + 1) % 3; // pink, yellow, blue
          else colorIdx = (col + 2) % 3; // yellow, blue, pink
          const color = cardColors[colorIdx];
          return (
            <div
              key={item.title}
              className={`group rounded-[2.5rem] shadow-strong p-6 flex flex-row items-center transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[220px] border-2 border-pink-100 hover:border-pink-300 transform hover:rotate-2 hover:scale-105`}
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
                  className={`text-xl font-extrabold mb-2 font-fredoka transition-colors duration-300`}
                  style={{ color: color.text }}
                >
                  {item.title}
                </h3>
                {/* User-uploaded wave SVG beneath heading */}
                <img src="/wave.svg" alt="wave" className="mb-2 w-20 h-auto" aria-hidden="true" />
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
                  <img src="/highlight.svg" alt="highlight" className="w-8 h-auto ml-1" aria-hidden="true" />
                </a>
              </div>
              {/* Choose SVG based on card title/content */}
              {(() => {
                const title = item.title.toLowerCase();
                let svg = item.svg;
                if (title.includes('robotic') || title.includes('robotics')) svg = '/drone-svgrepo-com.svg';
                else if (title.includes('3d')) svg = '/reshot-icon-3d-technology-X8JNDUBMQC.svg';
                else if (title.includes('web') || title.includes('app') || title.includes('coding')) svg = '/reshot-icon-web-design-ZD36AXCWJB.svg';
                else if (title.includes('cmos') || title.includes('stem class') || title.includes('school')) svg = '/reshot-icon-cmos-T2BZYAXHGV.svg';
                else if (title.includes('virtual') || title.includes('vr')) svg = '/vr-svgrepo-com.svg';
                else if (title.includes('smartwatch')) svg = '/smartwatch-svgrepo-com (1).svg';
                else if (title.includes('window')) svg = '/window.svg';
                else if (title.includes('globe') || title.includes('global')) svg = '/globe.svg';
                // Add more mappings as needed
                return (
                  <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Image src={svg} alt="Card SVG" width={80} height={80} className="drop-shadow-lg" />
                  </div>
                );
              })()}
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