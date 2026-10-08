"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100dvh-72px)] flex items-center border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] w-full mx-auto px-6 lg:px-12 pt-8 lg:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Focused text block with max 4 elements */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* 1. Eyebrow */}
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C64E2E] mb-5">
              Architect, Founder, and Researcher
            </p>

            {/* 2. Headline (Max 2 lines desktop) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#121314] leading-[1.08] mb-6">
              Spatial practice, material culture, and civic transformation.
            </h1>

            {/* 3. Subtext (19 words, under 20-word cap) */}
            <p className="text-base sm:text-lg text-[#56595D] leading-relaxed max-w-[54ch] mb-8">
              Architect Crystal Kizor leads multidisciplinary practices across climate-responsive architecture, contemporary industrial craft, and transformative community institutions.
            </p>

            {/* 4. CTAs (1 primary CTA, 1 quiet secondary link, no sub-tagline) */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all focus-visible:outline-none"
              >
                <span>Start an enquiry</span>
                <ArrowUpRight size={15} weight="bold" />
              </Link>

              <Link
                href="#pathways"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#121314] hover:text-[#C64E2E] transition-colors py-2 focus-visible:outline-none"
              >
                <span>Explore the practices</span>
                <ArrowDown size={14} weight="bold" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Architectural portrait using provided studio asset */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
              <Image
                src="/assets/crystal/Architectural Studio Portrait.png"
                alt="Architect Crystal Kizor in her architectural studio workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            {/* Minimal metadata tag */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#56595D]">
              <span>Studio Practice Portrait</span>
              <span>Lagos / West Africa</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
