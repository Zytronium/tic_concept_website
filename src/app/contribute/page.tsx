import {Mic, Handshake, HandHeart, Compass, Building2, Lightbulb, LucideIcon, Mail, MapPin} from 'lucide-react';

type ContributeWay = {
    icon: LucideIcon;
    title: string;
    description: string;
    cta: string;
    href: string;
};

type Event = {
    date: string;
    month: string;
    title: string;
    type: string;
    location: string;
    description: string;
};

const CONTRIBUTE_WAYS: ContributeWay[] = [
    {
        icon: Mic,
        title: "Speak or Present",
        description: "Share your expertise with Tulsa's tech community. We're always looking for speakers for events, workshops, and panels; from lightning talks to deep dives.",
        cta: "Submit a Talk",
        href: "#contact",
    },
    {
        icon: Handshake,
        title: "Sponsor TIC",
        description: "Help fuel Tulsa's tech future. Sponsorships support events, scholarships, and community programs, and put your brand in front of the people building tomorrow.",
        cta: "Explore Sponsorship",
        href: "#contact",
    },
    {
        icon: HandHeart,
        title: "Volunteer",
        description: "TIC runs on community energy. Help organize events, lead committees, manage outreach, or just show up and pitch in. Every contribution moves the needle.",
        cta: "Get Involved",
        href: "#contact",
    },
    {
        icon: Compass,
        title: "Mentor",
        description: "Connect with early-career developers, designers, and founders navigating the Tulsa tech scene. A little guidance goes a long way in a growing city.",
        cta: "Become a Mentor",
        href: "#contact",
    },
    {
        icon: Building2,
        title: "Partner With Us",
        description: "Organizations, universities, and companies can formalize their relationship with TIC through a partnership. Let's build something bigger together.",
        cta: "Start a Conversation",
        href: "#contact",
    },
    {
        icon: Lightbulb,
        title: "Propose an Initiative",
        description: "Have an idea for a program, event series, or community project? TIC gives members the platform and support to turn good ideas into real impact.",
        cta: "Share Your Idea",
        href: "#contact",
    },
];

const EVENTS: Event[] = [
    {
        date: "14",
        month: "JUL",
        title: "Tulsa Tech Talks: AI in the Real World",
        type: "Speaker Event",
        location: "36 Degrees North, Tulsa",
        description: "Three local practitioners share how they're actually using AI in their products and workflows.",
    },
    {
        date: "22",
        month: "JUL",
        title: "Founder Office Hours",
        type: "Workshop",
        location: "Virtual",
        description: "Monthly open office hours for early-stage founders. Bring your questions, your pitch, or your problems. TIC mentors are here to help.",
    },
    {
        date: "08",
        month: "AUG",
        title: "Green Country Dev Mixer",
        type: "Networking",
        location: "Chimera Arts & Makerspace, Tulsa",
        description: "The quarterly in-person mixer for Tulsa's developer community. Good people, good conversation, and a few surprises.",
    },
];

const CONTACT_OPTIONS = [
    "I want to become a member",
    "I want to speak or present",
    "I'm interested in sponsoring",
    "I want to volunteer",
    "I want to mentor",
    "I want to propose a partnership",
    "I have an idea or initiative",
    "Something else",
];

