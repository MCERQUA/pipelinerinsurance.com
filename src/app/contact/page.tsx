import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Pipeline Insurance Specialists | CCA",
  description:
    "Contact Contractors Choice Agency for pipeline contractor insurance. Reach Josh Cotner directly at 844-967-5247. Located in Chandler, AZ. Licensed in all 50 states.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-[#1a4f8a] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#f97316] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Talk to a Pipeline Insurance Specialist
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Reach a real specialist — not a call center. We respond fast
              because your time is valuable.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5">
                        Phone
                      </div>
                      <a
                        href="tel:844-967-5247"
                        className="text-[#1a4f8a] hover:text-blue-700 font-medium text-lg"
                      >
                        844-967-5247
                      </a>
                      <div className="text-gray-500 text-sm">
                        Toll-free (844-WORK-5247)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:josh@contractorschoiceagency.com"
                        className="text-[#1a4f8a] hover:text-blue-700 font-medium"
                      >
                        josh@contractorschoiceagency.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5">
                        Office Address
                      </div>
                      <div className="text-gray-600">
                        12220 E Riggs Rd, Suite #105
                        <br />
                        Chandler, AZ 85249
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5">
                        Office Hours
                      </div>
                      <div className="text-gray-600">
                        Monday – Friday: 8:00 AM – 6:00 PM MST
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-[#f97316]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-0.5">
                        Emergency Claims
                      </div>
                      <div className="text-gray-600">
                        24/7 claims reporting — 2-hour response guaranteed
                      </div>
                      <a
                        href="tel:844-967-5247"
                        className="text-[#f97316] hover:text-orange-600 font-medium text-sm mt-1 inline-block"
                      >
                        Call 844-967-5247 anytime
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="bg-[#1a4f8a] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">What to Expect</h3>
                <ul className="space-y-3 text-blue-200 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    We respond to all inquiries within 1 business hour
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    Most pipeline contractor quotes are ready in 15 minutes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    You speak directly with a specialist — not a call center
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    We cover all 50 states and 50+ contractor trades
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    No obligation — quotes are always free
                  </li>
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
