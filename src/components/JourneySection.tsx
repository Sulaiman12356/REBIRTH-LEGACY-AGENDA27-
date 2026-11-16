import React, { useState } from "react";
import { journeyMilestones } from "../data/agendaData";
import { Calendar, CheckCircle2, Layers, FileText, Vote, Building2 } from "lucide-react";

export const JourneySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const getMilestoneIcon = (nature: string, isSelected: boolean) => {
    const colorClass = isSelected ? "w-5 h-5 text-[#111111]" : "w-5 h-5 text-[#111111]";
    switch (nature) {
      case "Official Executive Office":
        return <FileText className={colorClass} />;
      case "Student Representation":
        return <Layers className={colorClass} />;
      case "Electoral Contest":
        return <Vote className={colorClass} />;
      case "Entrepreneurial & Mentorship":
        return <Building2 className={colorClass} />;
      default:
        return <Calendar className={colorClass} />;
    }
  };

  return (
    <section id="journey" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/65 mb-2">
            My Leadership Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-heading tracking-tight mb-4 [text-wrap:balance]">
            A JOURNEY OF REPRESENTATION, RESPONSIBILITY AND EXPERIENCE.
          </h2>
          <p className="text-base text-[#111111]/80 leading-relaxed">
            Grounded in continuous grassroots service, official executive administration, and community empowerment. Every milestone reflects real experience—with clear distinction between offices held and positions contested.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Rail */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#111111]/15 -translate-y-1/2 z-0" />

            {journeyMilestones.map((item, index) => {
              const isSelected = selectedMilestone === index;
              return (
                <button
                  key={item.period}
                  type="button"
                  onClick={() => setSelectedMilestone(index)}
                  className={`relative z-10 p-5 rounded-lg text-left transition-all duration-200 border ${
                    isSelected
                      ? "bg-[#111111] text-[#FFFFFF] border-[#111111]"
                      : "bg-[#FFFFFF] text-[#111111] border-[#111111]/20 hover:border-[#111111]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#84E026] text-[#111111]"
                          : "bg-[#B9DFF5]/60 text-[#111111]"
                      }`}
                    >
                      {item.period}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center ${
                        isSelected ? "bg-[#B9DFF5]" : "bg-[#B9DFF5]/40"
                      }`}
                    >
                      {getMilestoneIcon(item.nature, isSelected)}
                    </div>
                  </div>

                  <h3
                    className={`text-base font-extrabold font-heading line-clamp-1 mb-1 ${
                      isSelected ? "text-[#FFFFFF]" : "text-[#111111]"
                    }`}
                  >
                    {item.role}
                  </h3>
                  <p
                    className={`text-xs line-clamp-2 ${
                      isSelected ? "text-[#FFFFFF]/75" : "text-[#111111]/65"
                    }`}
                  >
                    {item.nature}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Milestone Detail Panel */}
          {journeyMilestones[selectedMilestone] && (
            <div className="mt-6 p-7 sm:p-8 rounded-lg bg-[#B9DFF5]/20 border border-[#B9DFF5]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#111111]/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#111111] bg-[#84E026] px-2.5 py-1 rounded">
                      {journeyMilestones[selectedMilestone].period}
                    </span>
                    <span className="text-xs font-bold text-[#111111] bg-[#FFFFFF] px-2.5 py-1 rounded border border-[#111111]/15">
                      {journeyMilestones[selectedMilestone].statusBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#111111] font-heading">
                    {journeyMilestones[selectedMilestone].role}
                  </h3>
                  <p className="text-sm text-[#111111]/80 mt-1 max-w-2xl">
                    {journeyMilestones[selectedMilestone].summary}
                  </p>
                </div>

                {journeyMilestones[selectedMilestone].contextNote && (
                  <div className="p-3.5 bg-[#FFFFFF] rounded-md border border-[#111111]/15 max-w-sm shrink-0">
                    <p className="text-xs font-medium text-[#111111]/85 leading-relaxed">
                      {journeyMilestones[selectedMilestone].contextNote}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3.5">
                  Documented Responsibilities &amp; Experience
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {journeyMilestones[selectedMilestone].responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-md bg-[#FFFFFF] border border-[#111111]/10 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-5">
          {journeyMilestones.map((item) => (
            <div
              key={item.period}
              className="p-5 sm:p-6 rounded-lg bg-[#B9DFF5]/20 border border-[#B9DFF5]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#111111] bg-[#84E026] px-2.5 py-1 rounded">
                  {item.period}
                </span>
                <span className="text-[11px] font-bold text-[#111111] bg-[#FFFFFF] px-2.5 py-0.5 rounded border border-[#111111]/15">
                  {item.statusBadge}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#111111] font-heading mb-2">
                {item.role}
              </h3>
              <p className="text-sm text-[#111111]/80 mb-4 leading-relaxed">
                {item.summary}
              </p>

              <div className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
