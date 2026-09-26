import type { Metadata } from "next";

// quote/page.tsx is a client component ("use client"), which cannot export
// metadata, so /quote was falling back to the site-default title. It lives here.
export const metadata: Metadata = {
  title: { absolute: "Get a Free Pipeline Contractor Insurance Quote | CCA" },
  description:
    "Request a pipeline contractor insurance quote from Contractors Choice Agency: general liability, workers comp, pollution liability, commercial auto and bonds. Licensed in all 50 states.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
