import React, { useState, useEffect } from "react";
import { candidateConfig } from "../config/candidateConfig";
import { Menu, X, MessageCircle, ArrowUpRight, ChevronRight } from "lucide-react";

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

  // Lock background scroll & support Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "My Leadership Journey", href: "#journey" },
    { label: "The Vision", href: "#vision" },
    { label: "My Agenda", href: "#agenda" },
    { label: "Student Opportunities", href: "#opportunities" },
    { label: "Implementation", href: "#implementation" },
    { label: "Join the Movement", href: "#movement" },
  ];

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    // Allow overflow reset before smooth scrolling on iOS/Android browsers
    requestAnimationFrame(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-[#FFFFFF] ${
          isScrolled
            ? "border-b border-[#111111]/20 shadow-xs py-2.5"
            : "border-b border-[#111111]/10 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 xl:gap-5">
            {/* Brand Wordmark */}
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
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
              className="hidden xl:flex items-center gap-4 text-[13px] font-medium text-[#111111]/80"
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

            {/* Primary Action & Mobile Hamburger Button */}
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
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                type="button"
                className="xl:hidden inline-flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3 py-2 rounded-md text-[#111111] bg-[#B9DFF5]/35 hover:bg-[#B9DFF5]/65 border border-[#111111]/20 transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Navigation Drawer rendered outside <header> for reliable fixed positioning on all devices */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Mobile menu">
          {/* Dark backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#111111]/50"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down menu container below fixed header */}
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-[61px] max-h-[calc(100dvh-61px)] overflow-y-auto bg-[#FFFFFF] border-b-2 border-[#111111] shadow-xl py-5 px-4 sm:px-6"
          >
            <div className="max-w-7xl mx-auto flex flex-col gap-3">
              <div className="pb-3 border-b border-[#111111]/10 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#111111]/60">
                    Navigation Menu
                  </p>
                  <p className="text-sm font-extrabold text-[#111111]">
                    {candidateConfig.name} ({candidateConfig.popularName})
                  </p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#B9DFF5] text-[#111111] shrink-0">
                  NACOS OOU
                </span>
              </div>

              {/* Active Menu List */}
              <ul className="flex flex-col divide-y divide-[#111111]/10">
                {navLinks.map((link, idx) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileLinkClick(link.href);
                      }}
                      className="flex items-center justify-between w-full min-h-[46px] px-3 py-2.5 rounded-md text-sm font-bold text-[#111111] hover:bg-[#B9DFF5]/35 active:bg-[#B9DFF5]/60 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[11px] font-extrabold text-[#111111]/50 w-5">
                          0{idx + 1}
                        </span>
                        <span>{link.label}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#111111]/50" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Action Buttons */}
              <div className="pt-3 border-t border-[#111111]/10 flex flex-col sm:flex-row gap-2.5 pb-2">
                <a
                  href={candidateConfig.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] py-3 px-4 rounded-md text-xs font-extrabold uppercase tracking-wider text-[#111111] bg-[#84E026] hover:bg-[#74CC1A] border border-[#111111] transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>JOIN THE REBIRTH LEGACY WHATSAPP GROUP</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="#agenda"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick("#agenda");
                  }}
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#111111]/90 transition-colors"
                >
                  <span>Explore My Agenda</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
