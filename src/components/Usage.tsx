'use client';

import Image from "next/image";

export default function Usage() {
  return (
    <section className="w-full min-h-screen relative bg-[white] py-12 px-8 sm:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Steps */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-surface: #1E293B;)]">How It Works</h2>
          <p className="text-lg mb-12 text-[var(--color-surface: #1E293B;)]">
            Get started in just a few steps and enjoy a seamless experience.
          </p>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] text-white text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-[#1F2937]">Sign Up</h3>
                <p className="text-gray-400">Create your account and set up your profile in minutes.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#374151] text-white text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-[#1F2937]">Choose a Plan</h3>
                <p className="text-gray-400">Select the perfect plan that fits your needs.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4B5563] text-white text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-[#1F2937]">Start Using</h3>
                <p className="text-gray-400">Enjoy all the features and scale effortlessly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Phone Illustration */}
        <div className="flex-1 flex justify-center gap-6">
          <div className="relative">
            <Image 
            src="/images/saas ph2.png" 
            alt="App Usage Demo" 
            className="w-[280px] md:w-[340px] lg:w-[400px] h-auto drop-shadow-2xl"
            width={400}
            height={400}
            priority
          />
          </div>
          <div className="absolute top-0 right-10 md:top-5 md:right-10 lg:top-10 lg:right-20">
            <Image 
            src="/images/phone.png" 
            alt="App Usage Demo" 
            className="w-[200px] md:w-[260px] lg:w-[320px] h-auto drop-shadow-2xl"
            width={300}
            height={200}
            priority
          />
          </div>
        </div>
      </div>
    </section>
  );
}
