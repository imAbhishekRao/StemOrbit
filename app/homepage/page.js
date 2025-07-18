'use client';
import HeroSection from "./HeroSection";
import OfferingsSection from "./OfferingsSection";
import TechnologiesSection from "./TechnologiesSection";
import Image from "next/image";
import GlimpseOfSTEMOrbit from "./GlimpseOfSTEMOrbit";
import AchievementsSection from "./AchievementsSection";

export default function HomePage() {
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