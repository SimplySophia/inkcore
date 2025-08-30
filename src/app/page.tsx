import Navbar from "./components/landing/Navbar";
import Landing from "./components/landing/Landing";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-offwhite text-gray-800">
      {/* Navbar always fixed */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Page content */}
      <main className="pt-28 space-y-28">
        <Landing />
      </main>
      <div className="mt-20">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
