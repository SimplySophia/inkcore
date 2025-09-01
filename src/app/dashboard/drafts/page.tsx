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

const allDrafts: Draft[] = [
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
  {
    id: "4",
    title: "E-learning Architecture Plan",
    updatedAt: "Aug 15, 2025",
    href: "/dashboard/drafts/4",
  },
  {
    id: "5",
    title: "Campus Delivery App - Runner Dashboard",
    updatedAt: "Aug 10, 2025",
    href: "/dashboard/drafts/5",
  },
];

export default function DraftsPage() {
  const [drafts, setDrafts] = useState(allDrafts);

  const handleDelete = (id: string) => {
    setDrafts(drafts.filter((draft) => draft.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-gray-50 rounded-2xl shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
        All Drafts
      </h1>

      {drafts.length === 0 ? (
        <p className="text-gray-500">No drafts available.</p>
      ) : (
        <ul className="space-y-4">
          {drafts.map((draft) => (
            <li
              key={draft.id}
              className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
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

              {/* Actions Dropdown (placeholder) */}
              <div className="relative group">
                <button className="p-1 rounded-md hover:bg-gray-100 transition">
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition">
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(draft.id)}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
