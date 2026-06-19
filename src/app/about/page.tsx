import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Contractors Choice Agency | Pipeline Insurance Specialists",
  description:
    "Meet Josh Cotner — a former pipeline contractor turned insurance specialist with 20+ years experience. Contractors Choice Agency serves pipeline contractors in all 50 states.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
