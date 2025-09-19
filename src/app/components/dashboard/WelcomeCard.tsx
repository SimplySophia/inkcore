"use client";

"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function WelcomeCard() {
  return (
    <Card className="bg-gray-50 shadow-sm border border-gray-200 rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
          👋 Welcome to InkCore!
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Ready to create some amazing AI-powered content today?
        </p>
      </CardContent>
    </Card>
  );
}
