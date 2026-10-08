import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pathways } from "@/components/Pathways";
import { StudioCoka } from "@/components/StudioCoka";
import { Elevated } from "@/components/Elevated";
import { TheEffectiveArchitect } from "@/components/TheEffectiveArchitect";
import { CivicInitiatives } from "@/components/CivicInitiatives";
import { SpeakingResearch } from "@/components/SpeakingResearch";
import { PersonalBrand } from "@/components/PersonalBrand";
import { EnquiryConsole } from "@/components/EnquiryConsole";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#F8F8F7] text-[#121314]">
      {/* Semantic landmark: banner / header navigation */}
      <Navbar />

      {/* Semantic landmark: main content container */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Section 1: Hero (Asymmetric Split Screen) */}
        <Hero />

        {/* Section 2: Pathways (Tiered Pathway Matrix with hierarchy) */}
        <Pathways />

        {/* Section 3: Studio COKA (Flagship architecture with sticky stack) */}
        <StudioCoka />

        {/* Section 4: ELEvated (Horizontal pan furniture gallery) */}
        <Elevated />

        {/* Section 5: The Effective Architect (Editorial broadcast ledger) */}
        <TheEffectiveArchitect />

        {/* Section 6: Civic and Spiritual Initiatives (Twin pillars) */}
        <CivicInitiatives />

        {/* Section 7: Speaking and Ideas (Symposium catalog) */}
        <SpeakingResearch />

        {/* Section 8: Personal Brand (Research, writing, and ideas under Crystal Kizor) */}
        <PersonalBrand />

        {/* Section 9: Enquiry Console (Routing form with mailto fallback) */}
        <EnquiryConsole />
      </main>

      {/* Semantic landmark: footer */}
      <Footer />
    </div>
  );
}
