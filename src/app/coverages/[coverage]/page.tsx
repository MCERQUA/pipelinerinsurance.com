import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { coverages, getCoverageBySlug } from "@/lib/coverages";
import CoveragePageClient from "./CoveragePageClient";

// URL param → data slug map
const paramToSlug: Record<string, string> = {
  "general-liability": "general-liability",
  "workers-compensation": "workers-compensation",
  "commercial-auto": "commercial-auto",
  "equipment-coverage": "equipment-coverage",
  "pollution-liability": "pollution-liability",
  "contractor-bonds": "contractor-bonds",
};

export async function generateStaticParams() {
  return coverages.map((c) => ({ coverage: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { coverage: string };
}): Promise<Metadata> {
  const dataSlug = paramToSlug[params.coverage] ?? params.coverage;
  const coverage = getCoverageBySlug(dataSlug);
  if (!coverage) return {};
  return {
    title: coverage.metaTitle,
    description: coverage.metaDescription,
  };
}

export default function CoveragePage({ params }: { params: { coverage: string } }) {
  const dataSlug = paramToSlug[params.coverage] ?? params.coverage;
  const coverage = getCoverageBySlug(dataSlug);

  if (!coverage) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: coverage.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoveragePageClient coverage={coverage} />
    </>
  );
}
