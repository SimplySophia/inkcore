"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Newspaper,
  FileText,
  Share2,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      label: "Blog",
      href: "/dashboard/blog",
      icon: Newspaper,
    },
    {
      label: "Drafts",
      href: "/dashboard/drafts",
      icon: FileText,
    },
    {
      label: "Social",
      href: "/dashboard/social",
      icon: Share2,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[70px] md:w-[260px] border-r bg-white flex flex-col z-50 transition-all duration-300">

      {/* Logo */}
      <div className="p-4 flex justify-center md:justify-start">
        <Image
          src="/images/InkCore.png"
          alt="InkCore Logo"
          width={140}
          height={140}
          priority
          style={{ width: "100px", height: "auto" }}
        />
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2 px-2">

        {navLinks.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`
                group relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all
                ${isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}
              `}
            >
              <Icon size={20} />

              {/* Desktop label */}
              <span className="hidden md:inline font-medium">
                {label}
              </span>

              {/* Mobile tooltip */}
              <span className="
                absolute left-14 bg-slate-900 text-white text-xs px-2 py-1 rounded
                opacity-0 group-hover:opacity-100 transition pointer-events-none
                md:hidden whitespace-nowrap
              ">
                {label}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* User */}
      <div className="mt-auto p-4 hidden md:flex items-center gap-3 border-t">
        <Image
          src="/images/InkCore.png"
          alt="User"
          width={60}
          height={50}
          style={{ width: "36px", height: "auto" }}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">Sophia</p>
          <p className="text-xs text-slate-500">sophia@inkcore.ai</p>
        </div>
      </div>

    </aside>
  );
}
