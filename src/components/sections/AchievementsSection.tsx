"use client";

import React, { useRef, useState, useEffect } from "react";
import { ACHIEVEMENTS_DATA } from "@/lib/data";

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.floor(ease * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-padding bg-[#f4f2ee] border-t border-black/5"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <span className="font-mono-tag">05 — Engineering Metrics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0d0d0d] mt-2">
              Proven impact
              <span className="font-serif-italic ml-2">& benchmarks.</span>
            </h2>
          </div>

          <span className="text-xs font-mono text-[#77756f] uppercase tracking-wider">
            Verified Production Standards
          </span>
        </div>

        {/* Responsive Grid of Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ACHIEVEMENTS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-black/10 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group min-h-[260px]"
            >
              {/* Soft Brand Glow in background */}
              <div
                className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full opacity-10 blur-2xl group-hover:opacity-25 transition-opacity pointer-events-none"
                style={{ backgroundColor: item.brandColor }}
              />

              {/* Top: Logo Tile & Index */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center font-mono font-bold text-xs text-[#0d0d0d] border border-black/5">
                  ✦
                </div>
                <span className="font-mono text-xs font-semibold text-[#77756f]">
                  {item.index}
                </span>
              </div>

              {/* Middle / Bottom: Details on Left & Giant Animated Number */}
              <div className="space-y-3 mt-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#77756f] block">
                    {item.platform}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#0d0d0d] mt-0.5">
                    {item.label}
                  </h4>
                </div>

                {/* Giant Number Count-Up */}
                <div className="text-4xl sm:text-5xl font-display font-black text-[#0d0d0d] tracking-tighter">
                  <CountUpNumber
                    target={item.metricNumber}
                    suffix={item.metricSuffix}
                  />
                </div>

                <p className="text-xs text-[#3a3a3a] leading-tight">
                  {item.caption}
                </p>

                <p className="text-[11px] text-[#77756f] font-mono pt-2 border-t border-black/5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer verification note */}
        <div className="mt-8 text-xs font-mono text-[#a9a6a0] text-center sm:text-left">
          * Metrics verifiable directly via resume & verified project architectures
        </div>
      </div>
    </section>
  );
}
