import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pathways } from "@/components/Pathways";
import { StudioCoka } from "@/components/StudioCoka";
import { Elevated } from "@/components/Elevated";
import { TheEffectiveArchitect } from "@/components/TheEffectiveArchitect";
import { CivicInitiatives } from "@/components/CivicInitiatives";
import { SpeakingResearch } from "@/components/SpeakingResearch";
import { EnquiryConsole } from "@/components/EnquiryConsole";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F8F8F7] text-[#121314]">
      {/* Semantic landmark: banner / header navigation */}
      <Navbar />

      {/* Semantic landmark: main content container */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Section 1: Hero (Asymmetric Split Screen) */}
        <Hero />

        {/* Section 2: Pathways (Segmented Pathway Matrix) */}
        <Pathways />

        {/* Section 3: Studio COKA (Full-bleed Architectural Ledger & Detail Split) */}
        <StudioCoka />

        {/* Section 4: ELEvated (Material Triptych & Object Gallery) */}
        <Elevated />

        {/* Section 5: The Effective Architect (Editorial Broadcast Ledger) */}
        <TheEffectiveArchitect />

        {/* Section 6: Civic & Spiritual Initiatives (Juxtaposed Twin Pillars) */}
        <CivicInitiatives />

        {/* Section 7: Speaking & Research (Curated Symposium Catalog) */}
        <SpeakingResearch />

        {/* Section 8: Enquiry Console (Interactive Routing Console) */}
        <EnquiryConsole />
      </main>

      {/* Semantic landmark: footer */}
      <Footer />
    </div>
  );
}
