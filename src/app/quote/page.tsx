"use client";

import {
  CheckCircle,
  Clock,
  MapPin,
  Shield,
  Users,
  Phone,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PipelinerQuoteForm from "@/components/quote/PipelinerQuoteForm";

const trustPoints = [
  {
    icon: Clock,
    title: "15-Minute Quote Turnaround",
    desc: "Most submissions get a quote back within 15 minutes during business hours.",
  },
  {
    icon: MapPin,
    title: "Licensed in All 50 States",
    desc: "We handle pipeline contractor insurance coast to coast.",
  },
  {
    icon: Shield,
    title: "Former Contractor Expertise",
    desc: "Josh Cotner worked in the field before he insured it. We know what matters.",
  },
  {
    icon: Users,
    title: "298+ Contractor Clients",
    desc: "A proven track record across pipeline, roofing, HVAC, and specialty trades.",
  },
  {
    icon: Phone,
    title: "2-Hour Claims Response",
    desc: "24/7 claims support with a guaranteed 2-hour response SLA.",
  },
];

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-[#7C3C17] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#f97316] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Free Quote
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get a Pipeline Contractor Insurance Quote
            </h1>
            <p className="text-xl text-orange-200 max-w-2xl mx-auto">
              Most quotes are ready in{" "}
              <span className="text-white font-semibold">15 minutes</span>.
              No obligation. No spam. Just fast, accurate coverage options from a
              specialist who knows pipeline work.
            </p>
          </div>
        </section>

        {/* Form + Trust */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Tell Us About Your Operation
                </h2>
                <PipelinerQuoteForm />
              </div>
            </div>

            {/* Trust Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#7C3C17] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-5">
                  Why Get a Quote With Us?
                </h3>
                <div className="space-y-5">
                  {trustPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <div key={point.title} className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4.5 h-4.5 text-[#f97316]" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm mb-0.5">
                            {point.title}
                          </div>
                          <div className="text-orange-200 text-sm leading-relaxed">
                            {point.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Call box */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="text-gray-500 text-sm mb-2 font-medium">
                  Prefer to talk?
                </div>
                <a
                  href="tel:844-967-5247"
                  className="text-[#7C3C17] text-2xl font-bold hover:text-orange-800 transition-colors block mb-1"
                >
                  844-967-5247
                </a>
                <div className="text-gray-400 text-sm">
                  Mon – Fri · 8AM – 6PM MST
                </div>
                <div className="text-gray-400 text-sm">
                  24/7 Emergency Claims
                </div>
              </div>

              {/* Coverages teaser */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Coverages We Place
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "General Liability",
                    "Workers Compensation",
                    "Pollution Liability",
                    "Commercial Auto",
                    "Umbrella / Excess",
                    "Equipment & Tools",
                    "Contractor Bonds",
                  ].map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
