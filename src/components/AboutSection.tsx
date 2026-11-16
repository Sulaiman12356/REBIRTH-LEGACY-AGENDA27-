import React from "react";
import { candidateConfig } from "../config/candidateConfig";
import { identityCards } from "../data/agendaData";
import { Users, TrendingUp, GraduationCap, Briefcase, Cpu, Quote, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-5 h-5 text-[#111111]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#111111]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#111111]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#111111]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#111111]" />;
      default:
        return <Users className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#B9DFF5]/20 border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/70 mb-2">
            About Me · {candidateConfig.popularName}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-heading tracking-tight mb-4 [text-wrap:balance]">
            BEYOND A TITLE. SERVING WITH CLARITY, COLLABORATION AND PURPOSE.
          </h2>
          <p className="text-base text-[#111111]/80 leading-relaxed">
            Leadership should not end with occupying an office. It should be reflected in the opportunities created, the people empowered, the problems solved and the positive changes that remain after the tenure.
          </p>
        </div>

        {/* Candidate Narrative + Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Narrative Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-7 sm:p-9 rounded-lg border border-[#111111]/15 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-bold uppercase tracking-wider mb-5">
                {candidateConfig.name} · {candidateConfig.popularName}
              </div>

              <div className="space-y-4 text-[#111111]/85 leading-relaxed text-base">
                <p>
                  <strong className="text-[#111111] font-bold">Onifade Sulaiman Ipesola</strong>, popularly known as{" "}
                  <strong className="text-[#111111] font-bold">Mr. Clarity</strong>, is a Computer Science student, young leader and digital entrepreneur who believes in the power of clarity, collaboration and purposeful action.
                </p>
                <p>
                  My experience in student leadership has taught me that leadership is not simply about having a title. It is about understanding people&apos;s needs, taking responsibility, listening and contributing to solutions.
                </p>
                <p>
                  My journey has given me opportunities to serve, learn, make mistakes, face challenges and understand the importance of teamwork. I believe every student deserves an environment where their voice can be heard, their abilities can be developed and their potential can be recognised.
                </p>
                <p className="font-semibold text-[#111111]">
                  Through REBIRTH LEGACY, I seek to contribute to a NACOS community that is more connected, inclusive, innovative and opportunity-driven.
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-[#111111]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#111111]/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Class Representative (100L–400L)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>NACOS General Secretary (300L)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>CEO, Clarity Digital Academy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Digital Skills &amp; AI Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Philosophy Dark Contrast Card */}
          <div className="lg:col-span-5 bg-[#111111] text-[#FFFFFF] p-7 sm:p-9 rounded-lg flex flex-col justify-between">
            <div>
              <Quote className="w-9 h-9 text-[#84E026] mb-5" />
              <p className="text-xs uppercase font-bold tracking-widest text-[#B9DFF5] mb-3">
                Guiding Principle
              </p>
              <blockquote className="text-2xl sm:text-3xl font-bold font-editorial italic text-[#FFFFFF] leading-snug mb-5">
                &ldquo;CLARITY CREATES DIRECTION. DIRECTION CREATES PROGRESS.&rdquo;
              </blockquote>
              <p className="text-sm text-[#FFFFFF]/80 leading-relaxed">
                When students understand available opportunities, trust how decisions are made, and collaborate across abilities, the entire NACOS community moves forward together.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#FFFFFF]/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#84E026] shrink-0 bg-[#111111]">
                <img
                  src={candidateConfig.assets.artisticPortrait}
                  alt={candidateConfig.popularName}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#FFFFFF] font-heading">
                  {candidateConfig.name}
                </p>
                <p className="text-xs font-semibold text-[#84E026]">
                  {candidateConfig.popularName} · {candidateConfig.department}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Five Core Identity Dimensions */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/65">
                Who I Am
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] font-heading">
                Leadership, Skills &amp; Service Dimensions
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {identityCards.map((card, idx) => (
              <div
                key={card.id}
                className="p-5 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 hover:border-[#111111] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#B9DFF5]/50 flex items-center justify-center mb-4">
                    {getIcon(card.iconName)}
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#111111]/60 mb-1">
                    {card.subtitle}
                  </p>
                  <h4 className="text-base font-extrabold text-[#111111] font-heading mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#111111]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#111111]/10 flex items-center justify-between text-[11px] font-bold text-[#111111]/50">
                  <span>0{idx + 1}</span>
                  <span className="text-[#111111]">Mr. Clarity</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
