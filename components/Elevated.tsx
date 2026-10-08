import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Elevated() {
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
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header Stack (No split-header) */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            ELEvated
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Contemporary furniture and product design rooted in African context, materials, and ideas. ELEvated translates indigenous material traditions into collectible, enduring domestic objects.
          </p>
        </div>

        {/* Asymmetric Product & Material Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full bg-[#E8E8E4] border border-[#E3E3DF] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                alt="ELEvated sculptural chair exhibiting hand-finished timber and cane craft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
              <span>Series 01: Low Occasional Lounge Chair</span>
              <span>Available via commission</span>
            </div>
          </div>

          {/* Three Material Studies & Direct Action */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              {materials.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 bg-white border border-[#E3E3DF] hover:border-[#121314] transition-colors"
                >
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
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] transition-colors focus-visible:outline-none"
              >
                <span>Request catalogue</span>
                <ArrowUpRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
