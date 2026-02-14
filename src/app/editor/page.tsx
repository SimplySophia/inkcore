"use client";

import { useState } from "react";
import { blogService } from "@/services/auth";  // ✅ updated import
import { toast } from "sonner";

export default function EditorPage() {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a topic or idea first");
      return;
    }

    try {
      setIsGenerating(true);
      toast.message("Generating blog draft...");

      // ✅ Call the generate endpoint from blogService
      const response = await blogService.generateBlogPost({
        title: prompt,
        content: "",
      });

      // Adjust based on your API response structure
      setGeneratedContent(response.content || response.generated || "");
      toast.success("Blog draft generated!");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        ✍️ AI Blog Post Generator
      </h1>

      {/* Prompt input */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a topic, title, or short idea (e.g., 'The future of remote work')"
        className="w-full h-28 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
      />

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {isGenerating ? "Generating..." : "Generate Blog"}
        </button>
      </div>

      {/* Output */}
      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            ✨ Generated Blog Post
          </h2>
          <textarea
            value={generatedContent}
            onChange={(e) => setGeneratedContent(e.target.value)}
            className="w-full h-[400px] p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />
        </div>
      )}
    </div>
  );
}
