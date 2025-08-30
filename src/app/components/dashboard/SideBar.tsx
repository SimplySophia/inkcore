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

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
                ${
                  active
                    ? "bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                }
              `}
            >
              <Icon
                className={`h-4 w-4 ${
                  active ? "text-purple-600" : "text-gray-400"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}