"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Users,
  Truck,
  Wrench,
  AlertTriangle,
  Award,
  CheckCircle,
  Star,
  Phone,
  ArrowRight,
  Zap,
  Clock,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

const coverages = [
  {
    icon: Shield,
    title: "General Liability",
    description: "Broad GL coverage tailored for pipeline and underground utility contractors.",
    href: "/coverages/general-liability",
  },
  {
    icon: Users,
    title: "Workers Compensation",
    description: "Protect your crew on hazardous pipeline job sites with specialized workers comp.",
    href: "/coverages/workers-compensation",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    description: "Fleet and equipment hauling coverage for pipeline service vehicles.",
    href: "/coverages/commercial-auto",
  },
  {
    icon: Wrench,
    title: "Equipment Coverage",
    description: "Inland marine and equipment floater for your rigs, excavators, and tools.",
    href: "/coverages/equipment-coverage",
  },
  {
    icon: AlertTriangle,
    title: "Pollution Liability",
    description: "Essential coverage for fuel, chemical, and environmental exposure on pipeline projects.",
    href: "/coverages/pollution-liability",
  },
  {
    icon: Award,
    title: "Contractor Bonds",
    description: "License, performance, and payment bonds to win contracts and stay compliant.",
    href: "/coverages/contractor-bonds",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Pipeline Industry Specialists",
    description:
      "Josh Cotner worked as a contractor before becoming an insurance specialist. We know the risks firsthand — not just from a policy form.",
  },
  {
    icon: Clock,
    title: "Fast 15-Minute Quotes",
    description:
      "Get covered quickly. We know your deadlines don't wait, so neither do we. Most quotes delivered in under 15 minutes.",
  },
  {
    icon: Phone,
    title: "Claims Response in 2 Hours",
    description:
      "24/7 support with a guaranteed 2-hour claims response. When something goes wrong on the job, we pick up.",
  },
];

const steps = [
  {
    number: "1",
    title: "Tell Us About Your Operation",
    description: "Quick online form or give us a call. We ask the right questions to get accurate coverage.",
  },
  {
    number: "2",
    title: "Get Multiple Quotes",
    description: "We shop 20+ carriers specializing in pipeline and energy sector contractors.",
  },
  {
    number: "3",
    title: "Get Covered Today",
    description: "Same-day coverage available. Certificates issued immediately upon binding.",
  },
];

const testimonials = [
  {
    quote:
      "Finally an agent who actually understands pipeline work. Got our GL and pollution liability sorted in under 20 minutes.",
    name: "Marcus T.",
    company: "Oil Pipeline Contractor",
    location: "Texas",
  },
  {
    quote:
      "Workers comp for pipeline crews is a nightmare to find. CCA had options we couldn't get anywhere else.",
    name: "Sarah K.",
    company: "Pipeline Services LLC",
    location: "Wyoming",
  },
  {
    quote:
      "Best pricing we've found after 8 years in the business. Responsive and knowledgeable.",
    name: "Dave R.",
    company: "Underground Utilities",
    location: "Oklahoma",
  },
];

