import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
    { label: "About",           href: "/"           },
    { label: "Contribute",      href: "/contribute" },
    { label: "FAQ",             href: "/faq"        },
    { label: "Become a Member", href: "/membership" },
];

// Phase 2 items shown as static
const COMING_SOON = ["Events", "Giving Portal"];

export default function Footer() {
    return (
        <footer className="bg-[#0c241b] text-white px-4 sm:px-6 lg:px-10 pt-8 pb-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Branding */}
                <div className="flex justify-center md:justify-start">
                    <div className="flex flex-col items-center justify-center w-fit text-center md:text-left">
                        <Link href="/">
                            <Image src="/OKTIA Logo Approx.png" alt="OKTIA" className="rounded-xl overflow-hidden" width={180} height={80} priority />
                        </Link>
                        <p className="text-green-200/70 text-sm leading-relaxed mb-1">
                            [Insert slogan here]
                        </p>
                    </div>
                </div>

                {/* Quick links */}
                <div className="flex flex-col items-center">
                    <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-4 md:mb-2">
                        Quick Links
                    </p>
                    <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
                        {QUICK_LINKS.map(({label, href}, index) => (
                            <li key={href} className="flex items-center">
                                <Link
                                    href={href}
                                    className="text-green-200/70 text-sm hover:text-white hover:underline transition-colors"
                                >
                                    {label}
                                </Link>
                                {index < QUICK_LINKS.length - 1 && (
                                    <span className="text-green-200/70 text-xs ml-4 hidden md:block">•</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Coming soon - Phase 2 */}
                <div className="flex flex-col items-center">
                    <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-4 md:mb-2">
                        Coming Soon
                    </p>
                    <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
                        {COMING_SOON.map((item, index) => (
                            <li key={item} className="flex items-center">
                                <span className="text-green-200/50 text-sm">{item}</span>
                                {index < COMING_SOON.length - 1 && (
                                    <span className="text-green-200/50 text-xs ml-4 hidden md:block">•</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-xs text-green-200/50 text-center sm:text-left">
                <p>
                    &copy; {new Date().getFullYear() + " "} Oklahoma Technology and Innovation
                    Association. All rights reserved.
                </p>

                <a
                    href="mailto:info@oktia.org"
                    className="text-green-300 text-xs hover:text-green-200 transition-colors sm:mt-0 mt-2 inline-block"
                >
                    info@oktia.org
                </a>
            </div>
        </footer>
    );
}
