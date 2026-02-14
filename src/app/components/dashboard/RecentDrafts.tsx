"use client";

import { useState } from "react";
import DraftsTable from "./DraftsTable";
import { ArrowRight } from "lucide-react";
import { Draft } from "../../../../types/draft";
import { Atom, BookOpen } from "lucide-react";
import GenerateDraftModal from "../ai/GenerateDraftModal";
import { DraftRowProps } from "./DraftRow";

export default function RecentDrafts() {
  const [open, setOpen] = useState(false);

  // THIS is the missing piece — state
    const [drafts, setDrafts] = useState<Draft[]>([
    {
      id: Math.floor(Math.random() * 1000000),
      title: "Future of Frontend 2025",
      category: "Article",
      date: "Aug 27, 2025",
      icon: <Atom className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      updatedAt: ""
    },
    {
      id: Math.floor(Math.random() * 1000000),
      title: "AI Ethics Policy",
      category: "Article",
      date: "2 hours ago",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      updatedAt: ""
    },
  ]);

  const handleCreateDraft = (draft: Draft) => {
    setDrafts((prev) => [draft, ...prev]);
  };

  const handleEditDraft = (draft: DraftRowProps) => {
    console.log("Edit draft clicked:", draft);
    setOpen(true);
  };

  return (
    <>
      <section>
        <div className="flex justify-between mb-6 items-center">
          <h3 className="text-xl font-bold">Recent Drafts</h3>

          <button
            onClick={() => setOpen(true)}
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1"
          >
            Generate Draft
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* PASS STATE HERE */}
        <DraftsTable
          drafts={drafts.map((draft) => ({
            ...draft,
            date: draft.date,
            icon: draft.icon,
            color: draft.color,
          }))}
          onEditDraft={handleEditDraft}
        />
      </section>

      {/* CONNECT MODAL */}
      <GenerateDraftModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreateDraft}
      />
    </>
  );
}
