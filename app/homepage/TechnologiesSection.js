const technologies = [
  {
    name: "Advance Robotics",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><path d="M18 38v-8a6 6 0 016-6h8a6 6 0 016 6v8" stroke="#fff" strokeWidth="2"/><circle cx="28" cy="24" r="4" fill="#fff"/><circle cx="22" cy="40" r="2" fill="#fff"/><circle cx="34" cy="40" r="2" fill="#fff"/></svg>
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

const techImages = [
  "/public/advancedrobotics.jpg", // Advance Robotics
  "/public/3d-printing-history-featured.webp", // 3D Printing
  "/public/ai.webp", // Artificial Intelligence
  "/public/IOT.png", // Internet of Things
  "/public/vr.avif", // Virtual Reality
  "/public/benefits-of-mobile-app-for-business.webp", // App Development
  "/public/drone-svgrepo-com.svg", // Robotic Process Automation (example)
  "/public/cybersec.jpg", // Cyber Security
];

const techBgImages = [
  "/advanced.jpg", // Advance Robotics
  "/3d-printing-history-featured.webp", // 3D Printing (no image provided, fallback to previous)
  "/ai.webp", // Artificial Intelligence
  "/iot.webp", // Internet of Things
  "/vr.avif", // Virtual Reality
  "/app.jpg", // App Development
  "/rpa.jpg", // Robotic Process Automation
  "/cybersec.jpg", // Cyber Security
];

export default function TechnologiesSection() {
  // Temporarily hidden
  return null;
} 