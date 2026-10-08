"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function SpeakingResearch() {
  const speakingThemes = [
    {
      title: "Buildings for African Climates",
      summary:
        "How traditional building wisdom helps modern African cities stay cool, durable, and comfortable without heavy energy costs.",
    },
    {
      title: "Running a Creative Practice",
      summary:
        "How to build an independent architecture studio with healthy finances, clear client contracts, and strong principles.",
    },
    {
      title: "Public Spaces for Communities",
      summary:
        "Why thoughtful public spaces and schools give young people a genuine sense of dignity, safety, and belonging.",
    },
    {
      title: "Working with Local Materials",
      summary:
        "Why building with regional earth, stone, and timber creates better architecture and supports local craftsmen.",
    },
  ];

  return (
    <section id="speaking" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <ScrollReveal className="max-w-2xl mb-12">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C64E2E] mb-3">
            Keynotes and Talks
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Speaking and Ideas
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Crystal delivers keynote talks, joins panel discussions, and teaches on
            climate-responsive architecture, African cities, and running independent creative
            businesses.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {speakingThemes.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.08}>
                <div className="p-6 bg-white border border-[#E3E3DF] hover:border-[#121314] transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-[#56595D] mb-3">
                      Topic {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-medium text-[#121314] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#56595D] leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] w-full bg-[#E8E8E4] border border-[#E3E3DF] overflow-hidden">
                <Image
                  src="/assets/crystal/Poised in a Warm Design Studio.png"
                  alt="Crystal Kizor in her design studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
                <span>Keynotes, Panels and Guest Lectures</span>
                <span>Lagos and International</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/*
         * The quote below is placeholder copy only. A real verified quote should be
         * supplied by Crystal Kizor before this page goes live. The source event
         * name has been removed to avoid attributing an unverified statement.
         */}
        <ScrollReveal delay={0.3}>
          <div className="p-8 sm:p-10 bg-[#FFFFFF] border-l-4 border-l-[#C64E2E] border border-[#E3E3DF] flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] mb-4">
                Placeholder quote — replace with a real, verified statement from Crystal Kizor
              </p>
              <blockquote className="text-lg sm:text-xl font-light text-[#121314] leading-relaxed italic mb-3">
                &ldquo;Architecture is not just about shelter. It shows what we value, what we
                remember, and what we owe to the next generation.&rdquo;
              </blockquote>
              <p className="text-xs font-mono uppercase tracking-wider text-[#56595D]">
                Crystal Kizor
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all focus-visible:outline-none"
              >
                <span>Invite Crystal to speak</span>
                <ArrowUpRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
