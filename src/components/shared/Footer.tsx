'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Mail, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';

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
                            <Terminal className="h-6 w-6 stroke-[2.5]" />
                            <span className="font-mono text-xl font-black tracking-tight text-white">
                                DIGI<span className="text-emerald-500">CRAFT</span>
                            </span>
                        </Link>
                        <p className="text-sm max-w-sm leading-relaxed text-zinc-400">
                            Premium marketplace for secure digital assets, code libraries, eBooks, templates, and UI systems. Built by designers and engineers for accelerated development workflows.
                        </p>
                        {/* <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-emerald-400 transition-colors"
                                title="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-emerald-400 transition-colors"
                                title="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-emerald-400 transition-colors"
                                title="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div> */}
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