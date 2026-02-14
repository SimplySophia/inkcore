
import Sidebar from "../components/dashboard/SideBar";
import Topbar from "../components/dashboard/Topbar";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Dashboard | InkFlow",
  description: "Your dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-white)] text-gray-700 overflow-x-hidden">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Right section */}
        <div className="flex flex-col flex-1">
          <Topbar />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            
          </main>
        </div>
      </div>
    </div>
  );
}
