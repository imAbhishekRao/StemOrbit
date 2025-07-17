"use client";

import HeroSection from "./homepage/HeroSection";
import OfferingsSection from "./homepage/OfferingsSection";
import CreativeLearningSection from "./homepage/CreativeLearningSection";
import OurApproachSection from "./homepage/OurApproachSection";
import TechnologiesSection from "./homepage/TechnologiesSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col items-center justify-center">
        <HeroSection />
        <OfferingsSection />
        <TechnologiesSection />
        <CreativeLearningSection />
        <OurApproachSection />
      </main>
      <div className="w-full flex justify-center items-center bg-[#FFF7F0] overflow-hidden h-[220px] md:h-[320px] lg:h-[400px]">
        <img src="/stem.svg" alt="STEM Illustration" className="max-w-3xl w-full h-[400px] md:h-[600px] lg:h-[800px] object-contain" />
      </div>
    </>
  );
}
