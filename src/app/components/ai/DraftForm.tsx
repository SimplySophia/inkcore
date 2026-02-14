"use client";

import { FormEvent } from "react";

interface DraftFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export default function DraftForm({ onSubmit, loading }: DraftFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-slate-600">
          Content Type
        </label>
        <select
          name="type"
          required
          className="mt-1 w-full rounded-xl border-slate-200"
        >
          <option value="Article">Article</option>
          <option value="Newsletter">Newsletter</option>
          <option value="Social Post">Social Post</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-600">
          Tone
        </label>
        <select
          name="tone"
          required
          className="mt-1 w-full rounded-xl border-slate-200"
        >
          <option value="Professional">Professional</option>
          <option value="Casual">Casual</option>
          <option value="Bold">Bold</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition disabled:opacity-60"
      >
        {loading ? "Generating..." : "Generate Draft"}
      </button>
    </form>
  );
}
