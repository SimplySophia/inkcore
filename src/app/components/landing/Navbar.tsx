"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-6xl w-[90%] h-16 flex items-center justify-between px-6 rounded-full backdrop-blur-md bg-white/90 shadow">
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

      {/* Links */}
      <div className="hidden md:flex space-x-8 relative">
        <Link 
          href="#features" 
          className="text-[#1E293B] relative group font-semibold"
        >
          Features
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href="#pricing" 
          className="text-[#1E293B] relative group font-semibold"
        >
          Pricing
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Resources Dropdown */}
        <div
          className="relative flex items-center space-x-1 cursor-pointer text-[#1E293B] hover:border-b-2 hover:border-[var(--color-accent)] transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          <span className="font-semibold">Resources</span>
          {open ? (
            <ChevronUp size={16} className="text-gray-700" />
          ) : (
            <ChevronDown size={16} className="text-gray-700" />
          )}

          {open && (
            <div className="absolute top-10 left-0 bg-white text-[#1E293B] shadow-2xl rounded-lg py-2 w-40">
              <Link
                href="#docs"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Documentation
              </Link>
              <Link
                href="#guides"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Guides
              </Link>
              <Link
                href="#blog"
                className="block px-4 py-2 hover:bg-gray-100 transition"
              >
                Blog
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <Button className="bg-[#162749] hover:bg-[#F59E0B] text-[#FAFAFA] font-semibold rounded-xl px-4 transition-transform duration-300 hover:scale-105">
        Get Started
      </Button>
    </nav>
  );
}