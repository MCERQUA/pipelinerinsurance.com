"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Calendar,
  Briefcase,
  MapPin,
  Phone,
  Shield,
  Award,
  Clock,
  Star,
} from "lucide-react";

const stats = [
  { value: "298+", label: "Clients Protected", icon: Users },
  { value: "20+", label: "Years Experience", icon: Calendar },
  { value: "50+", label: "Trade Specialties", icon: Briefcase },
  { value: "50", label: "States Licensed", icon: MapPin },
];

const reasons = [
  "We understand pipeline work from the inside — not just the paperwork",
  "We place coverage that standard brokers decline or misquote",
  "15-minute quote turnaround on most pipeline contractor submissions",
  "2-hour emergency claims response, 24/7",
  "Dedicated specialist assigned to your account — no call centers",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a4f8a] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#f97316] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pipeline Insurance Specialists Since 2005
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              We built pipelines before we insured them. That hands-on experience
              means we know exactly what your crews face — and what coverage they
              actually need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-[#1a4f8a]" />
                </div>
                <div className="text-3xl font-bold text-[#1a4f8a] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Josh's Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wide">
              Our Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              "I built pipelines before I insured them."
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Josh Cotner didn't start out behind a desk. He spent years
                working in the field as a contractor — laying pipe, managing
                crews, and understanding firsthand the risks that come with
                pipeline construction work.
              </p>
              <p>
                That field experience became the foundation of Contractors Choice
                Agency, founded in 2005. Josh recognized that most insurance
                brokers had never set foot on a job site. They were guessing at
                coverage. He knew he could do better.
              </p>
              <p>
                Today, Contractors Choice Agency serves 298+ pipeline and
                specialty trade contractors across all 50 states from our
                headquarters in Chandler, Arizona.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-[#1a4f8a] shrink-0" />
              <span>12220 E Riggs Rd, Chandler, AZ 85249</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-500 text-sm">
              <Phone className="w-4 h-4 text-[#1a4f8a] shrink-0" />
              <span>844-967-5247</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a4f8a] rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Josh Cotner</div>
                <div className="text-blue-200 text-sm">
                  Commercial Insurance Specialist
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Former pipeline & specialty trade contractor",
                "20+ years commercial insurance experience",
                "Licensed in all 50 states (NPN: 8608479)",
                "50+ contractor trade specialties covered",
                "Access to surplus lines markets standard brokers can't reach",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <Star className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-[#1a4f8a]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To provide pipeline contractors with the specialized insurance
              coverage that standard brokers can't place — at competitive rates,
              with fast turnarounds, and from a team that actually understands
              what happens when a pipeline crew goes to work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Contractors Choose Us
            </h2>
            <p className="text-gray-500 text-lg">
              We're not a general brokerage that happens to write a pipeline
              policy now and then. This is all we do.
            </p>
          </motion.div>
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-[#f97316] shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 px-4 bg-[#1a4f8a]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-2xl p-8 text-white"
          >
            <Clock className="w-8 h-8 text-[#f97316] mb-4" />
            <div className="text-4xl font-bold mb-2">15 Min</div>
            <div className="text-blue-200 font-medium mb-3">
              Quote Turnaround
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Most pipeline contractor submissions receive a quote within 15
              minutes during business hours. No waiting days for a number.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 rounded-2xl p-8 text-white"
          >
            <Phone className="w-8 h-8 text-[#f97316] mb-4" />
            <div className="text-4xl font-bold mb-2">2 Hours</div>
            <div className="text-blue-200 font-medium mb-3">
              Claims Response SLA
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              We guarantee a 2-hour response on all claims, 24 hours a day, 7
              days a week. Your crews don't stop at 5 PM and neither do we.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to work with a specialist?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Get a quote in 15 minutes from an agent who has actually worked in
              the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-[#f97316] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
