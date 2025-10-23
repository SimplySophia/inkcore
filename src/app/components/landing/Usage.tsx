"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Usage() {
  return (
    <section
      className="w-full min-h-screen relative py-20 px-8 sm:px-16 lg:px-24 
                 bg-gray-100 dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Steps */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            How It{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg mb-12 text-gray-600 dark:text-gray-400"
          >
            Get started in just a few steps and enjoy a seamless experience.
          </motion.p>

          <div className="space-y-10">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your account and set up your profile in minutes.",
              },
              {
                step: "2",
                title: "Choose a Plan",
                desc: "Select the perfect plan that fits your needs.",
              },
              {
                step: "3",
                title: "Start Using",
                desc: "Enjoy all the features and scale effortlessly.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-full 
                              bg-gradient-to-r from-purple-500 to-cyan-500 text-white 
                              text-xl font-bold shadow-md"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    delay: i * 0.3,
                  }}
                >
                  {item.step}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Phone Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center md:justify-end w-full md:w-auto"
        >
          <Image
            src="/images/phone.png"
            alt="App Usage Demo"
            className="w-[200px] md:w-[400px] lg:w-[480px] h-auto rounded-2xl 
                       shadow-lg dark:shadow-[0_0_30px_rgba(147,51,234,0.25)] 
                       transition-shadow duration-500"
            width={300}
            height={300}
            priority
          />
        </motion.div>

        {/* Gradient Rainbow Glow */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] 
        bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400
        opacity-30 blur-3xl rounded-t-[50%] pointer-events-none"
      />
      </div>
    </section>
  );
}
