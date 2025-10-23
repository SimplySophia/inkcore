'use client';

export default function Pricing() {
  return (
    <section
      className="relative w-full min-h-screen py-20 px-8 sm:px-16 lg:px-24 
                 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Pricing{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Plans
          </span>
        </h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-400">
          Choose a plan that works best for you.
        </p>

        <div className="grid md:grid-cols-2 mx-auto justify-center w-full">
          {/* Free Plan */}
          <div
            className="px-6 py-10 w-80 h-110 mx-auto rounded-xl shadow-lg hover:shadow-2xl transition duration-300 
                       bg-gray-50 dark:bg-[#111] text-gray-700 dark:text-gray-300 
                       border border-transparent dark:border-gray-800 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Free</h3>
            <p className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200">$0</p>
            <ul className="space-y-3 text-left mb-6 text-gray-600 dark:text-gray-400">
              <li>✔ Basic features</li>
              <li>✔ Community support</li>
              <li>✔ Limited access</li>
            </ul>
            <button
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 
                         text-white font-semibold hover:opacity-90 transition mt-12"
            >
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div
            className="px-6 py-10 w-80 h-110 mx-auto rounded-xl shadow-lg hover:shadow-2xl transition duration-300 
                       bg-gray-50 dark:bg-[#141414] text-gray-700 dark:text-gray-300 
                       border-2 border-purple-500 dark:border-purple-600 hover:-translate-y-1 
                       dark:shadow-[0_0_20px_rgba(147,51,234,0.25)]"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Premium</h3>
            <p className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">$29/mo</p>
            <ul className="space-y-3 text-left mb-6 text-gray-600 dark:text-gray-400">
              <li>✔ All Free features</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited access</li>
            </ul>
            <button
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 
                         text-white font-semibold hover:opacity-90 transition mt-12"
            >
              Choose Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
