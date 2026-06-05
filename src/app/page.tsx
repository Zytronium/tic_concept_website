import ProfileCard from "@/components/ProfileCard";

type BoardMember = {
    pfp_src: string;
    name: string;
    role: string;
    description: string;
};

const BOARD_MEMBERS: BoardMember[] = [
    {
        pfp_src: "/placeholder_profile.png",
        name: "John Smith",
        role: "President",
        description: "Dedicated to advancing technology initiatives throughout the Tulsa metro area."
    },
    {
        pfp_src: "/placeholder_profile.png",
        name: "Jane Doe",
        role: "Vice President",
        description: "Passionate about fostering innovation and collaboration within the tech community."
    },
    {
        pfp_src: "/placeholder_profile.png",
        name: "Michael Johnson",
        role: "Treasurer",
        description: "Experienced financial professional committed to fiscal responsibility and organizational growth."
    },
    {
        pfp_src: "/placeholder_profile.png",
        name: "Sarah Williams",
        role: "Secretary",
        description: "Detail-oriented leader focused on maintaining transparency and effective communication."
    },
    {
        pfp_src: "/placeholder_profile.png",
        name: "David Brown",
        role: "Board Member",
        description: "Technology advocate with years of experience in software development and innovation."
    },
    {
        pfp_src: "/placeholder_profile.png",
        name: "Emily Davis",
        role: "Board Member",
        description: "Community organizer dedicated to building bridges between technology and education."
    }
];

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center text-white">
            <main className="flex flex-1 w-full flex-col items-center justify-between">
                {/* Hero */}
                <section
                    className="relative w-full min-h-[60vh] flex items-center justify-center pt-6 pb-12 md:pt-12 md:pb-24 px-4 md:px-8"
                    style={{
                        backgroundImage: 'url(/stock-photo.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#11583F]/90 via-[#0e4a34]/60 to-white"/>
                    {/* subtle dots texture overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.075] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]"/>
                    <div className="relative section-container flex flex-col items-center gap-6 text-center">

                        {/* Main heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-sm max-w-4xl">
                            Tulsa Innovation Collective
                        </h1>

                        {/* Divider */}
                        <div className="w-48 h-0.5 bg-[#6E1338]/60 rounded-full"/>

                        {/* Mission statement */}
                        <p className="text-base md:text-lg gray-100 italic max-w-2xl leading-relaxed">
                            Connecting Tulsa's tech pioneers to drive innovation, community, and growth
                        </p>
                    </div>
                </section>

                {/* About and Who We Are */}
                <section className="bg-white text-black py-6 md:py-10 px-4 md:px-8 w-full">
                    <div className="section-container">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-4 tracking-tight ml-2">
                            About TIC
                        </h2>
                        {/* Brief description of the organization */}
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                            The Tulsa Innovation Collective exists to unite technologists, entrepreneurs, and
                            forward-thinking organizations across the Tulsa metro, and to encourage technological
                            innovation to improve Oklahoma&apos;s future. We foster collaboration, amplify
                            emerging talent, and champion the ideas that will define Oklahoma&apos;s technological
                            and igital future.
                        </p>
                    </div>
                    <div className="section-container flex flex-col items-end">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-4 tracking-tight text-right mr-2">
                            Who We Are
                        </h2>
                        {/* Description of what kind of people are in the organization */}
                        <p className="text-gray-600 leading-relaxed max-w-3xl text-right mb-2">
                            The Tulsa Innovation Collective is a member-driven organization built by and for the
                            technologists, builders, and innovators who call Tulsa home. We bring together professionals
                            from across the tech spectrum, from software engineers and data scientists to startup
                            founders and enterprise leaders, united by a shared belief that Tulsa&apos;s best days
                            are still ahead.
                        </p>
                        <p className="text-gray-600 leading-relaxed max-w-3xl text-right mb-2">
                            Founded in the spirit of Green Country&apos;s entrepreneurial grit, TIC exists to close the
                            gap between ambition and opportunity. We create the connections, resources, and platforms
                            that help Tulsa&apos;s tech community grow faster, collaborate deeper, and compete on a
                            national stage.
                        </p>
                        <p className="text-gray-600 leading-relaxed max-w-3xl text-right mb-2">
                            We&apos;re not a networking club or a trade lobby. We&apos;re a collective,
                            which means every member has a voice, every idea has a seat at the table, and the work we
                            do reflects the community we serve.
                        </p>
                        <p className="text-gray-600 leading-relaxed max-w-3xl text-right">
                            Whether you&apos;re launching your first startup, scaling your team, or looking to
                            plug into a city that&apos;s genuinely on the rise, TIC is where that journey starts.
                        </p>
                        {/* Section listing Board of directors and profiles */}
                        <div className="w-full mt-8 md:mt-12">
                            <h3 className="text-2xl md:text-3xl text-[#11583F] font-bold mb-6 tracking-tight text-center">
                                Board of Directors
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {BOARD_MEMBERS.map((member) => (
                                    <ProfileCard
                                        key={member.name}
                                        pfp_src={member.pfp_src}
                                        name={member.name}
                                        role={member.role}
                                        description={member.description}
                                    />
                                ))}
                            </div>
                            {/* Button for next page: contribute */}
                            <div className="flex flex-col md:flex-row justify-center mt-12 md:mt-16 mb-[-48] gap-4">
                                <a href="/contribute" className="px-8 py-3 bg-[#11583F] hover:bg-[#104f37] active:bg-[#0f402c] text-white font-bold text-lg rounded-full transition-all duration-150 shadow-md hover:shadow-lg active:scale-95"
                                >
                                    Learn how to contribute
                                </a>
                                <a href="/faq" className="px-8 py-3 bg-[#11583F] hover:bg-[#104f37] active:bg-[#0f402c] text-white font-bold text-lg rounded-full transition-all duration-150 shadow-md hover:shadow-lg active:scale-95"
                                >
                                    Visit FAQ
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
