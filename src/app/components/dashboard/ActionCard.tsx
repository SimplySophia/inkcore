"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ActionCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  gradient: string;
  href?: string;
  onClick?: () => void;
}

export default function ActionCard({
  title,
  subtitle,
  icon,
  gradient,
  href,
  onClick,
}: ActionCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) return onClick();
    if (href) router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-6 rounded-3xl text-white bg-gradient-to-br ${gradient}
      hover:scale-[1.02] active:scale-[0.98] transition-all text-left`}
    >
      <div className="mb-4">{icon}</div>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-sm text-white/80">{subtitle}</p>
    </button>
  );
}
