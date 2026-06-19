"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=pipelinerinsurance.com";

export default function ContactForm() {
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
      form_name: "contact",
      name: data.get("name") as string,
      company: data.get("company") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
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
        "Something went wrong. Please call us directly at 844-967-5247."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
          >
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Message Received!
            </h3>
            <p className="text-gray-600">
              We'll be in touch within 1 business hour. For urgent matters, call{" "}
              <a
                href="tel:844-967-5247"
                className="text-[#1a4f8a] font-semibold hover:underline"
              >
                844-967-5247
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Smith Pipeline Co."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@smithpipeline.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(602) 555-0100"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your pipeline operation and what coverage you're looking for..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent transition-shadow resize-none"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#f97316] hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
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
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
