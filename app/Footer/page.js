import Image from "next/image";

const socialLinks = [
  { icon: "/logo.svg", alt: "Facebook", href: "#" },
  { icon: "/logo.svg", alt: "Twitter", href: "#" },
  { icon: "/logo.svg", alt: "LinkedIn", href: "#" },
  { icon: "/logo.svg", alt: "Instagram", href: "#" },
];


const socialIcons = [
  "/facebook.svg",
  "/instagram.svg", 
  "/twitter.svg",
  "/linkedin.svg"
];

export default function Footer() {
  // fallback icons for demo
  const socialDemo = [
    { icon: "/logo.svg", alt: "Facebook", href: "#", fallback: "🌈" },
    { icon: "/logo.svg", alt: "Twitter", href: "#", fallback: "🐦" },
    { icon: "/logo.svg", alt: "LinkedIn", href: "#", fallback: "💼" },
    { icon: "/logo.svg", alt: "Instagram", href: "#", fallback: "📸" },
  ];
  const socialIconsDemo = [
    { icon: "/facebook.svg", alt: "Facebook", href: "https://www.facebook.com/StemOrbit0", fallback: "📘" },
    { icon: "/instagram.svg", alt: "Instagram", href: "https://instagram.com/stemorbit", fallback: "📸" },
    { icon: "/twitter.svg", alt: "Twitter", href: "https://twitter.com/stemorbit", fallback: "🐦" },
    { icon: "/linkedin.svg", alt: "LinkedIn", href: "https://linkedin.com/company/stemorbit", fallback: "💼" },
  ];

  return (
    <div className="w-full relative bg-white pt-0 overflow-hidden">
      {/* Cloud SVG at full width, overlapping footer */}
      <div className="w-full relative z-10" style={{ marginTop: '-72px' }}>
        <img
          src="/footer-clouds.svg"
          alt="Clouds"
          className="w-full block select-none pointer-events-none"
          style={{ display: 'block', width: '100%', height: '180px', margin: 0, padding: 0, objectFit: 'cover', objectPosition: 'bottom', filter: 'brightness(0)' }}
          draggable="false"
        />
      </div>
      {/* Footer Content */}
      <footer className="relative w-full bg-black text-white pb-6 pt-16 -mt-2 z-0 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Logo & About */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src="/With Strock (2).png" alt="STEMOrbit Logo" width={120} height={120} className="rounded-lg" />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white font-fredoka mb-2">STEMOrbit</h3>
                <p className="text-white font-fredoka text-sm leading-relaxed max-w-sm">
                  Empowering young minds through innovative STEM education and hands-on learning experiences. 
                  We inspire the next generation of scientists, engineers, and innovators by making complex 
                  concepts accessible and exciting through interactive projects and real-world applications.
                </p>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold font-fredoka mb-2 text-white">Quick Links</span>
            <a href="/whats-stem-lab" className="hover:underline font-fredoka text-white">What's STEM Lab</a>
            <a href="/courses" className="hover:underline font-fredoka text-white">Courses</a>
            <a href="/our-lab-offerings" className="hover:underline font-fredoka text-white">For School</a>
            <a href="/3d-printing" className="hover:underline font-fredoka text-white">3D Printing</a>
            <a href="/summercamp" className="hover:underline font-fredoka text-white">STEM Camps</a>
          </div>
          {/* Help Links */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold font-fredoka mb-2 text-white">Help</span>
            <a href="/contact" className="hover:underline font-fredoka text-white">Contact Us</a>
            <a href="/contact" className="hover:underline font-fredoka text-white">FAQ</a>
            <a href="/contact" className="hover:underline font-fredoka text-white">Support</a>
            <a href="/privacy-policy" className="hover:underline font-fredoka text-white">Privacy Policy</a>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[320px] flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold font-fredoka mb-2 text-white">Contact Info</span>
            <div className="flex items-center gap-2 text-white font-fredoka text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+917009594410" className="hover:underline">+91 7009594410</a>
            </div>
            <div className="flex items-center gap-2 text-white font-fredoka text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+911605010684" className="hover:underline">+91 160 501 0684</a>
            </div>
            <div className="flex items-center gap-2 text-white font-fredoka text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:info@stemorbit.com" className="hover:underline">info@stemorbit.com</a>
            </div>
            <div className="flex items-center gap-2 text-white font-fredoka text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:stemorbit@gmail.com" className="hover:underline">stemorbit@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-white font-fredoka text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979.457.76.736 1.775.736 3.021 0 1.246-.279 2.261-.736 3.021C10.792 13.807 10.304 14 10 14c-.304 0-.792-.193-1.264-.979C8.279 12.261 8 11.246 8 10c0-1.246.279-2.261.736-3.021zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <a href="https://www.stemorbit.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.stemorbit.com</a>
            </div>
            <div className="flex items-start gap-2 text-white font-fredoka text-xs mt-2">
              <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p>STEMOrbit Technologies</p>
                <p>SCO-04, 1st Floor, Mehma Singh</p>
                <p>Complex, Opp. Jal Vayu Towers, Gate 3</p>
                <p>New Sunny Enclave, Kharar, Sector-125</p>
                <p>(Mohali) Punjab - 140301</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/20 pt-4 mt-4">
          <div className="text-sm text-white font-fredoka">Copyright © {new Date().getFullYear()} STEMOrbit. All Rights Reserved.</div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {socialIconsDemo.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                <img src={s.icon} alt={s.alt} width={32} height={32} />
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-xs text-white font-fredoka">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 