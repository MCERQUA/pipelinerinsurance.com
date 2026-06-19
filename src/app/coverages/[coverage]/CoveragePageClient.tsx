"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  Truck,
  Wrench,
  AlertTriangle,
  Award,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Phone,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { coverages } from "@/lib/coverages";
import type { Coverage } from "@/lib/coverages";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Shield,
  Users,
  Truck,
  Wrench,
  AlertTriangle,
  Award,
};

const slugToHref: Record<string, string> = {
  "general-liability": "/coverages/general-liability",
  "workers-compensation": "/coverages/workers-compensation",
  "commercial-auto": "/coverages/commercial-auto",
  "equipment-coverage": "/coverages/equipment-coverage",
  "pollution-liability": "/coverages/pollution-liability",
  "contractor-bonds": "/coverages/contractor-bonds",
};

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

interface FAQItemProps {
  q: string;
  a: string;
  index: number;
}

function FAQItem({ q, a, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.35 }}
      className="border border-[rgba(26,79,138,0.12)] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f8fafc] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0f172a] text-sm leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#1a4f8a] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[rgba(26,79,138,0.08)] bg-[#f8fafc]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function CoverageSidebar({ current }: { current: Coverage }) {
  return (
    <aside className="space-y-5">
      {/* Quote CTA */}
      <div className="bg-[#1a4f8a] rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-2">Get a Quote Today</h3>
        <p className="text-[#bfdbfe] text-sm leading-relaxed mb-5">
          Speak with a pipeline insurance specialist. 15-minute quote turnaround — no obligation.
        </p>
        <Link
          href="/quote"
          className="block w-full text-center px-4 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white font-bold rounded-lg transition-colors text-sm"
        >
          Request a Free Quote
        </Link>
        <a
          href="tel:844-967-5247"
          className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-sm"
        >
          <Phone size={14} />
          844-967-5247
        </a>
      </div>

      {/* Other coverages */}
      <div className="bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] p-5">
        <h3 className="font-semibold text-[#0f172a] text-sm uppercase tracking-wider mb-4">
          Other Coverage Types
        </h3>
        <ul className="space-y-1">
          {coverages
            .filter((c) => c.slug !== current.slug)
            .map((c) => {
              const IconComp = iconMap[c.icon] ?? Shield;
              const href = slugToHref[c.slug] ?? `/coverages/${c.slug}`;
              return (
                <li key={c.slug}>
                  <Link
                    href={href}
                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-[#334155] hover:text-[#1a4f8a] hover:bg-[#f0f7ff] rounded-lg transition-colors"
                  >
                    <IconComp size={14} className="text-[#1a4f8a] flex-shrink-0" strokeWidth={2} />
                    {c.shortTitle}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>

      {/* Trust signals */}
      <div className="bg-[#f8fafc] rounded-2xl border border-[rgba(26,79,138,0.08)] p-5">
        {[
          "Licensed in All 50 States",
          "Same-Day Certificates of Insurance",
          "20+ Years Pipeline Experience",
          "2-Hour Claims Response",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2.5 mb-3 last:mb-0">
            <CheckCircle size={14} className="text-[#f97316] flex-shrink-0 mt-0.5" />
            <span className="text-xs text-[#475569] leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── Main Client Page ─────────────────────────────────────────────────────────

export default function CoveragePageClient({ coverage }: { coverage: Coverage }) {
  const IconComponent = iconMap[coverage.icon] ?? Shield;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0f172a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 60%, #1a4f8a 0%, transparent 55%), radial-gradient(circle at 85% 20%, #f97316 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#64748b] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#94a3b8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/coverages" className="hover:text-[#94a3b8] transition-colors">
              Coverages
            </Link>
            <span>/</span>
            <span className="text-[#94a3b8]">{coverage.shortTitle}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#1a4f8a] text-white shadow-lg">
              <IconComponent size={28} strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-3">
                {coverage.title}
              </h1>
              <p className="text-[#94a3b8] text-base lg:text-lg max-w-2xl leading-relaxed">
                {coverage.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-lg transition-colors shadow-lg text-sm"
            >
              Get a Free Quote
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-sm"
            >
              <Phone size={15} />
              844-967-5247
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* What's Covered */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] p-7 lg:p-8"
              >
                <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1a4f8a] text-white flex-shrink-0">
                    <CheckCircle size={15} strokeWidth={2.5} />
                  </span>
                  What&apos;s Covered
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coverage.whatsCovered.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className="flex items-start gap-3 p-3.5 bg-[#f8fafc] rounded-xl border border-[rgba(26,79,138,0.06)]"
                    >
                      <CheckCircle size={15} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#334155] font-medium leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Who Needs This */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] p-7 lg:p-8"
              >
                <h2 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#16a34a] text-white flex-shrink-0">
                    <Users size={15} strokeWidth={2.5} />
                  </span>
                  Who Needs This Coverage
                </h2>
                <p className="text-[#475569] text-sm leading-relaxed">{coverage.whoNeedsThis}</p>
              </motion.section>

              {/* Why CCA */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-[#1a4f8a] rounded-2xl p-7 lg:p-8"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white flex-shrink-0">
                    <Shield size={15} strokeWidth={2.5} />
                  </span>
                  Why Contractors Choose CCA
                </h2>
                <p className="text-[#bfdbfe] text-sm leading-relaxed mb-6">
                  {coverage.whyCCA}
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  Get a Quote Now
                  <ArrowRight size={14} />
                </Link>
              </motion.section>

              {/* FAQs */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-[#0f172a] mb-5 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#f97316] text-white flex-shrink-0 text-xs font-bold">
                    FAQ
                  </span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {coverage.faqs.map((faq, i) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                  ))}
                </div>
              </motion.section>

              {/* Inline Quote CTA */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="bg-[#0f172a] rounded-2xl p-7 lg:p-8 text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-3">
                  Ready to Get{" "}
                  <span className="text-[#f97316]">{coverage.shortTitle}</span> Coverage?
                </h2>
                <p className="text-[#94a3b8] text-sm mb-6 max-w-md mx-auto">
                  Our pipeline insurance specialists are standing by. We quote fast and we know
                  your trade.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white font-bold rounded-lg transition-colors"
                  >
                    Get a Free Quote
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="tel:844-967-5247"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
                  >
                    <Phone size={15} />
                    844-967-5247
                  </a>
                </div>
              </motion.section>

              {/* Back link */}
              <div>
                <Link
                  href="/coverages"
                  className="inline-flex items-center gap-2 text-sm text-[#1a4f8a] hover:text-[#123568] font-medium transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to All Coverages
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <CoverageSidebar current={coverage} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
