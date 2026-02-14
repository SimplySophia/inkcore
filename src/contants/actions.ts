import {
    FileText,
    PenTool,
    Share2,
    Calendar,
    BarChart2,
    FolderOpen,
  } from "lucide-react";
  
  export const quickActions = [
    {
      label: "Start Blog Post",
      icon: FileText,
      content: "Open a blank editor for starting a new blog post.",
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
  