'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
    Terminal,
    Award,
    ShieldCheck,
    Cpu,
    Code,
    Zap,
    Sparkles,
    Users,
    ArrowRight,
    Heart,
    HelpCircle,
    FileCode,
    Lock
} from 'lucide-react';

const AboutContent = () => {
    const values = [
        {
            id: 'val-quality',
            title: 'Vetted Code Quality',
            description: 'Every codebase, starter template, or UI pack in our repository undergoes intense static analysis, linting, and manual validation. No boilerplate slop, only robust production-ready code.',
            icon: Code,
            badge: 'Certified'
        },
        {
            id: 'val-speed',
            title: 'Production Velocity',
            description: 'We believe building software should be fast. Our assets are architected to eliminate setup friction, enabling developers to prototype and launch robust modules in hours instead of weeks.',
            icon: Zap,
            badge: 'High Performance'
        },
        {
            id: 'val-safety',
            title: 'Legal and Security Safety',
            description: 'All downloads come with unambiguous, certified commercial licenses. We track dependency safety and security updates meticulously so you can deploy with absolute peace of mind.',
            icon: ShieldCheck,
            badge: 'Compliant'
        }
    ];

    const milestones = [
        {
            year: '2024',
            title: 'The Blueprint',
            description: 'DIGICRAFT started as a private internal boilerplate registry for a high-velocity development studio, standardizing Next.js setups and common server schemas.'
        },
        {
            year: '2025',
            title: 'Public Launch',
            description: 'Recognizing a shared frustration with bloated, unvetted online code templates, we opened the repository, inviting elite verified sellers to list premium, performant assets.'
        },
        {
            year: '2026',
            title: 'The Trusted Standard',
            description: 'Now serving over 18,500 active creators worldwide, DIGICRAFT is the go-to standard for production-ready developer assets, elite components, and secure codebases.'
        }
    ];

    const team = [
        {
            initials: 'MC',
            name: 'Marcus Chen',
            role: 'Platform Architect',
            bio: 'Ex-Systems Engineer, specializes in container orchestration, high-throughput APIs, and developer developer environments.'
        },
        {
            initials: 'EB',
            name: 'Elena Rostova',
            role: 'Head of Vetting & Safety',
            bio: 'Security researcher and core compiler advocate. Audits every submission to guarantee maximum package hygiene.'
        },
        {
            initials: 'TS',
            name: 'Tyler Sterling',
            role: 'Founding Engineer',
            bio: 'Fullstack specialist. Obsessed with layout, typography precision, fluid micro-interactions, and visual design.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut' as const
            }
        }
    };

    return (
        <div className="space-y-16 sm:space-y-24">
            {/* 1. Hero Section */}
            <section className="relative pt-8 pb-4 overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/10 bg-emerald-950/20 px-3.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-400"
                    >
                        <Terminal className="h-3.5 w-3.5 animate-pulse" />
                        <span>Our Mission Protocol</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
                    >
                        Curating Elite Code. <br className="hidden sm:inline" />
                        Accelerating <span className="text-emerald-400">Production</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
                    >
                        DIGICRAFT is a developer-centric marketplace built specifically to bridge the gap between complex architectural design and instant production-level execution.
                    </motion.p>
                </div>
            </section>

            {/* 2. Bento Core Values Section */}
            <section className="space-y-12">
                <div className="text-center max-w-xl mx-auto space-y-3">
                    <div className="inline-flex items-center space-x-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <Award className="h-4 w-4" />
                        <span>Platform Principles</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        The Pillars of Our Registry
                    </h2>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                        We operate on a simple creed: zero bloat, exhaustive security, and flawless execution.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {values.map((val) => {
                        const Icon = val.icon;
                        return (
                            <motion.div
                                key={val.id}
                                variants={itemVariants}
                                className="rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-emerald-500/25 hover:bg-zinc-900/20 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] group overflow-hidden relative"
                            >
                                {/* Micro background gradient subtle shine */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/[0.015] to-transparent rounded-bl-full pointer-events-none" />

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-xl bg-zinc-950 p-3.5 border border-zinc-900 text-zinc-500 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border border-zinc-800 text-zinc-400 group-hover:border-emerald-500/10 group-hover:bg-emerald-950/10 group-hover:text-emerald-400 transition-all duration-300">
                                            {val.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                                            {val.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                                            {val.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* 3. The Problem & Solution Column */}
            <section className="rounded-2xl border border-zinc-900 bg-zinc-900/5 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
                {/* Left Aspect / Concept Block */}
                <div className="p-8 sm:p-12 space-y-6 border-b lg:border-b-0 lg:border-r border-zinc-900 flex flex-col justify-center relative bg-gradient-to-b lg:bg-gradient-to-r from-zinc-950 to-zinc-900/20">
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-500">
                            The Reality Check
                        </span>
                        <h3 className="text-2xl font-black text-white tracking-tight">
                            Why We Exist
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        The software ecosystem is filled with bloated, unvetted, or abandoned templates. Developers waste dozens of hours searching through poorly documented repositories, fixing broken database configurations, or refactoring outdated dependencies.
                    </p>
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center space-x-3 text-xs text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                            <span>Abandoned setups and outdated frameworks</span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                            <span>Unclear commercial reuse licensing models</span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                            <span>Hours wasted rebuilding the exact same boilerplate</span>
                        </div>
                    </div>
                </div>

                {/* Right Aspect / DIGICRAFT Standard */}
                <div className="p-8 sm:p-12 space-y-6 flex flex-col justify-center bg-zinc-900/10 relative">
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                            <Sparkles className="h-3.5 w-3.5" />
                            The Digicraft Protocol
                        </span>
                        <h3 className="text-2xl font-black text-white tracking-tight">
                            A Safe Haven for Creators
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        We built a curated registry model. Instead of quantity, we focus on exceptional, hand-crafted products. Every item in DIGICRAFT matches high-end styling parameters, conforms to contemporary TypeScript paradigms, and is ready for immediate deployment.
                    </p>
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center space-x-3 text-xs text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>100% TypeScript compliance on all catalog entries</span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>Clean styling powered purely by structured Tailwind CSS</span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>Transparent SLA guarantees and single-click access</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Timeline Milestone Journey */}
            <section className="space-y-12">
                <div className="text-center max-w-xl mx-auto space-y-3">
                    <div className="inline-flex items-center space-x-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <Cpu className="h-4 w-4" />
                        <span>Milestone History</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        Our Evolutionary Journey
                    </h2>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                        Tracing how a private, high-fidelity dev catalog transitioned into a global marketplace.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative pl-6 border-l border-zinc-900 space-y-10 py-2">
                    {milestones.map((ms, idx) => (
                        <div key={ms.year} className="relative group">
                            {/* Dot indicator */}
                            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border border-zinc-900 bg-zinc-950 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                                <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-400 transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <span className="font-mono text-xs font-black text-emerald-450 tracking-wider">
                                    {ms.year}
                                </span>
                                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {ms.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-500 max-w-2xl leading-relaxed">
                                    {ms.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Team Section */}
            <section className="space-y-12">
                <div className="text-center max-w-xl mx-auto space-y-3">
                    <div className="inline-flex items-center space-x-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <Users className="h-4 w-4" />
                        <span>Platform Core</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        The Engineers Behind the Registry
                    </h2>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                        A small team of hyper-focused software developers advocating for beautiful, maintainable code.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="rounded-xl border border-zinc-900 bg-zinc-900/5 p-6 space-y-4 hover:border-zinc-800 transition-colors"
                        >
                            <div className="flex items-center space-x-4">
                                {/* Elegant letter initials avatar to maintain clean monochrome developer feel */}
                                <div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-sm font-black text-emerald-400 select-none">
                                    {member.initials}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">
                                        {member.name}
                                    </h3>
                                    <span className="font-mono text-[10px] uppercase text-emerald-500 font-bold">
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. CTA section */}
            <section className="rounded-2xl border border-zinc-900 bg-gradient-to-r from-zinc-950 via-zinc-900/10 to-zinc-950 p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-1/2 left-10 -translate-y-1/2 h-32 w-32 rounded-full bg-emerald-500/[0.02] blur-2xl pointer-events-none" />

                <div className="max-w-xl mx-auto space-y-4 relative z-10">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                        Ready to Upgrade Your Sandbox Development workflow?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                        Browse our curated registry of premium starter systems, UI components, and developer blueprints to find your next stack multiplier.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/products"
                            className="w-full sm:w-auto rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 py-2.5 px-6 text-xs font-bold shadow-lg transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                        >
                            <span>Explore Digital Assets</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                            href="/signup"
                            className="w-full sm:w-auto rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 py-2.5 px-6 text-xs font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Join as a Seller
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutContent;