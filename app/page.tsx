import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://intelx.ir/#pricing",
    name: "Pricing Plans",
    description: "3D Animation development services pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://intelx.ir/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D development Services",
      description: "Professional 3D animation development services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "162,000,000",
          priceCurrency: "IRR",
          description: "Up to 15s 3D Animation designing for the web application with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "492,000,000",
          priceCurrency: "IRR",
          description: "Design responsive web Motion website with advance user experience enhancement",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "1,250,000,000",
          priceCurrency: "IRR",
          description: "develop a unique award winning website from groundup ",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://intelx.ir/",
    name: "IntelX | you can live your digital Dreams , we are professional Dreamers!",
    description:
      "in our universes, everything is possible, just imagine it and we will deliver it!",
    url: "https://intelx.ir/",
    mainEntity: {
      "@type": "Organization",
      name: "IntelX",
      url: "https://intelx.ir",
      sameAs: [
        "https://twitter.com/IntelXir",
        "https://www.youtube.com/@intelxdevelopers",
        "https://instagram.com/intelxdevs",
        "https://threads.com/intelxdevs",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://intelx.ir/#pricing",
        name: "Pricing Section",
        url: "https://intelx.ir/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
