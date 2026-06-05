import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransition as ViewTransition } from "react";

// -------- Metadata --------
// Override per-page with `export const metadata` in each page.tsx.
export const metadata: Metadata = {
  title: {
    // Shown as-is on the home page; other pages get "Page Name | TIC"
    default: "Tulsa Innovation Collective (concept website)",
    template: "%s | TIC",
  },
  description:
    "Learn about TIC, become a member, or get in touch with Tulsa Innovation Collective. Join us in advancing technology in Tulsa and beyond. Note: TIC does not exist and this is a concept website for a fictional organization.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        {/* Top navigation */}
        <Header />

        {/* Page content band */}
        <div className="flex-1 bg-[#11583FFF]">
          <main className="flex flex-col w-full">
            <ViewTransition>
              {children}
            </ViewTransition>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
