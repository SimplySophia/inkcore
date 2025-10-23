import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
//import Navbar from "@/app/components/landing/Navbar";
//import Footer from "@/app/components/landing/Footer";


export const metadata: Metadata = {
  title: "InkCore",
  description: "Ai powered Saas Product for Blogs and media contents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="overflow-x-hidden background-[var(--color-white)]"
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>      
      </body>
    </html>
  );
}
