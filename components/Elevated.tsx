"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { HorizontalPan } from "@/components/animations/HorizontalPan";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Elevated() {
  const furnitureGallery = [
    {
      title: "Series 01: Low Occasional Lounge Chair",
      material: "Solid Sapele Hardwood & Hand-Woven Raphia",
      image: "/assets/showcase/funiture/furniture 1.jpeg",
      dimensions: "82cm W x 74cm D x 68cm H",
      year: "2025 Commission",
    },
    {
      title: "Series 02: Sculptural Monolithic Seat",
      material: "Ebonized Iroko Timber with Sand-Cast Brass Feet",
      image: "/assets/showcase/funiture/furniture 2.jpeg",
      dimensions: "64cm W x 60cm D x 72cm H",
      year: "2025 Edition",
    },
    {
      title: "Series 03: Woven Cane Low Bench",
      material: "Steamed West African Ash with Organic Plant Reed",
      image: "/assets/showcase/funiture/furniture 3.jpeg",
      dimensions: "120cm W x 45cm D x 42cm H",
      year: "Studio Edition",
    },
    {
      title: "Series 04: Carved Organic Coffee Table",
      material: "Naturally Cured Mahogany with Polished Oil Lustre",
      image: "/assets/showcase/funiture/furniture 4.jpeg",
      dimensions: "110cm W x 70cm D x 38cm H",
      year: "Bespoke Order",
    },
  ];

  const materials = [
    {
      title: "Hardwood Joinery",
      detail: "Ethically harvested West African sapele, iroko, and teak shaped with exposed, structural joinery.",
    },
    {
      title: "Hand-Cast Brass",
      detail: "Custom hardware, connectors, and sculptural feet poured in regional sand-casting workshops.",
    },
    {
      title: "Indigenous Weaves",
      detail: "Tactile cane, rush, and woven plant fibres integrated into modern seating ergonomics.",
    },
  ];

  return (
    <section id="elevated" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 mb-12">
        {/* Header Stack */}
        <ScrollReveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            ELEvated
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Contemporary furniture and product design rooted in African context, materials, and ideas. ELEvated translates indigenous material traditions into collectible, enduring domestic objects.
          </p>
        </ScrollReveal>

        {/* Horizontal Pan Indicator */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E3E3DF]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#56595D]">
            Object Collection (Horizontal scroll)
          </span>
          <span className="text-xs font-mono text-[#C64E2E]">
            04 Editions
          </span>
        </div>
      </div>

      {/* Horizontal Pan gallery across the 4 furniture pieces */}
      <HorizontalPan>
        <div className="flex gap-8 px-6 lg:px-12 shrink-0">
          {furnitureGallery.map((item, index) => (
            <div
              key={item.title}
              className="w-[85vw] sm:w-[480px] lg:w-[560px] bg-white border border-[#E3E3DF] p-6 lg:p-8 flex flex-col justify-between shrink-0 shadow-sm"
            >
              <div>
                <div className="relative aspect-[4/3] w-full bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF] mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 85vw, 560px"
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E]">
                    Piece 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-[#56595D]">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-[#121314] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#56595D] leading-relaxed mb-4">
                  {item.material}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E3DF] flex items-center justify-between text-xs font-mono text-[#56595D]">
                <span>Dimensions: {item.dimensions}</span>
                <Link
                  href="#enquiry"
                  className="text-[#121314] hover:text-[#C64E2E] font-medium uppercase tracking-wider"
                >
                  Acquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </HorizontalPan>

      {/* Material Studies Section */}
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.1}>
              <div className="p-6 bg-white border border-[#E3E3DF] hover:border-[#121314] transition-colors h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
                    Material Study 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-medium text-[#121314] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#56595D] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="#enquiry"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all focus-visible:outline-none"
          >
            <span>Request catalogue</span>
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
