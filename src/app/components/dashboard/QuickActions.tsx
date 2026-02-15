"use client";

import ActionCard from "./ActionCard";
import { Newspaper, Sparkles, Share2, ChartSpline } from "lucide-react";

export default function QuickActions() {
  return (
    <section className="mb-6 px-4 md:px-6">
      <div className="flex justify-center relative mb-4">
        <button className="absolute bottom-0 right-0 text-sm font-semibold text-primary">
          Customize Actions
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <ActionCard
          title="Start Blog Post"
          subtitle="Long-form AI writing"
          icon={<Newspaper className="w-6 h-6" />}
          gradient="from-indigo-600 to-indigo-700"
          href="/dashboard/blog/new"
        />
        <ActionCard
          title="Generate AI Draft"
          subtitle="Quick ideation"
          icon={<Sparkles className="w-6 h-6" />}
          gradient="from-purple-500 to-purple-600"
          href="/dashboard/drafts/new"
        />
        <ActionCard
          title="Social Content"
          subtitle="Multi-platform posts"
          icon={<Share2 className="w-6 h-6" />}
          gradient="from-cyan-500 to-blue-500"
          href="/dashboard/social/new"
        />
        <ActionCard
          title="Performance"
          subtitle="View analytics"
          icon={<ChartSpline className="w-6 h-6" />}
          gradient="from-gray-500 to-gray-200"
          href="/dashboard/performance"
        />
      </div>
    </section>
  );
}
