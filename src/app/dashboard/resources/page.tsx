"use client";

import { Book, Video, FileText, Link2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const resources = [
  {
    title: "AI Blogging Guide",
    description: "Best practices for writing blogs with AI assistance.",
    icon: FileText,
    links: [
      { label: "Full Guide PDF", url: "/docs/ai-blogging-guide.pdf" },
      { label: "Quick Checklist", url: "/docs/ai-checklist.pdf" },
    ],
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step walkthroughs for AI-powered content creation.",
    icon: Video,
    links: [
      { label: "YouTube Playlist", url: "https://youtube.com/playlist?list=abc" },
      { label: "Intro Video", url: "https://youtube.com/watch?v=xyz" },
    ],
  },
  {
    title: "Content Strategy eBook",
    description: "Plan and scale your content using AI tools.",
    icon: Book,
    links: [
      { label: "Download eBook", url: "/ebooks/ai-content-strategy.pdf" },
    ],
  },
  {
    title: "Useful Links",
    description: "Curated AI tools and references for creators.",
    icon: Link2,
    links: [
      { label: "AI Tools Directory", url: "https://aitools.com" },
      { label: "Blog Ideas Generator", url: "https://bloggen.ai" },
    ],
  },
];

export default function Resources() {
  return (
    <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-2xl p-6">
      <motion.h2
        className="text-xl font-semibold text-gray-700 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Resources
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((res, i) => (
          <motion.div
            key={i}
            className="p-4 rounded-xl bg-white shadow hover:shadow-lg border border-gray-100 flex flex-col gap-3 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-400/10"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
            />

            {/* Icon */}
            <motion.div
              className="p-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-white z-10 w-fit"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <res.icon className="w-5 h-5" />
            </motion.div>

            {/* Text */}
            <div className="z-10">
              <h3 className="font-medium text-gray-800">{res.title}</h3>
              <p className="text-sm text-gray-600">{res.description}</p>
            </div>

            {/* Links */}
            <div className="z-10 mt-2 flex flex-col gap-1">
              {res.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
