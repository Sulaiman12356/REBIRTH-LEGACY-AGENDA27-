import React from "react";
import { centralPhilosophy, whyRebirthLegacy } from "../data/agendaData";
import { Sparkles, Landmark, Quote } from "lucide-react";

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-16 lg:py-24 bg-[#111111] text-[#FFFFFF] border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 12: Central Student Philosophy */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block px-3 py-1 rounded bg-[#84E026] text-[#111111] text-xs font-extrabold uppercase tracking-wider mb-5">
            The Vision · Central Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] font-heading tracking-tight leading-tight mb-6 [text-wrap:balance]">
            {centralPhilosophy.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed">
            <div className="space-y-4">
              <p>{centralPhilosophy.paragraphs[0]}</p>
              <p>{centralPhilosophy.paragraphs[1]}</p>
              <p>{centralPhilosophy.paragraphs[2]}</p>
            </div>
            <div className="space-y-4">
              <p className="text-[#FFFFFF] font-medium">
                {centralPhilosophy.paragraphs[3]}
              </p>
              <p className="text-[#B9DFF5] font-semibold">
                {centralPhilosophy.paragraphs[4]}
              </p>
              <div className="pt-4 border-t border-[#FFFFFF]/15">
                <p className="text-xs uppercase tracking-widest text-[#84E026] font-bold">
                  A New Chapter. A Shared Purpose. A Lasting Legacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* REBIRTH vs LEGACY Dual Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-stretch">
          {/* REBIRTH */}
          <div className="p-7 sm:p-8 rounded-lg bg-[#FFFFFF] text-[#111111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-md bg-[#84E026] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#111111]" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#B9DFF5] text-[#111111]">
                  {whyRebirthLegacy.rebirth.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold font-heading text-[#111111] mb-2">
                {whyRebirthLegacy.rebirth.title}
              </h3>
              <p className="text-sm text-[#111111]/75 leading-relaxed mb-6">
                {whyRebirthLegacy.rebirth.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#111111]/10">
                {whyRebirthLegacy.rebirth.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <span className="w-2 h-2 rounded-xs bg-[#84E026] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-[#111111] font-bold">{pt.label}:</strong>{" "}
                      <span className="text-[#111111]/75">{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LEGACY */}
          <div className="p-7 sm:p-8 rounded-lg bg-[#B9DFF5] text-[#111111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-md bg-[#111111] flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-[#84E026]" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFFFFF] text-[#111111]">
                  {whyRebirthLegacy.legacy.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold font-heading text-[#111111] mb-2">
                {whyRebirthLegacy.legacy.title}
              </h3>
              <p className="text-sm text-[#111111]/80 leading-relaxed mb-6">
                {whyRebirthLegacy.legacy.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#111111]/15">
                {whyRebirthLegacy.legacy.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <span className="w-2 h-2 rounded-xs bg-[#111111] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-[#111111] font-bold">{pt.label}:</strong>{" "}
                      <span className="text-[#111111]/80">{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Closing Quote */}
        <div className="p-6 sm:p-8 rounded-lg border border-[#FFFFFF]/20 text-center">
          <Quote className="w-7 h-7 text-[#84E026] mx-auto mb-3" />
          <blockquote className="text-lg sm:text-2xl font-bold font-editorial italic text-[#FFFFFF] leading-snug max-w-3xl mx-auto">
            &ldquo;{whyRebirthLegacy.closingQuote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};
