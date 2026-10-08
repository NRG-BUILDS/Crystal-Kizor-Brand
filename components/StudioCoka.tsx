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
      summary:
        "Bioclimatic spatial planning, passive solar orientation, and climate-responsive envelopes designed for tropical heat and seasonal rain.",
    },
    {
      discipline: "Interior Environments",
      summary:
        "Material-first interior spaces celebrating raw masonry, tailored joinery, and custom spatial lighting tuned to daily living rhythms.",
    },
    {
      discipline: "Construction Stewardship",
      summary:
        "Direct construction supervision and technical execution, bridging architectural intent with precise on-site craftsmanship.",
    },
  ];

  const projectCards = [
    <div
      key="construct-01"
      className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
            <Image
              src="/assets/showcase/community/village architecture construct 1.png"
              alt="Studio COKA Vernacular Earth Compound architecture construct"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
            <span>Construct 01: Vernacular Earth Compound</span>
            <span>Western Region</span>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
              Climate-Responsive Architecture
            </span>
            <h3 className="text-2xl font-light text-[#121314] mb-4">
              Earth Masonry and Thermal Mass
            </h3>
            <p className="text-sm text-[#56595D] leading-relaxed mb-6">
              Stabilized compressed earth blocks deployed with thick thermal
              boundaries, reducing daytime cooling loads while offering acoustic
              tranquility.
            </p>
            <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
              <div>Strategy: Passive thermal damping</div>
              <div>Materials: Laterite clay, recycled hardwood</div>
              <div>Status: Built commission</div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    <div
      key="construct-02"
      className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
            <Image
              src="/assets/showcase/community/village architecture construct 2.png"
              alt="Studio COKA Bioclimatic Timber and Masonry Hall architecture construct"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
            <span>Construct 02: Bioclimatic Timber Hall</span>
            <span>Coastal Savanna</span>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
              Convective Airflow Architecture
            </span>
            <h3 className="text-2xl font-light text-[#121314] mb-4">
              Louvered Envelope and Canopy Shading
            </h3>
            <p className="text-sm text-[#56595D] leading-relaxed mb-6">
              Elevated timber trusses create continuous cross-breeze pathways,
              channeling seasonal winds through habitable zones without
              mechanical refrigeration.
            </p>
            <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
              <div>Strategy: Stack ventilation chimneys</div>
              <div>Materials: Seasoned iroko timber, terracotta tile</div>
              <div>Status: Built commission</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div
      key="construct-01"
      className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
            <Image
              src="/assets/showcase/community/village architecture construct 5.jpg"
              alt="Studio COKA Vernacular Earth Compound architecture construct"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
            <span>Construct 01: Vernacular Earth Compound</span>
            <span>Western Region</span>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
              Climate-Responsive Architecture
            </span>
            <h3 className="text-2xl font-light text-[#121314] mb-4">
              Earth Masonry and Thermal Mass
            </h3>
            <p className="text-sm text-[#56595D] leading-relaxed mb-6">
              Stabilized compressed earth blocks deployed with thick thermal
              boundaries, reducing daytime cooling loads while offering acoustic
              tranquility.
            </p>
            <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
              <div>Strategy: Passive thermal damping</div>
              <div>Materials: Laterite clay, recycled hardwood</div>
              <div>Status: Built commission</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div
      key="construct-03"
      className="bg-white border border-[#E3E3DF] p-8 lg:p-12 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
            <Image
              src="/assets/showcase/community/village architecture construct 4.png"
              alt="Studio COKA Shaded Community Gathering Pavilions construct"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
            <span>Construct 03: Shaded Civic Pavilions</span>
            <span>Semi-Arid Basin</span>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
              Civic Microclimate Design
            </span>
            <h3 className="text-2xl font-light text-[#121314] mb-4">
              Porous Screening and Rain Courtyards
            </h3>
            <p className="text-sm text-[#56595D] leading-relaxed mb-6">
              Perforated masonry boundaries shade community public life from
              intense solar exposure while filtering dust and harvesting monsoon
              rainfall.
            </p>
            <div className="space-y-3 border-t border-[#E3E3DF] pt-4 text-xs font-mono text-[#56595D]">
              <div>Strategy: Evaporative courtyard cooling</div>
              <div>Materials: Kiln-cured brick, basalt flooring</div>
              <div>Status: Built commission</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <section
      id="coka"
      className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]"
    >
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 mb-16">
        {/* Header Stack */}
        <ScrollReveal className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Studio COKA
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Thoughtful architecture, interior design, and construction. Studio
            COKA creates climate-responsive environments attuned to West African
            geography, material economies, and lasting communal utility.
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
            Selected Architectural Folio (Stack on scroll)
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
