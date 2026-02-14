"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="min-h-screen flex bg-[#0F0A1F]">
      {/* LEFT — Branding */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden items-center justify-center">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-indigo-600 to-fuchsia-600" />

        {/* Soft glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl" />

        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-400/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-md text-center text-white px-6"
        >
          <Image
            src="/images/InkCore.png"
            alt="InkCore Logo"
            width={280}
            height={160}
            className="mx-auto mb-6"
          />

          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-base text-white/90 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* RIGHT — Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-md"
        >
          {/* Card glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-2xl" />

          {/* Card */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
