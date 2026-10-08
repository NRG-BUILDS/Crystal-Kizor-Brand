"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Pathways() {
  const visitorPaths = [
    {
      audience: "Clients & Homeowners",
      objective: "Commission a home, commercial space, or interior with our architecture and construction studio.",
      destinationTitle: "Studio COKA",
      href: "#coka",
      badge: "Architecture & Construction",
    },
    {
      audience: "Architects & Builders",
      objective: "Learn the business of design, manage projects better, and grow your built-environment career.",
      destinationTitle: "The Effective Architect",
      href: "#tea",
      badge: "Education & Media",
    },
    {
      audience: "Collectors & Buyers",
      objective: "Order contemporary furniture and collectible pieces crafted with African materials and ideas.",
      destinationTitle: "ELEvated",
      href: "#elevated",
      badge: "Furniture & Products",
    },
    {
      audience: "Partners & Donors",
      objective: "Help expand education access, reading centers, and practical training for young people.",
      destinationTitle: "AKO Alliance",
      href: "#civic",
      badge: "Youth Education",
    },
    {
      audience: "Youth & Church Leaders",
      objective: "Find community, spiritual growth, emotional healing, and purpose through a Christian youth movement.",
      destinationTitle: "Alive and Free",
      href: "#civic",
      badge: "Faith Community",
    },
    {
      audience: "Event Organisers & Press",
      objective: "Invite Crystal to speak at conferences, moderate discussions, or give lectures on design and cities.",
      destinationTitle: "Speaking Engagements",
      href: "#speaking",
      badge: "Keynotes & Panels",
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
            Crystal works across architecture, furniture design, professional education, and community movements. Choose your path below to find the right place.
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
                  <span>View details</span>
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
