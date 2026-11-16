import React from "react";
import {
  implementationDistinctions,
  implementationStages,
  accountabilityFramework,
} from "../data/agendaData";
import { ShieldAlert, CheckCircle2, Ear, Compass, Rocket, RotateCcw, ShieldCheck } from "lucide-react";

export const ImplementationSection: React.FC = () => {
  const getStageIcon = (stageNumber: number) => {
    switch (stageNumber) {
      case 1:
        return <Ear className="w-5 h-5 text-[#111111]" />;
      case 2:
        return <Compass className="w-5 h-5 text-[#111111]" />;
      case 3:
        return <Rocket className="w-5 h-5 text-[#111111]" />;
      case 4:
        return <RotateCcw className="w-5 h-5 text-[#111111]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section id="implementation" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-extrabold uppercase tracking-wider mb-3">
            Implementation &amp; Accountability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-heading tracking-tight mb-4 [text-wrap:balance]">
            HOW I INTEND TO APPROACH IMPLEMENTATION.
          </h2>
          <p className="text-base text-[#111111]/80 leading-relaxed">
            Serious leadership requires planning, teamwork, resources, consultation and accountability. We do not present proposals as already-funded or guaranteed projects—here is how commitments will be executed honestly.
          </p>
        </div>

        {/* Section 13: Clear 4-Way Distinction */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] font-heading mb-5">
            Distinguishing Direct Action, Advocacy, Collaboration &amp; Approvals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {implementationDistinctions.map((item, idx) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-lg bg-[#FFFFFF] border border-[#111111]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#84E026] text-[#111111]">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-[#111111]/60 uppercase">
                      {item.subtitle}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#111111] font-heading mb-2">
                    {item.category}
                  </h4>
                  <p className="text-xs text-[#111111]/75 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#111111]/10 space-y-1.5">
                  {item.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="flex items-start gap-2 text-xs text-[#111111]/85">
                      <span className="font-bold text-[#111111]">·</span>
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Grounding Notice */}
        <div className="p-5 sm:p-6 rounded-lg bg-[#B9DFF5]/25 border border-[#B9DFF5] mb-16 flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-[#111111] text-[#84E026] flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#111111] font-heading mb-1">
              Responsible Commitment Standard
            </h4>
            <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed">
              For every major initiative, our framework communicates five clear benchmarks: (1) the problem it addresses, (2) the proposed solution, (3) how students will participate, (4) the expected benefit, and (5) how progress will be communicated. Physical events and facility-dependent programmes remain subject to available resources and official departmental approvals.
            </p>
          </div>
        </div>

        {/* 4 Execution Stages */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] font-heading mb-5">
            Four Practical Execution Stages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {implementationStages.map((stage) => (
              <div
                key={stage.stageNumber}
                className="p-5 rounded-lg bg-[#B9DFF5]/15 border border-[#111111]/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-[#FFFFFF] border border-[#111111]/15 flex items-center justify-center">
                      {getStageIcon(stage.stageNumber)}
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#111111] text-[#84E026]">
                      Stage 0{stage.stageNumber}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#111111] font-heading mb-1">
                    {stage.stageName}
                  </h4>
                  <p className="text-xs font-semibold text-[#111111]/70 mb-2">
                    {stage.headline}
                  </p>
                  <p className="text-xs text-[#111111]/80 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[#111111]/10">
                    {stage.actionItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#111111]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#111111]/10 text-[11px] font-bold text-[#111111]">
                  Output: {stage.keyOutputs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accountability Commitments */}
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] font-heading mb-5">
            Accountability &amp; Progress Communication Commitments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accountabilityFramework.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#111111]" />
                    <span className="text-[11px] font-bold text-[#111111] bg-[#B9DFF5]/60 px-2 py-0.5 rounded">
                      {item.frequency}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#111111] font-heading mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#111111]/75 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <p className="text-[11px] font-semibold text-[#111111]/70 pt-3 border-t border-[#111111]/10">
                  {item.mechanism}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
