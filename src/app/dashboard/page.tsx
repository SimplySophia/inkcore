import QuickActions from "../components/dashboard/QuickActions";
import RecentDrafts from "../components/dashboard/RecentDrafts";
import Sidebar from "../components/dashboard/SideBar";

export default function DashboardPage() {
  return (
    <>
      <Sidebar />
      <main className="ml-[280px] min-h-screen bg-background-light">
        <header className="p-2">
          <h2 className="text-xl lg:text-2xl font-bold">Welcome to, InkCore</h2>
          <p className="text-slate-500 mt-2 text-sm">
            What are we creating today?
          </p>
        </header>

        <QuickActions />
        <RecentDrafts />
      </main>
    </>
  );
}
