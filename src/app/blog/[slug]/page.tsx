import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Phone, FileText } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | PipelinerInsurance.com`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Josh Cotner"],
    },
  };
}

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

/**
 * Renders markdown-like content:
 * - ## Heading 2
 * - ### Heading 3
 * - **bold** inline
 * - - list items
 * - blank lines = paragraph breaks
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let key = 0;

  function flushList() {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={key++} className="list-disc list-outside ml-5 space-y-1.5 my-4">
        {listBuffer.map((item, i) => (
          <li key={i} className="text-[#334155] leading-relaxed">
            {renderInline(item)}
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  }

  function renderInline(text: string): React.ReactNode {
    // Handle **bold**
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-[#0f172a]">
          {part}
        </strong>
      ) : (
        part
      )
    );
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-[#0f172a] mt-10 mb-4 pb-3 border-b border-[rgba(26,79,138,0.1)]"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-[#0f172a] mt-7 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      listBuffer.push(trimmed.slice(2));
    } else if (trimmed === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={key++} className="text-[#334155] leading-relaxed my-3">
          {renderInline(trimmed)}
        </p>
      );
    }
  }

  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const categoryStyle = getCategoryStyle(post.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Josh Cotner",
      url: "https://joshcotner.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Contractors Choice Agency",
      url: "https://contractorschoiceagency.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pipelinerinsurance.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Article Header */}
      <header className="bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#94a3b8] hover:text-white text-sm transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle.bg} ${categoryStyle.text}`}
              >
                <Tag size={10} />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#94a3b8]">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-[#f97316]" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-[#f97316]" />
                {post.readingTime}
              </span>
              <span className="flex items-center gap-2">
                <FileText size={14} className="text-[#f97316]" />
                By Josh Cotner
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="bg-[#f8fafc] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] shadow-sm p-8 lg:p-10">
                <div className="prose-custom max-w-none">
                  {renderContent(post.content)}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-lg font-bold text-[#0f172a] mb-5">Related Articles</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {relatedPosts.map((related) => {
                      const relStyle = getCategoryStyle(related.category);
                      return (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="bg-white rounded-xl border border-[rgba(26,79,138,0.1)] shadow-sm hover:shadow-md p-5 transition-shadow group"
                        >
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mb-3 ${relStyle.bg} ${relStyle.text}`}
                          >
                            <Tag size={9} />
                            {related.category}
                          </span>
                          <h3 className="text-sm font-semibold text-[#0f172a] leading-snug group-hover:text-[#1a4f8a] transition-colors mb-2">
                            {related.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a4f8a] group-hover:text-[#f97316] transition-colors">
                            Read More <ArrowRight size={12} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">

              {/* Get a Quote CTA */}
              <div className="bg-[#1a4f8a] text-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2">Get a Quote</h3>
                <p className="text-[#bfdbfe] text-sm leading-relaxed mb-5">
                  Pipeline insurance specialists ready to help. 15-minute quote turnaround, all 50 states.
                </p>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#f97316] hover:bg-[#ea6b00] text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Get a Free Quote
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:844-967-5247"
                  className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-sm border border-white/20"
                >
                  <Phone size={14} />
                  844-967-5247
                </a>
              </div>

              {/* Why Us */}
              <div className="bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] shadow-sm p-6">
                <h3 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">
                  Why Contractors Choose Us
                </h3>
                <ul className="space-y-3">
                  {[
                    "20+ years pipeline insurance experience",
                    "Licensed in all 50 states",
                    "15-minute quote turnaround",
                    "2-hour claims response SLA",
                    "Access to specialty E&S markets",
                    "Pollution liability specialists",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155]">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#f0f7ff] flex items-center justify-center flex-shrink-0">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#1a4f8a]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Articles link */}
              <Link
                href="/blog"
                className="flex items-center justify-between w-full bg-white rounded-2xl border border-[rgba(26,79,138,0.1)] shadow-sm p-5 hover:border-[#1a4f8a] transition-colors group"
              >
                <span className="text-sm font-semibold text-[#0f172a] group-hover:text-[#1a4f8a] transition-colors">
                  View All Articles
                </span>
                <ArrowRight size={16} className="text-[#94a3b8] group-hover:text-[#1a4f8a] transition-colors" />
              </Link>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
