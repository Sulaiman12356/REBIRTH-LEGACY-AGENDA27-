import React, { useState, useMemo } from "react";
import { rebirthPillars, legacyPrinciples } from "../data/agendaData";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Sparkles, 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  Workflow, 
  TrendingUp, 
  ShieldCheck,
  Bookmark,
  Share2,
  Copy,
  Check
} from "lucide-react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";

export const AgendaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "rebirth" | "legacy">("all");
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    // By default, open the first two pillars for instant discoverability
    "R-0": true,
    "E-1": true,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedPillar, setCopiedPillar] = useState<string | null>(null);

  // Toggle single card
  const togglePillar = (id: string) => {
    setExpandedPillars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand or Collapse All
  const handleToggleAll = (expand: boolean) => {
    const nextState: Record<string, boolean> = {};
    rebirthPillars.forEach((_, idx) => {
      nextState[`pillar-${idx}`] = expand;
      nextState[`${rebirthPillars[idx].letter}-${idx}`] = expand;
    });
    setExpandedPillars(nextState);
  };

  // Filtered REBIRTH Pillars based on search
  const filteredRebirth = useMemo(() => {
    if (!searchQuery.trim()) return rebirthPillars;
    const q = searchQuery.toLowerCase();
    return rebirthPillars.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.meaning.toLowerCase().includes(q) ||
        p.problemAddressed.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.proposedInitiatives.some((i) => i.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Filtered LEGACY Principles based on search
  const filteredLegacy = useMemo(() => {
    if (!searchQuery.trim()) return legacyPrinciples;
    const q = searchQuery.toLowerCase();
    return legacyPrinciples.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.coreFocus.some((f) => f.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Copy Pillar text to share
  const handleCopySummary = (title: string, meaning: string) => {
    const text = `REBIRTH LEGACY Pillar: ${title}\nMeaning: ${meaning}\nCandidate: Onifade Sulaiman Ipesola (Mr. Clarity) - NACOS OOU`;
    navigator.clipboard.writeText(text);
    setCopiedPillar(title);
    setTimeout(() => setCopiedPillar(null), 2000);
  };

  return (
    <section id="agenda" className="py-20 lg:py-28 bg-[#F4F7FB] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            The Presidential Blueprint
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            THE REBIRTH LEGACY AGENDA
          </h2>
          <div className="w-16 h-1 bg-[#C9A34A] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A framework for renewal, development, opportunity, responsible representation, and lasting institutional impact for every computing student at OOU.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Segmented Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F4F7FB] rounded-lg border border-slate-200/80 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#092C5C] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All 13 Pillars & Principles
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("rebirth")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === "rebirth"
                  ? "bg-[#092C5C] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Part A: REBIRTH (7 Pillars)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("legacy")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === "legacy"
                  ? "bg-[#092C5C] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Part B: LEGACY (6 Principles)
            </button>
          </div>

          {/* Search Box & Expand Toggles */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search agenda initiatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#092C5C] text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleToggleAll(true)}
                className="px-2.5 py-1.5 text-[11px] font-medium text-slate-600 hover:text-[#092C5C] bg-slate-100 hover:bg-slate-200 rounded transition-colors whitespace-nowrap"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={() => handleToggleAll(false)}
                className="px-2.5 py-1.5 text-[11px] font-medium text-slate-600 hover:text-[#092C5C] bg-slate-100 hover:bg-slate-200 rounded transition-colors whitespace-nowrap"
              >
                Collapse
              </button>
            </div>
          </div>

        </div>

        {/* PART A: REBIRTH — SEVEN PILLARS OF RENEWAL */}
        {(activeTab === "all" || activeTab === "rebirth") && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#092C5C] text-[#C9A34A] font-extrabold text-sm flex items-center justify-center font-heading">
                  A
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#092C5C] font-heading">
                    PART A: REBIRTH — SEVEN PILLARS OF RENEWAL
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click each pillar card to inspect meaning, problem addressed, proposed initiatives, implementation, and metrics.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1558A6]">
                {filteredRebirth.length} Pillars Found
              </span>
            </div>

            <div className="space-y-4">
              {filteredRebirth.map((pillar, idx) => {
                const pillarId = `${pillar.letter}-${idx}`;
                const isExpanded = !!expandedPillars[pillarId];

                return (
                  <div
                    key={pillarId}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden bg-white ${
                      isExpanded
                        ? "border-[#092C5C] shadow-md ring-1 ring-[#092C5C]/10"
                        : "border-slate-200 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    {/* Header Row (Clickable) */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => togglePillar(pillarId)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          togglePillar(pillarId);
                        }
                      }}
                      className="p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none bg-white hover:bg-slate-50/70 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start sm:items-center gap-4 min-w-0">
                        {/* Letter Monogram Badge */}
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center font-extrabold text-2xl font-heading shrink-0 transition-colors ${
                            isExpanded
                              ? "bg-[#092C5C] text-[#C9A34A] shadow-xs"
                              : "bg-[#F4F7FB] text-[#092C5C] border border-slate-200"
                          }`}
                        >
                          {pillar.letter}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-[#1558A6] uppercase tracking-wider">
                              Pillar 0{idx + 1} · {pillar.category}
                            </span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-[#092C5C] font-heading leading-tight truncate">
                            {pillar.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 line-clamp-1 mt-0.5">
                            {pillar.meaning}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden md:inline-block text-xs font-medium text-slate-400">
                          {isExpanded ? "Hide Details" : "View Details"}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                            isExpanded
                              ? "bg-[#092C5C] text-white border-[#092C5C]"
                              : "bg-slate-100 text-slate-500 border-slate-200"
                          }`}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Deep Dive Body */}
                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-slate-100 bg-[#FBFDFF] animate-in slide-in-from-top-1 duration-200">
                        
                        {/* Meaning & Problem Addressed Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                          
                          {/* What the Pillar Means */}
                          <div className="p-4 rounded-lg bg-white border border-slate-200">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#092C5C] mb-2">
                              <Target className="w-4 h-4 text-[#C9A34A]" />
                              <span>Core Meaning</span>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {pillar.meaning}
                            </p>
                          </div>

                          {/* The Problem It Seeks to Address */}
                          <div className="p-4 rounded-lg bg-white border border-amber-200/80 bg-amber-50/20">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                              <AlertCircle className="w-4 h-4 text-amber-600" />
                              <span>Problem It Seeks to Address</span>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {pillar.problemAddressed}
                            </p>
                          </div>

                        </div>

                        {/* Proposed Initiatives */}
                        <div className="mt-6 mb-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#092C5C] mb-3 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Proposed Practical Initiatives:</span>
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {pillar.proposedInitiatives.map((init, i) => (
                              <div
                                key={i}
                                className="p-3 rounded-md bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1558A6] mt-2 shrink-0" />
                                <span className="leading-relaxed">{init}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Implementation Method & Measurable Indicators */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                          
                          {/* How Implementation Could Happen */}
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#092C5C] mb-2.5 flex items-center gap-1.5">
                              <Workflow className="w-4 h-4 text-[#1558A6]" />
                              <span>How Implementation Could Happen:</span>
                            </p>
                            <ul className="space-y-2">
                              {pillar.implementationMethod.map((method, mIdx) => (
                                <li key={mIdx} className="text-xs text-slate-600 flex items-start gap-2">
                                  <span className="text-[#C9A34A] font-bold">›</span>
                                  <span>{method}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What Progress Could Be Measured */}
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#092C5C] mb-2.5 flex items-center gap-1.5">
                              <TrendingUp className="w-4 h-4 text-[#C9A34A]" />
                              <span>Measurable Progress Indicators:</span>
                            </p>
                            <ul className="space-y-2">
                              {pillar.measurableProgress.map((metric, metIdx) => (
                                <li key={metIdx} className="text-xs text-slate-600 flex items-start gap-2">
                                  <span className="text-[#092C5C] font-bold">✓</span>
                                  <span>{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                        {/* Action Footer for this Pillar */}
                        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <span className="text-slate-500">
                            Proposed agenda item · Open to student review and feedback
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleCopySummary(pillar.title, pillar.meaning)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            >
                              {copiedPillar === pillar.title ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                                  <span>Copy Summary</span>
                                </>
                              )}
                            </button>
                            <a
                              href={getWhatsAppUrl("question", `Regarding Pillar: ${pillar.letter} - ${pillar.title}`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-slate-200 text-[#092C5C] hover:bg-slate-50 transition-colors"
                            >
                              <span>Ask on WhatsApp</span>
                            </a>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PART B: LEGACY — SIX PRINCIPLES OF LASTING IMPACT */}
        {(activeTab === "all" || activeTab === "legacy") && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#C9A34A] text-[#092C5C] font-extrabold text-sm flex items-center justify-center font-heading">
                  B
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#092C5C] font-heading">
                    PART B: LEGACY — SIX PRINCIPLES OF LASTING IMPACT
                  </h3>
                  <p className="text-xs text-slate-500">
                    The enduring institutional principles that guide decision-making, ethical leadership, and sustainable community growth.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A34A]">
                {filteredLegacy.length} Principles Found
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLegacy.map((principle, pIdx) => (
                <div
                  key={principle.letter}
                  className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-[#C9A34A] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Monogram & Title */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center font-extrabold text-2xl font-heading text-[#C9A34A] group-hover:bg-[#092C5C] group-hover:text-[#E2C479] transition-colors">
                        {principle.letter}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Principle 0{pIdx + 1}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#092C5C] font-heading mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {principle.description}
                    </p>

                    {/* Core Focus Items */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#092C5C]">
                        Core Institutional Commitments:
                      </p>
                      {principle.coreFocus.map((focus, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-[#C9A34A] font-bold shrink-0">·</span>
                          <span className="leading-relaxed">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>Institutional Value</span>
                    <span className="font-semibold text-[#092C5C]">REBIRTH LEGACY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
