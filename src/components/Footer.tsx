import React from "react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";
import { Linkedin, Twitter, Instagram, Globe, Mail, ArrowUp, MessageCircle, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-[#FFFFFF]/80 pt-14 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PLACEMENT #6: WhatsApp Movement Banner inside Footer */}
        <div className="p-6 rounded-lg bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#84E026] mb-1">
              KINDLY JOIN THE REBIRTH LEGACY MOVEMENT
            </p>
            <p className="text-sm font-medium text-[#FFFFFF]">
              Let&apos;s renew, rebuild and leave a legacy together.
            </p>
          </div>
          <a
            href={candidateConfig.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#84E026] hover:bg-[#74CC1A] text-[#111111] font-extrabold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#FFFFFF]/15">
          {/* Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md overflow-hidden border border-[#FFFFFF]/20 bg-[#111111] shrink-0">
                <img
                  src={candidateConfig.assets.rebirthEmblem}
                  alt="REBIRTH LEGACY"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold font-heading text-[#FFFFFF] tracking-tight">
                  {candidateConfig.campaignName}
                </h3>
                <p className="text-xs font-bold text-[#84E026] tracking-wider">
                  {candidateConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FFFFFF]/70 leading-relaxed max-w-sm">
              Presidential agenda platform for{" "}
              <strong className="text-[#FFFFFF]">{candidateConfig.name}</strong> (Popularly Known As{" "}
              <strong className="text-[#B9DFF5]">{candidateConfig.popularName}</strong>) —{" "}
              {candidateConfig.title}.
            </p>

            <div className="space-y-1 text-xs text-[#FFFFFF]/65 pt-1">
              <p className="font-semibold text-[#FFFFFF]/90">{candidateConfig.association}</p>
              <p>{candidateConfig.department}</p>
              <p>
                {candidateConfig.faculty} · {candidateConfig.institution}
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#B9DFF5]">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#84E026] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#84E026] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#84E026] transition-colors">
                  My Leadership Journey
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#84E026] transition-colors">
                  The Vision
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-[#84E026] transition-colors">
                  My Agenda (13 Pillars)
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-[#84E026] transition-colors">
                  Student Opportunities
                </a>
              </li>
              <li>
                <a href="#implementation" className="hover:text-[#84E026] transition-colors">
                  Implementation Approach
                </a>
              </li>
              <li>
                <a href="#movement" className="hover:text-[#84E026] transition-colors">
                  Join the Movement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#B9DFF5]">
              Connect With Mr. Clarity
            </p>
            <p className="text-xs text-[#FFFFFF]/70 leading-relaxed">
              Reach out directly for questions, ideas, or student partnership opportunities.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={candidateConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#FFFFFF]/10 hover:bg-[#84E026] text-[#FFFFFF] hover:text-[#111111] flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={candidateConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#FFFFFF]/10 hover:bg-[#84E026] text-[#FFFFFF] hover:text-[#111111] flex items-center justify-center transition-colors"
                aria-label="X Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={candidateConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#FFFFFF]/10 hover:bg-[#84E026] text-[#FFFFFF] hover:text-[#111111] flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={candidateConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#FFFFFF]/10 hover:bg-[#84E026] text-[#FFFFFF] hover:text-[#111111] flex items-center justify-center transition-colors"
                aria-label="Clarity Digital Academy"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${candidateConfig.email}`}
                className="w-9 h-9 rounded-md bg-[#FFFFFF]/10 hover:bg-[#84E026] text-[#FFFFFF] hover:text-[#111111] flex items-center justify-center transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#B9DFF5] hover:text-[#84E026] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#84E026]" />
                <span>Direct WhatsApp: +{candidateConfig.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Emblems & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFFFF]/65">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={candidateConfig.assets.oouLogo}
                alt="OOU Crest"
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold text-[#FFFFFF]">OOU</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <img
                src={candidateConfig.assets.nacosLogo}
                alt="NACOS Logo"
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold text-[#FFFFFF]">NACOS</span>
            </div>
            <span>·</span>
            <span className="text-[#84E026] font-extrabold tracking-wider">
              &ldquo;STAY UPDATED WITH CLARITY.&rdquo;
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p>© {currentYear} REBIRTH LEGACY. All rights reserved.</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#FFFFFF]/10 hover:bg-[#84E026] text-[#FFFFFF] hover:text-[#111111] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
