import Link from "next/link";
import { Shield, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Coverage", href: "/coverages" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
];

const coverageTypes = [
  { label: "General Liability", href: "/coverages/general-liability" },
  { label: "Workers Compensation", href: "/coverages/workers-compensation" },
  { label: "Commercial Auto", href: "/coverages/commercial-auto" },
  { label: "Equipment Coverage", href: "/coverages/equipment" },
  { label: "Pollution Liability", href: "/coverages/pollution-liability" },
  { label: "Contractor Bonds", href: "/coverages/bonds" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1a4f8a] text-white group-hover:bg-[#f97316] transition-colors">
                <Shield size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-tight">
                  Pipeline<span className="text-[#f97316]">Insurance</span>
                </span>
                <span className="text-[#64748b] text-[10px] tracking-wide uppercase font-medium">
                  by Contractors Choice
                </span>
              </div>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              Pipeline contractors trust us for specialized insurance coverage built around
              the unique risks of pipeline construction, installation, and maintenance work.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <CheckCircle size={14} className="text-[#f97316] flex-shrink-0" />
              <span>Licensed in All 50 States</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748b] mt-1.5">
              <CheckCircle size={14} className="text-[#f97316] flex-shrink-0" />
              <span>20+ Years Pipeline Insurance Experience</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748b] mt-1.5">
              <CheckCircle size={14} className="text-[#f97316] flex-shrink-0" />
              <span>15-Minute Quote Turnaround</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] text-sm hover:text-[#f97316] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Types */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Coverage Types
            </h3>
            <ul className="space-y-2.5">
              {coverageTypes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] text-sm hover:text-[#f97316] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:844-967-5247"
                  className="flex items-start gap-3 text-[#94a3b8] text-sm hover:text-[#f97316] transition-colors group"
                >
                  <Phone
                    size={15}
                    className="flex-shrink-0 mt-0.5 text-[#1a4f8a] group-hover:text-[#f97316] transition-colors"
                  />
                  <div>
                    <div className="font-medium text-white group-hover:text-[#f97316] transition-colors">
                      844-967-5247
                    </div>
                    <div className="text-xs text-[#64748b] mt-0.5">24/7 Claims | 2-Hour Response</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:josh@contractorschoiceagency.com"
                  className="flex items-start gap-3 text-[#94a3b8] text-sm hover:text-[#f97316] transition-colors group"
                >
                  <Mail
                    size={15}
                    className="flex-shrink-0 mt-0.5 text-[#1a4f8a] group-hover:text-[#f97316] transition-colors"
                  />
                  <span className="break-all">josh@contractorschoiceagency.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#94a3b8] text-sm">
                  <MapPin
                    size={15}
                    className="flex-shrink-0 mt-0.5 text-[#1a4f8a]"
                  />
                  <div>
                    <div>12220 E Riggs Rd</div>
                    <div>Chandler, AZ 85249</div>
                    <div className="text-xs text-[#64748b] mt-1">
                      Also serving Phoenix, AZ &amp; Miami, FL
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center justify-center w-full px-4 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#64748b] text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()} Contractors Choice Agency. All rights reserved.{" "}
              <span className="text-[#475569]">NPN: 8608479</span>
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-[#64748b] text-xs hover:text-[#94a3b8] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-[#334155]">|</span>
              <Link
                href="/terms-of-service"
                className="text-[#64748b] text-xs hover:text-[#94a3b8] transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-[#334155]">|</span>
              <Link
                href="/sitemap.xml"
                className="text-[#64748b] text-xs hover:text-[#94a3b8] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
