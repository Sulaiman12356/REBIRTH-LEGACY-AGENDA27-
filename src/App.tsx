/**
 * REBIRTH LEGACY NACOS PRESIDENTIAL AGENDA WEBSITE
 * Candidate: ONIFADE SULAIMAN IPESOLA (MR. CLARITY)
 * Institution: Olabisi Onabanjo University (OOU)
 * Department: Computer Science
 * Association: Nigerian Association of Computing Students (NACOS)
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { JourneySection } from "./components/JourneySection";
import { AgendaSection } from "./components/AgendaSection";
import { ImplementationSection } from "./components/ImplementationSection";
import { AccountabilitySection } from "./components/AccountabilitySection";
import { WhySection } from "./components/WhySection";
import { FeedbackSection } from "./components/FeedbackSection";
import { FinalSection } from "./components/FinalSection";
import { Footer } from "./components/Footer";
import { candidateConfig, getWhatsAppUrl } from "./config/candidateConfig";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function App() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B45] selection:bg-[#C9A34A]/25 selection:text-[#092C5C]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section & Verified Experience Highlights */}
        <HeroSection />

        {/* 3. About Mr. Clarity & 5 Identity Cards */}
        <AboutSection />

        {/* 4. Leadership Journey Timeline (100L - 400L) */}
        <JourneySection />

        {/* 5. The REBIRTH LEGACY Agenda (7 REBIRTH Pillars & 6 LEGACY Principles) */}
        <AgendaSection />

        {/* 6. From Vision to Implementation (4 Stages) */}
        <ImplementationSection />

        {/* 7. Accountability Section & Initiative Progress Tracker */}
        <AccountabilitySection />

        {/* 8. Why REBIRTH? Why LEGACY? */}
        <WhySection />

        {/* 9. Questions and Feedback (Direct WhatsApp Integration) */}
        <FeedbackSection />

        {/* 10. Final Call to Action Section */}
        <FinalSection />
      </main>

      {/* 11. Institutional Footer */}
      <Footer />

      {/* Floating Fast-Access WhatsApp Button on Mobile & Desktop */}
      {showFloatingButton && (
        <aside
          aria-label="Direct consultation"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-xs font-semibold uppercase tracking-wider"
            aria-label="Message Mr. Clarity on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span className="hidden sm:inline">Message Mr. Clarity</span>
          </a>
        </aside>
      )}
    </div>
  );
}
