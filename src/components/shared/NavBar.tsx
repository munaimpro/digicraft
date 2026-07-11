'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Terminal, User as UserIcon, LogOut, LayoutDashboard, ShoppingBag, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Filter routes based on login state
    const publicRoutes = [
        { name: 'Home', path: '/' },
        { name: 'Explore', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleLogout = async () => {
        authClient.signOut();
        router.push('/');
        router.refresh();
    };

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
            {/* Premium glowing accent line */}
            <div className="h-0.5 w-full bg-linear-to-r from-emerald-600 via-emerald-400 to-emerald-500" />
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                    <Terminal className="h-6 w-6 stroke-[2.5]" />
                    <span className="font-mono text-xl font-black tracking-tight text-white">
                        DIGI<span className="text-emerald-500">CRAFT</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {publicRoutes.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className={`rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-200 ${isActive(route.path)
                                    ? 'bg-zinc-900 text-emerald-400 border border-zinc-800'
                                    : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200'
                                }`}
                        >
                            {route.name}
                        </Link>
                    ))}

                    {/* Additional routes for logged-in users */}
                    {user && (
                        <Link
                            href="/dashboard"
                            className={`rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-200 ${isActive('/dashboard')
                                    ? 'bg-zinc-900 text-emerald-400 border border-zinc-800'
                                    : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200'
                                }`}
                        >
                            Dashboard
                        </Link>
                    )}
                </nav>

                {/* Desktop CTA / User Profile controls */}
                <div className="hidden md:flex items-center space-x-3">
                    {user ? (
                        <div className="flex items-center space-x-3">
                            <div className="flex flex-col items-end text-xs">
                                <span className="font-medium text-zinc-200">{user.name}</span>
                                <span className="font-mono text-[10px] uppercase text-emerald-500 flex items-center gap-0.5">
                                    <Shield className="h-2.5 w-2.5" />
                                    {user.role}
                                </span>
                            </div>
                            <Link
                                href="/dashboard"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-emerald-400 hover:bg-zinc-800 hover:text-emerald-300 transition-all duration-200"
                                title="View Dashboard"
                            >
                                <LayoutDashboard className="h-4 w-4" />
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex h-9 px-3 items-center space-x-1.5 rounded-md border border-zinc-800 bg-zinc-900 text-xs font-semibold text-rose-400 hover:bg-rose-950/20 hover:border-rose-900/50 transition-all duration-200"
                            >
                                <LogOut className="h-3.5 w-3.5" />
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link
                                href="/login"
                                className="rounded-md px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                            >
                                Join Marketplace
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile menu button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-b border-zinc-800 bg-zinc-950 md:hidden overflow-hidden"
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {publicRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block rounded-md px-3 py-2 text-base font-medium ${isActive(route.path)
                                            ? 'bg-zinc-900 text-emerald-400'
                                            : 'text-zinc-300 hover:bg-zinc-900/50 hover:text-white'
                                        }`}
                                >
                                    {route.name}
                                </Link>
                            ))}

                            {user && (
                                <Link
                                    href="/dashboard"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block rounded-md px-3 py-2 text-base font-medium ${isActive('/dashboard')
                                            ? 'bg-zinc-900 text-emerald-400'
                                            : 'text-zinc-300 hover:bg-zinc-900/50 hover:text-white'
                                        }`}
                                >
                                    Dashboard
                                </Link>
                            )}
                        </div>

                        <div className="border-t border-zinc-900 pb-4 pt-4 px-4">
                            {user ? (
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="rounded-full bg-zinc-900 p-2 text-emerald-400 border border-zinc-800">
                                            <UserIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">{user.name}</p>
                                            <p className="text-xs text-zinc-400">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Link
                                            href="/dashboard"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center justify-center space-x-2 rounded-md bg-zinc-900 border border-zinc-800 py-2.5 text-xs font-semibold text-emerald-400"
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                            <span>Dashboard</span>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                handleLogout();
                                            }}
                                            className="flex items-center justify-center space-x-2 rounded-md bg-rose-950/20 border border-rose-900/30 py-2.5 text-xs font-semibold text-rose-400"
                                        >
                                            <LogOut className="h-4 w-4" />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex justify-center rounded-md border border-zinc-800 bg-zinc-900 py-2.5 text-sm font-medium text-white"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex justify-center rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500"
                                    >
                                        Join Marketplace
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default NavBar;
