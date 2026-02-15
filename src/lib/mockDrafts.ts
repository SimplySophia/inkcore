import { Draft, DraftTone, DraftCategory } from "../../types/draft";


export const initialDrafts: Draft[] = [
  {
    id: 1,
    title: "Future of Frontend 2025",
    category: "Article",
    updatedAt: "Aug 27, 2025",
    color: undefined,
    icon: undefined,
    date: undefined
  },
];

export function generateMockDraft(params: {
  type: DraftCategory;
  tone: DraftTone;
}): Draft {
  return {
    id: Date.now(),
    title: `${params.type} Draft (${params.tone})`,
    category: params.type,
    updatedAt: "Just now",
    color: undefined,
    icon: undefined,
    date: undefined
  };
}
