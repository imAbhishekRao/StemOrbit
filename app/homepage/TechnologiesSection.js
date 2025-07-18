const technologies = [
  {
    name: "Advance Robotics",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#38bdf8"/><path d="M18 38v-8a6 6 0 016-6h8a6 6 0 016 6v8" stroke="#fff" strokeWidth="2"/><circle cx="28" cy="24" r="4" fill="#fff"/><circle cx="22" cy="40" r="2" fill="#fff"/><circle cx="34" cy="40" r="2" fill="#fff"/></svg>
    ),
  },
  {
    name: "3D Printing",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#fbbf24"/><rect x="18" y="22" width="20" height="12" rx="2" stroke="#fff" strokeWidth="2"/><rect x="24" y="34" width="8" height="4" rx="1" fill="#fff"/></svg>
    ),
  },
  {
    name: "Artificial Intelligence",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#a78bfa"/><rect x="20" y="20" width="16" height="16" rx="8" fill="#fff"/><circle cx="28" cy="28" r="4" fill="#a78bfa"/></svg>
    ),
  },
  {
    name: "Internet of Things",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#34d399"/><rect x="20" y="20" width="16" height="16" rx="8" fill="#fff"/><path d="M28 20v-4M28 40v-4M20 28h-4M40 28h-4" stroke="#34d399" strokeWidth="2"/></svg>
    ),
  },
  {
    name: "Virtual Reality",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#f472b6"/><rect x="18" y="26" width="20" height="8" rx="4" fill="#fff"/><circle cx="22" cy="30" r="2" fill="#f472b6"/><circle cx="34" cy="30" r="2" fill="#f472b6"/></svg>
    ),
  },
  {
    name: "App Development",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#f87171"/><rect x="20" y="18" width="16" height="20" rx="4" fill="#fff"/><rect x="26" y="38" width="4" height="2" rx="1" fill="#f87171"/></svg>
    ),
  },
  {
    name: "Robotic Process Automation",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#60a5fa"/><rect x="20" y="22" width="16" height="12" rx="6" fill="#fff"/><circle cx="24" cy="28" r="2" fill="#60a5fa"/><circle cx="32" cy="28" r="2" fill="#60a5fa"/></svg>
    ),
  },
  {
    name: "Cyber Security",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#6366f1"/><rect x="20" y="24" width="16" height="8" rx="4" fill="#fff"/><rect x="26" y="32" width="4" height="4" rx="2" fill="#6366f1"/></svg>
    ),
  },
];

export default function TechnologiesSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-[#FFF7F0] relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-600 font-fredoka">Technologies We Are In</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full px-4">
        {technologies.map((tech, idx) => {
          // Assign a unique color for each icon's main circle
          const circleColors = [
            '#38bdf8', // Advance Robotics
            '#fbbf24', // 3D Printing
            '#a78bfa', // AI
            '#34d399', // IoT
            '#f472b6', // VR
            '#f87171', // App Dev
            '#60a5fa', // RPA
            '#6366f1', // Cyber Security
          ];
          const mainColor = circleColors[idx % circleColors.length];
          return (
          <div
            key={tech.name}
              className="tech-card flex flex-col items-center bg-white shadow-strong pt-8 pb-6 px-4 relative overflow-hidden border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 group"
            style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%', clipPath: 'ellipse(90% 100% at 50% 0%)' }}
          >
              {/* Animated bubbles on hover */}
              <div className="tech-card-bubbles pointer-events-none absolute inset-0 z-10" aria-hidden="true"></div>
              <div className="mb-4 z-20">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="transition-all duration-300">
                  <circle cx="28" cy="28" r="28" fill={mainColor} className="transition-all duration-300 group-hover:fill-white" />
                  {/* Icon paths, color will invert on hover using group-hover */}
                  {idx === 0 && (
                    <g>
                      <path d="M18 38v-8a6 6 0 016-6h8a6 6 0 016 6v8" stroke="white" strokeWidth="2" className="transition-all duration-300 group-hover:stroke-[#38bdf8]" />
                      <circle cx="28" cy="24" r="4" fill="white" className="transition-all duration-300 group-hover:fill-[#38bdf8]" />
                      <circle cx="22" cy="40" r="2" fill="white" className="transition-all duration-300 group-hover:fill-[#38bdf8]" />
                      <circle cx="34" cy="40" r="2" fill="white" className="transition-all duration-300 group-hover:fill-[#38bdf8]" />
                    </g>
                  )}
                  {idx === 1 && (
                    <g>
                      <rect x="18" y="22" width="20" height="12" rx="2" stroke="white" strokeWidth="2" className="transition-all duration-300 group-hover:stroke-[#fbbf24]" />
                      <rect x="24" y="34" width="8" height="4" rx="1" fill="white" className="transition-all duration-300 group-hover:fill-[#fbbf24]" />
                    </g>
                  )}
                  {idx === 2 && (
                    <g>
                      <rect x="20" y="20" width="16" height="16" rx="8" fill="white" className="transition-all duration-300 group-hover:fill-[#a78bfa]" />
                      <circle cx="28" cy="28" r="4" fill="#a78bfa" className="transition-all duration-300 group-hover:fill-white" />
                    </g>
                  )}
                  {idx === 3 && (
                    <g>
                      <rect x="20" y="20" width="16" height="16" rx="8" fill="white" className="transition-all duration-300 group-hover:fill-[#34d399]" />
                      <path d="M28 20v-4M28 40v-4M20 28h-4M40 28h-4" stroke="#34d399" strokeWidth="2" className="transition-all duration-300 group-hover:stroke-white" />
                    </g>
                  )}
                  {idx === 4 && (
                    <g>
                      <rect x="18" y="26" width="20" height="8" rx="4" fill="white" className="transition-all duration-300 group-hover:fill-[#f472b6]" />
                      <circle cx="22" cy="30" r="2" fill="#f472b6" className="transition-all duration-300 group-hover:fill-white" />
                      <circle cx="34" cy="30" r="2" fill="#f472b6" className="transition-all duration-300 group-hover:fill-white" />
                    </g>
                  )}
                  {idx === 5 && (
                    <g>
                      <rect x="20" y="18" width="16" height="20" rx="4" fill="white" className="transition-all duration-300 group-hover:fill-[#f87171]" />
                      <rect x="26" y="38" width="4" height="2" rx="1" fill="#f87171" className="transition-all duration-300 group-hover:fill-white" />
                    </g>
                  )}
                  {idx === 6 && (
                    <g>
                      <rect x="20" y="22" width="16" height="12" rx="6" fill="white" className="transition-all duration-300 group-hover:fill-[#60a5fa]" />
                      <circle cx="24" cy="28" r="2" fill="#60a5fa" className="transition-all duration-300 group-hover:fill-white" />
                      <circle cx="32" cy="28" r="2" fill="#60a5fa" className="transition-all duration-300 group-hover:fill-white" />
                    </g>
                  )}
                  {idx === 7 && (
                    <g>
                      <rect x="20" y="24" width="16" height="8" rx="4" fill="white" className="transition-all duration-300 group-hover:fill-[#6366f1]" />
                      <rect x="26" y="32" width="4" height="4" rx="2" fill="#6366f1" className="transition-all duration-300 group-hover:fill-white" />
                    </g>
                  )}
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 font-bubblegum text-[#33aade] text-center z-20 transition-colors duration-300 group-hover:text-white">{tech.name}</h3>
              <svg height="8" width="60" className="mb-4 z-20"><path d="M5 5 Q30 15 55 5" stroke="#f472b6" strokeWidth="2" fill="none"/></svg>
          </div>
          );
        })}
      </div>
    </section>
  );
} 