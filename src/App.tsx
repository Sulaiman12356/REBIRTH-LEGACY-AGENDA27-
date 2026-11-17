/**
 * REBIRTH LEGACY NACOS PRESIDENTIAL AGENDA WEBSITE
 * Candidate: ONIFADE SULAIMAN IPESOLA (MR. CLARITY)
 * Institution: Olabisi Onabanjo University (OOU)
 * Department: Computer Science
 * Association: Nigerian Association of Computing Students (NACOS)
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { JourneySection } from "./components/JourneySection";
import { VisionSection } from "./components/VisionSection";
import { AgendaSection } from "./components/AgendaSection";
import { OpportunitiesSection } from "./components/OpportunitiesSection";
import { ImplementationSection } from "./components/ImplementationSection";
import { MovementAndVoteSection } from "./components/MovementAndVoteSection";
import { Footer } from "./components/Footer";
import { candidateConfig } from "./config/candidateConfig";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#111111] selection:bg-[#84E026]/35 selection:text-[#111111]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home & Vision Hero + Verified Experience Record + Movement CTA #1 */}
        <HeroSection />

        {/* 2. About Me (Mr. Clarity) */}
        <AboutSection />

        {/* 3. My Leadership Journey (100L - 400L) */}
        <JourneySection />

        {/* 4. The Vision (Central Student Philosophy & REBIRTH vs LEGACY) */}
        <VisionSection />

        {/* 5. My Agenda (13-Pillar Overview Grid + CTA #2 + Full Expandable Agenda + LEGACY Principles + CTA #5) */}
        <AgendaSection />

        {/* 6. Student Opportunities (Talent & Opportunity Hub + CTA #3, Collaboration & Agency Initiative + CTA #4) */}
        <OpportunitiesSection />

        {/* 7. How I Intend to Approach Implementation & Accountability */}
        <ImplementationSection />

        {/* 8. Join the Movement & Vote for Mr. Clarity */}
        <MovementAndVoteSection />
      </main>

      {/* Footer with Movement CTA #6 */}
      <Footer />

      {/* Static Fixed WhatsApp Group Button — Always Visible on Mobile & Desktop */}
      <aside
        aria-label="Join the REBIRTH LEGACY WhatsApp Group"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40"
      >
        <a
          href={candidateConfig.whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 sm:px-5 sm:py-3 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] border-2 border-[#111111] shadow-lg transition-colors text-xs font-extrabold uppercase tracking-wider whitespace-nowrap"
          aria-label="Join the REBIRTH LEGACY WhatsApp Group"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Join WhatsApp Group</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </a>
      </aside>
    </div>
  );
}
