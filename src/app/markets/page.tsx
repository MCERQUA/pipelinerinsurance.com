import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Flame,
  Truck,
  Phone,
  Mail,
  ClipboardList,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Carrier Markets We Access | PipelinerInsurance.com",
  description:
    "Wholesale carrier markets Contractors Choice Agency accesses for pipeline, energy, and environmental contractors through our Amwins Brokerage partnership — environmental and energy contractor markets, oilfield hauler monoline auto, and specialty target classes.",
};

const environmentalMarkets = [
  "Berkley",
  "Chubb",
  "Colony",
  "Starr",
  "AIG",
  "Crum & Forster",
  "Zurich",
  "Arch",
  "Admiral",
  "Iron Shore",
  "Markel",
  "Canopy",
  "Align General",
  "Liberty",
  "Navigators",
  "Scottsdale",
  "Westchester",
  "Century",
  "Aspen",
];

const energyMarkets = [
  "AIG",
  "CV Starr",
  "Kinsale",
  "James River",
  "Everest",
  "Zurich",
  "Hartford",
  "Chubb",
  "Navigators",
  "RLI",
  "XL Catlin",
  "Starstone",
  "Scottsdale",
  "Markel",
  "AWAC",
  "Sompo",
  "Axis",
];

const haulerMarkets = [
  { name: "Arch", note: "Salt water / crude" },
  { name: "Aegis", note: "Exclusive — salt water, crude & frac sand" },
  { name: "Berkley", note: "" },
  { name: "AIG & Zurich", note: "Require workers' compensation" },
  { name: "Hartford", note: "Large accounts" },
  { name: "National Indemnity", note: "" },
];

const targetClasses = [
  "Excess / umbrella",
  "General trucking",
  "Fuel, gasoline & diesel hauling",
  "Specialized hauling",
  "Hazmat",
  "Primary auto & excess for hazmat, saltwater, crude & chemical haulers, and tankers",
  "Motor truck cargo / auto physical damage / inland marine",
  "Exclusive workers' comp markets with USL&H",
  "Pollution liability (CPL, TPL, site pollution)",
];

