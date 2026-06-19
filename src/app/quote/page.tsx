"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=pipelinerinsurance.com";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      form_name: "quote",
      first_name: data.get("first_name") as string,
      last_name: data.get("last_name") as string,
      business_name: data.get("business_name") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      state: data.get("state") as string,
      years_in_business: data.get("years_in_business") as string,
      pipeline_type: data.get("pipeline_type") as string,
      annual_revenue: data.get("annual_revenue") as string,
      message: data.get("message") as string,
      site: "pipelinerinsurance.com",
    };

    try {
      // Submit to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      // Submit to webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong submitting your quote. Please call us directly at 844-967-5247."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-[#1a4f8a] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#f97316] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Free Quote
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get a Pipeline Contractor Insurance Quote
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
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
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-5" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Quote Request Received!
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We're reviewing your submission and will have a quote to
                      you within 15 minutes during business hours. For urgent
                      coverage needs, call us now.
                    </p>
                    <a
                      href="tel:844-967-5247"
                      className="inline-flex items-center gap-2 bg-[#1a4f8a] hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg mb-4"
                    >
                      <Phone className="w-5 h-5" />
                      844-967-5247
                    </a>
                    <div className="mt-4">
                      <Link
                        href="/"
                        className="text-[#1a4f8a] hover:underline font-medium"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    name="quote"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                  >
                    <input type="hidden" name="form-name" value="quote" />
                    <input type="hidden" name="bot-field" />

                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Tell Us About Your Operation
                    </h2>

                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="first_name"
                          type="text"
                          required
                          placeholder="John"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="last_name"
                          type="text"
                          required
                          placeholder="Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>

                    {/* Business Name */}
                    <div className="mb-5">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="business_name"
                        type="text"
                        required
                        placeholder="Smith Pipeline Services LLC"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                      />
                    </div>

                    {/* Email / Phone */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="john@smithpipeline.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="(602) 555-0100"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>

                    {/* State / Years in Business */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          State <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="state"
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        >
                          <option value="">Select state...</option>
                          {US_STATES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Years in Business <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="years_in_business"
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        >
                          <option value="">Select...</option>
                          <option value="less_than_1">Less than 1 year</option>
                          <option value="1_to_2">1 – 2 years</option>
                          <option value="3_to_5">3 – 5 years</option>
                          <option value="6_to_10">6 – 10 years</option>
                          <option value="10_plus">10+ years</option>
                        </select>
                      </div>
                    </div>

                    {/* Pipeline Type / Annual Revenue */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Pipeline Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="pipeline_type"
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        >
                          <option value="">Select type...</option>
                          <option value="oil_pipeline">Oil Pipeline</option>
                          <option value="gas_pipeline">Gas Pipeline</option>
                          <option value="water_sewer">Water / Sewer</option>
                          <option value="underground_utilities">
                            Underground Utilities
                          </option>
                          <option value="multi_service">Multi-Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Annual Revenue <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="annual_revenue"
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                        >
                          <option value="">Select range...</option>
                          <option value="under_250k">Under $250K</option>
                          <option value="250k_500k">$250K – $500K</option>
                          <option value="500k_1m">$500K – $1M</option>
                          <option value="1m_5m">$1M – $5M</option>
                          <option value="5m_plus">$5M+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us more about your work — types of projects, crew size, current coverage questions, or anything else that helps us get you the right quote..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#f97316] hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting Quote Request...
                        </>
                      ) : (
                        "Get My Free Quote"
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center mt-4">
                      By submitting, you agree to be contacted by Contractors
                      Choice Agency. No spam — ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Trust Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1a4f8a] rounded-2xl p-6 text-white">
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
                          <div className="text-blue-200 text-sm leading-relaxed">
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
                  className="text-[#1a4f8a] text-2xl font-bold hover:text-blue-700 transition-colors block mb-1"
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
