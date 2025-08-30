"use client";

import { Search, Bell } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white shadow-sm">
      {/* Search Bar */}
      <div className="flex-1 w-full max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6 ml-6">
        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-gray-700 transition">
          <Bell className="h-6 w-6" />
          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <Avatar className="h-9 w-9 border border-gray-300 shadow-sm">
          <AvatarImage src="/images/agent-03.png" alt="Profile" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}