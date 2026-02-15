"use client";

import DraftRow, { DraftRowProps } from "./DraftRow";
import { Atom, BookOpen } from "lucide-react";

interface DraftsTableProps {
  drafts?: DraftRowProps[];
  onEditDraft?: (draft: DraftRowProps) => void;
}

export default function DraftsTable({ drafts, onEditDraft }: DraftsTableProps) {
  const mockDrafts: DraftRowProps[] = [
    {
      title: "Future of Frontend 2025",
      category: "Article",
      date: "Aug 27, 2025",
      icon: <Atom className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "AI Ethics Policy",
      category: "Documentation",
      date: "2 hours ago",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const displayDrafts = drafts ?? mockDrafts;

  return (
    <div className="overflow-x-auto rounded-3xl border bg-white">
      <table className="min-w-[320px] lg:min-w-[764px] w-full table-auto mx-auto">
        <thead className="bg-slate-50">
          <tr>
            {["Document", "Category", "Last Edited", ""].map((h) => (
              <th
                key={h}
                className="px-4 sm:px-8 py-3 text-xs uppercase text-slate-400 text-left"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayDrafts.map((draft, i) => (
            <DraftRow key={i} {...draft} onEdit={() => onEditDraft?.(draft)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
