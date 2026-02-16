"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import ThemeToggler from "../ThemeToggler";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false);
    };
    
    if (open) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [open]);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-6xl w-[90%] h-16 flex items-center justify-between px-6 rounded-full backdrop-blur-xl 
      ${
        scrolled
          ? "bg-white/80 dark:bg-[#0b0b0f]/80 shadow-2xl"
          : "bg-white/90 dark:bg-[#0b0b0f]/90 shadow-lg"
      }
      border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-cyan-500/10`}
    >
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Logo Section */}
      <div className="flex items-center space-x-2 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          <Image
            src="/images/InkCore.png"
            alt="InkCore Logo"
            width={160}
            height={150}
            className="rounded-md relative transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 relative z-10">
        <Link
          href="#features"
          className="text-[#1E293B] dark:text-gray-200 relative group font-semibold text-sm tracking-wide"
        >
          Features
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all duration-300 -z-10"></span>
        </Link>

        <Link
          href="#pricing"
          className="text-[#1E293B] dark:text-gray-200 relative group font-semibold text-sm tracking-wide"
        >
          Pricing
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all duration-300 -z-10"></span>
        </Link>

        {/* Resources Dropdown */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer text-[#1E293B] dark:text-gray-200 font-semibold text-sm tracking-wide group"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span>Resources</span>
          <span key={open ? "chevron-up" : "chevron-down"}>
            {open ? (
              <ChevronUp size={16} className="text-gray-700 dark:text-gray-400 transition-transform duration-300" />
            ) : (
              <ChevronDown size={16} className="text-gray-700 dark:text-gray-400 transition-transform duration-300" />
            )}
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>

          {open && (
            <div key="resources-dropdown" className="absolute top-10 left-0 bg-white/95 dark:bg-[#1a1a1d]/95 backdrop-blur-xl text-[#1E293B] dark:text-gray-200 shadow-2xl rounded-2xl py-3 w-48 border border-gray-200/50 dark:border-gray-700/50 transition-all animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="absolute -top-1 left-6 w-2 h-2 bg-white dark:bg-[#1a1a1d] border-l border-t border-gray-200/50 dark:border-gray-700/50 transform rotate-45"></div>
              <Link
                href="#docs"
                className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-200 rounded-lg mx-2 text-sm font-medium"
              >
                📚 Documentation
              </Link>
              <Link
                href="#guides"
                className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-200 rounded-lg mx-2 text-sm font-medium"
              >
                🎯 Guides
              </Link>
              <Link
                href="#blog"
                className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-200 rounded-lg mx-2 text-sm font-medium"
              >
                ✨ Blog
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA + Theme Toggle (Desktop) */}
      <div className="hidden md:flex items-center space-x-3 relative z-10">
        <Link href="/dashboard">
          <Button className="relative group bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:via-cyan-500 hover:to-purple-600 text-white font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-cyan-500/50 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={16} className="animate-pulse" />
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </Link>
        <ThemeToggler />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-3 relative z-10">
        <ThemeToggler />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen(!mobileOpen);
          }}
          className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
        >
          <span key={mobileOpen ? "icon-x" : "icon-menu"}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          key="mobile-menu"
          className="absolute top-20 left-0 w-full bg-white/95 dark:bg-[#0b0b0f]/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 py-6 px-6 rounded-3xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Premium Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-50 blur-xl -z-10"></div>

          <div className="flex flex-col space-y-4 text-center">
            <Link
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-semibold text-[#1E293B] dark:text-gray-200 py-2 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-200"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-semibold text-[#1E293B] dark:text-gray-200 py-2 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-200"
            >
              Pricing
            </Link>

            {/* Resources Section */}
            <div className="text-lg font-semibold text-[#1E293B] dark:text-gray-200 py-2 px-4">
              Resources
              <div className="flex flex-col mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <Link
                  href="#docs"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                >
                  📚 Documentation
                </Link>
                <Link
                  href="#guides"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                >
                  🎯 Guides
                </Link>
                <Link
                  href="#blog"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                >
                  ✨ Blog
                </Link>
              </div>
            </div>

            {/* Mobile CTA Button - Premium Styled */}
            <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
              <Button className="w-full relative group bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:via-cyan-500 hover:to-purple-600 text-white font-bold rounded-2xl mt-4 py-4 text-base shadow-lg shadow-purple-500/30 dark:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles size={18} className="animate-pulse" />
                  Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}