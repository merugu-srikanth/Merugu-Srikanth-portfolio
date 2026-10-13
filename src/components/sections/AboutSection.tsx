"use client";

import React from "react";
import dynamic from "next/dynamic";
import { PROFILE } from "@/lib/data";

const Lanyard3D = dynamic(
  () => import("@/components/ui/Lanyard3D").then((mod) => mod.Lanyard3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[480px] flex items-center justify-center bg-white/40 rounded-3xl border border-black/5 animate-pulse">
        <span className="font-mono text-xs text-[#77756f]">Loading 3D ID Badge...</span>
      </div>
    ),
  }
);

export function AboutSection() {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <section id="about" className="section-padding bg-[#f4f2ee] border-t border-black/5">
      <div className="section-container">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="font-mono-tag">01 — About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0d0d0d] mt-2">
            Engineering scalable platforms
            <span className="font-serif-italic ml-2">with clarity.</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_360px_minmax(0,1.1fr)] gap-5 sm:gap-8 items-stretch relative">
          {/* Left Column: Summary & CTAs */}
          <div
            className={`card-base p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
              isDragging ? "z-0 opacity-80 pointer-events-none" : "z-10 opacity-100"
            }`}
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#77756f] block mb-2 sm:mb-3">
                Professional Summary
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0d0d0d] mb-3 sm:mb-4">
                Hi, I'm {PROFILE.firstName}.
              </h3>
              <p className="text-sm sm:text-base md:text-sm text-[#3a3a3a] leading-relaxed mb-4">
                {PROFILE.resumeSummary}
              </p>
              <p className="text-xs sm:text-sm text-[#77756f] leading-relaxed">
                {PROFILE.shortBio}
              </p>
            </div>

            <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-black/10 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.resumePath}
                download
                className="btn-pill-primary text-xs"
              >
                Résumé PDF ↓
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary text-xs"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Center Column: Interactive 3D Physics Lanyard ID Card */}
          <div
            id="lanyard-anchor-box"
            className={`flex flex-col items-center justify-center min-h-[350px] sm:min-h-[520px] transition-all duration-200 ${
              isDragging ? "relative z-50 select-none cursor-grabbing" : "relative z-30"
            }`}
          >
            <Lanyard3D onDragChange={setIsDragging} />
          </div>

          {/* Right Column: Quick Facts & Direct Quote */}
          <div
            className={`card-base p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
              isDragging ? "z-0 opacity-80 pointer-events-none" : "z-10 opacity-100"
            }`}
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#77756f] block mb-3">
                Key Facts
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0d0d0d] mb-6">
                Direct snapshot.
              </h3>

              <div className="space-y-4 font-mono text-xs text-[#3a3a3a]">
                <div className="flex items-center justify-between pb-3 border-b border-black/5">
                  <span className="text-[#77756f]">Location</span>
                  <span className="font-semibold text-right">{PROFILE.location}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-black/5">
                  <span className="text-[#77756f]">Experience</span>
                  <span className="font-semibold">4+ Years</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-black/5">
                  <span className="text-[#77756f]">Education</span>
                  <span className="font-semibold text-right">B.Sc. Comp Sci (2021)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-black/5">
                  <span className="text-[#77756f]">Current Role</span>
                  <span className="font-semibold text-right">Full-Stack Dev @ Sootradhara</span>
                </div>
              </div>
            </div>

            {/* Paraphrased Quote */}
            <div className="pt-6 mt-6 border-t border-black/10">
              <blockquote className="font-serif-italic text-base sm:text-lg text-[#3a3a3a] leading-relaxed">
                "{PROFILE.quote}"
              </blockquote>
              <span className="font-mono text-xs text-[#77756f] mt-2 block">
                — Core Engineering Principle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
