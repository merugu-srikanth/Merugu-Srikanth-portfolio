import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4f2ee] text-[#0d0d0d] overflow-x-hidden selection:bg-[#0d0d0d] selection:text-[#f4f2ee]">
      <Navigation />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