export default function ContributePage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center text-white">
            <main className="flex flex-1 w-full flex-col items-center justify-between">

                {/* ── Hero ── */}
                <section className="relative w-full flex items-center justify-center pt-10 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 overflow-hidden bg-[#08583C]">
                    {/* dot texture */}
                    <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]"/>
                    {/* bottom fade to white */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"/>
                    <div className="relative section-container flex flex-col items-center gap-5 text-center">
                        <p className="text-[#a8dfca] text-sm font-semibold tracking-[0.2em] uppercase">Get Involved</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-sm max-w-4xl">
                            Be Part of What&apos;s Next
                        </h1>
                        <div className="w-64 h-[3px] rounded-full" style={{background: 'linear-gradient(to right, transparent, #6E1338cc, transparent)'}}/>
                        <p className="text-base md:text-lg text-white/80 italic max-w-2xl leading-relaxed" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>
                            TIC is only as strong as the people who show up. Here&apos;s how you can shape Tulsa&apos;s tech future.
                        </p>
                    </div>
                </section>

                {/* ── Membership CTA Banner ── */}
                <section className="w-full bg-[#f5faf7] border-y border-[#11583F]/15 px-4 md:px-8 py-8 md:py-10">
                    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col gap-1 text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#08583C] tracking-tight">
                                Ready to join the Collective?
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base max-w-lg">
                                Membership gets you access to events, resources, the TIC network, and a real seat at the table. View plans and pricing on our membership page.
                            </p>
                        </div>
                        <a
                            href="/membership"
                            className="flex-shrink-0 px-8 py-3 bg-[#11583F] hover:bg-[#104f37] active:bg-[#0f402c] text-white font-bold text-base rounded-full transition-all duration-150 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
                        >
                            View Membership Plans →
                        </a>
                    </div>
                </section>

                {/* ── Ways to Contribute ── */}
                <section className="bg-white text-black py-10 md:py-16 px-4 md:px-8 w-full">
                    <div className="section-container">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-2 tracking-tight">
                            Ways to Contribute
                        </h2>
                        <p className="text-gray-500 mb-8 md:mb-10 max-w-2xl">
                            Membership isn&apos;t the only way in. Whether you have time, expertise, resources, or ideas, there&apos;s a place for you here.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CONTRIBUTE_WAYS.map((way) => {
                                const IconComponent = way.icon;
                                return (
                                    <div
                                        key={way.title}
                                        className="group flex flex-col gap-3 p-6 rounded-xl border border-[#11583F]/15 bg-white hover:border-[#11583F]/40 hover:shadow-md transition-all duration-200"
                                    >
                                        <IconComponent className="w-8 h-8 text-[#11583F]"/>
                                        <h3 className="text-lg font-bold text-[#08583C] tracking-tight">{way.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed flex-1">{way.description}</p>
                                        <a
                                            href={way.href}
                                            className="mt-1 self-start text-sm font-semibold text-[#11583F] hover:text-[#08583C] underline underline-offset-2 decoration-[#11583F]/30 hover:decoration-[#08583C] transition-colors"
                                        >
                                            {way.cta} →
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Upcoming Events ── */}
                <section className="bg-[#f5faf7] text-black py-10 md:py-16 px-4 md:px-8 w-full">
                    <div className="section-container">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-2 tracking-tight">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-500 mb-8 md:mb-10 max-w-2xl">
                            The best way to get involved is to show up. Here&apos;s what&apos;s coming up; all are open to members and prospective members alike.
                        </p>
                        <div className="flex flex-col gap-4">
                            {EVENTS.map((event) => (
                                <div
                                    key={event.title}
                                    className="flex flex-col sm:flex-row gap-5 p-6 rounded-xl bg-white border border-[#11583F]/15 hover:border-[#11583F]/35 hover:shadow-md transition-all duration-200"
                                >
                                    {/* Date badge */}
                                    <div className="shrink-0 w-16 h-16 rounded-lg bg-[#08583C] flex flex-col items-center justify-center text-white shadow-sm">
                                        <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">{event.month}</span>
                                        <span className="text-2xl font-bold leading-none">{event.date}</span>
                                    </div>
                                    {/* Content */}
                                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                            <h3 className="text-base font-bold text-gray-900 tracking-tight">{event.title}</h3>
                                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#11583F]/10 text-[#08583C]">{event.type}</span>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium">{event.location}</p>
                                        <p className="text-sm text-gray-500 leading-relaxed mt-1">{event.description}</p>
                                    </div>
                                    <div className="flex items-center flex-shrink-0">
                                        <a
                                            href="#contact"
                                            className="px-5 py-2 text-sm font-bold text-[#11583F] border border-[#11583F]/30 rounded-full hover:bg-[#11583F] hover:text-white transition-all duration-150 whitespace-nowrap"
                                        >
                                            RSVP
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Contact / Get In Touch ── */}
                <section id="contact" className="bg-white text-black py-10 md:py-16 px-4 md:px-8 w-full">
                    <div className="section-container">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                            {/* Left: copy */}
                            <div className="flex-1 min-w-0">
                                <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-4 tracking-tight">
                                    Get In Touch
                                </h2>
                                <div className="flex gap-4 mb-6">
                                    <div className="w-[3px] flex-shrink-0 rounded-full bg-[#11583F] self-stretch"/>
                                    <p className="text-gray-600 leading-relaxed">
                                        Not sure where to start, or want to talk before committing? Drop us a note. A real human on the TIC team will follow up, typically within two business days.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-[#11583F]"/>
                                        <span>hello@example.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-[#11583F]"/>
                                        <span>Tulsa, Oklahoma</span>
                                    </div>
                                </div>
                            </div>
                            {/* Right: form */}
                            <div className="flex-1 min-w-0 w-full">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#11583F] focus:ring-2 focus:ring-[#11583F]/20 outline-none text-gray-800 text-sm transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#11583F] focus:ring-2 focus:ring-[#11583F]/20 outline-none text-gray-800 text-sm transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">I want to...</label>
                                        <select className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#11583F] focus:ring-2 focus:ring-[#11583F]/20 outline-none text-gray-800 text-sm bg-white transition-all appearance-none">
                                            <option value="">Select an option</option>
                                            {CONTACT_OPTIONS.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
                                        <textarea
                                            placeholder="Tell us a bit about yourself and what you have in mind..."
                                            rows={4}
                                            className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#11583F] focus:ring-2 focus:ring-[#11583F]/20 outline-none text-gray-800 text-sm resize-none transition-all"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="self-start px-8 py-3 bg-[#11583F] hover:bg-[#104f37] active:bg-[#0f402c] text-white font-bold text-base rounded-full transition-all duration-150 shadow-md hover:shadow-lg active:scale-95"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FAQ Call to Action ── */}
                <section
                    className="bg-white text-black py-10 md:py-16 px-4 md:px-8 w-full border-t border-[#11583F]/10">
                    <div className="section-container flex flex-col items-center text-center gap-5">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold tracking-tight">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-500 max-w-2xl leading-relaxed">
                            Check out our frequently asked questions for answers about membership, events, sponsorship
                            opportunities, and more.
                        </p>
                        <a
                            href="/faq"
                            className="px-8 py-3 bg-[#11583F] hover:bg-[#104f37] active:bg-[#0f402c] text-white font-bold text-base rounded-full transition-all duration-150 shadow-md hover:shadow-lg active:scale-95"
                        >
                            Visit FAQ →
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}