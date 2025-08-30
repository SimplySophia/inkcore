"use client";

import { useState } from "react";

export default function SocialPage() {
  const [idea, setIdea] = useState("");
  const [content, setContent] = useState("");

  const handleGenerate = () => {
    setContent(`📢 Social Media Post:\n\n"${idea}" #AI #Content`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Create Social Content</h1>
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter topic or idea..."
        className="w-full border rounded-lg p-4 mb-4"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        Generate Content
      </button>

      {content && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50 whitespace-pre-line">
          {content}
        </div>
      )}
    </div>
  );
}
