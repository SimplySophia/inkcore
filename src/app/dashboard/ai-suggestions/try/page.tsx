"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TryAISuggestionPage() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "";
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Auto-fill animation for topic
  useEffect(() => {
    if (topic) {
      setIsTyping(true);
      let i = 0;
      const typing = setInterval(() => {
        setInputValue(topic.slice(0, i + 1));
        i++;
        if (i === topic.length) {
          clearInterval(typing);
          setIsTyping(false);
        }
      }, 80); // typing speed
    }
  }, [topic]);

  const handleGenerate = () => {
    // Replace with actual AI generation API call
    alert(`Generating content for: ${inputValue}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Suggestion Playground</h1>
      <p className="text-gray-500 mb-6">
        Type your idea or keywords and let AI expand it into content.
      </p>

      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your idea..."
          className={`flex-1 border border-gray-100 transition-all duration-300 ${
            isTyping ? "animate-pulse" : ""
          }`}
        />
        <Button
          onClick={handleGenerate}
          disabled={!inputValue.trim()}
          className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          Generate
        </Button>
      </div>
    </div>
  );
}
