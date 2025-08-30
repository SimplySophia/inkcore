
import Sidebar from "../components/dashboard/SideBar";
import type { Metadata } from "next";
import Topbar from "../components/dashboard/Topbar";

export const metadata: Metadata = {
  title: "Dashboard | InkFlow",
  description: "Your dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
       <body className="relative flex flex-col min-h-screen background-[var(--color-white)] text-gray-700">
         <div className="flex w-full">
            <Sidebar />
            <div className="flex-1">
                <Topbar />
            </div>
        </div>
        <main className="absolute top-16 left-64 right-0 bottom-0 p-6 overflow-auto">
            {children}
        </main>
      </body>
    </html>
  );
}

