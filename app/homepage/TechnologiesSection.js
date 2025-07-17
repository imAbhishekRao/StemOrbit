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
        {technologies.map((tech, idx) => (
          <div
            key={tech.name}
            className="flex flex-col items-center bg-white shadow-strong pt-8 pb-6 px-4 relative overflow-hidden border-2 border-pink-100 hover:border-pink-300 transition-all duration-300"
            style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%', clipPath: 'ellipse(90% 100% at 50% 0%)' }}
          >
            <div className="mb-4">{tech.icon}</div>
            <h3 className="text-lg font-bold mb-2 font-bubblegum text-[#33aade] text-center">{tech.name}</h3>
            <svg height="8" width="60" className="mb-4"><path d="M5 5 Q30 15 55 5" stroke="#f472b6" strokeWidth="2" fill="none"/></svg>
          </div>
        ))}
      </div>
    </section>
  );
} 