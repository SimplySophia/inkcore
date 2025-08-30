// app/editor/page.tsx
"use client";

import { useState } from "react";

export default function EditorPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setGeneratedPost(null);

    try {
      // 🔹 Mock AI generation (replace with your backend API call later)
      const response = await new Promise<string>((resolve) =>
        setTimeout(() => resolve(`✨ AI Draft for: "${prompt}"\n\nHere’s your first blog post intro...`), 1500)
      );

      setGeneratedPost(response);
    } catch (err) {
      console.error(err);
      setGeneratedPost("⚠️ Something went wrong while generating.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">✍️ Open Blog Editor</h1>
      <p className="text-gray-600 mb-6">
        Start your blog by entering a prompt below. Our AI will help you draft the first version of your post.
      </p>

      {/* Prompt Input */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a topic or idea for your blog post..."
        className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none min-h-[120px]"
      />

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Draft"}
        </button>

        <button
          onClick={() => {
            setPrompt("");
            setGeneratedPost(null);
          }}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition"
        >
          Clear
        </button>
      </div>

      {/* Output */}
      {generatedPost && (
        <div className="mt-6 p-4 border rounded-xl bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Generated Draft</h2>
          <p className="whitespace-pre-line text-gray-800">{generatedPost}</p>
        </div>
      )}
    </div>
  );
}
