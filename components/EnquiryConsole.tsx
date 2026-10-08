"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, EnvelopeSimple } from "@phosphor-icons/react";

interface RoutingTarget {
  id: string;
  label: string;
  department: string;
  email: string;
  leadTime: string;
}

const ROUTING_OPTIONS: RoutingTarget[] = [
  {
    id: "coka",
    label: "Studio COKA (Architecture, Interiors & Construction)",
    department: "Studio COKA Architectural Practice",
    email: "commissions@studiocoka.com",
    leadTime: "2 to 3 business days for project evaluation",
  },
  {
    id: "elevated",
    label: "ELEvated (Furniture & Product Design)",
    department: "ELEvated Studio & Workshop",
    email: "design@elevatedcraft.com",
    leadTime: "1 to 2 business days for acquisition details",
  },
  {
    id: "tea",
    label: "The Effective Architect (Education & Media)",
    department: "TEA Learning Network",
    email: "programmes@theeffectivearchitect.com",
    leadTime: "2 business days for cohort & curriculum queries",
  },
  {
    id: "ako",
    label: "AKO Alliance (Youth Education & Philanthropy)",
    department: "AKO Alliance Initiative",
    email: "partners@akoalliance.org",
    leadTime: "3 business days for partnership review",
  },
  {
    id: "alive",
    label: "Alive and Free (Spiritual Movement & Faith)",
    department: "Alive and Free Fellowship Circle",
    email: "community@aliveandfree.org",
    leadTime: "1 to 2 business days for fellowship queries",
  },
  {
    id: "speaking",
    label: "Speaking Engagements & Keynotes",
    department: "Executive & Curatorial Office",
    email: "speaking@crystalkizor.com",
    leadTime: "48 hours for schedule availability",
  },
  {
    id: "press",
    label: "Press, Research & General Collaborations",
    department: "Personal Brand & Research Studio",
    email: "hello@crystalkizor.com",
    leadTime: "2 business days",
  },
];

export function EnquiryConsole() {
  const [selectedRouteId, setSelectedRouteId] = useState("coka");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentRoute =
    ROUTING_OPTIONS.find((r) => r.id === selectedRouteId) || ROUTING_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const mailtoLink = `mailto:${currentRoute.email}?subject=${encodeURIComponent(
    `Enquiry regarding ${currentRoute.label}`
  )}&body=${encodeURIComponent(
    `Name: ${fullName || "[Your Name]"}\nOrganization: ${
      organization || "[Your Organization]"
    }\n\n${message || "Hello Crystal Kizor and team,"}`
  )}`;

  return (
    <section id="enquiry" className="py-20 lg:py-28 border-b border-[#E3E3DF] bg-[#F8F8F7]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header Stack (No split-header) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121314] mb-4">
            Start an enquiry
          </h2>
          <p className="text-base sm:text-lg text-[#56595D] leading-relaxed">
            Every initiative is stewarded by a dedicated team. Select your area of interest to direct your message to the appropriate desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E3E3DF]">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle size={48} weight="fill" className="text-[#C64E2E] mb-4" />
                <h3 className="text-2xl font-medium text-[#121314] mb-2">
                  Enquiry Recorded
                </h3>
                <p className="text-sm text-[#56595D] max-w-md mb-6 leading-relaxed">
                  Thank you. Your message has been prepared for {currentRoute.department}. You can also dispatch directly via your email client below.
                </p>
                <div className="flex gap-4">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] transition-colors"
                  >
                    <span>Send via Email Client</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#121314] border border-[#E3E3DF] hover:border-[#121314] transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Routing Target Selector */}
                <div>
                  <label
                    htmlFor="route-selector"
                    className="block text-xs font-mono uppercase tracking-wider text-[#121314] mb-2 font-medium"
                  >
                    What are you enquiring about?
                  </label>
                  <select
                    id="route-selector"
                    value={selectedRouteId}
                    onChange={(e) => setSelectedRouteId(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F8F7] border border-[#E3E3DF] text-[#121314] text-sm focus:outline-none focus:border-[#121314] focus:ring-1 focus:ring-[#121314] transition-colors"
                  >
                    {ROUTING_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#121314] mb-2 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Adaeze Adeleke"
                      className="w-full px-4 py-3 bg-[#F8F8F7] border border-[#E3E3DF] text-[#121314] placeholder-[#8C8F94] text-sm focus:outline-none focus:border-[#121314] focus:ring-1 focus:ring-[#121314] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-xs font-mono uppercase tracking-wider text-[#121314] mb-2 font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="adaeze@domain.com"
                      className="w-full px-4 py-3 bg-[#F8F8F7] border border-[#E3E3DF] text-[#121314] placeholder-[#8C8F94] text-sm focus:outline-none focus:border-[#121314] focus:ring-1 focus:ring-[#121314] transition-colors"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-xs font-mono uppercase tracking-wider text-[#121314] mb-2 font-medium"
                  >
                    Organization or Project Title (Optional)
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Studio, institution, or private commission"
                    className="w-full px-4 py-3 bg-[#F8F8F7] border border-[#E3E3DF] text-[#121314] placeholder-[#8C8F94] text-sm focus:outline-none focus:border-[#121314] focus:ring-1 focus:ring-[#121314] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#121314] mb-2 font-medium"
                  >
                    Project Context or Purpose
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide site location, project stage, timeline, or scope of interest..."
                    className="w-full px-4 py-3 bg-[#F8F8F7] border border-[#E3E3DF] text-[#121314] placeholder-[#8C8F94] text-sm focus:outline-none focus:border-[#121314] focus:ring-1 focus:ring-[#121314] transition-colors resize-none"
                  />
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#121314] hover:bg-[#C64E2E] active:scale-[0.98] transition-all focus-visible:outline-none"
                  >
                    <span>Submit enquiry</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </button>

                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-xs uppercase tracking-wider font-medium text-[#121314] border border-[#E3E3DF] hover:border-[#121314] active:scale-[0.98] transition-all focus-visible:outline-none"
                  >
                    <EnvelopeSimple size={16} weight="bold" />
                    <span>Open Mailto Directly</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Protocol Ledger */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 bg-white border border-[#E3E3DF] space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C64E2E] block">
                Routing Destination
              </span>

              <div>
                <h3 className="text-xl font-medium text-[#121314] mb-1">
                  {currentRoute.department}
                </h3>
                <p className="text-xs font-mono text-[#56595D]">
                  Direct Address: {currentRoute.email}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E3DF] space-y-3">
                <div className="text-xs text-[#56595D]">
                  <span className="font-semibold text-[#121314]">Expected Response: </span>
                  {currentRoute.leadTime}
                </div>
                <div className="text-xs text-[#56595D]">
                  <span className="font-semibold text-[#121314]">Location Base: </span>
                  Lagos, Nigeria with international project capability
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 border border-[#E3E3DF] bg-[#F8F8F7]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#121314] mb-2 font-medium">
                Confidentiality and Intellectual Property
              </h4>
              <p className="text-xs text-[#56595D] leading-relaxed">
                All architectural briefs, donor proposals, and institutional queries are treated with strict professional confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
