import React from "react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";
import { ArrowRight, MessageSquare, ChevronRight } from "lucide-react";

export const FinalSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#092C5C] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1558A6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C9A34A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Campaign Kicker */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#E2C479] mb-4">
          {candidateConfig.campaignName} · {candidateConfig.tagline}
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
          A NEW CHAPTER. A SHARED PURPOSE. A LASTING LEGACY.
        </h2>

        {/* Candidate Presentation */}
        <div className="inline-block p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs mb-10 max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">
            Presidential Candidate for NACOS OOU
          </p>
          <p className="text-2xl font-bold font-heading text-white">
            {candidateConfig.name}
          </p>
          <p className="text-sm font-semibold text-[#E2C479]">
            POPULARLY KNOWN AS {candidateConfig.popularName}
          </p>
          <p className="text-xs text-slate-300 mt-2">
            {candidateConfig.department} · {candidateConfig.institution}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#agenda"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#092C5C] bg-[#C9A34A] hover:bg-[#E2C479] rounded-md shadow-md transition-all duration-200"
          >
            <span>Explore The Agenda</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-md border border-white/20 transition-all duration-200"
          >
            <span>Get to Know Me</span>
          </a>

          <a
            href={getWhatsAppUrl("feedback")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1558A6] hover:bg-[#1a66bf] rounded-md transition-all duration-200 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#E2C479]" />
            <span>Send Feedback</span>
          </a>
        </div>

      </div>
    </section>
  );
};