const submissionRequirements = [
  "Transportation supplemental application",
  "Driver list (date of birth, hire date, years licensed/CDL)",
  "Equipment list (year, make, model, VIN, garaging location, stated value)",
  "5-year loss runs",
];

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero — white background per site default, no dark/colored band */}
        <section className="bg-white border-b border-gray-100 py-16 lg:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FBF6EE] border border-[rgba(124,60,23,0.15)] rounded-full mb-5">
              <Shield size={13} className="text-[#7C3C17]" />
              <span className="text-[#7C3C17] text-xs font-semibold uppercase tracking-wider">
                Wholesale Carrier Access
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1917] mb-5 leading-tight">
              Markets We Access for Pipeline, Energy &amp; Environmental Contractors
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Contractors Choice Agency places coverage for pipeline, energy, and
              environmental contractors through our wholesale brokerage partnership with
              Amwins Brokerage. Below are the carrier markets currently available through
              that partnership for these classes of business.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-[#1c1917] font-semibold rounded-lg transition-colors"
              >
                <Phone size={16} className="text-[#7C3C17]" />
                844-967-5247
              </a>
            </div>
          </div>
        </section>

        {/* Broker contact */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#fafaf9] border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[#1c1917] mb-1">
                Wholesale Broker Contact
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Amwins Brokerage (San Diego) — Energy, Environmental &amp; Construction
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-[#1c1917] mb-2">Anthony Dorn</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Phone size={14} className="text-[#7C3C17] flex-shrink-0" />
                      Mobile: 209-918-0320
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone size={14} className="text-[#7C3C17] flex-shrink-0" />
                      Office: 619-814-2498
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail size={14} className="text-[#7C3C17] flex-shrink-0" />
                      <a
                        href="mailto:anthony.dorn@amwins.com"
                        className="hover:text-[#7C3C17] transition-colors break-all"
                      >
                        anthony.dorn@amwins.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-[#1c1917] mb-2">
                    Endorsements, Claims &amp; Loss Runs
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      Sarah Powers —{" "}
                      <a
                        href="mailto:Sarah.Powers@amwins.com"
                        className="hover:text-[#7C3C17] transition-colors break-all"
                      >
                        Sarah.Powers@amwins.com
                      </a>{" "}
                      (cc{" "}
                      <a
                        href="mailto:Anthony.Dorn@amwins.com"
                        className="hover:text-[#7C3C17] transition-colors break-all"
                      >
                        Anthony.Dorn@amwins.com
                      </a>
                      )
                    </li>
                    <li>
                      Loss runs also to{" "}
                      <a
                        href="mailto:lossruns@amwins.com"
                        className="hover:text-[#7C3C17] transition-colors break-all"
                      >
                        lossruns@amwins.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Contractors markets */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3C17] text-white flex-shrink-0">
                <Shield size={18} strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold text-[#1c1917]">
                Environmental Contractors Markets
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {environmentalMarkets.map((name) => (
                <span
                  key={name}
                  className="px-3.5 py-1.5 bg-[#FBF6EE] border border-[rgba(124,60,23,0.15)] text-[#7C3C17] text-sm font-medium rounded-full"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Contractors markets */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#f97316] text-white flex-shrink-0">
                <Flame size={18} strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold text-[#1c1917]">
                Energy Contractors Markets
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {energyMarkets.map((name) => (
                <span
                  key={name}
                  className="px-3.5 py-1.5 bg-[#fff7ed] border border-[rgba(249,115,22,0.2)] text-[#9a3412] text-sm font-medium rounded-full"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Oilfield hauler monoline auto */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#78716c] text-white flex-shrink-0">
                <Truck size={18} strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold text-[#1c1917]">
                Monoline Auto Markets — Oilfield Haulers
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#fafaf9] text-left">
                    <th className="px-4 py-3 font-semibold text-[#1c1917]">Carrier</th>
                    <th className="px-4 py-3 font-semibold text-[#1c1917]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {haulerMarkets.map((m, i) => (
                    <tr
                      key={m.name}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#fafaf9]"}
                    >
                      <td className="px-4 py-3 font-medium text-[#1c1917] border-t border-gray-100">
                        {m.name}
                      </td>
                      <td className="px-4 py-3 text-gray-600 border-t border-gray-100">
                        {m.note || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Target classes */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1c1917] mb-5">
              Target Classes
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {targetClasses.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed"
                >
                  <CheckCircle
                    size={15}
                    className="text-[#7C3C17] flex-shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Submission note callout */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#fefce8] border border-[rgba(234,179,8,0.3)] rounded-2xl p-7">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle
                  size={20}
                  className="text-[#854d0e] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h2 className="text-lg font-bold text-[#854d0e] mb-1">
                    Complete Submissions Clear Underwriting Faster
                  </h2>
                  <p className="text-sm text-[#854d0e]/90">
                    Incomplete transportation submissions may not clear underwriting.
                    A complete submission needs:
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-9">
                {submissionRequirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#713f12]"
                  >
                    <ClipboardList
                      size={14}
                      className="text-[#ca8a04] flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA — light, not a dark band, to match white-background default */}
        <section className="py-14 px-4 bg-[#fafaf9] border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c1917] mb-3">
              Have a Risk That Fits One of These Markets?
            </h2>
            <p className="text-gray-600 text-base mb-7 max-w-2xl mx-auto">
              Talk to a pipeline insurance specialist about placing it with the right
              carrier the first time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-gray-200 hover:bg-gray-50 text-[#1c1917] font-semibold rounded-lg transition-colors"
              >
                <Phone size={16} className="text-[#7C3C17]" />
                Call 844-967-5247
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
