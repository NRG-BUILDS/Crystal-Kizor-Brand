"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CivicInitiatives() {
  return (
    <section id="civic" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header Stack */}
        <ScrollReveal className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Civic Action & Spiritual Life
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Sustainable transformation demands both physical opportunity and inner purpose. Crystal Kizor grounds her public leadership in educational equity and Christian faith.
          </p>
        </ScrollReveal>

        {/* Juxtaposed Twin Panels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel 1: AKO Alliance */}
          <ScrollReveal delay={0.1}>
            <div className="p-8 sm:p-10 bg-white border border-[#E3E3DF] flex flex-col justify-between hover:border-[#121314] transition-colors h-full">
              <div>
                <div className="relative aspect-[16/9] w-full mb-6 bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
                  <Image
                    src="/assets/showcase/community/village architecture construct 3.png"
                    alt="Educational community building construct supported by AKO Alliance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] mb-2">
                  Civic Access & Education
                </div>

                <h3 className="text-2xl font-medium text-[#121314] mb-4">
                  AKO Alliance
                </h3>

                <p className="text-sm sm:text-base text-[#56595D] leading-relaxed mb-6">
                  Expanding access to education, technical literacy, and creative opportunities for children and young people across underserved communities.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-[#121314] mb-8 divide-y divide-[#E3E3DF]">
                  <li className="pt-2">Educational resource centers and community libraries</li>
                  <li className="pt-2">Vocational and spatial design apprenticeships for youth</li>
                  <li className="pt-2">Strategic partnerships with regional educators and donors</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E3E3DF]">
                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#121314] hover:text-[#C64E2E] transition-colors focus-visible:outline-none"
                >
                  <span>Partner on education access</span>
                  <ArrowUpRight size={15} weight="bold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Panel 2: Alive and Free */}
          <ScrollReveal delay={0.2}>
            <div className="p-8 sm:p-10 bg-white border border-[#E3E3DF] flex flex-col justify-between hover:border-[#121314] transition-colors h-full">
              <div>
                <div className="relative aspect-[16/9] w-full mb-6 bg-[#E8E8E4] overflow-hidden border border-[#E3E3DF]">
                  <Image
                    src="/assets/showcase/community/village architecture construct 5.jpg"
                    alt="Community gathering circle and fellowship venue for Alive and Free"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] mb-2">
                  Faith & Spiritual Renewal
                </div>

                <h3 className="text-2xl font-medium text-[#121314] mb-4">
                  Alive and Free
                </h3>

                <p className="text-sm sm:text-base text-[#56595D] leading-relaxed mb-6">
                  A Christian youth movement focused on truth, healing, freedom, identity, purpose, and life in Christ. An intentional community cultivating spiritual depth and authentic discipleship.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-[#121314] mb-8 divide-y divide-[#E3E3DF]">
                  <li className="pt-2">Gatherings anchored in scriptural truth, prayer, and worship</li>
                  <li className="pt-2">Safe spaces addressing mental wellness and emotional healing</li>
                  <li className="pt-2">Discipleship programs uncovering God-given identity and purpose</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E3E3DF]">
                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#121314] hover:text-[#C64E2E] transition-colors focus-visible:outline-none"
                >
                  <span>Connect with the movement</span>
                  <ArrowUpRight size={15} weight="bold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
