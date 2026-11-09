import React, { useState } from "react";
import { accountabilityFramework } from "../data/agendaData";
import { 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  FileSpreadsheet, 
  Search, 
  HelpCircle,
  CheckCircle2,
  Calendar,
  AlertCircle
} from "lucide-react";
import { candidateConfig } from "../config/candidateConfig";

export const AccountabilitySection: React.FC = () => {
  // Demo interactive tracking view showing the realistic proposed initiative lifecycle
  const [filterPhase, setFilterPhase] = useState<string>("all");

  const sampleInitiativeTracking = [
    {
      title: "Weekly Departmental Academic & Timetable Briefs",
      category: "Responsive Leadership",
      phase: "Proposed - High Priority",
      mechanism: "Secretariat bulletin + Class Rep network",
      statusNote: "Ready for launch at session resumption",
    },
    {
      title: "Pre-Exam Peer Revision Clinics & Past Question Compilations",
      category: "Educational Excellence",
      phase: "Proposed - High Priority",
      mechanism: "Volunteer senior student tutors & course outline mapping",
      statusNote: "Subject to lecturer coordination and lecture venue clearance",
    },
    {
      title: "Freshman Academic Clearance & Resumption Survival Guide",
      category: "Student Welfare",
      phase: "Staged for Orientation",
      mechanism: "Digital publication & freshman orientation outreach",
      statusNote: "Draft curriculum ready for distribution",
    },
    {
      title: "Hands-on Practical Coding & Open Source Build Sessions",
      category: "Innovation & Digital Empowerment",
      phase: "In Consultation Planning",
      mechanism: "Weekend technical workshops & GitHub collaborative projects",
      statusNote: "Partnering with student tech mentors and alumni",
    },
    {
      title: "Quarterly Alumni Tech Career & SIWES Preparation Webinars",
      category: "Training & Career",
      phase: "Proposed - Strategic",
      mechanism: "Virtual alumni panels & resume review clinics",
      statusNote: "Alumni network outreach to commence upon assumption of office",
    },
  ];

  return (
    <section id="accountability" className="py-20 lg:py-28 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            Governance & Transparency
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            LEADERSHIP MUST BE ACCOUNTABLE.
          </h2>
          <div className="w-16 h-1 bg-[#C9A34A] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Commitments should not end with campaign statements. Students should be able to understand what has been proposed, what is being worked on, and what requires further attention.
          </p>
        </div>

        {/* 5 Accountability Commitments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {accountabilityFramework.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] border border-slate-200 flex items-center justify-center text-[#092C5C]">
                    <ShieldCheck className="w-5 h-5 text-[#1558A6]" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                    {item.frequency}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#092C5C] font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Delivery Mechanism:
                </p>
                <p className="text-xs font-medium text-[#092C5C]">
                  {item.mechanism}
                </p>
              </div>
            </div>
          ))}

          {/* Special Integrity Callout in the 6th spot */}
          <div className="p-6 rounded-xl bg-[#092C5C] text-white border border-[#1558A6] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#C9A34A] mb-4">
                <AlertCircle className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#E2C479] mb-1">
                Zero Fabrication Policy
              </p>
              <h3 className="text-lg font-bold font-heading mb-2">
                Honesty Over Hype
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We refuse to invent fake statistics or present future proposals as completed projects. True leadership communicates what is possible, what is in progress, and the exact constraints faced.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-[#E2C479] font-medium">
              Verified Transparency Principle
            </div>
          </div>
        </div>

        {/* Clean Progress-Report Visual Component */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1558A6]">
                Transparent Lifecycle Tracking
              </p>
              <h3 className="text-xl font-bold text-[#092C5C] font-heading">
                Proposed Initiative Operational Tracker
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                How every REBIRTH LEGACY commitment will be documented and reported to the NACOS congress.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">Proposed Status:</span>
              <span className="font-semibold text-[#092C5C] bg-[#F4F7FB] px-2.5 py-1 rounded border border-slate-200">
                Awaiting Executive Mandate
              </span>
            </div>
          </div>

          {/* Tracker Table / Cards */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F4F7FB] text-slate-700 text-xs uppercase font-bold tracking-wider">
                  <th className="py-3 px-4">Proposed Initiative</th>
                  <th className="py-3 px-4">Agenda Pillar</th>
                  <th className="py-3 px-4">Planning Phase</th>
                  <th className="py-3 px-4">Reporting Mechanism</th>
                  <th className="py-3 px-4">Implementation Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {sampleInitiativeTracking.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#092C5C]">
                      {item.title}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-[#1558A6] border border-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1558A6]" />
                        {item.phase}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {item.mechanism}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 italic">
                      {item.statusNote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Framework governed by NACOS OOU Constitution and Departmental Regulations</span>
            <span className="font-semibold text-[#092C5C]">Mr. Clarity Presidential Commitments</span>
          </div>
        </div>

      </div>
    </section>
  );
};
