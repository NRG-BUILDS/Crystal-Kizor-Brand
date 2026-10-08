import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function StudioCoka() {
  const practiceLedger = [
    {
      discipline: "Architecture",
      summary: "Bioclimatic spatial planning, passive solar orientation, and climate-responsive envelopes designed for tropical heat and seasonal rain.",
    },
    {
      discipline: "Interior Environments",
      summary: "Material-first interior spaces celebrating raw masonry, tailored joinery, and custom spatial lighting tuned to daily living rhythms.",
    },
    {
      discipline: "Construction Stewardship",
      summary: "Direct construction supervision and technical execution, bridging architectural intent with precise on-site craftsmanship.",
    },
  ];

  return (
    <section id="coka" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header Stack (No split-header) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Studio COKA
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Thoughtful architecture, interior design, and construction. Studio COKA creates climate-responsive environments attuned to West African geography, material economies, and lasting communal utility.
          </p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Visual Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] border border-[#E3E3DF] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                alt="Studio COKA architectural commission with natural light, textured walls, and climate-sensitive shading"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#56595D]">
              <span>Commission: Tropical Residential Pavilion</span>
              <span>Lekki Peninsula, Lagos</span>
            </div>
          </div>

          {/* Practice Ledger & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-[#E3E3DF] border-y border-[#E3E3DF]">
              {practiceLedger.map((item) => (
                <div key={item.discipline} className="py-5">
                  <h3 className="text-base font-medium text-[#121314] mb-2">
                    {item.discipline}
                  </h3>
                  <p className="text-sm text-[#56595D] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] transition-colors focus-visible:outline-none"
              >
                <span>Discuss a project</span>
                <ArrowUpRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
