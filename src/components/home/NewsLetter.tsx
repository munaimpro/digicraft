'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setLoading(true);
        setError('');

        // Simulate server subscription delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        setSuccess(true);
        setLoading(false);
        setEmail('');
    };

    return (
        <section className="bg-zinc-950 py-16 sm:py-20 relative overflow-hidden">
            {/* Decorative gradient glowing orb */}
            <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="rounded-2xl border border-emerald-500/10 bg-gradient-to-b from-zinc-900/80 via-zinc-900/45 to-zinc-950/90 p-8 sm:p-12 backdrop-blur-md text-center space-y-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] hover:border-emerald-500/20 transition-all duration-500">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400">
                        <Sparkles className="h-6 w-6 animate-pulse" />
                    </div>

                    <div className="space-y-2 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                            Weekly Digital Drops Inbox
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                            Join 12,000+ developers receiving free component code drops, commercial boilerplate releases, and limited discount codes every Friday morning.
                        </p>
                    </div>

                    {!success ? (
                        <form onSubmit={handleSubscribe} className="mx-auto flex flex-col sm:flex-row items-stretch sm:items-center max-w-md gap-3 pt-2">
                            <div className="relative flex-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-4 w-4 text-zinc-500" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter developer email..."
                                    className="w-full rounded-md border border-zinc-900 bg-zinc-950 py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 focus:outline-none"
                                    disabled={loading}
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow hover:bg-emerald-400 disabled:opacity-50 transition-all duration-200 shadow-md shadow-emerald-500/10"
                                disabled={loading}
                            >
                                {loading ? 'Adding...' : 'Subscribe'}
                            </button>
                        </form>
                    ) : (
                        <div className="mx-auto inline-flex items-center space-x-2 rounded-lg border border-emerald-500/20 bg-emerald-950/20 px-5 py-3 text-sm text-emerald-400 animate-fadeIn">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                            <span className="font-medium">Subscription successful! Check your developer inbox.</span>
                        </div>
                    )}

                    <div className="flex justify-center items-center space-x-2 text-[10px] font-mono text-zinc-550 pt-2 border-t border-zinc-850/60 max-w-sm mx-auto">
                        <ShieldCheck className="h-4 w-4 text-zinc-600" />
                        <span>Zero Spam &bull; Unsubscribe at any time &bull; Encrypted SSL</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;