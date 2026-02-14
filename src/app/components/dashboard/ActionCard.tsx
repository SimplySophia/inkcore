import { ReactNode } from 'react';

interface ActionCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  gradient?: string;
}

export default function ActionCard({
  title,
  subtitle,
  icon,
  gradient,
}: ActionCardProps) {
  return (
    <button
      className={`relative overflow-hidden p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl ${
        gradient
          ? `bg-gradient-to-br ${gradient} text-white`
          : "bg-white border border-slate-200"
      }`}
    >
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="text-lg font-bold block">{title}</span>
      <span className="text-sm opacity-70">{subtitle}</span>
    </button>
  );
}
