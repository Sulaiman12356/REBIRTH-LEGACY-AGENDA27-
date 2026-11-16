import React, { useState, useEffect } from "react";
import { candidateConfig } from "../config/candidateConfig";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "My Leadership Journey", href: "#journey" },
    { label: "The Vision", href: "#vision" },
    { label: "My Agenda", href: "#agenda" },
    { label: "Student Opportunities", href: "#opportunities" },
    { label: "Join the Movement", href: "#movement" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#111111]/15 py-2.5"
          : "bg-[#FFFFFF] border-b border-[#111111]/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="REBIRTH LEGACY - Onifade Sulaiman Ipesola"
          >
            <div className="w-9 h-9 rounded-md overflow-hidden border border-[#111111]/20 shrink-0 bg-[#111111]">
              <img
                src={candidateConfig.assets.rebirthEmblem}
                alt="REBIRTH LEGACY Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#111111] font-heading whitespace-nowrap shrink-0">
              REBIRTH LEGACY
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-[#111111]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#111111] py-1 border-b-2 border-transparent hover:border-[#84E026] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={candidateConfig.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#111111] bg-[#84E026] hover:bg-[#74CC1A] rounded-md transition-colors whitespace-nowrap shrink-0 border border-[#111111]"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>JOIN THE REBIRTH LEGACY MOVEMENT</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-md text-[#111111] hover:bg-[#B9DFF5]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#FFFFFF] border-b border-[#111111]/20 shadow-lg py-5 px-5 max-h-[82vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto flex flex-col gap-3">
            <div className="pb-3 border-b border-[#111111]/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/60">
                  Navigation
                </p>
                <p className="text-sm font-bold text-[#111111]">
                  Mr. Clarity · NACOS OOU
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#B9DFF5] text-[#111111]">
                REBIRTH LEGACY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-semibold text-[#111111] hover:bg-[#B9DFF5]/35 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#111111]/10 flex flex-col sm:flex-row gap-2.5">
              <a
                href={candidateConfig.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-extrabold uppercase tracking-wider text-[#111111] bg-[#84E026] hover:bg-[#74CC1A] border border-[#111111] transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>JOIN THE REBIRTH LEGACY MOVEMENT</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#agenda"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#111111]/90 transition-colors"
              >
                <span>Explore My Agenda</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
