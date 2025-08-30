"use client";

import Link from "next/link";
import { Lightbulb } from "lucide-react";

export default function AISuggestions() {
  const blogSuggestions = [
    {
      title: "Boost SEO with long-tail keywords",
      desc: "Focus on niche topics your audience is searching for.",
    },
    {
      title: "Tell stories that resonate",
      desc: "Use personal experiences to create emotional connections.",
    },
    {
      title: "Improve readability",
      desc: "Short paragraphs and bullet points increase engagement.",
    },
  ];

  const socialSuggestions = [
    {
      title: "Leverage hashtags smartly",
      desc: "Mix trending and niche hashtags for better reach.",
    },
    {
      title: "Try carousel posts",
      desc: "Multi-slide posts boost saves and shares.",
    },
    {
      title: "Go behind the scenes",
      desc: "Share your workflow or process to build authenticity.",
    },
    {
      title: "Repurpose blog posts",
      desc: "Turn blogs into short LinkedIn posts, tweets, or threads.",
    },
  ];

  return (
    <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-yellow-500" />
        AI Suggestions
      </h2>

      {/* Blogs Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-purple-600 mb-3">
          For Blogs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogSuggestions.map((s, i) => (
            <div
              key={i}
              className="p-4 bg-white hover:shadow-lg border border-gray-100 rounded-xl shadow-md transition"
            >
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-sm mt-1 opacity-90">{s.desc}</p>
              <Link
                href={`/dashboard/ai-suggestions/try?topic=${encodeURIComponent(
                  s.title
                )}`}
                className="mt-3 inline-block bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-lg transition"
              >
                Try it
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-600 mb-3">
          For Social Media
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialSuggestions.map((s, i) => (
            <div
              key={i}
              className="p-4 bg-white hover:shadow-lg border border-gray-100 rounded-xl shadow-md transition"
            >
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-sm mt-1 opacity-90">{s.desc}</p>
              <Link
                href={`/dashboard/ai-suggestions/try?topic=${encodeURIComponent(
                  s.title
                )}`}
                className="mt-3 inline-block text-xs bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-lg transition"
              >
                Try it
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-6 text-center">
        <Link
          href="/dashboard/ai-suggestions"
          className="inline-block px-5 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}
