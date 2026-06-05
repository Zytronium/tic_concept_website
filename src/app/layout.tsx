import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransition as ViewTransition } from "react";

// -------- Metadata --------
// Override per-page with `export const metadata` in each page.tsx.
export const metadata: Metadata = {
  title: {
    // Shown as-is on the home page; other pages get "Page Name | OKTIA"
    default: "Oklahoma Technology & Innovation Association",
    template: "%s | OKTIA",
  },
  description:
    "Learn about OKTIA, become a member, or get in touch with Oklahoma's technology and innovation association.",
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
