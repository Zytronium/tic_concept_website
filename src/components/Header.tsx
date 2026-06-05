"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_TABS = [
    { label: "About",      href: "/"          },
    { label: "Contribute", href: "/contribute" },
    { label: "FAQ",        href: "/faq"        },
] as const;

function useActiveTab(href: string) {
    const pathname = usePathname();
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function OktiaLogo() {
    return (
        <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/OKTIA Logo Approx Transparent BG.png" alt="OKTIA" width={140} height={60} className="w-auto h-12 md:h-16 lg:h-20" priority />
        </Link>
    );
}

function FolderTab({ label, href }: { label: string; href: string }) {
    const active = useActiveTab(href);

    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className={[
                // Base tab shape
                "relative inline-block h-9 top-[10px] z-[2]",
                "px-3 cursor-pointer select-none",
                "font-extrabold text-sm tracking-wide",
                "transition-colors duration-200",
                // Skewed before/after wings via box-shadow trick won't work in Tailwind,
                // so we use a CSS custom-property approach via style — see pseudoElements below
                active
                    ? "text-[#2c9c42] bg-white z-[3]"
                    : "text-[#4b5249] bg-[#e4e8e3] hover:text-[#1a5c28] hover:bg-white hover:z-[3]",
                // Rounded top corners
                "rounded-t-lg",
                // The skewed wings are rendered via ::before and ::after in the global CSS below
                "folder-tab",
                active && "folder-tab--active",
            ].join(" ")}
        >
      <span className="relative z-[3] leading-9 whitespace-nowrap">
        {label.toUpperCase()}
      </span>
        </Link>
    );
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <style>{`
        .folder-tab::before,
        .folder-tab::after {
          content: "";
          position: absolute;
          top: 0;
          height: 36px;
          width: 30px;
          border-radius: 10px 10px 0 0;
          background-color: #e4e8e3;
          z-index: -1;
          transition: background-color 0.2s;
        }
        .folder-tab::before {
          left: -16px;
          transform: skewX(-20deg);
        }
        .folder-tab::after {
          right: -16px;
          transform: skewX(20deg);
        }
        .folder-tab:hover::before,
        .folder-tab:hover::after,
        .folder-tab--active::before,
        .folder-tab--active::after {
          background-color: #ffffff;
        }

        /* Slide-in animation when a tab becomes active */
        @keyframes tabIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .folder-tab--active {
          animation: tabIn 0.18s ease-out forwards;
        }
      `}</style>

            <header className="bg-[#F2F3F7] px-4 md:px-6 lg:px-10 pt-4 md:pt-5 pb-0">
                <div className="max-w-7xl mx-auto flex items-center md:items-end justify-between gap-4 md:gap-6">

                    {/* Left: logo */}
                    <div className="pb-2 md:pb-3">
                        <OktiaLogo />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center mb-2">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-[#1a5c28] focus:outline-none transition-transform active:scale-95"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Right: Join button & tabs (Desktop only) */}
                    <div className="hidden md:flex flex-col items-end gap-3">

                        <Link
                            href="/membership"
                            className={[
                                "px-8 py-2.5 rounded-full",
                                "bg-[#11583FFF] hover:bg-[#104f37] active:bg-[#0f402c]",
                                "text-white font-extrabold text-base tracking-wide",
                                "transition-all duration-150 shadow-sm hover:shadow-md active:scale-95",
                            ].join(" ")}
                        >
                            JOIN OKTIA!
                        </Link>

                        {/* Tab strip */}
                        <nav
                            aria-label="Main navigation"
                            className="flex items-end gap-8 lg:gap-12 overflow-visible"
                        >
                            {NAV_TABS.map((tab) => (
                                <FolderTab key={tab.href} {...tab} />
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-6 px-6 shadow-xl absolute left-0 right-0 z-[100] animate-in fade-in slide-in-from-top-4 duration-200">
                        <nav className="flex flex-col gap-5">
                            {NAV_TABS.map((tab) => (
                                <Link
                                    key={tab.href}
                                    href={tab.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[#4b5249] font-bold text-xl hover:text-[#1a5c28] transition-colors"
                                >
                                    {tab.label}
                                </Link>
                            ))}
                            <Link
                                href="/membership"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-4 px-6 py-4 bg-[#1a5c28] text-white text-center font-extrabold text-lg rounded-full shadow-md active:scale-[0.98] transition-all"
                            >
                                JOIN OKTIA!
                            </Link>
                        </nav>
                    </div>
                )}

                {/* White bar that the tabs sit above */}
                <div className="h-2.5 bg-[#F2F3F7] mt-0 -mx-4 md:-mx-6 lg:-mx-10" />
            </header>
        </>
    );
}