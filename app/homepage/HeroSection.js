"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-white">
      <Image 
        src="/website_banner1.png" 
        alt="Website Banner" 
        fill
        className="object-cover object-center" 
        priority 
      />
    </section>
  );
}
