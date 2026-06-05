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
        description: "Dedicated to advancing technology initiatives across Oklahoma."
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
                        backgroundImage: 'url(/stock_photo.png)',
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
                            Oklahoma Technology &amp; Innovation Association
                        </h1>

                        {/* Divider */}
                        <div className="w-48 h-0.5 bg-[#6E1338]/60 rounded-full"/>

                        {/* Mission statement */}
                        <p className="text-base md:text-lg gray-100 italic max-w-xl leading-relaxed">
                            [Mission statement goes here]
                        </p>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="bg-white text-black py-6 md:py-10 px-4 md:px-8 w-full">
                    <div className="section-container">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-4 tracking-tight ml-2">
                            About OKTIA
                        </h2>
                        {/* Brief description of the organization */}
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
                            pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
                            aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
                            aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                    </div>
                    <div className="section-container flex flex-col items-end">
                        <h2 className="text-3xl md:text-4xl text-[#11583F] font-bold mb-4 tracking-tight text-right mr-2">
                            Who We Are
                        </h2>
                        {/* Description of what kind of people are in the organization */}
                        <p className="text-gray-600 leading-relaxed max-w-3xl text-right">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex
                            sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi
                            pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna
                            tempor pulvinar vivamus fringilla lacus nec metus.
                        </p>
                        {/* Section listing Board of directors and profiles */}
                        <div className="w-full mt-8 md:mt-12">
                            <h3 className="text-2xl md:text-3xl text-[#11583F] font-bold mb-6 tracking-tight text-center">
                                Board of Directors
                            </h3>
                            <p className="text-xs font-gray-500 text-center mt-[-25] mb-6">Note: These are AI-generated placeholders.</p>
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
