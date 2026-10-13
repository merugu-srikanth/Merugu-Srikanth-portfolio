"use client";

import React, { useState } from "react";
import { SKILLS_DATA, SKILL_CATEGORIES, SkillElement } from "@/lib/data";
import { TechLogo } from "@/components/ui/TechLogo";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSkill, setActiveSkill] = useState<SkillElement>(SKILLS_DATA[0]);

  const filteredSkills = SKILLS_DATA.map((skill, index) => {
    const isMatch = selectedCategory === "All" || skill.category === selectedCategory;
    const row = Math.floor(index / 8);
    const col = index % 8;
    const delay = (row + col) * 40;

    return { ...skill, isMatch, delay };
  });

  return (
    <section id="skills" className="section-padding bg-[#f4f2ee] border-t border-black/5">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div>
            <span className="font-mono-tag">02 — Technical Skills</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0d0d0d] mt-2">
              The periodic table
              <span className="font-serif-italic ml-2">of my stack.</span>
            </h2>
          </div>

          {/* Family Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/5 rounded-2xl max-w-2xl">
            {SKILL_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2 py-3 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#0d0d0d] text-white shadow-sm font-semibold"
                      : "text-[#77756f] hover:text-[#0d0d0d] hover:bg-black/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Periodic Grid & Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 sm:gap-8 items-start">
          {/* Elements Grid (8 cols desktop, 4 cols mobile) */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2.5">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill.number === skill.number;

              return (
                <button
                  key={skill.number}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  style={{
                    transitionDelay: `${skill.delay}ms`,
                  }}
                  className={`relative p-2 sm:p-3 aspect-square rounded-2xl flex flex-col justify-between text-left transition-all duration-300 border focus:outline-none cursor-pointer ${
                    skill.isMatch ? "opacity-100 scale-100" : "opacity-25 scale-95"
                  } ${
                    isSelected
                      ? "bg-[#0d0d0d] text-white border-[#0d0d0d] shadow-lg -translate-y-1"
                      : "bg-white text-[#0d0d0d] border-black/10 hover:border-black/30 hover:-translate-y-0.5 shadow-xs"
                  }`}
                >
                  {/* Top row: Atomic number + Category dot */}
                  <div className="flex items-center justify-between w-full font-mono text-[9px]">
                    <span className={isSelected ? "text-gray-400" : "text-[#77756f]"}>
                      {skill.number.toString().padStart(2, "0")}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: skill.brandColor || "#77756f" }}
                    />
                  </div>

                  {/* Symbol in center */}
                  <div className="my-auto text-center">
                    <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                      {skill.symbol}
                    </span>
                  </div>

                  {/* Name at bottom */}
                  <div className="truncate w-full text-[10px] font-medium leading-none font-mono">
                    <span className={isSelected ? "text-gray-200" : "text-[#3a3a3a]"}>
                      {skill.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Inspector Panel */}
          <div className="card-base p-6 sm:p-8 lg:sticky lg:top-24 border border-black/10">
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#77756f]">
                ELEMENT INSPECTOR
              </span>
              <span className="font-mono text-xs font-bold text-[#0d0d0d]">
                #{activeSkill.number.toString().padStart(2, "0")}
              </span>
            </div>

            {/* Big Brand Logo Visual with Soft Tint Glow */}
            <div className="relative my-6 py-6 flex items-center justify-center bg-gray-50/70 rounded-2xl border border-black/5 overflow-hidden group">
              {/* Soft Brand-Tint Glow */}
              <div
                className="absolute inset-0 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-35"
                style={{ backgroundColor: activeSkill.brandColor || "#0d0d0d" }}
              />
              <div className="relative z-10 transition-transform duration-300 transform group-hover:scale-110">
                <TechLogo name={activeSkill.name} size={96} />
              </div>
            </div>

            {/* Element Metadata */}
            <div className="space-y-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#77756f] block">
                  {activeSkill.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-[#0d0d0d]">
                  {activeSkill.name}
                </h3>
              </div>

              <p className="text-xs text-[#3a3a3a] leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Projects where this skill is used */}
              {/* <div className="pt-4 border-t border-black/10">
                <span className="text-[11px] font-mono text-[#77756f] block mb-2">
                  VERIFIED IN PROJECTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.usedInProjects.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 bg-black/5 text-[#0d0d0d] font-mono text-[11px] rounded-lg border border-black/5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
