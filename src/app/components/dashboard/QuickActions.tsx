"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  PenTool,
  Share2,
  Calendar,
  BarChart2,
  FolderOpen,
} from "lucide-react";


export default function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      label: "Start Blog Post",
      icon: FileText,
      content:
        "Open a blank editor for starting a new blog post.",
      route: "/editor",
      actionText: "Open Editor",
    },
    {
      label: "Generate AI Draft",
      icon: PenTool,
      content:
        "AI will generate a first draft based on your chosen topic or keywords.",
      route: "/draft",
      actionText: "Generate Draft",
    },
    {
      label: "Create Social Content",
      icon: Share2,
      content:
        "Generate social media posts (Twitter, LinkedIn, Instagram) tailored for your content.",
      route: "/social",
      actionText: "Create Content",
    },
    {
      label: "Schedule Posts",
      icon: Calendar,
      content:
        "View your content calendar and schedule posts across platforms.",
      route: "/scheduler",
      actionText: "Open Scheduler",
    },
    {
      label: "Performance Insights",
      icon: BarChart2,
      content:
        "Get insights into how your posts are performing: views, clicks, and engagement.",
      route: "/insights",
      actionText: "View Insights",
    },
    {
      label: "Content Library",
      icon: FolderOpen,
      content:
        "Browse all your drafts, published posts, and reusable templates.",
      route: "/library",
      actionText: "Go to Library",
    },
  ];

  const [selectedAction, setSelectedAction] = useState<null | typeof actions[0]>(
    null
  );

  return (
    <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Quick Actions
      </h2>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, i) => (
          <button
            key={i}
            onClick={() => setSelectedAction(action)}
            className="flex items-center gap-3 w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
          >
            <action.icon className="w-5 h-5" />
            {action.label}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedAction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-3">
              <selectedAction.icon className="w-5 h-5 text-indigo-500" />
              {selectedAction.label}
            </h3>
            <p className="text-gray-600">{selectedAction.content}</p>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setSelectedAction(null)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  router.push(selectedAction.route);
                  setSelectedAction(null);
                }}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                {selectedAction.actionText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
