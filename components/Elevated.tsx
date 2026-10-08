"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { HorizontalPan } from "@/components/animations/HorizontalPan";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Elevated() {
  /*
   * Furniture titles, materials, dimensions, and edition counts have not been confirmed
   * by Crystal Kizor. All piece descriptions below use illustrative language and are
   * marked with TODO comments until real product information is supplied.
   */
  const furnitureGallery = [
    {
      title: "Lounge Chair",
      material: "Hardwood frame with woven natural seating — details to be confirmed",
      image: "/assets/showcase/funiture/furniture 1.jpeg",
      note: "Details to confirm",
    },
    {
      title: "Low Chair",
      material: "Solid timber with cast metal feet — details to be confirmed",
      image: "/assets/showcase/funiture/furniture 2.jpeg",
      note: "Details to confirm",
    },
    {
      title: "Long Bench",
      material: "Hardwood frame with hand-woven cane — details to be confirmed",
      image: "/assets/showcase/funiture/furniture 3.jpeg",
      note: "Details to confirm",
    },
    {
      title: "Coffee Table",
      material: "Carved solid wood with natural finish — details to be confirmed",
      image: "/assets/showcase/funiture/furniture 4.jpeg",
      note: "Details to confirm",
    },
  ];

  const materials = [
    {
      title: "Hardwood Joinery",
      detail: "Ethically harvested African timber crafted with visible, structural joinery.",
    },
    {
      title: "Hand-Cast Metal",
      detail: "Custom feet, brackets, and handles cast by regional metal artisans.",
    },
    {
      title: "Natural Weaving",
      detail: "Hand-woven cane and plant fibres shaped into comfortable contemporary seating.",
    },
  ];

  return (
    <section id="elevated" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 mb-12">
        <ScrollReveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            ELEvated
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Contemporary furniture and objects made in Africa. ELEvated uses local timber,
            metal, and weaving traditions to create everyday pieces that last.
          </p>
        </ScrollReveal>

        <div className="flex items-center justify-between pb-4 border-b border-[#E3E3DF]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#56595D]">
            Furniture Collection
          </span>
          {/* TODO: Replace with confirmed piece count */}
          <span className="text-xs font-mono text-[#C64E2E]">Selected Pieces</span>
        </div>
      </div>

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
                    alt={`ELEvated furniture piece: ${item.title}`}
                    fill
                    sizes="(max-width: 1024px) 85vw, 560px"
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  {/* TODO: Replace with confirmed series name */}
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E]">
                    Piece {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono text-[#56595D]">{item.note}</span>
                </div>

                <h3 className="text-xl font-medium text-[#121314] mb-2">{item.title}</h3>

                {/* TODO: Replace with confirmed material description */}
                <p className="text-sm text-[#56595D] leading-relaxed mb-4">{item.material}</p>
              </div>

              <div className="pt-4 border-t border-[#E3E3DF] flex items-center justify-between text-xs font-mono text-[#56595D]">
                {/* TODO: Add confirmed dimensions */}
                <span>Dimensions to confirm</span>
                <Link
                  href="#enquiry"
                  className="text-[#121314] hover:text-[#C64E2E] font-medium uppercase tracking-wider"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </HorizontalPan>

      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.1}>
              <div className="p-6 bg-white border border-[#E3E3DF] hover:border-[#121314] transition-colors h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block mb-2">
                    Materials {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium text-[#121314] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#56595D] leading-relaxed">{item.detail}</p>
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
