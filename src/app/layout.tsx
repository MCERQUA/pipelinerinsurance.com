import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pipelinerinsurance.com"),
  title: {
    template: "%s | Pipeline Contractor Insurance",
    default: "Pipeline Contractor Insurance | Contractors Choice Agency",
  },
  description:
    "Specialized insurance for pipeline contractors. General liability, workers comp, pollution liability, and more. 15-minute quotes. Licensed in all 50 states.",
  keywords: [
    "pipeline contractor insurance",
    "pipeline insurance",
    "contractor insurance",
    "pipeline workers comp",
    "pipeline general liability",
    "pollution liability insurance",
    "oil and gas contractor insurance",
    "pipeline construction insurance",
  ],
  authors: [{ name: "Contractors Choice Agency", url: "https://contractorschoiceagency.com" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pipelinerinsurance.com",
    siteName: "Pipeline Insurance | Contractors Choice Agency",
    title: "Pipeline Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance coverage for pipeline contractors. Fast quotes, expert support, licensed in all 50 states.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pipeline Contractor Insurance - Contractors Choice Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipeline Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance coverage for pipeline contractors. Fast quotes, expert support, licensed in all 50 states.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pipelinerinsurance.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Contractors Choice Agency",
  alternateName: "Pipeline Insurance",
  description:
    "Specialized insurance for pipeline contractors including general liability, workers compensation, pollution liability, and commercial auto. Licensed in all 50 states.",
  url: "https://pipelinerinsurance.com",
  logo: "https://pipelinerinsurance.com/logo.png",
  image: "https://pipelinerinsurance.com/og-image.jpg",
  telephone: "844-967-5247",
  email: "josh@contractorschoiceagency.com",
  foundingDate: "2005",
  founder: {
    "@type": "Person",
    name: "Josh Cotner",
    jobTitle: "Commercial Insurance Specialist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "844-967-5247",
      contactType: "customer service",
      availableLanguage: "English",
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      telephone: "844-967-5247",
      contactType: "emergency",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pipeline Contractor Insurance Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Liability Insurance",
          description: "General liability coverage for pipeline contractors",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workers Compensation Insurance",
          description: "Workers comp coverage for pipeline crews",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pollution Liability Insurance",
          description: "Environmental pollution coverage for pipeline work",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Auto Insurance",
          description: "Fleet and commercial auto for pipeline contractors",
        },
      },
    ],
  },
  sameAs: [
    "https://contractorschoiceagency.com",
    "https://linkedin.com/in/joshcotner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a4f8a" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
