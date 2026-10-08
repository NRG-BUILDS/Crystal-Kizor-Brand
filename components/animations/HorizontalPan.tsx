"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalPanProps {
  children: React.ReactNode;
}

export function HorizontalPan({ children }: HorizontalPanProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !wrap.current || !track.current) return;

    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <div ref={wrap} className="relative overflow-hidden bg-[#F8F8F7]">
      <div
        ref={track}
        className="flex min-h-[85vh] lg:min-h-[92dvh] items-center will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
