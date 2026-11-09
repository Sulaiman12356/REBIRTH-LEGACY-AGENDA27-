import React, { useState, useEffect } from "react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";
import { Menu, X, MessageCircle, ChevronRight, Award } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "My Journey", href: "#journey" },
    { label: "The Agenda", href: "#agenda" },
    { label: "Implementation", href: "#implementation" },
    { label: "Accountability", href: "#accountability" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element / brand identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-left group shrink-0"
            aria-label="REBIRTH LEGACY - Onifade Sulaiman Ipesola"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-amber-300/60 shadow-sm shrink-0 bg-[#092C5C]">
              <img
                src={candidateConfig.assets.rebirthEmblem}
                alt="REBIRTH LEGACY Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#092C5C] font-heading group-hover:text-[#1558A6] transition-colors leading-tight">
                REBIRTH LEGACY
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-normal">
                MR. CLARITY · NACOS OOU
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#092C5C] hover:border-b-2 hover:border-[#C9A34A] py-1 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & Mobile menu toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#agenda"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#092C5C] hover:bg-[#1558A6] rounded-md shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 border border-[#092C5C]"
            >
              <span>Explore The Agenda</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C9A34A]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-[#092C5C] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#092C5C]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A34A]">
                Navigation Menu
              </p>
              <p className="text-sm font-bold text-[#092C5C]">
                Onifade Sulaiman Ipesola (Mr. Clarity)
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-[#F4F7FB] hover:text-[#092C5C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#agenda"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-semibold uppercase tracking-wider text-white bg-[#092C5C] hover:bg-[#1558A6] transition-colors text-center shadow-sm"
              >
                <span>Explore The Agenda</span>
                <ChevronRight className="w-4 h-4 text-[#C9A34A]" />
              </a>

              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium text-[#092C5C] bg-[#F4F7FB] border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
