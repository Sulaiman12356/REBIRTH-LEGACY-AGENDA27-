import React, { useState } from "react";
import { candidateConfig } from "../config/candidateConfig";
import { verifiedHighlights } from "../data/agendaData";
import { ArrowRight, MessageCircle, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activePortrait, setActivePortrait] = useState<"formal" | "studio">("formal");

  const currentPortraitSrc =
    activePortrait === "formal"
      ? candidateConfig.assets.primaryPortrait
      : candidateConfig.assets.artisticPortrait;

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#FFFFFF] border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Vision Headline, Supporting Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Institutional & Campaign Identifier */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
              <span className="px-3 py-1 rounded bg-[#B9DFF5] text-[#111111]">
                REBIRTH LEGACY
              </span>
              <span className="text-[#111111]/40">·</span>
              <span>OOU Computer Science · NACOS</span>
            </div>

            {/* Suggested Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-extrabold tracking-tight text-[#111111] font-heading leading-[1.08] mb-4 [text-wrap:balance]">
              A NEW CHAPTER FOR NACOS. A BETTER EXPERIENCE FOR EVERY STUDENT.
            </h1>

            {/* Campaign Meaning Tagline */}
            <p className="text-sm sm:text-base font-extrabold tracking-widest text-[#111111] uppercase mb-5 inline-flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-xs bg-[#84E026]" />
              <span>Renew. Rebuild. Leave a Legacy.</span>
            </p>

            {/* Supporting Narrative */}
            <div className="space-y-3 text-base text-[#111111]/80 leading-relaxed max-w-2xl mb-7">
              <p>
                NACOS is more than an association. It is a community of students with different abilities, ambitions, experiences and dreams.
              </p>
              <p>
                I believe our association should create an environment where students are supported academically, empowered with relevant skills, connected to meaningful opportunities and encouraged to build relationships that extend beyond their university experience.
              </p>
              <p className="font-medium text-[#111111]">
                Through REBIRTH LEGACY, I envision a more connected, inclusive, innovative and opportunity-driven NACOS.
              </p>
            </div>

            {/* Candidate Identity Bar */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#B9DFF5]/25 border border-[#B9DFF5] mb-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-md overflow-hidden border border-[#111111]/20 shrink-0 bg-[#111111]">
                <img
                  src={candidateConfig.assets.rebirthEmblem}
                  alt="REBIRTH LEGACY Crest"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/70">
                  {candidateConfig.title}
                </p>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#111111] font-heading tracking-tight">
                  {candidateConfig.name}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-[#111111]">
                  Popularly Known As{" "}
                  <span className="bg-[#84E026] px-1.5 py-0.5 rounded-xs">
                    {candidateConfig.popularName}
                  </span>
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTAs (Placement #1 of WhatsApp Movement Invite) */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#agenda"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#111111]/90 rounded-md transition-colors"
              >
                <span>EXPLORE MY AGENDA</span>
                <ArrowRight className="w-4 h-4 text-[#84E026]" />
              </a>

              <a
                href={candidateConfig.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111] bg-[#84E026] hover:bg-[#74CC1A] rounded-md border border-[#111111] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>JOIN THE MOVEMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Institutional Association Marks */}
            <div className="mt-7 pt-5 border-t border-[#111111]/10 flex flex-wrap items-center gap-5 text-xs text-[#111111]/75">
              <div className="flex items-center gap-2">
                <img
                  src={candidateConfig.assets.oouLogo}
                  alt="Olabisi Onabanjo University"
                  className="w-6 h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-semibold text-[#111111]">Olabisi Onabanjo University</span>
              </div>
              <span className="text-[#111111]/25">|</span>
              <div className="flex items-center gap-2">
                <img
                  src={candidateConfig.assets.nacosLogo}
                  alt="NACOS Official Logo"
                  className="w-6 h-6 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-semibold text-[#111111]">NACOS OOU Chapter</span>
              </div>
            </div>
          </div>

          {/* Right Column: Candidate Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-lg overflow-hidden border-2 border-[#111111] bg-[#111111]">
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#111111]">
                  <img
                    src={currentPortraitSrc}
                    alt={`${candidateConfig.name} - ${candidateConfig.popularName}`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111111]/95 via-[#111111]/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF]">
                    <p className="text-[11px] uppercase font-bold tracking-widest text-[#84E026]">
                      Aspiring NACOS President · OOU
                    </p>
                    <p className="text-lg font-extrabold font-heading tracking-tight">
                      {candidateConfig.name}
                    </p>
                    <p className="text-xs text-[#B9DFF5] font-medium">
                      Popularly Known As {candidateConfig.popularName}
                    </p>
                  </div>
                </div>

                {/* Portrait Toggle Bar */}
                <div className="bg-[#111111] px-4 py-2.5 flex items-center justify-between text-xs text-[#FFFFFF] border-t border-[#FFFFFF]/15">
                  <span className="font-medium text-[#FFFFFF]/80 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#84E026]" />
                    Candidate Portrait
                  </span>
                  <div className="flex items-center gap-1 bg-[#FFFFFF]/10 p-0.5 rounded">
                    <button
                      type="button"
                      onClick={() => setActivePortrait("formal")}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors ${
                        activePortrait === "formal"
                          ? "bg-[#84E026] text-[#111111]"
                          : "text-[#FFFFFF]/75 hover:text-[#FFFFFF]"
                      }`}
                    >
                      Formal Suit
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePortrait("studio")}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors ${
                        activePortrait === "studio"
                          ? "bg-[#84E026] text-[#111111]"
                          : "text-[#FFFFFF]/75 hover:text-[#FFFFFF]"
                      }`}
                    >
                      Studio B&amp;W
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Experience Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-[#111111]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/60">
                Verified Experience Record
              </p>
              <h3 className="text-base sm:text-lg font-extrabold text-[#111111] font-heading">
                Proven Service &amp; Departmental Involvement
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111]/75">
              <CheckCircle2 className="w-4 h-4 text-[#111111]" />
              <span>Factual record · No fabricated awards or claims</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verifiedHighlights.map((item) => (
              <div
                key={item.role}
                className="p-4 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 hover:border-[#111111] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-extrabold text-[#111111] bg-[#B9DFF5]/60 px-2 py-0.5 rounded">
                      {item.level}
                    </span>
                    <span className="font-semibold text-[#111111]/60">
                      {item.type === "office_held" && "Official Office"}
                      {item.type === "ongoing" && "Representation"}
                      {item.type === "contested" && "Contested"}
                      {item.type === "venture" && "Venture"}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-[#111111] font-heading mb-1">
                    {item.role}
                  </h4>
                  <p className="text-xs text-[#111111]/75 leading-relaxed">
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
