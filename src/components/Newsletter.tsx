// components/Newsletter.tsx
"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-100 via-white to-purple-50 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Stay Updated with Us
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Subscribe to our newsletter and never miss new updates, features, and offers.
      </motion.p>

      <motion.form
        className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-md"
        >
          Subscribe
        </button>
      </motion.form>

      <p className="text-sm text-gray-500 mt-6">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </section>
  );
}
