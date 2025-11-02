"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Folder, Mail, Book, Users, Settings, LogOut, FileEdit, Lightbulb } from "lucide-react";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/dashboard/projects", icon: Folder  },
  { name: "Drafts", href: "/dashboard/drafts", icon: FileEdit },
  { name: "Suggestions", href: "/dashboard/ai-suggestions", icon: Lightbulb },
  { name: "Resources", href: "/dashboard/resources", icon: Book },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut }

];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
        Dashboard
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-2 space-y-2 mt-6">
        {navItems.map((item) => (
          <Link
  key={item.href}
  href={item.href}
  className="group relative flex items-center justify-center md:justify-start gap-3 text-sm
    text-slate-600 dark:text-slate-300 
    rounded px-3 py-2 transition-colors duration-200 
    hover:bg-transparent md:hover:bg-pink-100 md:hover:text-pink-500"
>
  {item.icon && <item.icon />}

  {/* Visible label on desktop */}
  <span className="hidden md:inline">{item.name}</span>

  {/* Tooltip label for small screens */}
  <span
    className="absolute left-full top-1/2 -translate-y-1/2 ml-2 md:hidden
    bg-pink-400 text-white text-xs rounded px-2 py-1 whitespace-nowrap 
    opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 
    transition-all duration-300 ease-in-out z-50 shadow-md"
  >
    {item.name}
  </span>
</Link>

        ))}
      </nav>

    </aside>
  );
}