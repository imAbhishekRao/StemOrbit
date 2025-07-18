"use client";

import HeroSection from "./homepage/HeroSection";
import AchievementsSection from "./homepage/AchievementsSection";
import OfferingsSection from "./homepage/OfferingsSection";
import GlimpseOfSTEMOrbit from "./homepage/GlimpseOfSTEMOrbit";
import TechnologiesSection from "./homepage/TechnologiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <OfferingsSection />
      <GlimpseOfSTEMOrbit />
      <TechnologiesSection />
    </>
  );
}
