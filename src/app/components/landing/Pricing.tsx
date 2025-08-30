'use client';
export default function Pricing() {
  return (
    <section className="relative w-full py-20 px-8 sm:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Pricing{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Plans
          </span>
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          Choose a plan that works best for you.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mx-auto justify-center">
          {/* Free Plan */}
          <div className="p-6 bg-gray-50 text-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free</h3>
            <p className="text-4xl font-extrabold mb-6 text-gray-800">$0</p>
            <ul className="space-y-3 text-left mb-6 text-gray-600">
              <li>✔ Basic features</li>
              <li>✔ Community support</li>
              <li>✔ Limited access</li>
            </ul>
            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="p-6 bg-gray-50 text-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-2 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium</h3>
            <p className="text-4xl font-extrabold mb-6 text-gray-800">$29/mo</p>
            <ul className="space-y-3 text-left mb-6 text-gray-600">
              <li>✔ All Free features</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited access</li>
            </ul>
            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
              Choose Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
