import Image from "next/image";

const socialLinks = [
  { icon: "/logo.svg", alt: "Facebook", href: "#" },
  { icon: "/logo.svg", alt: "Twitter", href: "#" },
  { icon: "/logo.svg", alt: "LinkedIn", href: "#" },
  { icon: "/logo.svg", alt: "Instagram", href: "#" },
];

const galleryImages = [
  "/achievement1.jpg",
  "/Achievement2.jpg",
  "/achievement3.jpeg",
  "/about-img.webp",
  "/app.jpg",
  "/app.webp"
];

const paymentIcons = [
  "/visa.svg",
  "/mastercard.svg",
  "/paypal.svg",
  "/amex.svg"
];

export default function Footer() {
  // fallback icons for demo
  const socialDemo = [
    { icon: "/logo.svg", alt: "Facebook", href: "#", fallback: "🌈" },
    { icon: "/logo.svg", alt: "Twitter", href: "#", fallback: "🐦" },
    { icon: "/logo.svg", alt: "LinkedIn", href: "#", fallback: "💼" },
    { icon: "/logo.svg", alt: "Instagram", href: "#", fallback: "📸" },
  ];
  const paymentDemo = [
    { icon: "/visa.svg", alt: "Visa", fallback: "💳" },
    { icon: "/mastercard.svg", alt: "MasterCard", fallback: "💳" },
    { icon: "/paypal.svg", alt: "Paypal", fallback: "💸" },
    { icon: "/amex.svg", alt: "Amex", fallback: "💳" },
  ];

  return (
    <div className="w-full relative bg-white pt-0 overflow-hidden">
      {/* Cloud SVG at full width, overlapping footer */}
      <div className="w-full relative z-10" style={{ marginTop: '-72px' }}>
        <img
          src="/footer-clouds.svg"
          alt="Clouds"
          className="w-full block select-none pointer-events-none"
          style={{ display: 'block', width: '100%', height: '180px', margin: 0, padding: 0, objectFit: 'cover', objectPosition: 'bottom' }}
          draggable="false"
        />
      </div>
      {/* Footer Content */}
      <footer className="relative w-full bg-[#6EDADF] text-white pb-10 pt-16 -mt-2 z-0 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Logo & About */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Kids Logo" width={64} height={64} />
              <span className="text-2xl font-fredoka tracking-wide">KIDS</span>
            </div>
            <p className="text-white/90 text-center md:text-left max-w-xs font-fredoka text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, elusm</p>
            <div className="flex gap-3 mt-2">
              {socialDemo.map((s, i) => (
                <a key={i} href={s.href} className="hover:scale-125 transition-transform text-2xl">
                  <img src={s.icon} alt={s.alt} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>
          {/* Pages Links */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold font-fredoka mb-2">Pages</span>
            <a href="#" className="hover:underline font-fredoka">About Ninos</a>
            <a href="#" className="hover:underline font-fredoka">Our Team</a>
            <a href="#" className="hover:underline font-fredoka">News Feed</a>
            <a href="#" className="hover:underline font-fredoka">Infrastructure</a>
          </div>
          {/* Help Links */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold font-fredoka mb-2">Help</span>
            <a href="#" className="hover:underline font-fredoka">Start a Return</a>
            <a href="#" className="hover:underline font-fredoka">Shipping & Return Policy</a>
            <a href="#" className="hover:underline font-fredoka">FAQ</a>
            <a href="#" className="hover:underline font-fredoka">Contact Us</a>
          </div>
          {/* Gallery */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
            <span className="text-lg font-bold font-fredoka mb-2">Our Galleries</span>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {galleryImages.map((img, i) => (
                <img key={i} src={img} alt={`Gallery ${i+1}`} width={56} height={56} className="rounded-lg object-cover w-14 h-14" />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/20 pt-6 mt-8">
          <div className="text-sm text-white/80 font-fredoka">Copyright © {new Date().getFullYear()} Kids by Wedesigntech. All Rights Reserved.</div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            {paymentDemo.map((p, i) => (
              <span key={i} className="inline-block text-2xl align-middle">
                <img src={p.icon} alt={p.alt} width={38} height={24} />
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-xs text-white/80 font-fredoka">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 