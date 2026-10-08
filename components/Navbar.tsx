"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#pathways" },
    { label: "Studio COKA", href: "#coka" },
    { label: "ELEvated", href: "#elevated" },
    { label: "The Effective Architect", href: "#tea" },
    { label: "Civic & Faith", href: "#civic" },
    { label: "Speaking", href: "#speaking" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F8F7]/95 backdrop-blur-md border-b border-[#E3E3DF]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        {/* Brand identity replaced with ck_logo_primary */}
        <Link
          href="/"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C64E2E]"
          aria-label="Crystal Kizor home"
        >
          <div className="relative h-9 w-36 sm:w-44">
            <Image
              src="/assets/brand/ck_logo_primary.png"
              alt="Crystal Kizor"
              fill
              priority
              sizes="180px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop single-line navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-[#56595D] hover:text-[#121314] transition-colors py-2 focus-visible:outline-none focus-visible:text-[#C64E2E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA button desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all focus-visible:outline-none"
          >
            <span>Start an enquiry</span>
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden p-2 text-[#121314] hover:text-[#C64E2E] focus-visible:outline-none"
        >
          {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#F8F8F7] border-b border-[#E3E3DF] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-wider text-[#121314] py-2 border-b border-[#E3E3DF]/60"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#enquiry"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#121314]"
              >
                <span>Start an enquiry</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
