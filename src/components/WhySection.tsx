import React from "react";
import { whyRebirthLegacy } from "../data/agendaData";
import { Sparkles, Landmark, ArrowRight, Quote } from "lucide-react";

export const WhySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            The Ideological Core
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            WHY REBIRTH? WHY LEGACY?
          </h2>
          <div className="w-16 h-1 bg-[#092C5C] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Understanding the two twin pillars of our campaign identity: the immediate renewal we will champion, and the permanent standard we will leave behind.
          </p>
        </div>

        {/* Two Side-by-Side Visual Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Card 1: REBIRTH */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F4F7FB] border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#1558A6]/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1558A6]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#092C5C] text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-6 h-6 text-[#C9A34A]" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1558A6] bg-white px-3 py-1 rounded border border-slate-200">
                  Renewal Dynamic
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-2">
                {whyRebirthLegacy.rebirth.title}
              </h3>
              <p className="text-sm font-semibold text-[#1558A6] mb-4">
                {whyRebirthLegacy.rebirth.subtitle}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {whyRebirthLegacy.rebirth.description}
              </p>

              {/* Points */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200">
                {whyRebirthLegacy.rebirth.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#1558A6] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-[#092C5C] font-semibold">{pt.label}:</strong>{" "}
                      <span className="text-slate-600">{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>The Urgency of Action</span>
              <span className="font-semibold text-[#092C5C]">Part I</span>
            </div>
          </div>

          {/* Card 2: LEGACY */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#092C5C] text-white border border-[#1558A6] shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A34A]/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C9A34A] text-[#092C5C] flex items-center justify-center shadow-xs">
                  <Landmark className="w-6 h-6 text-[#092C5C]" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E2C479] bg-white/10 px-3 py-1 rounded border border-white/20">
                  Institutional Permanence
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-white font-heading tracking-tight mb-2">
                {whyRebirthLegacy.legacy.title}
              </h3>
              <p className="text-sm font-semibold text-[#E2C479] mb-4">
                {whyRebirthLegacy.legacy.subtitle}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                {whyRebirthLegacy.legacy.description}
              </p>

              {/* Points */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                {whyRebirthLegacy.legacy.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#C9A34A] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white font-semibold">{pt.label}:</strong>{" "}
                      <span className="text-slate-300">{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>The Enduring Impact</span>
              <span className="font-semibold text-[#E2C479]">Part II</span>
            </div>
          </div>

        </div>

        {/* Closing Philosophical Banner */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#F4F7FB] border border-slate-200 text-center max-w-4xl mx-auto shadow-2xs">
          <Quote className="w-8 h-8 text-[#C9A34A] mx-auto mb-4 opacity-80" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold font-editorial italic text-[#092C5C] leading-snug">
            “{whyRebirthLegacy.closingQuote}”
          </blockquote >
          <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-4">
            — Onifade Sulaiman Ipesola (Mr. Clarity)
          </p>
        </div>

      </div>
    </section>
  );
};
