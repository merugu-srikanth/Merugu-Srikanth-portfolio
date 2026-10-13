"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "@/lib/data";
import { TechLogo } from "@/components/ui/TechLogo";

function ProjectCardContent({ project, isMobile = false }: { project: Project; isMobile?: boolean }) {
  return (
    <div className="h-full flex flex-col justify-between w-full">
      {/* Top Content Row */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 items-start">
        {/* Left: Text & Features */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-bold text-[#77756f]">
              {project.index} — {project.kicker}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#0d0d0d] mb-3 sm:mb-4">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[#3a3a3a] leading-relaxed mb-5 sm:mb-6">
            {project.description}
          </p>

          {/* 2-Column Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-[#3a3a3a] bg-black/[0.02] p-2 sm:p-2.5 rounded-xl border border-black/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-1.5 shrink-0" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Illustrative Mini UI (Code Editor Preview) + Tech Stack Badges Below */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-2xl bg-[#0d0d0d] text-white p-4 sm:p-5 border border-black/10 overflow-hidden shadow-inner min-h-[260px] sm:min-h-[280px] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-2 font-mono text-white/80">{project.title.toLowerCase()}.sys</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-white/10 text-white font-mono text-[9px]">
                Illustrative UI
              </span>
            </div>

            {/* Mini Dashboard Wireframe */}
            <div className="my-auto py-3 sm:py-4 space-y-3 font-mono text-xs">
              {project.uiType === "careermitra" && (
                <div className="space-y-2.5">
                  {/* Tab-wise Category Filters: Freshers, Experienced, Govt Alerts, Internships */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[9px] no-scrollbar">
                    <span className="px-2 py-0.5 rounded-full bg-white text-black font-bold whitespace-nowrap">All Jobs</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/10 font-medium whitespace-nowrap">Freshers</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/10 font-medium whitespace-nowrap">Experienced</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/10 font-medium whitespace-nowrap">Govt Alerts</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/10 font-medium whitespace-nowrap">Internships</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/10">
                    <span className="text-[11px]">Filtered Jobs API (SSR)</span>
                    <span className="text-[#339933]">200 OK • 18ms</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[10px]">
                    <div className="bg-white/5 p-1.5 sm:p-2 rounded border border-white/10">
                      <div className="text-gray-400 text-[9px] sm:text-[10px]">FCM Alerts</div>
                      <div className="font-bold text-white text-[10px] sm:text-xs">Active</div>
                    </div>
                    <div className="bg-white/5 p-1.5 sm:p-2 rounded border border-white/10">
                      <div className="text-gray-400 text-[9px] sm:text-[10px]">Admin CMS</div>
                      <div className="font-bold text-white text-[10px] sm:text-xs">RBAC v2</div>
                    </div>
                    <div className="bg-white/5 p-1.5 sm:p-2 rounded border border-white/10">
                      <div className="text-gray-400 text-[9px] sm:text-[10px]">Sitemaps</div>
                      <div className="font-bold text-white text-[10px] sm:text-xs">Automated</div>
                    </div>
                  </div>
                </div>
              )}

              {project.uiType === "fpa-insights" && (
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-[11px] sm:text-xs">P&L & Cash Flow Forecast Engine</span>
                    <span className="text-cyan-400">FastAPI Async</span>
                  </div>
                  <div className="h-16 flex items-end justify-between gap-1.5 bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <div className="w-full bg-white/20 h-6 rounded-t" />
                    <div className="w-full bg-white/40 h-10 rounded-t" />
                    <div className="w-full bg-white/30 h-8 rounded-t" />
                    <div className="w-full bg-white/60 h-12 rounded-t" />
                    <div className="w-full bg-white/80 h-14 rounded-t" />
                    <div className="w-full bg-white h-16 rounded-t" />
                  </div>
                </div>
              )}

              {project.uiType === "coderzap" && (
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <span className="text-[11px] sm:text-xs">Linux VPS / Nginx Reverse Proxy</span>
                    <span className="text-emerald-400">coderzap.com</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 space-y-1 text-[11px]">
                    <div className="text-gray-300">$ systemctl status nginx.service</div>
                    <div className="text-[#339933]">● active (running) with SSL TLS 1.3</div>
                    <div className="text-gray-400">Publishing developer tutorials & guides</div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom stats summary */}
            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-gray-400">
              <span>Status: Production Deployment</span>
              <span>100% Verifiable</span>
            </div>
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/[0.04] hover:bg-black/[0.07] text-[#0d0d0d] rounded-full text-[11px] sm:text-xs font-mono border border-black/10 transition-colors shadow-2xs"
              >
                <TechLogo name={t} size={14} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action bar (Responsive flex-col on small screen so button & text never collide) */}
      <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary text-xs w-full sm:w-auto"
          >
            Visit Platform ({project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}) ↗
          </a>
        ) : (
          <span className="text-xs font-mono text-[#77756f]">
            Enterprise System (Proprietary Production Code)
          </span>
        )}

        <span className="text-xs font-mono text-[#77756f] break-words">
          {project.tech.slice(0, 4).join(" • ")}
        </span>
      </div>
    </div>
  );
}

export function WorkSection() {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS_DATA[0].id);

  return (
    <section id="work" className="section-padding bg-[#f4f2ee] border-t border-black/5">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <span className="font-mono-tag">03 — Selected Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0d0d0d] mt-2">
            Production platforms
            <span className="font-serif-italic ml-2">engineered end-to-end.</span>
          </h2>
        </div>

        {/* Small Screen View (< 1024px): All 3 Projects are fully visible in a clean vertical stack */}
        <div className="flex lg:hidden flex-col gap-6 w-full">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="relative rounded-3xl bg-white border border-black/10 shadow-sm p-6 sm:p-8 overflow-hidden"
            >
              <ProjectCardContent project={project} isMobile={true} />
            </div>
          ))}
        </div>

        {/* Desktop View (>= 1024px): Interactive Horizontal Accordion Gallery */}
        <div className="hidden lg:flex flex-row gap-4 min-h-[600px] w-full items-stretch">
          {PROJECTS_DATA.map((project) => {
            const isOpen = activeProjectId === project.id;

            return (
              <div
                key={project.id}
                tabIndex={0}
                role="region"
                aria-label={`Project: ${project.title}`}
                onMouseEnter={() => setActiveProjectId(project.id)}
                onFocus={() => setActiveProjectId(project.id)}
                onClick={() => setActiveProjectId(project.id)}
                className={`relative rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer border focus:outline-none ${
                  isOpen
                    ? "lg:flex-[8] bg-white border-black/15 shadow-xl"
                    : "lg:flex-[1.2] bg-white/70 hover:bg-white border-black/10 shadow-xs"
                }`}
              >
                {/* Slim Collapsed Spine View */}
                {!isOpen && (
                  <div className="flex flex-col justify-between items-center h-full py-8 px-4 w-full select-none">
                    <span className="font-mono text-xs font-bold text-[#77756f]">
                      {project.index}
                    </span>

                    <div className="flex items-center justify-center my-auto">
                      <span className="font-display font-bold text-lg text-[#0d0d0d] -rotate-90 whitespace-nowrap tracking-tight">
                        {project.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center font-mono text-sm group-hover:rotate-90 transition-transform">
                      +
                    </div>
                  </div>
                )}

                {/* Expanded Full Project Details View */}
                {isOpen && (
                  <div className="p-6 sm:p-8 md:p-10 h-full w-full">
                    <ProjectCardContent project={project} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
