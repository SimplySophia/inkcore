"use client";

import { Suspense } from "react";
import TryAISuggestionClient from "./TryAISuggestionClient";

export default function TryAISuggestionPage() {
  return (
    <Suspense fallback={<div>Loading AI Playground...</div>}>
      <TryAISuggestionClient />
    </Suspense>
  );
}
