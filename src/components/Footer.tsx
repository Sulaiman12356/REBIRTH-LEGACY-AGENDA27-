import React from "react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";
import { Linkedin, Twitter, Instagram, Globe, Mail, ArrowUp, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#051C3B] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-300/40 bg-[#092C5C] shrink-0">
                <img
                  src={candidateConfig.assets.rebirthEmblem}
                  alt="REBIRTH LEGACY"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-white tracking-tight">
                  {candidateConfig.campaignName}
                </h3>
                <p className="text-xs font-semibold text-[#E2C479] tracking-wider">
                  {candidateConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official presidential agenda platform for <strong className="text-slate-200">{candidateConfig.name}</strong> (Popularly Known As <strong className="text-[#E2C479]">{candidateConfig.popularName}</strong>). Dedicated to student representation, educational excellence, welfare advocacy, and practical digital empowerment.
            </p>

            {/* Institutional Credentials */}
            <div className="space-y-1 text-xs text-slate-400 pt-2">
              <p className="font-semibold text-slate-200">{candidateConfig.association}</p>
              <p>{candidateConfig.department}</p>
              <p>{candidateConfig.faculty} · {candidateConfig.institution}</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E2C479]">
              Agenda Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Mr. Clarity
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Leadership Journey (100L - 400L)
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-white transition-colors">
                  The REBIRTH & LEGACY Pillars
                </a>
              </li>
              <li>
                <a href="#implementation" className="hover:text-white transition-colors">
                  Four Implementation Stages
                </a>
              </li>
              <li>
                <a href="#accountability" className="hover:text-white transition-colors">
                  Accountability Framework
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Questions & Direct WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials Column */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E2C479]">
              Connect & Engage
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open to ongoing discussions, suggestions, and collaborative partnerships with computing students and alumni.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={candidateConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1558A6] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={candidateConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1558A6] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={candidateConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1558A6] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={candidateConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1558A6] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Portfolio & Academy"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${candidateConfig.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1558A6] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#E2C479] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat directly on WhatsApp: +{candidateConfig.whatsappNumber}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Institutional Logos & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Institutional Crests */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={candidateConfig.assets.oouLogo}
                alt="OOU Emblem"
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-medium text-slate-300">OOU</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <img
                src={candidateConfig.assets.nacosLogo}
                alt="NACOS Emblem"
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-medium text-slate-300">NACOS</span>
            </div>
            <span>·</span>
            <span className="text-[#E2C479] font-bold tracking-wider">
              "STAY UPDATED WITH CLARITY."
            </span>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4">
            <p>
              © {currentYear} REBIRTH LEGACY. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
