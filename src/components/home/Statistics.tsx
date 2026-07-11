'use client';

import React from 'react';
import { BarChart3, Users, Download, Star, Award } from 'lucide-react';

const Statistics = () => {
    const stats = [
        {
            id: 'stat-assets',
            value: '450+',
            label: 'Verified Codebases',
            description: 'Handcrafted scripts, full templates, and UI design kits.',
            icon: BarChart3,
        },
        {
            id: 'stat-users',
            value: '18,500+',
            label: 'Active Developers',
            description: 'Engineers, agencies, and independent creators worldwide.',
            icon: Users,
        },
        {
            id: 'stat-downloads',
            value: '120,000+',
            label: 'Secure Downloads',
            description: 'Distributed with full commercial usage licensing.',
            icon: Download,
        },
        {
            id: 'stat-satisfaction',
            value: '4.9/5.0',
            label: 'Average Asset Score',
            description: 'Vetted through intensive linting, safety, and performance reviews.',
            icon: Star,
        },
    ];

    return (
        <section className="bg-zinc-950 py-16 sm:py-20 border-b border-zinc-900 relative overflow-hidden">
            {/* Accent visual border dots */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                    <div className="inline-flex items-center space-x-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <Award className="h-4 w-4" />
                        <span>Platform Metrics</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Empowering Modern Production
                    </h2>
                    <p className="text-zinc-450 text-sm">
                        Our numbers represent verified deployments and successful integrations rather than vanity indicators.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="relative rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between h-[180px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-emerald-500/20 hover:shadow-[0_12px_30px_rgba(16,185,129,0.04)] transition-all duration-300 group overflow-hidden"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-sans text-4xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-[1.02]">
                                        {item.value}
                                    </span>
                                    <div className="rounded-md bg-zinc-950 p-2.5 border border-zinc-900 text-zinc-500 transition-colors group-hover:border-emerald-500/20 group-hover:text-emerald-400">
                                        <Icon className="h-4.5 w-4.5" />
                                    </div>
                                </div>

                                <div className="space-y-1 mt-4">
                                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                                        {item.label}
                                    </h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
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

export default Statistics;