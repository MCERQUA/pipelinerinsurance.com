import Link from "next/link";
import { Home, FileText } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
        <div className="max-w-lg mx-auto text-center">
          {/* 404 number */}
          <div className="text-[120px] font-black text-[#1a4f8a] leading-none mb-6 select-none opacity-10">
            404
          </div>
          <div className="-mt-16 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              The page you're looking for has moved, doesn't exist, or may have
              been a bad link. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#1a4f8a] hover:bg-blue-800 text-white font-semibold px-7 py-4 rounded-xl transition-colors duration-200"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white font-semibold px-7 py-4 rounded-xl transition-colors duration-200"
            >
              <FileText className="w-5 h-5" />
              Get a Quote
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm">
              Need immediate help?{" "}
              <a
                href="tel:844-967-5247"
                className="text-[#1a4f8a] font-semibold hover:underline"
              >
                Call 844-967-5247
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
