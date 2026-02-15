export type DraftCategory =
  | "Article"
  | "Newsletter"
  | "Social Post";

export type DraftTone =
  | "Professional"
  | "Casual"
  | "Bold";

export interface Draft {
  color: any;
  icon: any;
  date: any;
  id: number;
  title: string;
  category: DraftCategory;
  updatedAt: string;
}
