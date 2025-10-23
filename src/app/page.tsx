import Navbar from "./components/landing/Navbar";
import Landing from "./components/landing/Landing";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-offwhite dark:text-white dark:bg-[#0a0a0a] text-gray-800">
      {/* Navbar always fixed */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Page content */}
      <main className="pt-28 space-y-28">
        <Landing />
      </main>
      <div className="">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
