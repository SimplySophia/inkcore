"use client";

import { useState, FormEvent } from "react";
import DraftForm from "./DraftForm";
import { generateMockDraft } from "@/lib/mockDrafts";
import Modal from "@/components/ui/modal";
import { Draft, DraftCategory, DraftTone} from "../../../../types/draft";

interface GenerateDraftModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (draft: Draft) => void;
}

export default function GenerateDraftModal({
  open,
  onClose,
  onCreate,
}: GenerateDraftModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const type = formData.get("type") as DraftCategory;
    const tone = formData.get("tone") as DraftTone;

    setTimeout(() => {
      const draft = generateMockDraft({ type, tone });
      onCreate(draft);
      setLoading(false);
      onClose();
    }, 1200);
  };

  return (
    <Modal open={open} onClose={onClose} title="Generate AI Draft">
      <DraftForm onSubmit={handleSubmit} loading={loading} />
    </Modal>
  );
}
