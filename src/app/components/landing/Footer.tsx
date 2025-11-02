import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-gray-100 dark:text-gray-300 overflow-hidden">
  {/* 🌊 Full Background Wave (fills footer) */}
  <div className="absolute inset-0 -z-50">
    <svg
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Light Mode Gradient */}
        <linearGradient id="waveLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        {/* Dark Mode Gradient */}
        <linearGradient id="waveDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* Light Mode Wave */}
      <path
        className="block dark:hidden"
        fill="url(#waveLight)"
        d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z"
      ></path>

      {/* Dark Mode Wave */}
      <path
        className="hidden dark:block"
        fill="url(#waveDark)"
        d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z"
      ></path>
    </svg>
  </div>

  {/* 🌟 Content Inside Wave */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20 py-24 text-center md:text-left">
    {/* Brand / Logo */}
    <div className="flex flex-col items-center md:items-start">
      <Image
        src="/images/InkCore.png"
        alt="InkCore Logo"
        width={160}
        height={150}
        className="rounded-md"
      />
      <p className="mt-3 text-gray-200 dark:text-gray-400 max-w-xs">
        Building solutions that make life easier, one project at a time.
      </p>
      <div className="flex gap-4 mt-4">
        <a href="#" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition"><FaFacebook size={22} /></a>
        <a href="#" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition"><X size={22} /></a>
        <a href="#" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition"><FaLinkedin size={22} /></a>
        <a href="#" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition"><FaInstagram size={22} /></a>
      </div>
    </div>

    {/* Features */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
      <ul className="space-y-2">
        <li><a href="#feature1" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Cool Feature</a></li>
        <li><a href="#feature2" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Integrations</a></li>
        <li><a href="#feature3" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Analytics</a></li>
        <li><a href="#feature4" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Automation</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><a href="#blog" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Blog</a></li>
        <li><a href="#docs" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Documentation</a></li>
        <li><a href="#support" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Support</a></li>
        <li><a href="#community" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Community</a></li>
      </ul>
    </div>

    {/* Pricing */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Pricing</h3>
      <ul className="space-y-2">
        <li><a href="#plans" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Plans</a></li>
        <li><a href="#enterprise" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Enterprise</a></li>
        <li><a href="#faq" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">FAQs</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 dark:hover:text-cyan-400 transition">Contact Sales</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="relative z-10 text-center border-t border-white/20 dark:border-gray-800 pt-6 text-sm text-gray-200 dark:text-gray-400 pb-6">
    © {new Date().getFullYear()}{" "}
    <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
      InkCore
    </span>{" "}
    — All rights reserved.
  </div>
</footer>

  );
}
