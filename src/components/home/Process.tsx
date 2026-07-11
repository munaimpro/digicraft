'use client';

import { Search, DownloadCloud, Code2, ArrowRight, Terminal } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            step: '01',
            icon: Search,
            title: 'Select Digital Asset',
            description: 'Explore our vetted ecosystem of dashboards, templates, and systems to find the perfect framework fit for your product vision.',
        },
        {
            step: '02',
            icon: DownloadCloud,
            title: 'Instant Download Key',
            description: 'Acquire your asset license and receive instant access to clean, non-bloated, fully optimized repository codes and guides.',
        },
        {
            step: '03',
            icon: Code2,
            title: 'Deploy & Scale Securely',
            description: 'Unpack production code with custom pre-configured structures. Implement your features confidently and launch seamlessly.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-24 border-b border-zinc-900">
            {/* Background decoration lines */}
            <div className="absolute inset-x-0 top-1/3 h-px bg-zinc-900/60" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-xs font-black uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5" />
                        Operational Flow
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        From Procurement to Deployment
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        A simplified, secure engineering process designed to take you from a blank canvas to an optimized production state in seconds.
                    </p>
                </div>

                {/* Horizontal Pipeline Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:border-emerald-500/10 transition-all duration-300 relative"
                            >
                                {/* Arrow connector between steps */}
                                {idx < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-zinc-800 group-hover:text-emerald-500/30 transition-colors duration-300">
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                )}

                                {/* Step indicator */}
                                <span className="absolute top-4 right-5 font-mono text-xs font-black text-zinc-800 group-hover:text-emerald-500/10 transition-colors duration-300 select-none">
                                    STEP {item.step}
                                </span>

                                {/* Circular Icon Container */}
                                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-900 bg-zinc-900/50 text-zinc-400 group-hover:border-emerald-500/20 group-hover:bg-zinc-900 group-hover:text-emerald-400 transition-all duration-300 shadow shadow-black">
                                    <Icon className="h-5 w-5" />
                                    {/* Glowing background halo */}
                                    <div className="absolute inset-0 -z-10 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/5 blur-md transition-all duration-300" />
                                </div>

                                {/* Title & Desc */}
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Process;