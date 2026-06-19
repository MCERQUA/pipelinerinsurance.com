"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Coverage",
    href: "/coverages",
    children: [
      { label: "General Liability", href: "/coverages/general-liability" },
      { label: "Workers Compensation", href: "/coverages/workers-compensation" },
      { label: "Pollution Liability", href: "/coverages/pollution-liability" },
      { label: "Commercial Auto", href: "/coverages/commercial-auto" },
      { label: "Equipment Coverage", href: "/coverages/equipment" },
      { label: "Contractor Bonds", href: "/coverages/bonds" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-md border-b border-[rgba(26,79,138,0.12)]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1a4f8a] text-white group-hover:bg-[#123568] transition-colors">
              <Shield size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#1a4f8a] font-bold text-base tracking-tight">
                Pipeline<span className="text-[#f97316]">Insurance</span>
              </span>
              <span className="text-[#64748b] text-[10px] tracking-wide uppercase font-medium hidden sm:block">
                Powered by Contractors Choice
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0f172a] hover:text-[#1a4f8a] transition-colors rounded-md hover:bg-[#f0f7ff]"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-[rgba(26,79,138,0.1)] py-1.5 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-[#334155] hover:text-[#1a4f8a] hover:bg-[#f0f7ff] transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#0f172a] hover:text-[#1a4f8a] transition-colors rounded-md hover:bg-[#f0f7ff]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:844-967-5247"
              className="text-sm font-medium text-[#1a4f8a] hover:text-[#123568] transition-colors"
            >
              844-967-5247
            </a>
            <Link
              href="/quote"
              className="px-5 py-2.5 bg-[#f97316] hover:bg-[#ea6b00] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0f172a] hover:bg-[#f0f7ff] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-[rgba(26,79,138,0.1)] bg-white"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[#0f172a] hover:text-[#1a4f8a] hover:bg-[#f0f7ff] rounded-lg transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-3 mt-1 space-y-0.5 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-[#475569] hover:text-[#1a4f8a] hover:bg-[#f0f7ff] rounded-lg transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-[#0f172a] hover:text-[#1a4f8a] hover:bg-[#f0f7ff] rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 pb-1 border-t border-[rgba(26,79,138,0.1)] space-y-2">
                <a
                  href="tel:844-967-5247"
                  className="block text-center px-3 py-2.5 text-sm font-medium text-[#1a4f8a] hover:bg-[#f0f7ff] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Call: 844-967-5247
                </a>
                <Link
                  href="/quote"
                  className="block text-center px-4 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white text-sm font-semibold rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
