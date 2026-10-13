"use client";

import React, { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/data";
import { useLenis } from "@/lib/scroll";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollToTarget } = useLenis();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);

  // Real-time Canvas Background Remover (True Alpha Transparency)
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationId: number;

    const processFrame = () => {
      if (video.readyState >= 2 && !video.paused && !video.ended) {
        const w = video.videoWidth || 768;
        const h = video.videoHeight || 960;

        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }

        ctx.drawImage(video, 0, 0, w, h);
        const frame = ctx.getImageData(0, 0, w, h);
        const l = frame.data.length;

        // Real-time background keying: convert white/off-white pixels to true alpha 0
        for (let i = 0; i < l; i += 4) {
          const r = frame.data[i];
          const g = frame.data[i + 1];
          const b = frame.data[i + 2];

          // Threshold for white / studio backdrop
          if (r > 220 && g > 220 && b > 220) {
            const minChannel = Math.min(r, g, b);
            if (minChannel >= 240) {
              frame.data[i + 3] = 0; // 100% Transparent
            } else {
              // Smooth edge feathering between 220 and 240
              const factor = (240 - minChannel) / 20;
              frame.data[i + 3] = Math.floor(factor * 255);
            }
          }
        }

        ctx.putImageData(frame, 0, 0);
      }
      animationId = requestAnimationFrame(processFrame);
    };

    animationId = requestAnimationFrame(processFrame);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Autoplay with Sound Enabled on Page Open
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set full volume and attempt unmuted playback on load
    video.volume = 1.0;
    video.muted = false;
    setIsMuted(false);

    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setSoundBlocked(false);
      })
      .catch((err) => {
        console.log("Unmuted autoplay held by browser security policy. Fallback to muted with armed gesture unlock:", err);
        // Start playing muted so visual character animates immediately
        video.muted = true;
        setIsMuted(true);
        setSoundBlocked(true);
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      });

    // Unmute on the first valid user gesture (click, tap, keydown)
    const unlockSound = () => {
      const vid = videoRef.current;
      if (!vid) return;

      vid.volume = 1.0;
      vid.muted = false;

      const p = vid.play();
      if (p !== undefined) {
        p.then(() => {
          setIsMuted(false);
          setSoundBlocked(false);
          removeListeners();
        }).catch(() => {
          // If this gesture was not accepted yet, keep listeners active for next click
        });
      } else {
        setIsMuted(false);
        setSoundBlocked(false);
        removeListeners();
      }
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", unlockSound);
      window.removeEventListener("click", unlockSound);
      window.removeEventListener("touchstart", unlockSound);
      window.removeEventListener("touchend", unlockSound);
      window.removeEventListener("keydown", unlockSound);
      document.removeEventListener("pointerdown", unlockSound);
      document.removeEventListener("click", unlockSound);
    };

    window.addEventListener("pointerdown", unlockSound);
    window.addEventListener("click", unlockSound);
    window.addEventListener("touchstart", unlockSound);
    window.addEventListener("touchend", unlockSound);
    window.addEventListener("keydown", unlockSound);
    document.addEventListener("pointerdown", unlockSound);
    document.addEventListener("click", unlockSound);

    return removeListeners;
  }, []);

  // IntersectionObserver to pause video/voice when scrolled away
  useEffect(() => {
    const heroEl = heroRef.current;
    const video = videoRef.current;
    if (!heroEl || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          if (isPlaying) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.2, 1.0] }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isPlaying]);

  // Toggle Play / Pause
  const togglePlayPause = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Sound Mute
  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      setSoundBlocked(false);
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen md:h-[100svh] flex flex-col justify-between overflow-hidden bg-[#f4f2ee] select-none pt-20 pb-8 md:pt-0 md:pb-0"
    >
      {/* 1. Balanced Background Ghost Name */}
      <div className="absolute inset-x-0 top-16 sm:top-20 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span
          className="text-[18vw] md:text-[17vw] xl:text-[210px] font-display font-black tracking-wide uppercase select-none text-[#e2ded5] leading-none whitespace-nowrap opacity-80"
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {PROFILE.firstName}
        </span>
      </div>

      {/* 2. Hidden Source Video */}
      <video
        ref={videoRef}
        src="/hero/hero.mp4"
        autoPlay
        loop
        playsInline
        preload="auto"
        className="hidden"
      >
        <source src="/hero/hero.webm" type="video/webm" />
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* 3. Center Character Video / Canvas (Top on Mobile, Fullscreen Centered on Desktop) */}
      <div className="relative md:absolute md:inset-0 z-10 flex items-center justify-center pointer-events-auto w-full h-[40vh] sm:h-[46vh] md:h-full shrink-0">
        <div
          onClick={togglePlayPause}
          className="relative w-full h-full max-w-[1280px] flex items-center justify-center cursor-pointer"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain object-bottom pointer-events-auto filter contrast-[1.02]"
            style={{
              background: "transparent",
            }}
          />
        </div>
      </div>

      {/* 4. Hero Controls at RIGHT CENTER (Absolute inside Hero, not sticky across sections) */}
      <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3 pointer-events-auto">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          style={{
            backgroundColor: "#0d0d0d",
            color: "#ffffff",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/30 transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-none shrink-0"
        >
          {isPlaying ? (
            // Pause Icon (Solid White)
            <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Play Icon (Solid White)
            <svg className="w-5 h-5 ml-0.5 fill-white text-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mute / Unmute (Sound) Toggle Button */}
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute voice audio" : "Mute voice audio"}
          style={{
            backgroundColor: "#0d0d0d",
            color: "#ffffff",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
          }}
          className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/30 transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-none shrink-0"
        >
          {isMuted && (
            <span className="absolute -inset-1 rounded-full border-2 border-black/40 animate-ping pointer-events-none" />
          )}
          {isMuted ? (
            // Speaker Muted Icon (Solid White)
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#ffffff" stroke="#ffffff" />
              <path d="M23 9l-6 6M17 9l6 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // Speaker Playing Waves Icon (Solid White)
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#ffffff" stroke="#ffffff" />
              <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* 5. Foreground Content Container */}
      <div className="section-container relative z-20 w-full flex-1 md:h-full flex flex-col justify-between pt-4 pb-2 md:pt-28 md:pb-10 lg:pb-14 pointer-events-none">
        <div className="hidden md:block" />

        {/* Bottom content row: Left Title + Right Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6">
          {/* Left Side: Overlaid Name + Big Heading + Subtitle */}
          <div className="max-w-xl pointer-events-auto">
            <span className="font-mono text-xs tracking-widest text-[#77756f] uppercase block mb-1 font-semibold">
              {PROFILE.name.toUpperCase()}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.6rem] font-display font-black text-[#0d0d0d] tracking-tight leading-[0.96]">
              Full Stack<br />
              Developer<span className="text-[#77756f]">.</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#77756f] font-normal">
              Creative developer • AI & web technology
            </p>
          </div>

          {/* Right Side: Standardized Action Buttons */}
          <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0 pointer-events-auto">
            {/* Primary Action */}
            <button
              onClick={() => scrollToTarget("#work")}
              className="btn-pill-primary w-full sm:w-auto"
            >
              Explore work
              <svg className="w-3.5 h-3.5 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V8H8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Secondary Actions Row */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToTarget("#contact")}
                className="btn-pill-secondary flex-1 sm:flex-initial"
              >
                Let's talk
              </button>

              <a
                href={PROFILE.resumePath}
                download="Merugu_Srikanth_Full_Stack_Developer_Resume.pdf"
                className="btn-pill-secondary flex-1 sm:flex-initial"
                aria-label="Download Résumé PDF"
              >
                Resume ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
