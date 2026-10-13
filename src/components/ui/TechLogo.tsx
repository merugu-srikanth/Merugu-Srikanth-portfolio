"use client";

import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function isBrand(name: string): boolean {
  const conceptKeywords = ["JWT", "RBAC", "AI Integration", "SSR & SEO", "Core Concepts"];
  return !conceptKeywords.some((k) => name.toLowerCase().includes(k.toLowerCase()));
}

export function TechLogo({ name, className = "", size = 24 }: TechLogoProps) {
  const n = name.toLowerCase();

  // Python
  if (n.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M11.914 2c-5.076 0-4.757 2.195-4.757 2.195l.006 2.274h4.843v.683H5.163S2 6.786 2 11.908s2.76 4.969 2.76 4.969h1.644v-2.316s-.089-2.76 2.71-2.76h4.698s2.62.043 2.62-2.533V4.533S16.989 2 11.914 2zm-2.61 1.488a.925.925 0 110 1.85.925.925 0 010-1.85z"
          fill="#3776AB"
        />
        <path
          d="M12.086 22c5.076 0 4.757-2.195 4.757-2.195l-.006-2.274h-4.843v-.683h6.843S22 17.214 22 12.092s-2.76-4.969-2.76-4.969h-1.644v2.316s.089 2.76-2.71 2.76H10.19s-2.62-.043-2.62 2.533v4.733S7.011 22 12.086 22zm2.61-1.488a.925.925 0 110-1.85.925.925 0 010 1.85z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript") || n === "ts") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.5 8.5H5.5V10.5H7.5V17H9.5V10.5H11.5V8.5ZM18.5 10.8C18.5 9.4 17.2 8.5 15.3 8.5C13.5 8.5 12.2 9.5 12.2 11H14.1C14.1 10.3 14.6 9.8 15.3 9.8C16 9.8 16.5 10.2 16.5 10.8C16.5 11.3 16.1 11.7 15.2 12.1L14.1 12.6C12.8 13.2 12.1 14.1 12.1 15.3C12.1 16.9 13.5 17.7 15.4 17.7C17.4 17.7 18.7 16.7 18.8 15.2H16.8C16.8 16 16.2 16.4 15.4 16.4C14.6 16.4 14.1 15.9 14.1 15.3C14.1 14.7 14.5 14.3 15.4 13.9L16.5 13.4C17.9 12.8 18.5 11.9 18.5 10.8Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // JavaScript
  if (n.includes("javascript") || n === "js") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M6 17.5V13.8H7.8V17.5C7.8 18.6 7.2 19.1 6.1 19.1C5.6 19.1 5.1 19 4.8 18.8L5.1 17.4C5.4 17.5 5.6 17.6 5.9 17.6C6.3 17.6 6.5 17.3 6.5 16.8V17.5H6ZM13.8 16.6C13.8 15.3 12.9 14.6 11.6 14.1L11 13.8C10.6 13.6 10.3 13.4 10.3 13C10.3 12.6 10.7 12.3 11.3 12.3C11.9 12.3 12.4 12.6 12.6 12.9L13.7 11.9C13.2 11.3 12.3 10.9 11.3 10.9C9.7 10.9 8.6 11.8 8.6 13.1C8.6 14.3 9.4 15 10.8 15.5L11.4 15.8C11.9 16 12.1 16.3 12.1 16.7C12.1 17.2 11.6 17.6 10.8 17.6C10.1 17.6 9.5 17.2 9.1 16.7L8 17.8C8.7 18.7 9.8 19.1 10.9 19.1C12.7 19.1 13.8 18 13.8 16.6Z"
          fill="#000000"
        />
      </svg>
    );
  }

  // Next.js
  if (n.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="11" fill="#000000" />
        <path
          d="M15.5 8H17.5V16H15.5V8ZM8.5 8H6.5V16H8.5V11.2L15.3 16.5H16.8L8.5 10V8Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React
  if (n.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="3.5"
          ry="9"
          transform="rotate(60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="3.5"
          ry="9"
          transform="rotate(120 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  // Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .2 1.6.9 2.4 1.7C13.8 12 15.3 13.5 19 13.5c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1-.2-1.6-.9-2.4-1.7C17.2 7.5 15.7 6 12 6zm-7 7.5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .2 1.6.9 2.4 1.7 1.2 1.3 2.7 2.8 6.4 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1-.2-1.6-.9-2.4-1.7C10.2 15 8.7 13.5 5 13.5z"
          fill="#06B6D4"
        />
      </svg>
    );
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm-1.2 14.8c-2.4 0-3.6-1.1-3.6-3.1v-.2h2.2v.2c0 .9.5 1.3 1.4 1.3.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.5-1.2-2-.5-3.3-1.1-3.3-2.9 0-1.8 1.4-2.9 3.5-2.9 2.2 0 3.4 1 3.4 2.8v.2h-2.2v-.2c0-.7-.4-1.1-1.2-1.1-.8 0-1.2.4-1.2.9 0 .5.4.8 1.5 1.1 2.1.5 3.3 1.2 3.3 3 0 2-1.5 3.1-3.6 3.1z"
          fill="#339933"
        />
      </svg>
    );
  }

  // Express.js
  if (n.includes("express")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="11" fill="#1e1e1e" />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="8"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          ex
        </text>
      </svg>
    );
  }

  // FastAPI
  if (n.includes("fastapi")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="11" fill="#009688" />
        <path d="M12 4L6 14h5l-1 6 7-11h-5l1-5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // MongoDB
  if (n.includes("mongo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2C12 2 7 7.5 7 13.5C7 16.5 9 19.5 11.5 21.8V22H12.5V21.8C15 19.5 17 16.5 17 13.5C17 7.5 12 2 12 2Z"
          fill="#47A248"
        />
        <path
          d="M12 2C12 2 11.7 5.2 11.7 9.5C11.7 14.8 12 22 12 22C12 22 17 16.5 17 13.5C17 7.5 12 2 12 2Z"
          fill="#499D4A"
        />
      </svg>
    );
  }

  // Firebase
  if (n.includes("firebase")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M4.5 18.5L6.8 4.2c.1-.4.6-.6.9-.3l3.1 5.8-6.3 8.8z"
          fill="#FFC107"
        />
        <path
          d="M14.2 8.5L12 3.5c-.2-.5-.9-.5-1.1 0L4.5 18.5l9.7-10z"
          fill="#FFA000"
        />
        <path
          d="M19.5 18.5L14.2 8.5 4.5 18.5l6.9 3.9c.4.2.8.2 1.2 0l6.9-3.9z"
          fill="#FFCA28"
        />
      </svg>
    );
  }

  // Docker
  if (n.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M22.5 11.8c-.3-.2-1.3-.3-2.1.2-.2-.8-.7-1.4-1.4-1.8l-.6-.4-.4.6c-.5.8-.4 1.7-.1 2.4-.4.2-1.2.3-2.1.1-.3-.1-.6-.2-.9-.4L14.7 12H2.2c-.1.5-.2 1-.2 1.6 0 3.3 2.7 6.4 7.2 6.4 5.3 0 9.8-3.1 10.6-7.4.8 0 2-.4 2.7-1z"
          fill="#2496ED"
        />
        <rect x="7" y="9" width="2" height="2" fill="#2496ED" />
        <rect x="10" y="9" width="2" height="2" fill="#2496ED" />
        <rect x="10" y="6" width="2" height="2" fill="#2496ED" />
        <rect x="13" y="9" width="2" height="2" fill="#2496ED" />
        <rect x="4" y="9" width="2" height="2" fill="#2496ED" />
      </svg>
    );
  }

  // Nginx
  if (n.includes("nginx")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm4.5 13.7l-4.8-6.2v6.2H9.5V8.3h2.2l4.8 6.2V8.3h2.2v7.4h-2.2z"
          fill="#009639"
        />
      </svg>
    );
  }

  // Git / GitHub
  if (n.includes("git")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M21.7 10.9L13.1 2.3c-.4-.4-1-.4-1.4 0l-2.1 2.1 2.7 2.7c.4-.1.9 0 1.2.3.4.4.4 1 0 1.4L12 10.3v4.4c.3.1.6.4.8.7.4.7.1 1.6-.6 2-.7.4-1.6.1-2-.6-.4-.7-.1-1.6.6-2 .1-.1.3-.2.5-.2v-4.3c-.2 0-.4-.1-.5-.2-.4-.4-.5-.9-.3-1.4L7.8 7.8 2.3 13.3c-.4.4-.4 1 0 1.4l8.6 8.6c.4.4 1 .4 1.4 0l9.4-9.4c.4-.4.4-1.1 0-1.5z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // Redux
  if (n.includes("redux")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" stroke="#764ABC" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="#764ABC" />
      </svg>
    );
  }

  // GSAP / Framer Motion
  if (n.includes("gsap") || n.includes("motion")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 4h16v8H12v8H4V4z" fill="#0055FF" />
        <path d="M12 12l8 8H12v-8z" fill="#88CE02" />
      </svg>
    );
  }

  // Swagger / OpenAPI / Postman
  if (n.includes("swagger") || n.includes("postman") || n.includes("openapi")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M8 12l3 3 5-5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Concept / Fallback thin line icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
