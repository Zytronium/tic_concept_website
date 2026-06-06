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
        <div
            className="flex flex-col flex-1 items-center justify-center text-white"
            style={{
                backgroundImage: `
                    linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.2) 50%, rgba(15, 23, 42, 0.4) 100%),
                    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='1'%3E%3Cline x1='0' y1='60' x2='60' y2='0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60'/%3E%3C/g%3E%3C/svg%3E")
                `
            }}
        >
        <main className="flex flex-1 w-full flex-col section-container items-center justify-between py-12 md:py-20 px-4 md:px-8">
                {/* FAQ section */}
                <div
                    className="w-full max-w-3xl space-y-4 bg-slate-800/30 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-900/50 border border-slate-700/30">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 bg-linear-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-lg">Frequently
                        Asked Questions</h1>
                    {Object.entries(questionsAndAnswers).map(([question, answer], index) => {
                        const isExpanded = expandedQuestions.has(question);
                        return (
                            <div
                                key={question}
                                className="bg-linear-to-br from-slate-100/90 to-slate-200/85 backdrop-blur-md border border-slate-300/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-linear-to-br hover:from-slate-50/95 hover:to-slate-100/90 hover:border-slate-300/70 hover:shadow-xl hover:shadow-slate-500/25 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-4"
                                style={{animationDelay: `${index * 50}ms`, animationFillMode: 'backwards'}}
                            >
                                <button
                                    onClick={() => toggleQuestion(question)}
                                    className="w-full px-6 md:px-8 py-6 cursor-pointer text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-slate-400/60 focus:ring-offset-2 focus:ring-offset-slate-100/50 rounded-2xl transition-all duration-300 hover:bg-white/40 group"
                                >
                                    <span
                                        className="font-semibold text-base md:text-lg text-slate-800 group-hover:text-slate-900 transition-colors duration-200">{question}</span>
                                    <svg
                                        className={`w-6 h-6 md:w-7 md:h-7 shrink-0 transition-all duration-300 text-slate-600 group-hover:text-slate-700 ${isExpanded ? 'rotate-180 text-slate-800' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                {isExpanded && (
                                    <div
                                        className="px-6 md:px-8 pb-6 pt-2 text-sm md:text-base leading-relaxed text-slate-700 bg-linear-to-b from-white/50 via-white/30 to-transparent animate-in fade-in slide-in-from-top-3 duration-300 border-t border-slate-300/40">
                                    {answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            {/* Contact section */}
            <div
                className="w-full max-w-3xl mt-12 md:mt-16 bg-slate-800/30 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-900/50 border border-slate-700/30">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 bg-linear-to-r from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                    Still Have Questions?
                </h2>
                <div className="text-center">
                    <p className="text-slate-200 text-base md:text-lg mb-6 leading-relaxed">
                        Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to us directly.
                    </p>
                    <a
                        href="mailto:tic@example.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-slate-100 to-slate-200 text-slate-800 font-semibold rounded-xl hover:from-white hover:to-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400/60 focus:ring-offset-2 focus:ring-offset-slate-800/50"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Email Us Your Question
                    </a>
                </div>
            </div>
        </main>
        </div>
    );
}
