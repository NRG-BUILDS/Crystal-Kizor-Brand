import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function PersonalBrand() {
  const threads = [
    {
      title: "Architecture and Practice",
      desc: "Spatial research, project documentation, and original writing on climate-responsive design, African cities, and the built environment.",
    },
    {
      title: "Media and Conversations",
      desc: "Interviews, recorded discussions, and published commentary exploring what it means to design responsibly in a rapidly changing continent.",
    },
    {
      title: "Ideas and Essays",
      desc: "Thinking on design culture, professional ethics, education, and the relationship between architecture, faith, and community life.",
    },
  ];

  return (
    <section id="crystal" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header Stack */}
        <ScrollReveal className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Research, Writing and Ideas
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Beyond the studios and platforms, Crystal Kizor thinks, writes, and shares ideas
            directly. Her personal work spans architecture research, published essays, and
            honest conversations about design, culture, and the next generation.
          </p>
        </ScrollReveal>

        {/* Split layout: portrait left, content threads right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative aspect-[4/5] w-full bg-[#E8E8E4] border border-[#E3E3DF] overflow-hidden">
                <Image
                  src="/assets/crystal/Earthy Editorial Portrait by African Architecture.png"
                  alt="Crystal Kizor in a reflective portrait by African architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#56595D]">
                <span>Crystal Kizor</span>
                <span>Personal work, research and writing</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Content threads */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-[#E3E3DF] border-y border-[#E3E3DF]">
              {threads.map((thread, idx) => (
                <ScrollReveal key={thread.title} delay={idx * 0.1}>
                  <div className="py-6">
                    <h3 className="text-lg font-medium text-[#121314] mb-2">
                      {thread.title}
                    </h3>
                    <p className="text-sm text-[#56595D] leading-relaxed">{thread.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Pull quote or editorial note */}
            <ScrollReveal delay={0.35}>
              <div className="mt-8 p-6 bg-white border border-[#E3E3DF] border-l-4 border-l-[#C64E2E]">
                <p className="text-sm text-[#56595D] leading-relaxed italic">
                  Crystal Kizor sees architecture as one thread in a larger fabric of
                  responsibility. Her writing and media work connect the physical act of
                  building to the social, spiritual, and generational questions it raises.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="mt-8">
                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all focus-visible:outline-none"
                >
                  <span>Collaborate or commission writing</span>
                  <ArrowUpRight size={15} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
