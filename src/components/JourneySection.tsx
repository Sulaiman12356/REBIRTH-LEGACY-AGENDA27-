import React, { useState } from "react";
import { journeyMilestones } from "../data/agendaData";
import { Calendar, CheckCircle2, ChevronRight, Layers, FileText, Vote, Building2 } from "lucide-react";

export const JourneySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const getMilestoneIcon = (nature: string) => {
    switch (nature) {
      case "Official Executive Office":
        return <FileText className="w-5 h-5 text-white" />;
      case "Student Representation":
        return <Layers className="w-5 h-5 text-white" />;
      case "Electoral Contest":
        return <Vote className="w-5 h-5 text-white" />;
      case "Entrepreneurial & Mentorship":
        return <Building2 className="w-5 h-5 text-white" />;
      default:
        return <Calendar className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            My Leadership Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            A JOURNEY OF REPRESENTATION, RESPONSIBILITY AND EXPERIENCE.
          </h2>
          <div className="w-16 h-1 bg-[#092C5C] mb-6" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tested through sustained student advocacy, official executive secretariat duties, and entrepreneurial venture building. Every milestone is presented with factual accuracy.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Rail & Detailed Card View */}
        <div className="hidden lg:block mb-12">
          {/* Progress / Step Indicators */}
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

            {journeyMilestones.map((item, index) => {
              const isSelected = selectedMilestone === index;
              return (
                <button
                  key={item.period}
                  type="button"
                  onClick={() => setSelectedMilestone(index)}
                  className={`relative z-10 p-5 rounded-xl text-left transition-all duration-200 border ${
                    isSelected
                      ? "bg-[#092C5C] text-white border-[#092C5C] shadow-lg translate-y-[-2px]"
                      : "bg-[#F4F7FB] text-slate-800 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#C9A34A] text-[#092C5C]"
                          : "bg-white text-[#1558A6] border border-slate-200"
                      }`}
                    >
                      {item.period}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        isSelected ? "bg-[#1558A6]" : "bg-slate-300"
                      }`}
                    >
                      {getMilestoneIcon(item.nature)}
                    </div>
                  </div>

                  <h3
                    className={`text-base font-bold font-heading line-clamp-1 mb-1 ${
                      isSelected ? "text-white" : "text-[#092C5C]"
                    }`}
                  >
                    {item.role}
                  </h3>
                  <p
                    className={`text-xs line-clamp-2 ${
                      isSelected ? "text-slate-200" : "text-slate-500"
                    }`}
                  >
                    {item.nature}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Inspection Panel for Selected Milestone */}
          {journeyMilestones[selectedMilestone] && (
            <div className="mt-8 p-8 rounded-xl bg-[#F4F7FB] border border-slate-200 shadow-sm animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C9A34A] bg-white px-2.5 py-1 rounded border border-slate-200">
                      {journeyMilestones[selectedMilestone].period}
                    </span>
                    <span className="text-xs font-semibold text-[#1558A6] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                      {journeyMilestones[selectedMilestone].statusBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#092C5C] font-heading">
                    {journeyMilestones[selectedMilestone].role}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mt-1">
                    {journeyMilestones[selectedMilestone].summary}
                  </p>
                </div>

                {journeyMilestones[selectedMilestone].contextNote && (
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200 max-w-sm shrink-0">
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                      💡 {journeyMilestones[selectedMilestone].contextNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Responsibilities & Impact */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#092C5C] mb-4">
                  Documented Responsibilities & Practical Experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {journeyMilestones[selectedMilestone].responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200 flex items-start gap-3 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C9A34A] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed font-normal">
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
        <div className="lg:hidden space-y-6">
          {journeyMilestones.map((item, index) => (
            <div
              key={item.period}
              className="p-6 rounded-xl bg-[#F4F7FB] border border-slate-200 shadow-xs relative"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#092C5C] bg-white px-2.5 py-1 rounded border border-slate-200">
                  {item.period}
                </span>
                <span className="text-[11px] font-semibold text-[#1558A6] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {item.nature}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#092C5C] font-heading mb-2">
                {item.role}
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {item.summary}
              </p>

              {item.contextNote && (
                <div className="p-3 rounded bg-white border border-slate-200 text-xs text-slate-600 mb-4 italic">
                  Note: {item.contextNote}
                </div>
              )}

              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Documented Responsibilities:
                </p>
                {item.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A34A] shrink-0 mt-0.5" />
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
