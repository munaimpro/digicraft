'use client';

import React from 'react';
import Link from 'next/link';
import { Layout, Paintbrush, BookOpen, HelpCircle, Eye, Star, Compass } from 'lucide-react';

const Categories = () => {
    const categories = [
        {
            name: 'Template',
            description: 'Next.js admin dashboards, Stripe boilerplates, and SaaS landing systems.',
            icon: Layout,
            count: '14 items',
            color: 'from-emerald-500/10 to-zinc-950/0',
            hoverColor: 'group-hover:text-emerald-400',
        },
        {
            name: 'UI Kit',
            description: 'Standardized Figma templates, auto-layout kits, and responsive React modules.',
            icon: Paintbrush,
            count: '9 items',
            color: 'from-emerald-400/10 to-zinc-950/0',
            hoverColor: 'group-hover:text-emerald-400',
        },
        {
            name: 'E-book',
            description: 'Advanced development interview prep books, SaaS guides, and growth playbooks.',
            icon: BookOpen,
            count: '11 items',
            color: 'from-emerald-300/10 to-zinc-950/0',
            hoverColor: 'group-hover:text-emerald-400',
        },
        {
            name: 'Icon Pack',
            description: 'Minimalist scalable vector icon sets formatted for SVG, Figma, and fonts.',
            icon: HelpCircle,
            count: '6 items',
            color: 'from-emerald-600/10 to-zinc-950/0',
            hoverColor: 'group-hover:text-emerald-400',
        },
    ];

    return (
        <section className="bg-zinc-950 py-16 sm:py-20 border-b border-zinc-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <div className="inline-flex items-center space-x-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <Compass className="h-4 w-4" />
                        <span>Structured Directories</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Asset Core Categories
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base">
                        All marketplace assets are strictly organized into verified directories, ensuring perfect dependency alignment and high fidelity.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link
                                key={cat.name}
                                href={`/products?category=${encodeURIComponent(cat.name)}`}
                                className="group relative rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/30 flex flex-col justify-between h-[210px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(16,185,129,0.08)]"
                            >
                                {/* Background decorative gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 transition-opacity duration-300 group-hover:opacity-100`} />

                                <div className="relative space-y-3.5 z-10">
                                    <div className="inline-flex rounded-lg bg-zinc-950 p-3 border border-zinc-900 text-zinc-400 transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-zinc-900 group-hover:text-white">
                                        <Icon className={`h-6 w-6 transition-colors ${cat.hoverColor}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-xs text-zinc-450 leading-relaxed truncate-2-lines">
                                        {cat.description}
                                    </p>
                                </div>

                                <div className="relative pt-3 border-t border-zinc-900/60 z-10 flex items-center justify-between font-mono text-[10px]">
                                    <span className="text-zinc-500">{cat.count}</span>
                                    <span className="text-emerald-500 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                                        Explore Directory &rarr;
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Categories;