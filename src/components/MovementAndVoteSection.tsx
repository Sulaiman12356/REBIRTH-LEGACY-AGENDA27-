import React from "react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";
import { MessageCircle, ArrowUpRight, HelpCircle, MessageSquare, CheckCircle2 } from "lucide-react";

export const MovementAndVoteSection: React.FC = () => {
  return (
    <section id="movement" className="py-16 lg:py-24 bg-[#B9DFF5]/20 border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Movement Invitation Card */}
        <div className="p-8 sm:p-12 rounded-lg bg-[#111111] text-[#FFFFFF] mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded bg-[#84E026] text-[#111111] text-xs font-extrabold uppercase tracking-wider mb-4">
                Official Community · Join Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] font-heading tracking-tight mb-4 [text-wrap:balance]">
                KINDLY JOIN THE REBIRTH LEGACY MOVEMENT
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed mb-6">
                <p>
                  This movement is about more than supporting a candidate. It is about contributing ideas, sharing concerns, connecting with fellow students and being part of a vision for a stronger NACOS.
                </p>
                <p className="font-bold text-[#B9DFF5]">
                  Your voice matters. Your ideas matter. Your participation matters.
                </p>
                <p className="font-bold text-[#84E026]">
                  Let&apos;s renew, rebuild and leave a legacy together.
                </p>
              </div>

              <a
                href={candidateConfig.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Direct Questions & Feedback via Candidate WhatsApp (+2348051780169) */}
            <div className="lg:col-span-5 bg-[#FFFFFF] text-[#111111] p-6 sm:p-7 rounded-lg">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#111111]/60 mb-1">
                Direct One-on-One Dialogue
              </p>
              <h3 className="text-lg font-extrabold text-[#111111] font-heading mb-2">
                Questions or Feedback for Mr. Clarity?
              </h3>
              <p className="text-xs sm:text-sm text-[#111111]/75 leading-relaxed mb-5">
                Message Onifade Sulaiman Ipesola directly on WhatsApp (+{candidateConfig.whatsappNumber}) to share private suggestions or ask about any part of the agenda.
              </p>

              <div className="space-y-2.5">
                <a
                  href={getWhatsAppUrl("question")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-md bg-[#111111] hover:bg-[#111111]/90 text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#84E026]" />
                    Ask a Question on WhatsApp
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={getWhatsAppUrl("feedback")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-md bg-[#B9DFF5]/45 hover:bg-[#B9DFF5]/70 text-[#111111] text-xs font-bold uppercase tracking-wider transition-colors border border-[#111111]/15"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#111111]" />
                    Share Direct Feedback
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 17: Action to VOTE for MR. CLARITY as NACOS PRESIDENT */}
        <div className="p-8 sm:p-10 rounded-lg bg-[#FFFFFF] border-2 border-[#111111] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-extrabold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>Your Vote Shapes Our Future</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] font-heading tracking-tight max-w-3xl mx-auto mb-3 [text-wrap:balance]">
            VOTE FOR MR. CLARITY AS NACOS PRESIDENT, OOU CHAPTER.
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#111111]/80 mb-2">
            {candidateConfig.name} ({candidateConfig.popularName})
          </p>
          <p className="text-xs sm:text-sm text-[#111111]/70 max-w-2xl mx-auto mb-7">
            A New Chapter. A Shared Purpose. A Lasting Legacy. Renew. Rebuild. Leave a Legacy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={candidateConfig.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-[#111111] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#agenda"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#111111] hover:bg-[#111111]/90 text-[#FFFFFF] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              <span>Review Full Agenda</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
