'use client';

import { Quote, Star, MessageSquare } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            id: 'rev-1',
            name: 'Alexander Wright',
            role: 'Staff UI Engineer',
            company: 'Veloce Labs',
            quote: 'The Next.js Admin Dashboard saved us at least 4 weeks of initial layout compilation. The TypeScript structures are exceptionally strict and beautifully split into hooks.',
            stars: 5,
            initials: 'AW',
        },
        {
            id: 'rev-2',
            name: 'Elena Rostova',
            role: 'Founder',
            company: 'SaaSFlow',
            quote: 'We launched our SaaS billing structure in hours using the Stripe Boilerplate. The webhook handlers were robust and handles recurring invoice states perfectly.',
            stars: 5,
            initials: 'ER',
        },
        {
            id: 'rev-3',
            name: 'Marcus Vance',
            role: 'Principal Designer',
            company: 'Prism Agency',
            quote: 'The Figma Enterprise Design System Kit is stellar. Using auto-layout 4.0 variants made it painless to translate client requests into functional mockups.',
            stars: 5,
            initials: 'MV',
        },
    ];

    return (
        <section className="bg-zinc-950 py-16 sm:py-20 border-b border-zinc-900 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title Block */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                    <div className="inline-flex items-center space-x-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                        <span>Developer Reviews</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Vetted by Top Engineers
                    </h2>
                    <p className="text-zinc-450 text-sm">
                        Read how engineering leads, agency owners, and independent hackers rely on DigiCraft to accelerate their shipping schedules.
                    </p>
                </div>

                {/* Reviews Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {reviews.map((rev) => (
                        <div
                            key={rev.id}
                            className="rounded-2xl border border-zinc-900 bg-zinc-900/10 p-7 flex flex-col justify-between h-[270px] shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:border-emerald-500/20 hover:shadow-[0_15px_35px_-10px_rgba(16,185,129,0.06)] transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Giant absolute background Quote icon */}
                            <Quote className="absolute top-4 right-4 h-16 w-16 text-zinc-900/20 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-500/5" />

                            {/* Stars block */}
                            <div className="flex items-center space-x-0.5 z-10">
                                {Array.from({ length: rev.stars }).map((_, i) => (
                                    <Star key={i} className="h-3.5 w-3.5 fill-emerald-400 stroke-emerald-500" />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic z-10 mt-4 flex-1 line-clamp-4">
                                &quot;{rev.quote}&quot;
                            </p>

                            {/* Client Profile Footer */}
                            <div className="flex items-center space-x-3 pt-4 border-t border-zinc-900 z-10">
                                <div className="h-10 w-10 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center font-bold text-xs text-emerald-400 uppercase group-hover:border-emerald-500/30 group-hover:bg-zinc-900 transition-all duration-300">
                                    {rev.initials}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs font-bold text-white truncate">{rev.name}</h4>
                                    <p className="text-[10px] font-mono text-zinc-500 truncate">
                                        {rev.role} &bull; <span className="text-zinc-400">{rev.company}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;