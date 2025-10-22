"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/landing/ui/card";
import { Zap, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Fast & Powerful",
    description: "Lightning-fast performance designed for modern workflows.",
    icon: <Zap className="w-6 h-6 text-[#9333EA]" />,
  },
  {
    title: "Secure by Default",
    description: "End-to-end encryption keeps your data protected.",
    icon: <Shield className="w-6 h-6 text-[#9333EA]" />,
  },
  {
    title: "Collaborative",
    description: "Effortless teamwork with real-time updates.",
    icon: <Users className="w-6 h-6 text-[#9333EA]" />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            InkCore
          </span>
          ?
        </motion.h2>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          Sleek, secure, and easy-to-use tools built for creators and businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="group bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl border border-gray-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-md group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
