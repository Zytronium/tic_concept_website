import { Check } from 'lucide-react';

export default function MembershipPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center text-white section-container">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-8 md:py-16 px-4 md:px-8">
                {/* Membership section */}
                <div className="w-full max-w-6xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Membership Levels</h1>
                    <p className="text-lg md:text-xl text-center text-gray-300 mb-12">
                        Join the Tulsa Innovation Collective and become part of our vibrant community
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {/* Supporter Tier */}
                        <div
                            className="flex flex-col p-6 rounded-2xl shadow-lg bg-linear-to-br from-white to-slate-100 border-2 border-slate-200 hover:shadow-xl transition-shadow">
                            <h3 className="text-[#11583F] text-2xl font-bold text-center mb-3">Supporter</h3>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-[#6E1338]">$25</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <ul className="text-gray-700 text-sm space-y-3 flex-1">
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Access to community events</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Monthly newsletter</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Member directory listing</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Online community forum access</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contributor Tier */}
                        <div
                            className="flex flex-col p-6 rounded-2xl shadow-lg bg-linear-to-br from-white to-slate-100 border-2 border-[#11583F] hover:shadow-xl transition-shadow">
                            <h3 className="text-[#11583F] text-2xl font-bold text-center mb-3">Contributor</h3>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-[#6E1338]">$75</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <ul className="text-gray-700 text-sm space-y-3 flex-1">
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>All Supporter benefits</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>15 hours/month workspace access</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Workshop discounts (20%)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Quarterly networking events</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Resource library access</span>
                                </li>
                            </ul>
                        </div>

                        {/* Innovator Tier */}
                        <div
                            className="flex flex-col p-6 rounded-2xl shadow-lg bg-linear-to-br from-white to-slate-100 border-2 border-[#6E1338] hover:shadow-xl transition-shadow relative">
                            <div
                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#6E1338] text-white px-4 py-1 rounded-full text-xs font-semibold">
                                POPULAR
                            </div>
                            <h3 className="text-[#11583F] text-2xl font-bold text-center mb-3">Innovator</h3>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-[#6E1338]">$150</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <ul className="text-gray-700 text-sm space-y-3 flex-1">
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>All Contributor benefits</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>60 hours/month workspace access</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Free workshop attendance</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Meeting room booking (4hrs/month)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Mentorship program access</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Priority event registration</span>
                                </li>
                            </ul>
                        </div>

                        {/* Visionary Tier */}
                        <div
                            className="flex flex-col p-6 rounded-2xl shadow-lg bg-linear-to-br from-amber-50 to-yellow-100 border-2 border-amber-400 hover:shadow-xl transition-shadow">
                            <h3 className="text-[#11583F] text-2xl font-bold text-center mb-3">Visionary</h3>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-[#6E1338]">$300</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <ul className="text-gray-700 text-sm space-y-3 flex-1">
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>All Innovator benefits</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Unlimited workspace access</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Dedicated desk space</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Meeting room booking (12hrs/month)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Executive networking events</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Advisory board consideration</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="text-[#11583F] mr-2 shrink-0" size={20}/>
                                    <span>Featured member spotlight</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-lg mb-6">Ready to join our community of innovators?</p>
                        <a
                            href="/contribute#contact"
                            className="inline-block px-8 py-3 bg-[#6E1338] text-white font-semibold rounded-lg hover:bg-[#8B1A47] transition-colors shadow-lg"
                        >
                            Contact Us to Join
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
