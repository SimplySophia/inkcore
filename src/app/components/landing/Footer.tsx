import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { X, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
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
                aria-label="Facebook"
              >
                <FaFacebook size={20} className="text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter/X"
              >
                <X size={20} className="text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-6">
            <div className="w-full max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white tracking-wide">Stay Updated</h3>
                  <p className="text-gray-400 text-sm">Join our newsletter</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6 text-center md:text-left leading-relaxed">
                Get the latest updates, exclusive content, and special offers delivered straight to your inbox.
              </p>

              {/* Newsletter Form */}
              <form className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Subscribe Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>

              <p className="text-gray-500 text-xs mt-4 text-center md:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
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