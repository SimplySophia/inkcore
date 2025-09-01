"use client";

import Link from "next/link";
import { BookOpen, FileText, Youtube, Download, Link as LinkIcon } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6">
        Resources
      </h1>

      <div className="space-y-6">
        {/* Section: AI Blogging Guide */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-purple-500" />
            AI Blogging Guide
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Best practices for writing blogs with AI assistance.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="#"
              className="px-3 py-2 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-purple-600 font-medium transition"
            >
              Full Guide PDF
            </Link>
            <Link
              href="#"
              className="px-3 py-2 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-purple-600 font-medium transition"
            >
              Quick Checklist
            </Link>
          </div>
        </section>

        {/* Section: Video Tutorials */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Youtube className="h-5 w-5 text-red-500" />
            Video Tutorials
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Step-by-step walkthroughs for AI-powered content creation.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="#"
              className="px-3 py-2 bg-red-50 hover:bg-red-100 rounded-lg text-sm text-red-600 font-medium transition"
            >
              YouTube Playlist
            </Link>
            <Link
              href="#"
              className="px-3 py-2 bg-red-50 hover:bg-red-100 rounded-lg text-sm text-red-600 font-medium transition"
            >
              Intro Video
            </Link>
          </div>
        </section>

        {/* Section: Content Strategy eBook */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <FileText className="h-5 w-5 text-cyan-500" />
            Content Strategy eBook
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Plan and scale your content using AI tools.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-3 py-2 bg-cyan-50 hover:bg-cyan-100 rounded-lg text-sm text-cyan-600 font-medium transition"
          >
            <Download className="h-4 w-4" />
            Download eBook
          </Link>
        </section>

        {/* Section: Useful Links */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-green-500" />
            Useful Links
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Curated AI tools and references for creators.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="#"
              className="px-3 py-2 bg-green-50 hover:bg-green-100 rounded-lg text-sm text-green-600 font-medium transition"
            >
              AI Tools Directory
            </Link>
            <Link
              href="#"
              className="px-3 py-2 bg-green-50 hover:bg-green-100 rounded-lg text-sm text-green-600 font-medium transition"
            >
              Blog Ideas Generator
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
