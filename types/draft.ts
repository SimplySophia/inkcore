export type DraftCategory =
  | "Article"
  | "Newsletter"
  | "Social Post";

export type DraftTone =
  | "Professional"
  | "Casual"
  | "Bold";

export interface Draft {
  id: number;
  title: string;
  category: DraftCategory;
  updatedAt: string;
}
