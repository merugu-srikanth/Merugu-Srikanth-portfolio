"use client";

import React, { useRef, useState, useEffect } from "react";
import { EXPERIENCE_DATA } from "@/lib/data";
import { TechLogo } from "@/components/ui/TechLogo";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of scroll through this section
      const totalDist = rect.height + windowHeight * 0.4;
      const currentDist = windowHeight * 0.7 - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollRatio(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-[#f4f2ee] border-t border-black/5 relative"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-8 sm:mb-16">
          <span className="font-mono-tag">04 — Career & Education</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0d0d0d] mt-2">
            Experience & trajectory
            <span className="font-serif-italic ml-2">as one path.</span>
          </h2>
        </div>

        {/* Vertical Connected Timeline with Animated Spine */}
        <div className="relative space-y-6 sm:space-y-12">
          {/* Animated Background Spine Line — positioned exactly through the horizontal center of the node column */}
          <div className="absolute left-[18px] sm:left-[22px] top-6 bottom-12 w-[2px] -translate-x-1/2 bg-black/15">
            {/* Active Drawing Ink Spine */}
            <div
              className="w-full bg-[#0d0d0d] transition-all duration-150 origin-top"
              style={{ height: `${Math.min(Math.max(scrollRatio, 0), 1) * 100}%` }}
            />
          </div>

          {/* Timeline Nodes */}
          {EXPERIENCE_DATA.map((item, idx) => {
            const isReached = scrollRatio >= (idx + 0.2) / (EXPERIENCE_DATA.length + 0.8);

            return (
              <div key={item.id} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Node Indicator Dot — Guaranteed exact center over spine line */}
                <div className="relative z-10 shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11">
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center transition-all duration-500 ring-4 ring-[#f4f2ee] ${
                      isReached
                        ? "bg-[#0d0d0d] border-[#0d0d0d] text-white scale-105 shadow-md"
                        : "bg-white border-black/20 text-[#77756f] scale-95"
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold">
                      {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div
                  className={`flex-1 card-base p-6 sm:p-8 md:p-10 border transition-all duration-500 ${
                    isReached
                      ? "bg-white border-black/15 shadow-lg"
                      : "bg-white/80 border-black/5 opacity-85"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-black/10">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#77756f] block">
                        {item.company} • {item.location}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0d0d0d] mt-1">
                        {item.role}
                      </h3>
                      {item.projectFocus && (
                        <span className="text-xs font-mono font-semibold text-[#0d0d0d] block mt-1">
                          {item.projectFocus}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs font-semibold px-3 py-1 bg-black/5 rounded-full text-[#0d0d0d] shrink-0 self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>

                  {/* Bullet points verbatim from resume */}
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#3a3a3a] leading-relaxed">
                    {item.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="pt-6 mt-6 border-t border-black/10 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/5 text-[#0d0d0d] rounded-lg text-xs font-mono"
                      >
                        <TechLogo name={t} size={13} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Ending Dashed Card: Next — Your team? */}
          <div className="relative flex items-start gap-4 sm:gap-6 group">
            {/* Dashed Node Indicator */}
            <div className="relative z-10 shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-dashed border-black/40 bg-white flex items-center justify-center text-xs font-mono ring-4 ring-[#f4f2ee]">
                ✦
              </div>
            </div>

            <div className="flex-1 rounded-3xl border-2 border-dashed border-black/20 p-8 text-center bg-white/40 hover:bg-white transition-all duration-300">
              <span className="font-mono text-xs uppercase tracking-widest text-[#77756f] block mb-2">
                What's Next?
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0d0d0d]">
                Next — Your team?
              </h3>
              <p className="text-xs sm:text-sm text-[#77756f] max-w-md mx-auto mt-2 mb-4">
                Looking for a high-impact full-stack engineer who builds scalable, production-ready web applications with modern architecture?
              </p>
              <a
                href="#contact"
                className="btn-pill-primary text-xs"
              >
                Let's discuss opportunities →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
