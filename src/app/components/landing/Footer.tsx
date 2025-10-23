// components/Footer.tsx
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { X } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
                <Image 
                  src="/images/InkCore.png" 
                  alt="InkCore Logo" 
                  width={160} 
                  height={150} 
                  className="rounded-md"
                />
          <p className="text-gray-400">
            Building solutions that make life easier, one project at a time.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition"><FaFacebook size={22} /></a>
            <a href="#" className="hover:text-white transition"><X size={22} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin size={22} /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram size={22} /></a>
          </div>
        </div>

        {/* Features */}
        <div className="">
          <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="#feature1" className="hover:text-white transition">Cool Feature</a></li>
            <li><a href="#feature2" className="hover:text-white transition">Integrations</a></li>
            <li><a href="#feature3" className="hover:text-white transition">Analytics</a></li>
            <li><a href="#feature4" className="hover:text-white transition">Automation</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="#docs" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#support" className="hover:text-white transition">Support</a></li>
            <li><a href="#community" className="hover:text-white transition">Community</a></li>
          </ul>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Pricing</h3>
          <ul className="space-y-2">
            <li><a href="#plans" className="hover:text-white transition">Plans</a></li>
            <li><a href="#enterprise" className="hover:text-white transition">Enterprise</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Sales</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
