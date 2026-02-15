"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { generateMockBlog } from "@/lib/mockAi";

export default function BlogGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;

    setLoading(true);

    const result = await generateMockBlog(prompt);

    setDraft(result);

    setLoading(false);
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold mb-2">
          Create Blog Post
        </h1>

        <p className="text-slate-500">
          Describe your idea and AI will generate a full blog post.
        </p>
      </div>

      {/* Prompt input */}

      <div className="space-y-3">

        <textarea
          placeholder="Example: Write a blog post about building scalable frontend systems with Next.js"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          <Sparkles size={18} />

          {loading ? "Generating..." : "Generate Blog Post"}
        </button>

      </div>

      {/* Output */}

      {draft && (
        <div className="border rounded-xl p-6 bg-white">

          <h2 className="font-semibold mb-3">
            Generated Draft
          </h2>

          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full h-80 p-4 border rounded-xl"
          />

        </div>
      )}

    </div>
  );
}
