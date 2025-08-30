"use client";

import { useState } from "react";

export default function SchedulerPage() {
  const [date, setDate] = useState("");
  const [post, setPost] = useState("");

  const handleSchedule = () => {
    alert(`✅ Post scheduled on ${date}: ${post}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Schedule Posts</h1>
      <input
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Enter post content..."
        className="w-full border rounded-lg p-4 mb-4"
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded-lg p-4 mb-4"
      />
      <button
        onClick={handleSchedule}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
      >
        Schedule Post
      </button>
    </div>
  );
}
