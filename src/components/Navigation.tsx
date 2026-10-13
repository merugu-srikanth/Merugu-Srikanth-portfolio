"use client";

import React, { useEffect, useState } from "react";
import { NAV_ITEMS, PROFILE } from "@/lib/data";
import { useLenis } from "@/lib/scroll";
import { useScrollProgress } from "@/lib/hooks";

export function Navigation() {
  const { scrollToTarget } = useLenis();
  const scrollProgress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for tracking active section
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "work", "experience", "achievements", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      {/* 2px Ink Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0d0d0d] z-[100] transition-all duration-75 origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Main Header Bar — High z-index to always stay above content & 3D elements */}
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          scrolled
            ? "bg-[#f4f2ee]/95 backdrop-blur-md border-b border-black/5 shadow-xs py-3.5 sm:py-4"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Top Left: Logo / Initials Mark & Full Name */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold border border-[#0d0d0d] text-[#0d0d0d] bg-white/60 group-hover:bg-[#0d0d0d] group-hover:text-white transition-all duration-200 shadow-xs">
              {PROFILE.initials}
            </div>
            <span className="text-sm font-semibold tracking-tight text-[#0d0d0d] block">
              {PROFILE.name}
            </span>
          </button>

          {/* Top Right: Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-xs font-medium tracking-tight transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#0d0d0d] font-semibold underline decoration-2 underline-offset-4"
                      : "text-[#77756f] hover:text-[#0d0d0d]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#0d0d0d] text-white flex flex-col items-center justify-center gap-[5px] shadow-sm cursor-pointer transition-all duration-200 active:scale-95 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-[2px] w-[18px] bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[18px] bg-white rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[18px] bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#f4f2ee] z-50 flex flex-col justify-between p-8 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto [clip-path:circle(150%_at_top_right)]"
            : "opacity-0 pointer-events-none [clip-path:circle(0%_at_top_right)]"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs font-bold tracking-widest text-[#77756f]">
            NAVIGATION
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center font-mono text-xs font-bold cursor-pointer"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-5 my-auto">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className="group flex items-baseline gap-4 text-left py-1 text-3xl font-display font-medium text-[#0d0d0d] hover:translate-x-2 transition-transform duration-200"
            >
              <span className="font-mono text-xs text-[#77756f] tracking-widest">
                {item.index}
              </span>
              <span className="group-hover:text-black">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-black/10 flex justify-between items-center text-xs font-mono text-[#77756f]">
          <span>{PROFILE.location}</span>
          <a
            href={PROFILE.resumePath}
            download
            className="underline text-[#0d0d0d] font-bold"
          >
            Résumé PDF ↓
          </a>
        </div>
      </div>
    </>
  );
}
