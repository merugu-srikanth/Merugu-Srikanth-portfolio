"use client";

import { useEffect, useRef, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

interface ScrollContextType {
  lenis: Lenis | null;
  scrollToTarget: (target: string | HTMLElement, offset?: number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollToTarget: () => {},
});

export const useLenis = () => useContext(ScrollContext);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToTarget = (target: string | HTMLElement, offset = 0) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset, duration: 1.2 });
    } else {
      if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current, scrollToTarget }}>
      {children}
    </ScrollContext.Provider>
  );
}
