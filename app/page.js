"use client";

import HeroSection from "./homepage/HeroSection";
import AchievementsSection from "./homepage/AchievementsSection";
import UpcomingEventsSection from "./homepage/UpcomingEventsSection";
import SassyContactSection from "./homepage/SassyContactSection";
import OfferingsSection from "./homepage/OfferingsSection";
import GlimpseOfSTEMOrbit from "./homepage/GlimpseOfSTEMOrbit";
import TechnologiesSection from "./homepage/TechnologiesSection";
import StudentAchievementsSection from "./homepage/StudentAchievementsSection";
import SlidingBanner from "./homepage/SlidingBanner";
import TestimonialsSection from "./homepage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <SlidingBanner />
      <HeroSection />
      <AchievementsSection />
      <StudentAchievementsSection />
      <OfferingsSection />
      <GlimpseOfSTEMOrbit />
      <TechnologiesSection />
      <TestimonialsSection />
      <UpcomingEventsSection />
      <SassyContactSection />
    </>
  );
}
