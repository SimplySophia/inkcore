'use client';

import Image from "next/image";

export default function Usage() {
  return (
    <section className="w-full min-h-screen relative bg-white py-20 px-8 sm:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Steps */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg mb-12 text-gray-600">
            Get started in just a few steps and enjoy a seamless experience.
          </p>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xl font-bold shadow">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Sign Up</h3>
                <p className="text-gray-600">Create your account and set up your profile in minutes.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xl font-bold shadow">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Choose a Plan</h3>
                <p className="text-gray-600">Select the perfect plan that fits your needs.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xl font-bold shadow">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Start Using</h3>
                <p className="text-gray-600">Enjoy all the features and scale effortlessly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Phone Illustration */}
        <div className="flex-1 flex justify-center relative">
          <Image 
            src="/images/saas ph2.png" 
            alt="App Usage Demo" 
            className="w-[280px] md:w-[340px] lg:w-[400px] h-auto drop-shadow-2xl"
            width={400}
            height={400}
            priority
          />
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
