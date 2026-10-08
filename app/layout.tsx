import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystal Kizor | Architect, Designer, and Founder",
  description:
    "Crystal Kizor is an architect, designer, entrepreneur, speaker, and researcher. Her work spans climate-responsive buildings, contemporary furniture, architectural education, and youth empowerment across Africa.",
  keywords: [
    "Crystal Kizor",
    "Studio COKA",
    "African architecture",
    "Climate responsive design",
    "ELEvated furniture",
    "The Effective Architect",
    "AKO Alliance",
    "Alive and Free",
  ],
  authors: [{ name: "Crystal Kizor" }],
  creator: "Crystal Kizor",
  metadataBase: new URL("https://crystalkizor.com"),
  openGraph: {
    title: "Crystal Kizor | Architect, Designer, and Founder",
    description:
      "Crystal Kizor designs buildings, crafts furniture, and invests in the next generation across Africa.",
    url: "https://crystalkizor.com",
    siteName: "Crystal Kizor Portfolio Hub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/crystal/Architectural Studio Portrait.png",
        width: 1200,
        height: 630,
        alt: "Crystal Kizor Architectural Practice and Initiatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Kizor | Architect, Designer, and Founder",
    description:
      "Crystal Kizor designs buildings, crafts furniture, and invests in the next generation across Africa.",
    creator: "@crystalkizor",
    images: [
      "/assets/crystal/Architectural Studio Portrait.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://crystalkizor.com/#person",
        "name": "Crystal Kizor",
        "jobTitle": "Architect, Spatial Designer, Founder, and Researcher",
        "description":
          "Architect, designer, entrepreneur, speaker, and researcher leading Studio COKA, ELEvated, The Effective Architect, AKO Alliance, and Alive and Free.",
        "url": "https://crystalkizor.com",
        "knowsAbout": [
          "Architecture and Construction",
          "Climate-responsive Built Environment",
          "African Furniture and Material Culture",
          "Architectural Education and Media",
          "Youth Mentorship and Community Leadership"
        ],
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Studio COKA",
            "description": "Architecture, interior design, and construction practice focused on thoughtful and climate-responsive environments."
          },
          {
            "@type": "Organization",
            "name": "ELEvated",
            "description": "Contemporary furniture and product design rooted in African context, materials, and ideas."
          },
          {
            "@type": "Organization",
            "name": "The Effective Architect",
            "description": "Architecture education and media platform helping built-environment professionals learn and grow."
          },
          {
            "@type": "Organization",
            "name": "AKO Alliance",
            "description": "Expanding access to education and opportunity for children and young people."
          },
          {
            "@type": "Organization",
            "name": "Alive and Free",
            "description": "Christian youth movement focused on truth, healing, freedom, identity, purpose, and life in Christ."
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8F8F7] text-[#121314] selection:bg-[#C64E2E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
