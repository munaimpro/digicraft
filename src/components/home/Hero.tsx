'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    type HeroSlide = {
        title: string;
        tagline: string;
        description: string;
        rating: number;
        downloads: string;
        accentColor: string;
    }

    const heroSlides: HeroSlide[] = [
        {
            title: 'Premium Templates',
            tagline: 'Next.js & Tailwind foundations',
            description: 'Ready-to-deploy, high-performance dashboards, landing pages, and SaaS boilerplates written in clean TypeScript.',
            rating: 4.9,
            downloads: '12.4k+',
            accentColor: 'text-emerald-400',
        },
        {
            title: 'Production UI Kits',
            tagline: 'Figma and React visual systems',
            description: 'Accelerate frontend design with standardized design systems, vector icons, tokens, and responsive web layouts.',
            rating: 4.8,
            downloads: '8.2k+',
            accentColor: 'text-emerald-500',
        },
        {
            title: 'Developer Guides',
            tagline: 'Deep dive eBooks and playbooks',
            description: 'Master systems architecture, tech interviews, billing integrations, and independent startup marketing funnels.',
            rating: 4.7,
            downloads: '15.9k+',
            accentColor: 'text-emerald-300',
        }
    ];

    const slide = heroSlides[activeSlide];

    return (
        <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-24 lg:py-28 border-b border-zinc-900">
            
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-emerald-600/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Text Details Left Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                            <span>Version 2026 Live Drop</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
                            Engineered <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">Digital Assets</span> for Modern Teams
                        </h1>

                        <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                            Discover and deploy pre-vetted codebase boilerplates, production-ready React components, Figma systems, and masterclass developer eBooks.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                            <Link
                                href="/products"
                                className="flex items-center justify-center space-x-2 rounded-md bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 hover:translate-y-px transition-all duration-200 shadow-lg shadow-emerald-500/10"
                            >
                                <span>Browse Products</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="flex items-center justify-center space-x-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                            >
                                <span>Learn Our Standards</span>
                            </Link>
                        </div>

                        {/* Check points */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-zinc-900 text-xs font-medium text-zinc-500">
                            <div className="flex items-center space-x-1.5">
                                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>Verified Source Files</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>Commercial Ready</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>Instant SSL Download</span>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Slider Right Column */}
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-emerald-500/10 bg-linear-to-br from-zinc-900/80 to-zinc-950/90 p-7 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] hover:border-emerald-500/20 transition-all duration-500 relative">
                            <div className="absolute top-4 right-4 flex space-x-1.5">
                                <div className="h-2 w-2 rounded-full bg-zinc-800" />
                                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                                <div className="h-2 w-2 rounded-full bg-emerald-500/70" />
                            </div>

                            <div className="mb-4 flex items-center space-x-2 border-b border-zinc-800/60 pb-3.5">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                                    Featured Category Showcase
                                </span>
                            </div>

                            {/* Slider screen with slide in animation */}
                            <div className="min-h-42.5 flex flex-col justify-between">
                                <div>
                                    <span className={`font-mono text-xs font-bold uppercase tracking-widest ${slide.accentColor}`}>
                                        {slide.tagline}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2 leading-tight">
                                        {slide.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">
                                        {slide.description}
                                    </p>
                                </div>

                                <div className="mt-5 pt-3.5 border-t border-zinc-850/60 flex justify-between items-center text-xs font-mono">
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-3.5 w-3.5 fill-emerald-400 stroke-emerald-400" />
                                        <span className="font-bold text-white">{slide.rating}</span>
                                        <span className="text-zinc-500">(Reviews)</span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-500">Downloads: </span>
                                        <span className="font-bold text-emerald-400">{slide.downloads}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Slider Controls */}
                            <div className="mt-6 flex justify-center space-x-2">
                                {heroSlides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                                            }`}
                                        aria-label={`Show asset slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;