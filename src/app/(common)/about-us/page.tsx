import AboutHeroSection from "@/components/pages/AboutUs/about-hero";
import AboutSection from "@/components/pages/AboutUs/about-section";
import MemoriesSection from "@/components/pages/AboutUs/MemorySection";
import WhyChooseSection from "@/components/pages/AboutUs/WhyChooseUs";
import Contact from "@/components/shared/Contact/Contact";
import CommonHero from "@/components/ui/CommonHero/CommonHero";

import React from "react";

export default function AboutUsPage() {
  return (
    <div>
      <CommonHero
        btnTitle="Saveurs Provencales"
        title="What We Are?"
        description="Saveurs Provençales brings you the authentic taste of Provence — delivering fresh, seasonal fruits and vegetables to meet the needs of your business."
      />
      <AboutHeroSection />
      <AboutSection />
      <WhyChooseSection />
      <MemoriesSection />
      <Contact />
    </div>
  );
}
