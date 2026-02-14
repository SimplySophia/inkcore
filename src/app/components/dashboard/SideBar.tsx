import Image from "next/image";
import {
  Home,
  Folder,
  Calendar,
  Activity,
  Settings,
  Edit3,
} from "lucide-react";

export default function Sidebar() {
  const navLinks = [
    { icon: Home, label: "Home" },
    { icon: Folder, label: "Projects" },
    { icon: Calendar, label: "Social Planner" },
    { icon: Activity, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-slate-200 bg-white flex flex-col z-50">
      <div className="py-2 px-6 gap-2">
        <div className="flex items-center">
            <Image
            src="/images/InkCore.png"
            alt="User"
            width={200}
            height={200}
            className="rounded-full"
          />            
        </div>

        <nav className="space-y-1">
          {navLinks.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:border-b-2 hover:border-indigo-500 transition"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-slate-50 rounded-2xl p-4 border flex items-center gap-3">
          <Image
            src="/images/InkCore.png"
            alt="User"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">Alex Rivera</p>
            <p className="text-xs text-slate-500">alex@inkcore.ai</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
