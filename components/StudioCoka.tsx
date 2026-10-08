"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { StickyStack } from "@/components/animations/StickyStack";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function StudioCoka() {
  const practiceLedger = [
    {
      discipline: "Architecture",
      summary: "Designing homes, cultural buildings, and spaces with natural shade, fresh air circulation, and layouts tailored to tropical weather.",
    },
    {
      discipline: "Interior Design",
      summary: "Warm, practical interior spaces finished with honest local stone, custom woodwork, and lighting suited for everyday life.",
    },
    {
      discipline: "Construction",
      summary: "Direct building supervision from foundation to handover, making sure architectural drawings are built accurately on site.",
    },
  ];

  const projectCards = [
    (
      <div
        key="construct-01"
        className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
              <Image
                src="/assets/showcase/community/village architecture construct 1.png"
                alt="Studio COKA Vernacular Earth Compound"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
              <span>Construct 01: Earth Residential Compound</span>
              <span>Western Region</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
                Climate-Responsive Architecture
              </span>
              <h3 className="text-2xl font-light text-[#121314] mb-4">
                Earth Walls and Natural Cooling
              </h3>
              <p className="text-sm text-[#56595D] leading-relaxed mb-6">
                Thick compressed earth blocks keep interior rooms cool during the hottest hours of the day without heavy power bills or constant air conditioning.
              </p>
              <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
                <div>Design approach: Thick earth walls for passive cooling</div>
                <div>Primary materials: Local laterite earth, regional timber</div>
                <div>Project status: Completed commission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div
        key="construct-02"
        className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
              <Image
                src="/assets/showcase/community/village architecture construct 2.png"
                alt="Studio COKA Bioclimatic Timber Hall"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
              <span>Construct 02: Timber Community Hall</span>
              <span>Coastal Savanna</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
                Natural Airflow
              </span>
              <h3 className="text-2xl font-light text-[#121314] mb-4">
                High Roofs and Cool Breezes
              </h3>
              <p className="text-sm text-[#56595D] leading-relaxed mb-6">
                Raised timber rafters catch passing coastal winds and let hot air rise and exit naturally, keeping the building comfortable year-round.
              </p>
              <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
                <div>Design approach: Cross-breeze roof openings</div>
                <div>Primary materials: Seasoned iroko timber, clay tiles</div>
                <div>Project status: Completed commission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div
        key="construct-03"
        className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
              <Image
                src="/assets/showcase/community/village architecture construct 4.png"
                alt="Studio COKA Shaded Community Pavilions"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
              <span>Construct 03: Shaded Community Pavilions</span>
              <span>Semi-Arid Basin</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
                Community Spaces
              </span>
              <h3 className="text-2xl font-light text-[#121314] mb-4">
                Perforated Brick and Shaded Courtyards
              </h3>
              <p className="text-sm text-[#56595D] leading-relaxed mb-6">
                Perforated brick screens protect community gatherings from direct sun while catching evening breezes and storing seasonal rainwater.
              </p>
              <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
                <div>Design approach: Sun-shading brick screens</div>
                <div>Primary materials: Local kiln brick, basalt stone</div>
                <div>Project status: Completed commission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  ];

  return (
    <section id="coka" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 mb-16">
        {/* Header Stack */}
        <ScrollReveal className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Studio COKA
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Architecture, interior design, and construction. Studio COKA creates climate-responsive buildings that stay cool naturally, use local materials, and serve their communities.
          </p>
        </ScrollReveal>

        {/* Practice Ledger & Action */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-y border-[#E3E3DF] py-8">
          {practiceLedger.map((item, idx) => (
            <ScrollReveal key={item.discipline} delay={idx * 0.1}>
              <h3 className="text-base font-medium text-[#121314] mb-2">
                {item.discipline}
              </h3>
              <p className="text-sm text-[#56595D] leading-relaxed">
                {item.summary}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-widest text-[#56595D]">
            Selected Projects
          </div>
          <Link
            href="#enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all"
          >
            <span>Discuss a project</span>
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      </div>

      {/* Sticky Stack of architectural constructs */}
      <StickyStack cards={projectCards} />
    </section>
  );
}
