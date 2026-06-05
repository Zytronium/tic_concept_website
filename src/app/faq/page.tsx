"use client";

import {useState} from "react";

export default function FAQPage() {
    const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

    const questionsAndAnswers = {
        "How are TIC and Tulsa Innovation Labs different?": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
        "How can I become a member of TIC?": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
        "How can I get involved with TIC without becoming a member?": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
        "How do members of TIC contribute to the advancement of technology and innovation in Tulsa?": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
        "Does TIC ever operate in areas outside of Tulsa as well?": "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
        "Is TIC a real organization?": "Actually, no. This is a mock website for a fictional organization, made to showcase what similar clients will get if they need a website from this website's designer. For more information, visit webworks.zytronium.dev.",
        "Why are all the answers Latin gibberish?": "Lorem ipsum is a common placeholder text used to demonstrate the visual form of a document or a typeface without relying on meaningful content. If you read the answer to the above question, you'll know why it's used here.",
}

    const toggleQuestion = (question: string) => {
        setExpandedQuestions(prev => {
            const next = new Set(prev);
            if (next.has(question)) {
                next.delete(question);
            } else {
                next.add(question);
            }
            return next;
        });
    };
    return (
        <div className="flex flex-col flex-1 items-center justify-center text-white section-container">
            <main className="flex flex-1 w-full flex-col items-center justify-between py-8 md:py-16 px-4 md:px-8">
                {/* FAQ section */}
                <div className="w-full max-w-3xl space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                    {Object.entries(questionsAndAnswers).map(([question, answer]) => {
                        const isExpanded = expandedQuestions.has(question);
                        return (
                            <div
                                key={question}
                                className="bg-slate-200/80 backdrop-blur-sm border border-slate-300/40 rounded-xl overflow-hidden transition-all duration-300 hover:bg-slate-200/90 hover:border-slate-300/60 hover:shadow-lg hover:shadow-slate-400/20"
                            >
                                <button
                                    onClick={() => toggleQuestion(question)}
                                    className="w-full px-6 py-5 cursor-pointer text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded-xl transition-all duration-200 hover:bg-white/30"
                                >
                                    <span
                                        className="font-semibold text-base md:text-lg text-slate-800">{question}</span>
                                    <svg
                                        className={`w-6 h-6 shrink-0 transition-all duration-300 text-slate-600 ${isExpanded ? 'rotate-180 text-slate-700' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                {isExpanded && (
                                    <div
                                        className="px-6 pb-5 pt-1 text-sm md:text-base text-slate-700 bg-linear-to-b from-white/40 to-transparent animate-in fade-in slide-in-from-top-2 duration-300 border-t border-slate-300/30">
                                    {answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
