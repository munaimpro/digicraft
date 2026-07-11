'use client';

import React from 'react';
import { Cpu, ShieldCheck, Gauge, Layers, Terminal } from 'lucide-react';

const Standards = () => {
    const standards = [
        {
            icon: Cpu,
            title: 'Production-Vetted Tech Stack',
            description: 'Zero bloated dependencies. Every template is hand-crafted with Tailwind CSS, Next.js App Router, TypeScript, and modern state-management systems.',
            gridSpan: 'md:col-span-2',
            badge: 'Architecture'
        },
        {
            icon: ShieldCheck,
            title: 'Strict Security Guardrails',
            description: 'Fully prepared with comprehensive ESLint rules, environment config placeholders, and pre-configured CORS safety.',
            gridSpan: 'md:col-span-1',
            badge: 'Security'
        },
        {
            icon: Gauge,
            title: 'Optimized Core Web Vitals',
            description: 'Lightweight static bundle footprints, optimized responsive images, dynamic lazy loading, and extreme page rendering speeds right out of the box.',
            gridSpan: 'md:col-span-1',
            badge: 'Performance'
        },
        {
            icon: Layers,
            title: 'Structured System Patterns',
            description: 'Adherence to scalable folder guidelines (e.g. unified shared folders, modular routes, type declarations) allowing your team to onboard instantly and scale with peace of mind.',
            gridSpan: 'md:col-span-2',
            badge: 'Scalability'
        }
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-24 border-b border-zinc-900">
            {/* Background Subtle Spotlight Gradient */}
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-xs font-black uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5" />
                        Vetted Quality Assurance
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Built to Uncompromising Standards
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        We bypass generic mock patterns in favor of clean production-ready code blocks, type-safe structures, and battle-tested layouts.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {standards.map((std, idx) => {
                        const Icon = std.icon;
                        return (
                            <div
                                key={idx}
                                className={`group relative rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.06)] ${std.gridSpan}`}
                            >
                                {/* Accent Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative space-y-4 z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex rounded-lg bg-zinc-950 p-3 border border-zinc-900 text-zinc-400 group-hover:border-emerald-500/20 group-hover:bg-zinc-900 group-hover:text-emerald-400 transition-all duration-300">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-zinc-500 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-900/80 group-hover:border-emerald-500/10 group-hover:text-emerald-400/80 transition-all duration-300">
                                            {std.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                            {std.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                            {std.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle bottom border line animation */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:w-full transition-all duration-500" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Standards;