"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { useLenis } from "@/lib/scroll";

function HoverHopLetter({ letter }: { letter: string }) {
  const [hopped, setHopped] = useState(false);

  if (letter === " ") {
    return <span>&nbsp;</span>;
  }

  return (
    <span
      onMouseEnter={() => {
        setHopped(true);
        setTimeout(() => setHopped(false), 500);
      }}
      className={`inline-block transition-transform duration-300 select-none ${
        hopped ? "-translate-y-4 scale-110 text-gray-500" : "translate-y-0 text-[#0d0d0d]"
      }`}
    >
      {letter}
    </span>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { scrollToTarget } = useLenis();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const titleLine1 = "Let's build";
  const titleLine2 = "something together.";

  return (
    <section id="contact" className="section-padding bg-[#f4f2ee] border-t border-black/5">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-6 sm:mb-12">
          <span className="font-mono-tag">06 — Contact & Inquiries</span>

          {/* Letter Hop Interactive Title */}
          <div className="mt-4 overflow-hidden">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight leading-none text-[#0d0d0d]">
              <div className="flex flex-wrap">
                {titleLine1.split("").map((ch, idx) => (
                  <HoverHopLetter key={idx} letter={ch} />
                ))}
              </div>
              <div className="mt-1 flex flex-wrap">
                {titleLine2.split("").map((ch, idx) => (
                  <HoverHopLetter key={idx} letter={ch} />
                ))}
              </div>
            </h2>
          </div>
        </div>

        {/* Contact Grid with Email Copy & Circular Spinning Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 sm:gap-10 items-center py-6 sm:py-10 border-t border-b border-black/10">
          {/* Direct Communication Channels */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#77756f] block mb-3">
              PRIMARY DIRECT INBOX
            </span>

            {/* Email + Copy Chip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#0d0d0d] underline decoration-2 underline-offset-8 hover:text-[#77756f] transition-colors break-all"
              >
                {PROFILE.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 rounded-full border border-black/20 text-xs font-mono font-medium hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all cursor-pointer shrink-0"
                aria-live="polite"
              >
                {copied ? "Copied ✓" : "Copy Email"}
              </button>
            </div>

            {/* Phone & LinkedIn & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 font-mono text-xs text-[#3a3a3a]">
              <div className="p-4 rounded-2xl bg-white border border-black/5">
                <span className="text-[#77756f] block mb-1">PHONE / WHATSAPP</span>
                <a
                  href={PROFILE.phoneHref}
                  className="font-bold text-sm text-[#0d0d0d] hover:underline"
                >
                  {PROFILE.phone}
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/5">
                <span className="text-[#77756f] block mb-1">LINKEDIN PROFILE</span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-[#0d0d0d] hover:underline flex items-center gap-1"
                >
                  linkedin.com/in/srikanth-m ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right: Spinning Circular "Say Hello" Badge */}
          <div className="flex justify-center items-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              {/* Rotating Circular SVG Text */}
              <svg
                viewBox="0 0 160 160"
                className="w-full h-full animate-[spin_16s_linear_infinite]"
              >
                <path
                  id="textPath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="font-mono text-[10px] uppercase tracking-[0.22em] fill-[#0d0d0d]">
                  <textPath href="#textPath" startOffset="0%">
                    • SAY HELLO • MERUGU SRIKANTH • FULL STACK DEV
                  </textPath>
                </text>
              </svg>

              {/* Center Dot / Icon */}
              <div className="absolute w-12 h-12 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-display font-bold text-sm shadow-md">
                ✦
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#77756f]">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToTarget("#hero")}
              className="hover:text-[#0d0d0d] underline transition-colors cursor-pointer"
            >
              Back to top ↑
            </button>
            {/* <span>Built with Next.js 15 & React 19</span> */}
          </div>
        </footer>
      </div>
    </section>
  );
}
