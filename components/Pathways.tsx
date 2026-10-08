"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Pathways() {
  const visitorPaths = [
    {
      audience: "Prospective Client",
      objective: "Commission architecture, interior design, or climate-responsive construction",
      destinationTitle: "Studio COKA",
      href: "#coka",
      badge: "Architecture & Construction",
    },
    {
      audience: "Architect or Professional",
      objective: "Accelerate your built-environment career, learn practice economics, and access media",
      destinationTitle: "The Effective Architect",
      href: "#tea",
      badge: "Education & Media",
    },
    {
      audience: "Curator or Collector",
      objective: "Acquire contemporary furniture and design pieces rooted in African material culture",
      destinationTitle: "ELEvated",
      href: "#elevated",
      badge: "Object & Furniture Design",
    },
    {
      audience: "Partner or Donor",
      objective: "Expand educational access and long-term vocational opportunities for young people",
      destinationTitle: "AKO Alliance",
      href: "#civic",
      badge: "Youth Education Access",
    },
    {
      audience: "Young Person or Church Leader",
      objective: "Engage with truth, healing, spiritual formation, freedom, and identity in Christ",
      destinationTitle: "Alive and Free",
      href: "#civic",
      badge: "Spiritual Community",
    },
    {
      audience: "Event Organiser or Press",
      objective: "Book keynote talks, panel contributions, and research discussions on African cities",
      destinationTitle: "Speaking Engagements",
      href: "#speaking",
      badge: "Keynotes & Research",
    },
  ];

  return (
    <section id="pathways" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Vertically stacked header */}
        <ScrollReveal className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#121314] mb-4">
            Where should you begin?
          </h2>
          <p className="text-base text-[#56595D] leading-relaxed">
            Crystal Kizor creates across distinct practices. Select your direct entry point to explore commissions, learning platforms, contemporary objects, and civic movements.
          </p>
        </ScrollReveal>

        {/* Pathway Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visitorPaths.map((item, index) => (
            <ScrollReveal key={item.destinationTitle} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group p-7 bg-white border border-[#E3E3DF] flex flex-col justify-between hover:border-[#121314] transition-colors focus-visible:outline-none h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C64E2E]">
                      {item.badge}
                    </span>
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="text-[#56595D] group-hover:text-[#121314] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <p className="text-xs font-mono uppercase tracking-widest text-[#56595D] mb-1">
                    For: {item.audience}
                  </p>

                  <h3 className="text-xl font-medium text-[#121314] mb-3">
                    {item.destinationTitle}
                  </h3>

                  <p className="text-sm text-[#56595D] leading-relaxed">
                    {item.objective}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E3E3DF] flex items-center justify-between text-xs font-medium text-[#121314] group-hover:text-[#C64E2E] transition-colors">
                  <span>View practice details</span>
                  <span>→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
