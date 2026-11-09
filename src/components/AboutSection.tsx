import React from "react";
import { candidateConfig } from "../config/candidateConfig";
import { identityCards } from "../data/agendaData";
import { Users, TrendingUp, GraduationCap, Briefcase, Cpu, Quote, CheckCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-5 h-5 text-[#092C5C]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#092C5C]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#092C5C]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#092C5C]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#092C5C]" />;
      default:
        return <Users className="w-5 h-5 text-[#092C5C]" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F7FB] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            Who is Mr. Clarity?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            BEYOND THE NAME. UNDERSTAND THE JOURNEY.
          </h2>
          <div className="w-16 h-1 bg-[#C9A34A] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive, grounded introduction to Onifade Sulaiman Ipesola — his origins in grassroot representation, his administrative experience in NACOS, and his vision for institutional clarity.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Factual Biography */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1558A6] bg-[#F4F7FB] px-3 py-1 rounded mb-6">
                <span>Authentic Profile & Purpose</span>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  <strong className="text-[#092C5C] font-semibold">Onifade Sulaiman Ipesola</strong>, popularly known as <span className="text-[#1558A6] font-semibold">Mr. Clarity</span>, is a Computer Science student of Olabisi Onabanjo University, a dedicated student leader, digital marketing strategist, and entrepreneur.
                </p>
                <p>
                  His leadership journey began through grassroot student representation as a <span className="font-semibold text-[#092C5C]">Class Representative</span> (from 100L through 400L) and deepened through active participation in departmental administration and official service as the <span className="font-semibold text-[#092C5C]">NACOS General Secretary</span> in 300L.
                </p>
                <p>
                  Beyond campus, he is deeply passionate about digital skills development, entrepreneurship, artificial intelligence, digital marketing, and helping students and young professionals find clarity in their academics, career development, and technological aspirations.
                </p>
              </div>

              {/* Core Attributes */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A34A] shrink-0" />
                  <span>4 Academic Sessions of Class Representation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A34A] shrink-0" />
                  <span>300L NACOS General Secretary Tenure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A34A] shrink-0" />
                  <span>Founder, Clarity Digital Academy</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C9A34A] shrink-0" />
                  <span>Departmental Committee Participant</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Department of Computer Science</span>
              <span>Olabisi Onabanjo University</span>
            </div>
          </div>

          {/* Philosophy Card & Visual Callout */}
          <div className="lg:col-span-5 bg-[#092C5C] text-white p-8 sm:p-10 rounded-xl border border-[#1558A6] shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Ambient background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1558A6]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <Quote className="w-10 h-10 text-[#C9A34A] mb-6 opacity-90" />
              <p className="text-xs uppercase font-bold tracking-widest text-[#E2C479] mb-3">
                Core Leadership Philosophy
              </p>
              <blockquote className="text-2xl sm:text-3xl font-bold font-editorial italic text-white leading-snug mb-6">
                “CLARITY CREATES DIRECTION. DIRECTION CREATES PROGRESS.”
              </blockquote>
              <p className="text-sm text-slate-300 leading-relaxed">
                When students clearly understand what is happening, where resources are going, and what opportunities exist, progress ceases to be accidental and becomes collective.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A34A] shrink-0 bg-slate-800">
                <img
                  src={candidateConfig.assets.artisticPortrait}
                  alt={candidateConfig.popularName}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white font-heading">
                  {candidateConfig.name}
                </p>
                <p className="text-xs text-[#E2C479]">
                  {candidateConfig.popularName}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Distinct Identity Cards */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1558A6]">
                Multi-Faceted Competence
              </p>
              <h3 className="text-2xl font-bold text-[#092C5C] font-heading">
                Five Core Leadership Dimensions
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Grounding academic representation with practical industry skills
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {identityCards.map((card, idx) => (
              <div
                key={card.id}
                className={`p-6 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#1558A6]/40 hover:shadow-md transition-all flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-1 border-t-4 border-t-[#092C5C]" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] border border-slate-200 flex items-center justify-center mb-4">
                    {getIcon(card.iconName)}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A34A] mb-1">
                    {card.subtitle}
                  </p>
                  <h4 className="text-lg font-bold text-[#092C5C] font-heading mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>Dimension 0{idx + 1}</span>
                  <span className="text-[#1558A6]">Mr. Clarity</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
