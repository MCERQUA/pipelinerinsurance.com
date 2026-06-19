import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getAllPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Pipeline Insurance Blog | Coverage Guides for Contractors",
  description:
    "Expert guides, coverage insights, and industry news for pipeline contractors. Learn about general liability, workers comp, pollution liability, and more.",
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Coverage Basics": { bg: "bg-[#f0f7ff]", text: "text-[#1a4f8a]" },
  "Workers Compensation": { bg: "bg-[#f0fdf4]", text: "text-[#166534]" },
  "Pollution Liability": { bg: "bg-[#fefce8]", text: "text-[#854d0e]" },
  "Commercial Auto": { bg: "bg-[#fff7ed]", text: "text-[#9a3412]" },
};

function getCategoryStyle(category: string) {
  return categoryColors[category] ?? { bg: "bg-[#f8fafc]", text: "text-[#475569]" };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#f97316]">
                <BookOpen size={16} className="text-white" />
              </div>
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
                Resources
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Pipeline Insurance Resources
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Expert guides and coverage insights for pipeline contractors. Understand your risks,
              protect your business, and stay compliant — written by specialists who work in this
              industry every day.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#f8fafc] py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-[#64748b] text-center py-20">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const style = getCategoryStyle(post.category);
                return (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden"
                  >
                    {/* Card Header Bar */}
                    <div className="h-1.5 bg-[#1a4f8a]" />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
                        >
                          <Tag size={10} />
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-[#0f172a] font-bold text-lg leading-snug mb-3 flex-1">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-[#1a4f8a] transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#475569] text-sm leading-relaxed mb-5">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-[#94a3b8] mb-5">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readingTime}
                        </span>
                      </div>

                      {/* Read More */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a4f8a] hover:text-[#f97316] transition-colors mt-auto"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a4f8a] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Get the Right Coverage?
          </h2>
          <p className="text-[#bfdbfe] mb-8 text-lg">
            Our pipeline insurance specialists are available now. Get a quote in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-xl transition-colors shadow-lg"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
