'use client';
import BannerSlideshow from "../../components/BannerSlideshow";
import OfferingsSection from "./OfferingsSection";
// import TechnologiesSection from "./TechnologiesSection"; // temporarily disabled on homepage
import Image from "next/image";
import GlimpseOfSTEMOrbit from "./GlimpseOfSTEMOrbit";
import AchievementsSection from "./AchievementsSection";
import UpcomingEventsSection from "./UpcomingEventsSection";

export default function HomePage() {
  return (
    <>
      <BannerSlideshow />
      <AchievementsSection />
      <UpcomingEventsSection />
      <OfferingsSection />
      <GlimpseOfSTEMOrbit />
      {/** <TechnologiesSection /> */}
    </>
  );
} 