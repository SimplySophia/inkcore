import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand / Logo */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/images/InkCore.png"
              alt="InkCore Logo"
              width={160}
              height={150}
              className="rounded-md"
            />
            <p className="text-gray-300 dark:text-gray-400 max-w-xs text-center md:text-left leading-relaxed">
              Building solutions that make life easier, one project at a time.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebook size={20} className="text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <X size={20} className="text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} className="text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={20} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">Features</h3>
            <ul className="space-y-3">
              <li>
                <a href="#feature1" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Cool Feature
                </a>
              </li>
              <li>
                <a href="#feature2" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#feature3" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#feature4" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#blog" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#docs" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">Pricing</h3>
            <ul className="space-y-3">
              <li>
                <a href="#plans" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Plans
                </a>
              </li>
              <li>
                <a href="#enterprise" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              InkCore
            </span>
            . All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}