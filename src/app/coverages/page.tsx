import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Users,
  Truck,
  Wrench,
  AlertTriangle,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { coverages } from "@/lib/coverages";

export const metadata: Metadata = {
  title: "Pipeline Contractor Coverage Options | PipelinerInsurance.com",
  description:
    "Comprehensive insurance coverage for pipeline contractors — general liability, workers comp, commercial auto, equipment, pollution liability, and contractor bonds. All 50 states.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Shield,
  Users,
  Truck,
  Wrench,
  AlertTriangle,
  Award,
};

const accentColors: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  Shield: {
    bg: "bg-[#f0f7ff]",
    text: "text-[#1a4f8a]",
    border: "border-[rgba(26,79,138,0.15)]",
    iconBg: "bg-[#1a4f8a]",
  },
  Users: {
    bg: "bg-[#f0fdf4]",
    text: "text-[#166534]",
    border: "border-[rgba(22,101,52,0.15)]",
    iconBg: "bg-[#16a34a]",
  },
  Truck: {
    bg: "bg-[#fff7ed]",
    text: "text-[#9a3412]",
    border: "border-[rgba(249,115,22,0.2)]",
    iconBg: "bg-[#f97316]",
  },
  Wrench: {
    bg: "bg-[#fafaf9]",
    text: "text-[#44403c]",
    border: "border-[rgba(120,113,108,0.2)]",
    iconBg: "bg-[#78716c]",
  },
  AlertTriangle: {
    bg: "bg-[#fefce8]",
    text: "text-[#854d0e]",
    border: "border-[rgba(234,179,8,0.2)]",
    iconBg: "bg-[#ca8a04]",
  },
  Award: {
    bg: "bg-[#fdf4ff]",
    text: "text-[#6b21a8]",
    border: "border-[rgba(168,85,247,0.15)]",
    iconBg: "bg-[#9333ea]",
  },
};

const slugToHref: Record<string, string> = {
  'general-liability': '/coverages/general-liability',
  'workers-compensation': '/coverages/workers-compensation',
  'commercial-auto': '/coverages/commercial-auto',
  'equipment-coverage': '/coverages/equipment-coverage',
  'pollution-liability': '/coverages/pollution-liability',
  'contractor-bonds': '/coverages/contractor-bonds',
};

export default function CoveragesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0f172a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #1a4f8a 0%, transparent 60%), radial-gradient(circle at 80% 20%, #f97316 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(249,115,22,0.15)] border border-[rgba(249,115,22,0.3)] rounded-full mb-6">
              <Shield size={13} className="text-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold uppercase tracking-wider">
                Specialized Pipeline Coverage
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Pipeline Contractor{" "}
              <span className="text-[#f97316]">Coverage Options</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-2xl">
              From general liability to pollution coverage, we offer every type of insurance
              pipeline contractors need — placed with carriers who understand your work.
              All 50 states. 15-minute quotes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
              >
                <Phone size={16} />
                844-967-5247
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#1a4f8a] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              "Licensed All 50 States",
              "20+ Years Pipeline Experience",
              "15-Minute Quote Turnaround",
              "Same-Day Certificates",
              "24/7 Claims Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#f97316] flex-shrink-0" />
                <span className="text-white text-sm font-medium whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Grid */}
      <section className="flex-1 py-16 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">
              Coverage Built for Pipeline Work
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              Each policy is tailored to the specific exposures of pipeline construction,
              installation, and maintenance — not a generic contractor package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coverages.map((coverage) => {
              const IconComponent = iconMap[coverage.icon] ?? Shield;
              const colors = accentColors[coverage.icon] ?? accentColors.Shield;
              const href = slugToHref[coverage.slug] ?? `/coverages/${coverage.slug}`;

              return (
                <Link
                  key={coverage.slug}
                  href={href}
                  className={`group relative bg-white rounded-2xl border ${colors.border} p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.iconBg} text-white mb-5 group-hover:scale-105 transition-transform`}
                  >
                    <IconComponent size={22} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#1a4f8a] transition-colors">
                    {coverage.shortTitle}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-5 flex-1">
                    {coverage.description}
                  </p>

                  {/* Key coverages preview */}
                  <ul className="space-y-1.5 mb-6">
                    {coverage.whatsCovered.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#64748b]">
                        <CheckCircle
                          size={12}
                          className={`flex-shrink-0 mt-0.5 ${colors.text}`}
                        />
                        {item}
                      </li>
                    ))}
                    {coverage.whatsCovered.length > 3 && (
                      <li className="text-xs text-[#94a3b8] pl-4">
                        +{coverage.whatsCovered.length - 3} more coverages
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <div
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} group-hover:gap-2.5 transition-all`}
                  >
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why CCA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0f7ff] border border-[rgba(26,79,138,0.15)] rounded-full mb-5">
                <Shield size={13} className="text-[#1a4f8a]" />
                <span className="text-[#1a4f8a] text-xs font-semibold uppercase tracking-wider">
                  Why Contractors Choose Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-5">
                Pipeline Insurance Specialists —{" "}
                <span className="text-[#1a4f8a]">Not Generalists</span>
              </h2>
              <p className="text-[#475569] text-base leading-relaxed mb-6">
                Most insurance brokers treat pipeline contractors like any other construction
                trade. We don't. We know the difference between HDD and conventional open-cut
                installations, the class codes that matter, and the carriers who will actually
                compete for your business.
              </p>
              <p className="text-[#475569] text-base leading-relaxed mb-8">
                Contractors Choice Agency has placed commercial insurance for contractors since
                2005. Our pipeline specialty practice means you get a broker who speaks your
                language — from midstream operations to fiber-optic conduit installation.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4f8a] hover:bg-[#123568] text-white font-semibold rounded-lg transition-colors"
              >
                Start Your Quote
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "20+", label: "Years in Business" },
                { stat: "50", label: "States Licensed" },
                { stat: "15 min", label: "Quote Turnaround" },
                { stat: "2 hr", label: "Claims Response" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="bg-[#f8fafc] rounded-2xl border border-[rgba(26,79,138,0.1)] p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#1a4f8a] mb-1">{stat}</div>
                  <div className="text-sm text-[#64748b] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0f172a] py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Covered?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8">
            Talk to a pipeline insurance specialist today. We quote fast and we know your trade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] hover:bg-[#ea6b00] text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-lg border border-white/20 transition-colors"
            >
              <Phone size={18} />
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
