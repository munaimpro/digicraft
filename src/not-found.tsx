'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Home, AlertOctagon } from 'lucide-react';
import NavBar from './components/shared/NavBar';
import Footer from './components/shared/Footer';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
            <NavBar />
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
                <div className="max-w-md w-full space-y-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">
                        <AlertOctagon className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <span className="font-mono text-xs uppercase font-bold tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
                            <Terminal className="h-3.5 w-3.5" />
                            Error Code: 404
                        </span>
                        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Terminal Node Offline
                        </h1>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
                            The premium digital asset, template, or pathway you requested could not be resolved by the DigiCraft network.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-zinc-900 border border-zinc-900 text-xs font-bold text-white hover:bg-zinc-850 hover:text-emerald-400 transition-colors"
                        >
                            <Home className="h-4 w-4" />
                            <span>Return to Core Portal</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
