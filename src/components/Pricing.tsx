'use client';
export default function Pricing() {
  return (
    <section className="relative w-full py-12 px-8 sm:px-16 lg:px-24 bg-gray-200 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#1E293B]">Pricing Plans</h2>
        <p className="text-lg mb-12 text-gray-700">
          Choose a plan that works best for you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <div className="p-8 bg-gray-100 text-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#1E293B]">Free</h3>
            <p className="text-4xl font-extrabold mb-6 text-[#4c4e50]">$0</p>
            <ul className="space-y-3 text-left mb-6">
              <li>✔ Basic features</li>
              <li>✔ Community support</li>
              <li>✔ Limited access</li>
            </ul>
            <button className="w-full px-6 py-2 rounded-lg bg-[#0F172A] text-white font-semibold hover:bg-gray-200 hover:text-gray-900 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="p-8 bg-gray-100 text-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-[#1E293B]">Premium</h3>
            <p className="text-4xl font-extrabold mb-6 text-[#4c4e50]">$29/mo</p>
            <ul className="space-y-3 text-left mb-6">
              <li>✔ All Free features</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited access</li>
            </ul>
            <button className="w-full px-6 py-2 rounded-lg bg-[#9CA3AF] text-[#1E293B] font-semibold hover:bg-gray-200 hover:text-gray-900 transition">
              Choose Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
