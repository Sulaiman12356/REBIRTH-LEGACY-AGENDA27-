import React, { useState } from "react";
import { candidateConfig } from "../config/candidateConfig";
import { verifiedHighlights } from "../data/agendaData";
import { ArrowRight, UserCheck, ShieldCheck, CheckCircle2, Sparkles, Image as ImageIcon } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activePortrait, setActivePortrait] = useState<"formal" | "studio">("formal");

  const currentPortraitSrc =
    activePortrait === "formal"
      ? candidateConfig.assets.primaryPortrait
      : candidateConfig.assets.artisticPortrait;

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Background Subtle Institutional Grid & Ambient Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#092C5C_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#1558A6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#C9A34A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Agenda Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Department & Association Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#092C5C] bg-[#F4F7FB] border border-slate-200 px-3 py-1.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A34A]" />
                OOU Computer Science Department · NACOS
              </span>
            </div>

            {/* Campaign Identity */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#092C5C] font-heading leading-[1.08] mb-3">
              REBIRTH LEGACY
            </h1>

            {/* Supporting Tagline */}
            <p className="text-lg sm:text-xl font-bold tracking-wide text-[#C9A34A] uppercase font-heading mb-4">
              RENEW. REBUILD. LEAVE A LEGACY.
            </p>

            {/* High-Level Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              A vision for a more connected, academically supportive, innovative, and opportunity-driven NACOS community.
            </p>

            {/* Candidate Identity Callout */}
            <div className="p-5 sm:p-6 bg-[#F4F7FB] border border-slate-200/90 rounded-lg mb-8 relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-300 shrink-0 bg-white shadow-xs">
                  <img
                    src={candidateConfig.assets.rebirthEmblem}
                    alt="Rebirth Emblem"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase font-semibold tracking-wider text-[#1558A6] mb-0.5">
                    Presidential Aspirant
                  </p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#092C5C] font-heading tracking-tight leading-snug">
                    {candidateConfig.name}
                  </h2>
                  <p className="text-sm font-semibold text-[#C9A34A] tracking-wide mb-2">
                    Popularly Known As {candidateConfig.popularName}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A Computer Science student, student representative, digital entrepreneur, and technology enthusiast with experience in departmental representation and NACOS administration.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#agenda"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#092C5C] hover:bg-[#1558A6] rounded-md shadow-sm transition-all duration-200 border border-[#092C5C]"
              >
                <span>Explore My Agenda</span>
                <ArrowRight className="w-4 h-4 text-[#C9A34A]" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#092C5C] bg-white hover:bg-slate-50 rounded-md border border-slate-300 transition-colors shadow-xs"
              >
                <span>Get to Know Mr. Clarity</span>
              </a>
            </div>

            {/* Institutional Endorsement Marks */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <img
                  src={candidateConfig.assets.oouLogo}
                  alt="Olabisi Onabanjo University"
                  className="w-6 h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-medium text-slate-700">Olabisi Onabanjo University</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <img
                  src={candidateConfig.assets.nacosLogo}
                  alt="NACOS Official Logo"
                  className="w-6 h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-medium text-slate-700">NACOS OOU Chapter</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Candidate Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-xl overflow-hidden bg-slate-900 border-2 border-slate-200 shadow-xl group">
                
                {/* Real Candidate Portrait */}
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={currentPortraitSrc}
                    alt={`${candidateConfig.name} - ${candidateConfig.popularName}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient at the bottom for caption readability */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#092C5C]/90 via-[#092C5C]/50 to-transparent pointer-events-none" />

                  {/* Overlaid Candidate Name Badge on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase font-bold tracking-widest text-[#E2C479]">
                      Candidate for NACOS President
                    </p>
                    <p className="text-lg font-bold font-heading text-white tracking-tight">
                      {candidateConfig.name}
                    </p>
                    <p className="text-xs text-slate-200">
                      Popularly Known As <span className="text-[#E2C479] font-semibold">{candidateConfig.popularName}</span>
                    </p>
                  </div>
                </div>

                {/* Portrait Switcher Control */}
                <div className="bg-[#092C5C] px-4 py-2.5 flex items-center justify-between text-xs text-slate-200 border-t border-[#1558A6]">
                  <span className="font-medium text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C9A34A]" />
                    Official Portrait
                  </span>
                  
                  <div className="flex items-center gap-1 bg-black/30 p-0.5 rounded">
                    <button
                      type="button"
                      onClick={() => setActivePortrait("formal")}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        activePortrait === "formal"
                          ? "bg-[#C9A34A] text-[#092C5C] font-semibold shadow-xs"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Formal Suit
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePortrait("studio")}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        activePortrait === "studio"
                          ? "bg-[#C9A34A] text-[#092C5C] font-semibold shadow-xs"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Studio B&W
                    </button>
                  </div>
                </div>
              </div>

              {/* Supporting Credibility Note */}
              <p className="text-xs text-center text-slate-500 mt-3">
                Authentic presidential campaign portrait · Department of Computer Science
              </p>
            </div>
          </div>

        </div>

        {/* STRICT VERIFIED EXPERIENCE HIGHLIGHTS BAR */}
        {/* Adheres strictly to content guidelines: no invented durations or fake stats */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A]">
                Documented Leadership Record
              </p>
              <h3 className="text-lg font-bold text-[#092C5C] font-heading">
                Verified Experience Highlights
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-[#F4F7FB] px-3 py-1.5 rounded border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Accurate departmental record · No fabricated years or statistics</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verifiedHighlights.map((item) => (
              <div
                key={item.role}
                className="p-4 rounded-lg bg-[#F4F7FB] border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1558A6]">
                      {item.level}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {item.type === "office_held" && "Official Office"}
                      {item.type === "ongoing" && "Representation"}
                      {item.type === "contested" && "Election Contest"}
                      {item.type === "venture" && "Entrepreneurship"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#092C5C] font-heading leading-tight mb-1.5">
                    {item.role}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
