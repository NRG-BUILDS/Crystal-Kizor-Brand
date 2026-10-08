import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const initiatives = [
    { name: "Studio COKA", href: "#coka", tag: "Architecture & Construction" },
    { name: "ELEvated", href: "#elevated", tag: "Contemporary Furniture" },
    { name: "The Effective Architect", href: "#tea", tag: "Education & Media" },
    { name: "AKO Alliance", href: "#civic", tag: "Youth Education" },
    { name: "Alive and Free", href: "#civic", tag: "Christian Youth Movement" },
    { name: "Speaking Engagements", href: "#speaking", tag: "Keynotes & Talks" },
    { name: "Crystal Kizor", href: "#", tag: "Personal Monograph" },
  ];

  return (
    <footer className="bg-[#F8F8F7] text-[#121314] pt-16 pb-12 border-t border-[#E3E3DF]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E3E3DF]">
          {/* Identity column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="relative h-8 w-36 mb-4">
                <Image
                  src="/assets/brand/ck_logo_primary.png"
                  alt="Crystal Kizor"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm text-[#56595D] leading-relaxed max-w-sm mb-6">
                Crystal Kizor designs buildings, crafts furniture, and invests in people through education, community work, and faith across Africa.
              </p>
            </div>
            <div className="text-xs font-mono text-[#56595D]">
              Based in Lagos, Nigeria. Working globally.
            </div>
          </div>

          {/* Practice directory */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#56595D] mb-4">
              All Initiatives
            </h3>
            <ul className="space-y-2.5">
              {initiatives.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs text-[#121314] hover:text-[#C64E2E] transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[#8C8F94] font-mono text-[11px]">
                      ({item.tag})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links and navigation */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#56595D] mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-xs text-[#56595D]">
                <li>
                  <Link href="#pathways" className="hover:text-[#121314] transition-colors">
                    Visitor Pathways
                  </Link>
                </li>
                <li>
                  <Link href="#coka" className="hover:text-[#121314] transition-colors">
                    Studio COKA Architecture
                  </Link>
                </li>
                <li>
                  <Link href="#elevated" className="hover:text-[#121314] transition-colors">
                    ELEvated Furniture
                  </Link>
                </li>
                <li>
                  <Link href="#tea" className="hover:text-[#121314] transition-colors">
                    The Effective Architect
                  </Link>
                </li>
                <li>
                  <Link href="#civic" className="hover:text-[#121314] transition-colors">
                    Community & Faith
                  </Link>
                </li>
                <li>
                  <Link href="#enquiry" className="hover:text-[#121314] transition-colors">
                    Start an Enquiry
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#121314] hover:text-[#C64E2E] transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>

        {/* Brand signature mark at the bottom of the footer */}
        <div className="pt-10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#E3E3DF]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#56595D]">
              Personal Monograph and Seal
            </span>
          </div>
          <div className="relative h-12 w-48 sm:w-56">
            <Image
              src="/assets/brand/ck_logo_signature.png"
              alt="Crystal Kizor Signature"
              fill
              sizes="240px"
              className="object-contain sm:object-right"
            />
          </div>
        </div>

        {/* Bottom colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#56595D]">
          <div>
            &copy; {new Date().getFullYear()} Crystal Kizor. All rights reserved.
          </div>
          <div>
            Lagos, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
