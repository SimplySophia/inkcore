import type { Metadata } from "next";
import "./globals.css";
//import Navbar from "@/app/components/landing/Navbar";
//import Footer from "@/app/components/landing/Footer";


export const metadata: Metadata = {
  title: "InkFlow",
  description: "Ai powered Saas Product for Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="overflow-x-hidden background-[var(--color-white)]"
      >
        {children}
      </body>
    </html>
  );
}