export default function HomeClient() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)" }}
        className="pt-24 pb-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Copy */}
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#e0edff", color: "#1a4f8a" }}
                >
                  <Shield size={14} /> Specialized Pipeline Coverage
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#0f172a" }}
              >
                Pipeline Contractor Insurance{" "}
                <span style={{ color: "#1a4f8a" }}>Built for the Field</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Specialized coverage for oil, gas, and underground pipeline contractors.
                General liability, workers comp, equipment, and pollution liability — all
                from one specialist.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#f97316" }}
                >
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:8449675247"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold border-2 transition-colors hover:bg-blue-50"
                  style={{ borderColor: "#1a4f8a", color: "#1a4f8a" }}
                >
                  <Phone size={18} /> Call 844-967-5247
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 text-sm text-gray-500"
              >
                {["Licensed All 50 States", "20+ Years Experience", "15-Min Quote"].map(
                  (badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <CheckCircle size={15} style={{ color: "#1a4f8a" }} />
                      {badge}
                    </span>
                  )
                )}
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: "#e8f1fc" }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[Shield, Wrench, AlertTriangle, Truck].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: i % 2 === 0 ? "#1a4f8a" : "#f97316" }}
                    >
                      <Icon size={36} color="white" />
                    </div>
                  ))}
                </div>
                {/* Decorative ring */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 opacity-20"
                  style={{ borderColor: "#1a4f8a" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: "#0f172a" }} className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "298+", label: "Active Clients" },
              { number: "20+", label: "Years Specialized" },
              { number: "50+", label: "Trade Specialties" },
              { number: "50", label: "States Licensed" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#f97316" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COVERAGE CARDS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#0f172a" }}>
                Coverage Built for Pipeline Contractors
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We offer every line of coverage your operation needs — packaged by
                specialists who understand the pipeline industry.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverages.map((coverage) => {
                const Icon = coverage.icon;
                return (
                  <motion.div
                    key={coverage.title}
                    variants={fadeInUp}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#fff4ed" }}
                    >
                      <Icon size={22} style={{ color: "#f97316" }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#0f172a" }}>
                      {coverage.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {coverage.description}
                    </p>
                    <Link
                      href={coverage.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:gap-2"
                      style={{ color: "#1a4f8a" }}
                    >
                      Learn More <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#0f172a" }}>
                Why Pipeline Contractors Choose Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We are not a generalist brokerage. Pipeline and energy contractor
                insurance is all we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeInUp} className="text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "#e0edff" }}
                    >
                      <Icon size={26} style={{ color: "#1a4f8a" }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: "#0f172a" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#0f172a" }}>
                How It Works
              </h2>
              <p className="text-gray-500">
                Getting the right coverage takes three simple steps.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div
                className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 z-0"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316 0%, #f97316 50%, #f97316 100%)",
                  opacity: 0.2,
                  left: "16.67%",
                  right: "16.67%",
                }}
              />

              <div className="grid md:grid-cols-3 gap-10 relative z-10">
                {steps.map((step) => (
                  <motion.div key={step.number} variants={fadeInUp} className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold text-white shadow-md"
                      style={{ backgroundColor: "#f97316" }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#0f172a" }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1a4f8a" }}
              >
                Start Your Free Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COVERAGE STATES */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f0f7ff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin size={22} style={{ color: "#1a4f8a" }} />
                <h2 className="text-3xl font-bold" style={{ color: "#0f172a" }}>
                  Coverage in All 50 States
                </h2>
              </div>
              <p className="text-gray-500 max-w-lg mx-auto">
                From Texas oil fields to Alaskan pipeline construction, we cover
                pipeline contractors nationwide.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2"
            >
              {US_STATES.map((state) => (
                <div
                  key={state}
                  className="flex flex-col items-center gap-1 py-2 px-1 rounded-lg bg-white border border-gray-100 shadow-sm"
                >
                  <CheckCircle size={12} style={{ color: "#1a4f8a" }} />
                  <span className="text-xs font-medium text-gray-600">{state}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#0f172a" }}>
                What Pipeline Contractors Say
              </h2>
              <p className="text-gray-500">
                Real feedback from contractors we have covered across the country.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "#f0f7ff" }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="#f97316"
                        style={{ color: "#f97316" }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#0f172a" }}>
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t.company} &mdash; {t.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f97316" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Ready to Protect Your Pipeline Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-orange-100 text-lg mb-8">
              Get a free, no-obligation quote in 15 minutes. We specialize in coverage
              that standard brokers can&apos;t place.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white transition-opacity hover:opacity-90"
                style={{ color: "#0f172a" }}
              >
                Start Your Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8449675247"
                className="inline-flex items-center gap-2 text-white font-semibold text-lg"
              >
                <Phone size={20} /> 844-967-5247
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
