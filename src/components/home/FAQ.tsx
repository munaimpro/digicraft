'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What is included in the commercial developer license?',
            answer: 'All our digital assets include a standard developer commercial license. This permits you to use the assets in an unlimited number of personal or client products, SaaS applications, or websites. You are only prohibited from reselling or distributing the source files directly as-is on competitive marketplaces.',
        },
        {
            question: 'How do I download my purchased files after check out?',
            answer: 'Once you acquire an asset, the direct secure download URL becomes instantly active in your order screen, as well as saved in your profile dashboard. You can redownload your purchase at any time, with all future incremental updates included free of charge.',
        },
        {
            question: 'Are there any hidden recurring subscription costs?',
            answer: 'No. All assets on DigiCraft are available for a simple, single, one-time flat fee. There are no subscriptions, recurring retainers, or hidden billing pipelines. Once you buy, the assets are yours to use indefinitely.',
        },
        {
            question: 'Can I request a refund if an asset does not fit my stack?',
            answer: 'Yes. We offer a 100% satisfaction guarantee. If an asset is found to contain terminal compile errors, broken dependencies, or does not match the specifications described on its page, contact support within 14 days for a full, hassle-free refund.',
        },
    ];

    return (
        <section className="bg-zinc-950 py-16 sm:py-20 border-b border-zinc-900 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Title block */}
                <div className="text-center space-y-3 mb-12">
                    <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <HelpCircle className="h-4 w-4" />
                        <span>Faq Catalog</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-zinc-450 text-sm max-w-xl mx-auto">
                        Find answers regarding digital downloads, commercial usages, licensing safety, and support timelines.
                    </p>
                </div>

                {/* FAQ list */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-xl border overflow-hidden transition-all duration-300 ${isOpen
                                        ? 'border-emerald-500/20 bg-zinc-900/20 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.04)]'
                                        : 'border-zinc-900 bg-zinc-900/10 hover:border-zinc-800'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white hover:bg-zinc-900/20 transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    {isOpen ? (
                                        <ChevronUp className="h-4 w-4 text-emerald-400" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4 text-zinc-500" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="border-t border-zinc-900 p-5 bg-zinc-950/40">
                                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;