import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function TheEffectiveArchitect() {
  const pillars = [
    {
      label: "Curriculum & Frameworks",
      desc: "Structured practice management training addressing project billing, construction administration, and client engagement for independent architects.",
    },
    {
      label: "Media & Conversations",
      desc: "Editorial podcasts, long-form technical articles, and roundtables dissecting contemporary urban building challenges in African cities.",
    },
    {
      label: "Professional Mentorship",
      desc: "Direct guidance networks helping young spatial practitioners navigate licensure, studio foundation, and career longevity.",
    },
  ];

  return (
    <section id="tea" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Eyebrow 2 of max 3 allowed on entire page */}
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C64E2E] mb-3">
            Architecture Education & Media
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            The Effective Architect
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            An education and media platform equipping built-environment professionals to learn, grow, and build sustainable practices across the African continent and beyond.
          </p>
        </div>

        {/* Broadcast Ledger Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Architectural Learning Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full bg-[#E8E8E4] border border-[#E3E3DF] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural models and studio design workspace representing The Effective Architect training"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
              <span>Platform: Education, Media & Masterclasses</span>
              <span>Regional Cohorts</span>
            </div>
          </div>

          {/* Pillars List & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
            <div className="divide-y divide-[#E3E3DF] border-y border-[#E3E3DF]">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="py-6">
                  <h3 className="text-lg font-medium text-[#121314] mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-sm text-[#56595D] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] transition-colors focus-visible:outline-none"
              >
                <span>Join learning network</span>
                <ArrowUpRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
