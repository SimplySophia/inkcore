"use client";

import { ReactNode } from "react";

export interface DraftRowProps {
  title: string;
  category: string;
  date: string;
  icon: ReactNode;
  color: string;
  onEdit?: () => void;
}

export default function DraftRow({
  title,
  category,
  date,
  icon,
  color,
  onEdit,
}: DraftRowProps) {
  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-4 sm:px-8 py-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
            {icon}
          </div>
          <span className="font-semibold text-sm sm:text-base">{title}</span>
        </div>
      </td>
      <td className="px-4 sm:px-8 py-3">
        <span className="px-2 sm:px-3 py-1 bg-slate-100 rounded-full text-xs sm:text-sm">{category}</span>
      </td>
      <td className="px-4 sm:px-8 py-3 text-sm sm:text-base text-slate-500">{date}</td>
      <td className="px-4 sm:px-8 py-3 text-right">
        <button
          className="text-slate-400 hover:text-primary transition"
          onClick={onEdit}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
      </td>
    </tr>
  );
}
