"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggler from "../ThemeToggler";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-6xl w-[90%] h-16 flex items-center justify-between px-6 rounded-full backdrop-blur-md 
      bg-white/90 dark:bg-[#0b0b0f] shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-500">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/InkCore.png"
          alt="InkCore Logo"
          width={160}
          height={150}
          className="rounded-md"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 relative">
        <Link
          href="#features"
          className="text-[#1E293B] dark:text-gray-200 relative group font-semibold"
        >
          Features
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F59E0B] dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="#pricing"
          className="text-[#1E293B] dark:text-gray-200 relative group font-semibold"
        >
          Pricing
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F59E0B] dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Resources Dropdown */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer text-[#1E293B] dark:text-gray-200 font-semibold"
          onClick={() => setOpen(!open)}
        >
          <span>Resources</span>
          {open ? (
            <ChevronUp size={16} className="text-gray-700 dark:text-gray-400" />
          ) : (
            <ChevronDown size={16} className="text-gray-700 dark:text-gray-400" />
          )}

          {open && (
            <div className="absolute top-10 left-0 bg-white dark:bg-[#1a1a1d] text-[#1E293B] dark:text-gray-200 shadow-2xl rounded-lg py-2 w-40 border border-gray-100 dark:border-gray-800 transition-all">
              <Link
                href="#docs"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Documentation
              </Link>
              <Link
                href="#guides"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Guides
              </Link>
              <Link
                href="#blog"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Blog
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA + Theme Toggle (Desktop) */}
      <div className="hidden md:flex items-center space-x-3">
        <Link href="/dashboard">
          <Button className="bg-[#162749] hover:bg-[#F59E0B] dark:bg-cyan-500 dark:hover:bg-purple-500 text-[#FAFAFA] font-semibold rounded-xl px-4 transition-transform duration-300 hover:scale-105">
            Get Started
          </Button>
        </Link>
        <ThemeToggler />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-3">
        <ThemeToggler />
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/95 dark:bg-[#0b0b0f] border-t border-gray-200 dark:border-gray-800 py-6 px-6 rounded-xl shadow-lg transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4 text-center">
            <Link href="#features" className="text-lg font-semibold text-[#1E293B] dark:text-gray-200">
              Features
            </Link>
            <Link href="#pricing" className="text-lg font-semibold text-[#1E293B] dark:text-gray-200">
              Pricing
            </Link>
            <div className="text-lg font-semibold text-[#1E293B] dark:text-gray-200">
              Resources
              <div className="flex flex-col mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <Link href="#docs">Documentation</Link>
                <Link href="#guides">Guides</Link>
                <Link href="#blog">Blog</Link>
              </div>
            </div>
            {/* Mobile CTA Button Below Input */}
            <Link href="/dashboard">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg mt-4 py-3">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
