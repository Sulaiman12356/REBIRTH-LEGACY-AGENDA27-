import React from "react";
import { implementationStages } from "../data/agendaData";
import { 
  Ear, 
  Compass, 
  Rocket, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export const ImplementationSection: React.FC = () => {
  const getStageIcon = (stageNumber: number) => {
    switch (stageNumber) {
      case 1:
        return <Ear className="w-6 h-6 text-[#092C5C]" />;
      case 2:
        return <Compass className="w-6 h-6 text-[#092C5C]" />;
      case 3:
        return <Rocket className="w-6 h-6 text-[#092C5C]" />;
      case 4:
        return <RotateCcw className="w-6 h-6 text-[#092C5C]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#092C5C]" />;
    }
  };

  return (
    <section id="implementation" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            Execution Strategy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            BEYOND THE PROMISES. INTO PRACTICAL ACTION.
          </h2>
          <div className="w-16 h-1 bg-[#092C5C] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            An agenda without a disciplined delivery framework is merely a wishlist. Here is how proposed initiatives transition from conceptual proposals to structured, measurable execution.
          </p>
        </div>

        {/* Institutional Feasibility & Governance Disclaimer Banner */}
        <div className="p-6 rounded-xl bg-[#F4F7FB] border border-slate-200 mb-16 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-100/80 border border-amber-300 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#092C5C] font-heading mb-1">
                Institutional Grounding & Pragmatism
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Execution of all proposed initiatives is contingent upon available association resources, official institutional approvals from the Department of Computer Science and Faculty leadership, and constructive collaboration with class representatives and student stakeholders. We present commitments grounded in reality, not unrealistic claims.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Implementation Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {implementationStages.map((stage, idx) => (
            <div
              key={stage.stageNumber}
              className="p-6 sm:p-7 rounded-xl bg-[#F4F7FB] border border-slate-200 shadow-2xs hover:border-[#092C5C]/50 hover:bg-white transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getStageIcon(stage.stageNumber)}
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#C9A34A] bg-white px-2.5 py-1 rounded border border-slate-200">
                    STAGE 0{stage.stageNumber}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#092C5C] font-heading mb-1">
                  {stage.stageName}
                </h3>
                <p className="text-xs font-semibold text-[#1558A6] mb-3">
                  {stage.headline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                {/* Action Items List */}
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Key Execution Tasks:
                  </p>
                  {stage.actionItems.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#092C5C] font-bold mt-0.5">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Output Metric */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Tangible Output:
                </p>
                <p className="text-xs font-semibold text-[#092C5C] leading-snug">
                  {stage.keyOutputs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Narrative */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Iterative execution cycle: Continuous feedback loops ensure initiatives remain responsive to emerging semester dynamics.
          </p>
        </div>

      </div>
    </section>
  );
};
