import Image from "next/image";

interface ProfileCardProps {
    pfp_src: string;
    name: string;
    role: string;
    description: string;
}

export default function ProfileCard({pfp_src, name, role, description}: ProfileCardProps) {
    return (
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-br from-white to-slate-50 border-1 border-slate-100">
            <div className="mb-4">
                <Image
                    src={pfp_src}
                    alt={name}
                    width={120}
                    height={120}
                    className="rounded-full"
                />
            </div>
            <h3 className="text-[#11583F] text-xl font-bold text-center mb-2">
                {name}
            </h3>
            <p className="text-[#6E1338] text-sm font-semibold text-center mb-3">
                {role}
            </p>
            <p className="text-gray-700 text-xs text-center">
                {description}
            </p>
        </div>
    );
}
