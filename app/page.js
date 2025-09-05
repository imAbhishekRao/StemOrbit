"use client";

import HeroSection from "./homepage/HeroSection";
import AboutSection from "./homepage/AboutSection";
import UpcomingEventsSection from "./homepage/UpcomingEventsSection";
import SassyContactSection from "./homepage/SassyContactSection";
import OfferingsSection from "./homepage/OfferingsSection";
import GlimpseOfSTEMOrbit from "./homepage/GlimpseOfSTEMOrbit";
import TechnologiesSection from "./homepage/TechnologiesSection";
import BeASTEMEducatorSection from "./homepage/BeASTEMEducatorSection";
import TechNovaSection from "./homepage/TechNovaSection";

import TestimonialsSection from "./homepage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <GlimpseOfSTEMOrbit />
      <TechnologiesSection />
      <BeASTEMEducatorSection />
      <TechNovaSection />
      <TestimonialsSection />
      <UpcomingEventsSection />
      <SassyContactSection />
    </>
  );
}
