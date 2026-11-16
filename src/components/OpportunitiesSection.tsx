import React from "react";
import { talentHubData, collaborationAgencyData } from "../data/agendaData";
import { MovementCta } from "./MovementCta";
import {
  Award,
  CheckCircle2,
  ArrowRight,
  Users,
  Network,
  Scale,
  Lightbulb,
} from "lucide-react";

export const OpportunitiesSection: React.FC = () => {
  return (
    <section id="opportunities" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded bg-[#84E026] text-[#111111] text-xs font-extrabold uppercase tracking-wider mb-3">
            Flagship Student Opportunities · Pillars 08 &amp; 09
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-heading tracking-tight mb-4 [text-wrap:balance]">
            UNLOCKING STUDENT TALENT, COLLABORATION AND REAL-WORLD GROWTH.
          </h2>
          <p className="text-base text-[#111111]/80 leading-relaxed">
            Two cornerstone initiatives designed to ensure no student&apos;s skill remains unseen and no ambitious student has to build alone.
          </p>
        </div>

        {/* ============================================================
            FLAGSHIP INITIATIVE 1: STUDENT TALENT AND OPPORTUNITY HUB
            ============================================================ */}
        <div className="p-6 sm:p-10 rounded-lg bg-[#B9DFF5]/20 border border-[#B9DFF5] mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-md bg-[#111111] text-[#84E026] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/65">
                  Pillar 0{talentHubData.pillarNumber} · Flagship Initiative
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] font-heading">
                  {talentHubData.title}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-[#84E026] text-[#111111] text-xs font-extrabold uppercase tracking-wider">
              Equal Opportunity Priority
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111111] font-heading tracking-tight mb-5 [text-wrap:balance]">
            {talentHubData.headline}
          </h4>

          {/* Vision + Equal Opportunity Principle Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#111111]/85 leading-relaxed">
              {talentHubData.visionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="pt-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3">
                  Proposed Hub Initiatives (7 Action Points)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {talentHubData.initiatives.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-md bg-[#FFFFFF] border border-[#111111]/10 flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]"
                    >
                      <span className="font-extrabold text-[#111111] bg-[#B9DFF5] px-1.5 py-0.5 rounded text-[11px] shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Equal Opportunity Principle Callout */}
            <div className="lg:col-span-5 bg-[#111111] text-[#FFFFFF] p-6 sm:p-7 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <Scale className="w-5 h-5 text-[#84E026]" />
                  <h5 className="text-base font-extrabold font-heading text-[#FFFFFF]">
                    {talentHubData.equalOpportunityPrinciple.title}
                  </h5>
                </div>
                <div className="space-y-3 mb-6">
                  {talentHubData.equalOpportunityPrinciple.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FFFFFF]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#84E026] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-md bg-[#FFFFFF]/10 border border-[#FFFFFF]/15">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#B9DFF5] mb-1">
                  Core Goal
                </p>
                <p className="text-sm font-bold text-[#84E026]">
                  {talentHubData.equalOpportunityPrinciple.closingGoal}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Journey Flow */}
          <div className="pt-6 border-t border-[#111111]/10">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-4">
              Student Talent Hub Journey
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {talentHubData.journeySteps.map((s, idx) => (
                <div
                  key={s.step}
                  className="p-4 rounded-md bg-[#FFFFFF] border border-[#111111]/15 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-[#84E026] text-[#111111]">
                        Step 0{s.step}
                      </span>
                      {idx < talentHubData.journeySteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#111111]/40 hidden lg:block" />
                      )}
                    </div>
                    <h5 className="text-sm font-extrabold text-[#111111] font-heading mb-1">
                      {s.label}
                    </h5>
                    <p className="text-xs text-[#111111]/70">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PLACEMENT #3: WhatsApp Movement CTA after Talent & Opportunity Hub */}
        <MovementCta
          variant="compact"
          contextTag="Student Talent & Opportunity Hub · Join the Conversation"
        />

        {/* ============================================================
            FLAGSHIP INITIATIVE 2: STUDENT COLLABORATION & AGENCY INITIATIVE
            ============================================================ */}
        <div className="p-6 sm:p-10 rounded-lg bg-[#FFFFFF] border-2 border-[#111111] mt-14 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-md bg-[#B9DFF5] text-[#111111] flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/65">
                  Pillar 0{collaborationAgencyData.pillarNumber} · Flagship Initiative
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] font-heading">
                  {collaborationAgencyData.title}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-extrabold uppercase tracking-wider">
              Tech &amp; Non-Tech Ventures
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111111] font-heading tracking-tight mb-5 [text-wrap:balance]">
            {collaborationAgencyData.headline}
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#111111]/85 leading-relaxed">
              {collaborationAgencyData.visionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <p className="text-sm font-bold text-[#111111] bg-[#B9DFF5]/35 px-4 py-3 rounded-md border border-[#B9DFF5]">
                {collaborationAgencyData.inclusiveNote}
              </p>

              <div className="pt-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3">
                  Proposed Collaboration Initiatives (8 Action Points)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {collaborationAgencyData.initiatives.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-md bg-[#B9DFF5]/15 border border-[#111111]/10 flex items-start gap-2 text-xs sm:text-sm text-[#111111]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Bigger Picture Card */}
            <div className="lg:col-span-5 bg-[#B9DFF5]/35 border border-[#B9DFF5] p-6 sm:p-7 rounded-lg flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-[#111111] text-[#84E026] flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/65 mb-2">
                  Collective Growth Mindset
                </p>
                <h5 className="text-xl font-extrabold text-[#111111] font-heading mb-3">
                  {collaborationAgencyData.biggerPicture.title}
                </h5>
                <p className="text-sm sm:text-base text-[#111111]/85 leading-relaxed">
                  {collaborationAgencyData.biggerPicture.text}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#111111]/15">
                <p className="text-xs font-bold text-[#111111]">
                  Example Collaboration: Graphic Designer + Web Developer + Marketer + Business Lead = Student Agency
                </p>
              </div>
            </div>
          </div>

          {/* Visual Flow: Individual Students -> Connections -> Collaborative Teams -> Student Agencies -> Projects and Clients */}
          <div className="pt-6 border-t border-[#111111]/10">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-4">
              Collaboration &amp; Agency Pathway
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {collaborationAgencyData.journeySteps.map((s, idx) => (
                <div
                  key={s.step}
                  className="p-4 rounded-md bg-[#111111] text-[#FFFFFF] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-[#B9DFF5] text-[#111111]">
                        Stage 0{s.step}
                      </span>
                      {idx < collaborationAgencyData.journeySteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#84E026] hidden lg:block" />
                      )}
                    </div>
                    <h5 className="text-sm font-extrabold text-[#FFFFFF] font-heading mb-1">
                      {s.label}
                    </h5>
                    <p className="text-xs text-[#FFFFFF]/75">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PLACEMENT #4: WhatsApp Movement CTA after Collaboration & Agency Initiative */}
        <MovementCta
          variant="light-blue"
          contextTag="Student Collaboration & Agency Initiative"
        />
      </div>
    </section>
  );
};
