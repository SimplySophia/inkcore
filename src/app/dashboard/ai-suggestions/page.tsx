"use client";

import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const suggestions = [
  {
    id: 1,
    title: "Try writing about AI in content marketing",
    details:
      "This could drive more engagement on your blog. Readers are actively searching for fresh insights into how AI reshapes digital strategies.",
  },
  {
    id: 2,
    title: "Optimize your draft for SEO keywords",
    details:
      "Consider using phrases like 'AI tools', 'automation', and 'blog growth' naturally within your content.",
  },
  {
    id: 3,
    title: "Experiment with shorter paragraph lengths",
    details:
      "Keep sentences concise and paragraphs brief. This boosts readability and engagement across devices.",
  },
  {
    id: 4,
    title: "Share a behind-the-scenes process",
    details:
      "Post a social media thread about how you come up with blog ideas or your creative routine—it makes you more relatable.",
  },
  {
    id: 5,
    title: "Leverage trending hashtags",
    details:
      "For social content, combine your post with 2–3 relevant trending hashtags to expand reach without looking spammy.",
  },
  {
    id: 6,
    title: "Turn a blog into a LinkedIn carousel",
    details:
      "Summarize your latest article into 4–5 slides. Visual storytelling drives higher engagement on LinkedIn.",
  },
  {
    id: 7,
    title: "Ask a question at the end of posts",
    details:
      "Prompt your readers or followers with a simple question. It boosts comments and keeps the algorithm happy.",
  },
  {
    id: 8,
    title: "Highlight stats or quick tips",
    details:
      "On Twitter/X or Threads, turn blog research into bite-sized tips or stats to make your content shareable.",
  },
  {
    id: 9,
    title: "Create repurposable content",
    details:
      "Write one long blog post, then repurpose it into 3 tweets, a LinkedIn post, and an Instagram caption for consistent branding.",
  },
  {
    id: 10,
    title: "Use storytelling hooks",
    details:
      "Start with a real-life example, case study, or personal challenge in your next blog or caption—it builds trust and emotional connection.",
  },
];

export default function AISuggestionsPage() {
  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(`/dashboard/ai-suggestions/try?topic=${encodeURIComponent(title)}`);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-lg relative overflow-hidden">
      {/* Animated Glow BG */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-400/10"
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      <motion.h1
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2 mb-6 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Sparkles className="h-6 w-6 text-cyan-400" />
        </motion.div>
        AI Suggestions
      </motion.h1>

      <div className="space-y-4 relative z-10">
        {suggestions.map((s, i) => (
          <motion.div
            key={s.id}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Subtle glowing overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: i * 0.2 }}
            />

            <h2 className="font-semibold text-gray-800 relative z-10">
              {s.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">{s.details}</p>
            <motion.button
              onClick={()=>handleClick(s.title)}
              className="mt-3 px-3 py-2 text-sm bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-white relative z-10"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              Try it
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
