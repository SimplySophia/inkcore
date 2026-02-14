"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function WelcomeCard() {
  return (
    <Card
      className="
        bg-gray-50 border border-gray-200 rounded-2xl shadow-sm
        w-full
      "
    >
      <CardContent
        className="
          p-4 sm:p-5 md:p-6 lg:p-8
          flex flex-col gap-2
        "
      >
        <h2
          className="
            text-lg sm:text-xl md:text-2xl
            font-bold
            bg-gradient-to-r from-purple-500 via-indigo-300 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          👋 Welcome to InkCore!
        </h2>

        <p
          className="
            text-xs sm:text-sm md:text-base
            text-gray-600
            max-w-xl
          "
        >
          Ready to create some amazing AI-powered content today?
        </p>
      </CardContent>
    </Card>
  );
}
