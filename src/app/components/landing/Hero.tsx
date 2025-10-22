"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { PenLine, Sparkles, Brain, Feather, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen relative overflow-hidden bg-white py-10 px-8 sm:px-16 lg:px-24"
    >
      {/* Gradient Rainbow Glow */}
      <motion.div
  initial={{ opacity: 0.2 }}
  animate={{ opacity: [0.2, 0.4, 0.2] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] 
    bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
    opacity-30 blur-3xl rounded-t-[50%] pointer-events-none"
/>

{/* Floating fading icons */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { Icon: PenLine, x: "20%", y: "30%" },
          { Icon: Sparkles, x: "70%", y: "25%" },
          { Icon: Brain, x: "85%", y: "55%" },
          { Icon: Feather, x: "10%", y: "65%" },
          { Icon: BookOpen, x: "50%", y: "75%" },
        ].map(({ Icon, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{ left: x, top: y }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-10 h-10" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center mt-10">
        
        {/* Left Content */}
        <motion.div
          className="text-center md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900">
            Unleash Creativity with{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              InkCore
            </span>
          </h1>
          <p className="text-sm md:text-lg mt-4 text-gray-600">
            Your all-in-one platform to write, create, and share ideas with the
            world. Designed with speed, elegance, and flexibility in mind.
          </p>

          {/* Question Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition">
              What is InkCore all about now?
            </Button>
            <Button className="px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium shadow hover:opacity-90 transition">
              Why InkCore is your go-to for AI content?
            </Button>
            <Button className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow hover:opacity-90 transition">
              How can InkCore help you today?
            </Button>
          </div>

          {/* AI Prompt */}
          <div className="max-w-xl w-full bg-gray-200 rounded-full flex items-center shadow-inner px-6 py-4 mt-12 mx-auto">
            <input
              type="text"
              placeholder="Ask InkCore anything..."
              className="flex-1 bg-transparent outline-none px-3 text-gray-700"
            />
            <Send className="w-6 h-6 text-primary cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
