import React, { useState, useMemo } from "react";
import { allAgendaPillars, legacyPrinciples, AgendaPillar } from "../data/agendaData";
import { MovementCta } from "./MovementCta";
import {
  ChevronDown,
  ChevronUp,
  Search,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  BookOpen,
  HeartHandshake,
  Cpu,
  ShieldCheck,
  Briefcase,
  Users,
  Award,
  Network,
  GraduationCap,
  Globe,
  Lightbulb,
  Megaphone,
  ArrowDownRight,
} from "lucide-react";

export const AgendaSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPillars, setExpandedPillars] = useState<Record<number, boolean>>({
    1: true,
    8: true,
    9: true,
  });

  const getPillarIcon = (iconName: string, className = "w-5 h-5 text-[#111111]") => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "HeartHandshake":
        return <HeartHandshake className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Network":
        return <Network className={className} />;
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "Lightbulb":
        return <Lightbulb className={className} />;
      case "Megaphone":
        return <Megaphone className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  const togglePillar = (num: number) => {
    setExpandedPillars((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const handleToggleAll = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    allAgendaPillars.forEach((p) => {
      next[p.number] = expand;
    });
    setExpandedPillars(next);
  };

  const jumpToPillar = (pillar: AgendaPillar) => {
    setActiveGroup("all");
    setSearchQuery("");
    setExpandedPillars((prev) => ({ ...prev, [pillar.number]: true }));
    const el = document.getElementById(`pillar-card-${pillar.number}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const filteredPillars = useMemo(() => {
    return allAgendaPillars.filter((p) => {
      const matchesGroup = activeGroup === "all" || p.group === activeGroup;
      if (!matchesGroup) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.shortIntro.toLowerCase().includes(q) ||
        p.problemAddressed.toLowerCase().includes(q) ||
        p.expectedBenefit.toLowerCase().includes(q) ||
        p.proposedInitiatives.some((i) => i.toLowerCase().includes(q))
      );
    });
  }, [activeGroup, searchQuery]);

  return (
    <section id="agenda" className="py-16 lg:py-24 bg-[#B9DFF5]/15 border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            PART 1: AGENDA OVERVIEW GRID (ALL 13 PILLARS)
            ============================================================ */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-extrabold uppercase tracking-wider mb-3">
            My Agenda Overview · 13 Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-heading tracking-tight mb-4 [text-wrap:balance]">
            THE COMPLETE REBIRTH LEGACY AGENDA.
          </h2>
          <p className="text-base text-[#111111]/80 leading-relaxed">
            Every pillar addresses a real challenge within our department, pairs it with practical proposed initiatives, and defines how students participate and benefit. Select any pillar below to read full details.
          </p>
        </div>

        {/* Visual Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {allAgendaPillars.map((pillar) => (
            <button
              key={pillar.number}
              type="button"
              onClick={() => jumpToPillar(pillar)}
              className={`p-5 rounded-lg text-left transition-all border flex flex-col justify-between group ${
                pillar.isFlagship
                  ? "bg-[#111111] text-[#FFFFFF] border-[#111111] hover:border-[#84E026]"
                  : "bg-[#FFFFFF] text-[#111111] border-[#111111]/15 hover:border-[#111111]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-extrabold px-2 py-0.5 rounded ${
                      pillar.isFlagship
                        ? "bg-[#84E026] text-[#111111]"
                        : "bg-[#B9DFF5]/60 text-[#111111]"
                    }`}
                  >
                    Pillar {pillar.number < 10 ? `0${pillar.number}` : pillar.number}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center ${
                      pillar.isFlagship ? "bg-[#FFFFFF]/10" : "bg-[#B9DFF5]/30"
                    }`}
                  >
                    {getPillarIcon(
                      pillar.iconName,
                      pillar.isFlagship ? "w-4 h-4 text-[#84E026]" : "w-4 h-4 text-[#111111]"
                    )}
                  </div>
                </div>

                <h3
                  className={`text-sm sm:text-base font-extrabold font-heading leading-snug mb-1.5 ${
                    pillar.isFlagship ? "text-[#FFFFFF]" : "text-[#111111]"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${
                    pillar.isFlagship ? "text-[#FFFFFF]/75" : "text-[#111111]/70"
                  }`}
                >
                  {pillar.shortIntro}
                </p>
              </div>

              <div
                className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-bold ${
                  pillar.isFlagship
                    ? "border-[#FFFFFF]/15 text-[#84E026]"
                    : "border-[#111111]/10 text-[#111111]/70 group-hover:text-[#111111]"
                }`}
              >
                <span>{pillar.isFlagship ? "Flagship Priority" : pillar.implementationCategory}</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>

        {/* PLACEMENT #2: WhatsApp Movement CTA right after the Agenda Overview */}
        <MovementCta
          variant="dark"
          contextTag="After the Agenda Overview · Share Your Voice"
        />

        {/* ============================================================
            PART 2: DETAILED EXPANDABLE PILLARS EXPLORER
            ============================================================ */}
        <div className="mt-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/65 mb-1">
                Detailed Breakdown
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-heading">
                Inspect Each Agenda Pillar
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleToggleAll(true)}
                className="px-3 py-1.5 text-xs font-bold rounded bg-[#FFFFFF] border border-[#111111]/20 text-[#111111] hover:border-[#111111] transition-colors"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={() => handleToggleAll(false)}
                className="px-3 py-1.5 text-xs font-bold rounded bg-[#FFFFFF] border border-[#111111]/20 text-[#111111] hover:border-[#111111] transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Filter Bar + Search */}
          <div className="bg-[#FFFFFF] p-3.5 sm:p-4 rounded-lg border border-[#111111]/15 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { key: "all", label: "All 13 Pillars" },
                { key: "Core Foundation (Pillars 1–7)", label: "Core Foundation (1–7)" },
                { key: "Flagship Opportunities (Pillars 8–9)", label: "Flagship Opportunities (8–9)" },
                { key: "Growth & Governance (Pillars 10–13)", label: "Growth & Governance (10–13)" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveGroup(tab.key)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap ${
                    activeGroup === tab.key
                      ? "bg-[#111111] text-[#FFFFFF]"
                      : "bg-[#B9DFF5]/30 text-[#111111] hover:bg-[#B9DFF5]/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-[#111111]/50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search initiatives, skills, welfare..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#111111]/20 rounded-md focus:outline-none focus:border-[#111111] text-[#111111] placeholder:text-[#111111]/45"
              />
            </div>
          </div>

          {/* Expandable Pillar Cards */}
          <div className="space-y-4">
            {filteredPillars.map((pillar) => {
              const isExpanded = !!expandedPillars[pillar.number];
              return (
                <div
                  key={pillar.number}
                  id={`pillar-card-${pillar.number}`}
                  className={`rounded-lg border bg-[#FFFFFF] transition-all overflow-hidden ${
                    isExpanded
                      ? "border-[#111111]"
                      : "border-[#111111]/20 hover:border-[#111111]/60"
                  }`}
                >
                  {/* Clickable Card Header */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => togglePillar(pillar.number)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        togglePillar(pillar.number);
                      }
                    }}
                    aria-expanded={isExpanded}
                    className="p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none hover:bg-[#B9DFF5]/10 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-4 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-md flex items-center justify-center font-extrabold text-lg font-heading shrink-0 ${
                          isExpanded
                            ? "bg-[#84E026] text-[#111111]"
                            : "bg-[#B9DFF5]/50 text-[#111111]"
                        }`}
                      >
                        {pillar.number < 10 ? `0${pillar.number}` : pillar.number}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs mb-1">
                          <span className="font-bold text-[#111111]/65 uppercase tracking-wider">
                            Pillar {pillar.number < 10 ? `0${pillar.number}` : pillar.number}
                          </span>
                          <span className="text-[#111111]/30">·</span>
                          <span className="font-bold text-[#111111] bg-[#B9DFF5]/50 px-2 py-0.5 rounded">
                            {pillar.implementationCategory}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-extrabold text-[#111111] font-heading leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#111111]/75 mt-1">
                          {pillar.shortIntro}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden md:inline text-xs font-bold text-[#111111]/60">
                        {isExpanded ? "Hide" : "Read More"}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center border ${
                          isExpanded
                            ? "bg-[#111111] text-[#84E026] border-[#111111]"
                            : "bg-[#FFFFFF] text-[#111111] border-[#111111]/20"
                        }`}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-4 border-t border-[#111111]/10 bg-[#FFFFFF]">
                      {pillar.headline && (
                        <p className="text-sm sm:text-base font-extrabold text-[#111111] bg-[#84E026]/25 border border-[#84E026] px-4 py-2.5 rounded-md mb-5">
                          {pillar.headline}
                        </p>
                      )}

                      {/* 1. Problem Being Addressed & 2. Proposed Solution */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded-md bg-[#B9DFF5]/20 border border-[#B9DFF5]">
                          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2">
                            <AlertCircle className="w-4 h-4" />
                            <span>1. Problem Being Addressed</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed">
                            {pillar.problemAddressed}
                          </p>
                        </div>

                        <div className="p-4 rounded-md bg-[#FFFFFF] border border-[#111111]/15">
                          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2">
                            {getPillarIcon(pillar.iconName, "w-4 h-4 text-[#111111]")}
                            <span>2. Proposed Solution</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed">
                            {pillar.proposedSolution}
                          </p>
                        </div>
                      </div>

                      {/* Proposed Initiatives */}
                      <div className="mb-6">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3">
                          Proposed Initiatives
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {pillar.proposedInitiatives.map((init, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-md bg-[#B9DFF5]/15 border border-[#111111]/10 text-xs sm:text-sm text-[#111111] flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{init}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3. Participation, 4. Expected Benefit, 5. Progress Communication */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#111111]/10">
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#111111] mb-1.5">
                            3. How Students Participate
                          </p>
                          <p className="text-xs text-[#111111]/80 leading-relaxed">
                            {pillar.studentParticipation}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#111111] mb-1.5">
                            4. Expected Student Benefit
                          </p>
                          <p className="text-xs text-[#111111]/80 leading-relaxed">
                            {pillar.expectedBenefit}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#111111] mb-1.5">
                            5. Progress Communication
                          </p>
                          <p className="text-xs text-[#111111]/80 leading-relaxed">
                            {pillar.progressCommunication}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            PART 3: LEGACY — SIX PRINCIPLES OF LASTING IMPACT
            ============================================================ */}
        <div className="mt-20 pt-14 border-t border-[#111111]/15">
          <div className="max-w-3xl mb-10">
            <span className="inline-block px-3 py-1 rounded bg-[#111111] text-[#84E026] text-xs font-extrabold uppercase tracking-wider mb-3">
              LEGACY · Six Principles of Lasting Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-heading tracking-tight mb-2">
              THE STANDARDS THAT MUST REMAIN AFTER THE TENURE.
            </h3>
            <p className="text-sm sm:text-base text-[#111111]/75">
              Every pillar of REBIRTH is governed by the six enduring principles of LEGACY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {legacyPrinciples.map((principle) => (
              <div
                key={principle.letter}
                className="p-6 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 hover:border-[#111111] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-md bg-[#111111] text-[#84E026] flex items-center justify-center font-extrabold text-xl font-heading">
                      {principle.letter}
                    </div>
                    <span className="text-xs font-bold text-[#111111]/50 uppercase tracking-wider">
                      LEGACY Principle
                    </span>
                  </div>
                  <h4 className="text-lg font-extrabold text-[#111111] font-heading mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-[#111111]/75 leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[#111111]/10">
                    {principle.coreFocus.map((focus, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#111111]/80">
                        <span className="font-bold text-[#111111]">·</span>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PLACEMENT #5: WhatsApp Movement CTA at the end of the full agenda */}
        <div className="mt-14">
          <MovementCta
            variant="dark"
            contextTag="End of the Full Agenda · Join the Conversation"
          />
        </div>
      </div>
    </section>
  );
};
