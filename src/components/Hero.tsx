"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
  id="hero"
  className="w-full relative bg-white pt-32 pb-24 px-8 sm:px-16 lg:px-24"
>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[var(--color-text)]">
            Unleash Creativity with{" "}
            <span className="text-[var(--color-secondary)]">InkCore</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[var(--color-text)]">
            Your all-in-one platform to write, create, and share ideas with the
            world. Designed with speed, elegance, and flexibility in mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Button className="bg-[var(--color-text-muted)] hover:bg-cyan-100 text-gray-700 px-6 py-3 rounded-xl shadow-lg">
              Get Started
            </Button>
            <Link href="#features">
              <Button className="bg-[#162749] hover:bg-amber-600 text-white px-6 py-3 rounded-xl shadow-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content (Optional Illustration) */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
                      src="/images/saas lap.png" 
                      alt="App Usage Demo" 
                      className="w-[280px] md:w-[340px] lg:w-[400px] h-auto drop-shadow-2xl"
                      width={400}
                      height={400}
                    
                    />
        </motion.div>
      </div>
    </section>
  );
}
