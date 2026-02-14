import ActionCard from "./ActionCard";
import { Newspaper } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { ChartSpline } from 'lucide-react';

export default function QuickActions() {
  return (
    <section className="mb-2">
      <div className="flex justify-center relative">
        <button className="absolute bottom-4 right-4 text-sm font-semibold text-primary">
          Customize Actions
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ActionCard
          title="Start Blog Post"
          subtitle="Long-form AI writing"
          icon={<Newspaper className="w-6 h-6" />}
          gradient="from-indigo-600 to-indigo-700"
        />
        <ActionCard
          title="Generate AI Draft"
          subtitle="Quick ideation"
          icon={<Sparkles className="w-6 h-6" />}
          gradient="from-purple-500 to-purple-600"
        />
        <ActionCard
          title="Social Content"
          subtitle="Multi-platform posts"
          icon={<Share2 className="w-6 h-6" />}
          gradient="from-cyan-500 to-blue-500"
        />
        <ActionCard
          title="Performance"
          subtitle="View analytics"
          icon={<ChartSpline className="w-6 h-6" />}
          gradient="from-gray-500 to-gray-200"
        />
      </div>
    </section>
  );
}
