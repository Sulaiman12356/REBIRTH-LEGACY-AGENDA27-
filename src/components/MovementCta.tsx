import React from "react";
import { candidateConfig } from "../config/candidateConfig";
import { MessageCircle, ArrowUpRight, Users } from "lucide-react";

interface MovementCtaProps {
  variant?: "dark" | "light-blue" | "compact";
  contextTag?: string;
}

export const MovementCta: React.FC<MovementCtaProps> = ({
  variant = "dark",
  contextTag,
}) => {
  if (variant === "compact") {
    return (
      <div className="my-10 p-6 sm:p-8 rounded-lg bg-[#B9DFF5]/25 border border-[#B9DFF5] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          {contextTag && (
            <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/70 mb-1">
              {contextTag}
            </p>
          )}
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] font-heading tracking-tight mb-2">
            KINDLY JOIN THE REBIRTH LEGACY MOVEMENT
          </h3>
          <p className="text-sm text-[#111111]/80 leading-relaxed">
            Your voice matters. Your ideas matter. Your participation matters. Let&apos;s renew, rebuild and leave a legacy together.
          </p>
        </div>

        <a
          href={candidateConfig.whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 border border-[#111111]/15 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    );
  }

  if (variant === "light-blue") {
    return (
      <div className="my-12 p-8 sm:p-10 rounded-lg bg-[#FFFFFF] border-2 border-[#111111] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>{contextTag || "Community Participation"}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-heading tracking-tight mb-3">
              KINDLY JOIN THE REBIRTH LEGACY MOVEMENT
            </h3>
            <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed mb-3">
              This movement is about more than supporting a candidate. It is about contributing ideas, sharing concerns, connecting with fellow students and being part of a vision for a stronger NACOS.
            </p>
            <p className="text-sm font-semibold text-[#111111]">
              Your voice matters. Your ideas matter. Your participation matters. Let&apos;s renew, rebuild and leave a legacy together.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-center gap-3">
            <a
              href={candidateConfig.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-colors text-center border border-[#111111] shadow-xs"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
            <span className="text-xs text-[#111111]/65 lg:text-right">
              Opens the official WhatsApp community invitation
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 p-8 sm:p-10 rounded-lg bg-[#111111] text-[#FFFFFF] border border-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          {contextTag && (
            <span className="inline-block px-3 py-1 rounded bg-[#B9DFF5] text-[#111111] text-xs font-bold uppercase tracking-wider mb-4">
              {contextTag}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-heading tracking-tight mb-3">
            KINDLY JOIN THE REBIRTH LEGACY MOVEMENT
          </h3>
          <p className="text-sm sm:text-base text-[#FFFFFF]/80 leading-relaxed mb-3">
            This movement is about more than supporting a candidate. It is about contributing ideas, sharing concerns, connecting with fellow students and being part of a vision for a stronger NACOS.
          </p>
          <p className="text-sm font-semibold text-[#B9DFF5]">
            Your voice matters. Your ideas matter. Your participation matters. Let&apos;s renew, rebuild and leave a legacy together.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-stretch lg:items-end justify-center gap-3">
          <a
            href={candidateConfig.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-colors text-center"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
          <span className="text-xs text-[#FFFFFF]/65 lg:text-right">
            Open to all NACOS OOU students · Direct WhatsApp invite
          </span>
        </div>
      </div>
    </div>
  );
};
