'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Mail, CheckCircle2 } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2 text-emerald-400">
                            <span className="font-mono text-xl font-black tracking-tight text-white">
                                DIGI<span className="text-emerald-500">CRAFT</span>
                            </span>
                        </Link>
                        <p className="text-sm max-w-sm leading-relaxed text-zinc-400">
                            Premium marketplace for secure digital assets, code libraries, eBooks, templates, and UI systems. Built by designers and engineers for accelerated development workflows.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-zinc-500 hover:text-emerald-400 transition-colors" aria-label="Facebook link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://x.com" className="text-zinc-500 hover:text-emerald-400 transition-colors" aria-label="Twitter link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932L18.901 1.153zm-1.29 19.494h2.039L6.486 3.24H4.298L17.611 20.647z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" className="text-zinc-500 hover:text-emerald-400 transition-colors" aria-label="LinkedIn link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick links & categories */}
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200">
                                    Marketplace
                                </h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>
                                        <Link href="/products?category=Template" className="hover:text-emerald-400 transition-colors">
                                            HTML & React Templates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products?category=UI Kit" className="hover:text-emerald-400 transition-colors">
                                            Design Kits & UI Systems
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products?category=E-book" className="hover:text-emerald-400 transition-colors">
                                            eBooks & Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products?category=Icon Pack" className="hover:text-emerald-400 transition-colors">
                                            Vector Icon Sets
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200">
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>
                                        <Link href="/about" className="hover:text-emerald-400 transition-colors">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                                            Contact & Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200">
                                Subscribe to Releases
                            </h3>
                            <p className="mt-4 text-sm text-zinc-400">
                                Receive instant notifications when premium assets, templates, and creators drop new bundles.
                            </p>
                            <form onSubmit={handleSubscribe} className="mt-4 sm:flex sm:max-w-md">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter developer email"
                                    className="w-full rounded-md border border-zinc-900 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 focus:outline-none transition-all duration-200"
                                />
                                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-md hover:bg-emerald-400 focus:outline-none transition-all duration-200"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            {subscribed && (
                                <div className="mt-3 flex items-center space-x-1.5 text-xs text-emerald-400">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>Subscribed! Check your inbox for updates.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom copyright & contact info */}
                <div className="mt-12 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-zinc-500">
                    <p>&copy; {currentYear} DigiCraft Marketplace Inc. All rights reserved.</p>
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                            <Mail className="h-3.5 w-3.5 text-zinc-600" />
                            <span>support@digicraft.com</span>
                        </span>
                        <span>|</span>
                        <span>100% Secure SSL Downloads</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;