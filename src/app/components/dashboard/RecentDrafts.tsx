"use client";

import { FileText, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Draft = {
  id: string;
  title: string;
  updatedAt: string;
  href: string;
};

const recentDrafts: Draft[] = [
  {
    id: "1",
    title: "AI Blog Post: Future of Frontend",
    updatedAt: "Aug 27, 2025",
    href: "/dashboard/drafts/1",
  },
  {
    id: "2",
    title: "Next.js Project Setup Notes",
    updatedAt: "Aug 25, 2025",
    href: "/dashboard/drafts/2",
  },
  {
    id: "3",
    title: "UI Wireframe Ideas",
    updatedAt: "Aug 20, 2025",
    href: "/dashboard/drafts/3",
  },
];

export default function RecentDrafts() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 rounded-2xl shadow-lg p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
          Recent Drafts
        </h2>
        <Link
          href="/dashboard/drafts"
          className="text-sm text-gray-500 hover:text-cyan-600 transition"
        >
          View All
        </Link>
      </div>

      {/* Draft List */}
      <ul className="space-y-3">
        {recentDrafts.map((draft) => (
          <li
            key={draft.id}
            className="relative flex items-center justify-between bg-white rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-cyan-500 drop-shadow-sm" />
              <div>
                <Link
                  href={draft.href}
                  className="font-medium text-gray-800 hover:text-purple-600 transition"
                >
                  {draft.title}
                </Link>
                <p className="text-xs text-gray-500">Updated {draft.updatedAt}</p>
              </div>
            </div>

            {/* Dots Menu */}
            <div className="relative">
              <button
                className="p-1 rounded-md hover:bg-gray-100 transition"
                onClick={() =>
                  setOpenMenu(openMenu === draft.id ? null : draft.id)
                }
              >
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
              </button>

              {openMenu === draft.id && (
                <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg py-1 z-10">
                  <Link
                    href={`/dashboard/drafts/${draft.id}/edit`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => alert(`Delete draft ${draft.id}`)}
                    className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
