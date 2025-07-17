import { motion } from "framer-motion";

const features = [
  {
    title: "Customizable Programs",
    desc: "Tailor-made STEM programs that can be adapted to the unique requirements and goals of each school or company.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ec4899"/><path d="M20 44V24a2 2 0 012-2h20a2 2 0 012 2v20a2 2 0 01-2 2H22a2 2 0 01-2-2z" stroke="#fff" strokeWidth="2"/><path d="M32 32a4 4 0 100-8 4 4 0 000 8zm0 0v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Activity-Based Learning",
    desc: "Explore, experiment, and discover through hands-on activities.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ec4899"/><path d="M28 44l8-16 8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="28" r="4" fill="#fff"/></svg>
    ),
  },
  {
    title: "NEP Aligned Curriculum",
    desc: "Cutting-edge STEM curriculum aligned with NEP 2020 standards for schools.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ec4899"/><text x="32" y="38" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">NEP</text></svg>
    ),
  },
  {
    title: "Content & Assessment",
    desc: "We provide complementary how-to videos, concept animations, worksheets, manuals, & assessments.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ec4899"/><rect x="20" y="24" width="24" height="16" rx="2" stroke="#fff" strokeWidth="2"/><path d="M28 32h8M28 36h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "In-House Manufacturing",
    desc: "In-House Manufacturing Provides Precision and Affordability.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ec4899"/><path d="M24 40V28l8-8 8 8v12" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><circle cx="32" cy="40" r="4" fill="#fff"/></svg>
    ),
  },
  {
    title: "Eco-Friendly Materials",
    desc: "Our Eco-Friendly STEM kits make learning fun, safe, and engaging for young minds.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ec4899"/><path d="M24 40c4-8 12-8 16 0" stroke="#fff" strokeWidth="2"/><ellipse cx="32" cy="36" rx="8" ry="4" fill="#fff"/></svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, type: "spring" } }),
};

export default function OurApproachSection() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-600 tracking-wide font-fredoka">OUR APPROACH</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-pink-300">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="flex flex-col md:flex-row items-center gap-6 py-10 px-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={fadeUp}
          >
            {/* Horizontal pink line for all but first row */}
            {i >= 2 && (
              <div className="hidden md:block absolute -top-0.5 left-0 w-full h-0.5 bg-pink-300" />
            )}
            {/* Vertical pink line for right column */}
            {i % 2 === 1 && (
              <div className="hidden md:block absolute top-0 -left-0.5 h-full w-0.5 bg-pink-300" />
            )}
            {/* Icon and text alignment for all */}
            {([0,2,4].includes(i)) ? (
              <>
                <div className="flex-1 text-right md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 font-fredoka text-black">{f.title}</h3>
                  <p className="text-base md:text-lg text-gray-700 font-quicksand">{f.desc}</p>
                </div>
                <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-6 flex items-center justify-center" style={{ minWidth: '88px', minHeight: '88px', width: '88px', height: '88px', ...(i % 2 === 1 ? { transform: 'scaleX(-1)' } : {}) }}>
                  <div style={{ width: '88px', height: '88px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex items-center justify-center" style={{ minWidth: '88px', minHeight: '88px', width: '88px', height: '88px', ...(i % 2 === 1 ? { transform: 'scaleX(-1)' } : {}) }}>
                  <div style={{ width: '88px', height: '88px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 font-fredoka text-black">{f.title}</h3>
                  <p className="text-base text-gray-700 font-quicksand">{f.desc}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 