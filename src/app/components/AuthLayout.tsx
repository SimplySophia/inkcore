"use client";

import { motion } from "framer-motion";

export default function AuthLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-600 via-indigo-500 to-cyan-500 items-center justify-center text-white p-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <div className="text-3xl font-bold mb-4">🚀 MyApp</div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-lg text-gray-100">{description}</p>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
