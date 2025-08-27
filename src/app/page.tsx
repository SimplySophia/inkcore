import Hero from "@/components/Hero";
import Features from "@/components/feature";
import Usage from "@/components/Usage";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="font-sans bg-offwhite text-gray-800">
      {/* Navbar always fixed */}

      {/* Page content */}
      <main className="pt-28 space-y-28">
        <Hero />
        <Features />
        <Usage />
        <Pricing />
      </main>
    </div>
  );
}
