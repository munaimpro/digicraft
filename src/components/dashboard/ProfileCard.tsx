'use client';

import React, { useState } from 'react';
import { User as UserIcon, Shield, Mail, Calendar, Key, CheckCircle } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const ProfileCard = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [name, setName] = useState(user?.name || 'Developer User');
    const [email, setEmail] = useState(user?.email || 'user@example.com');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate save action
        setSuccess(true);
        setLoading(false);
        setTimeout(() => setSuccess(false), 4000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Visual Identity Left column */}
            <div className="lg:col-span-4 rounded-xl border border-zinc-850 bg-zinc-900/5 p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-emerald-400 font-bold text-3xl uppercase shadow-lg shadow-black/40">
                    {name.slice(0, 2)}
                </div>

                <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <p className="text-xs text-zinc-500 font-mono">{email}</p>
                </div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 font-mono text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                    <Shield className="h-3 w-3" />
                    {user?.role || 'user'}
                </span>

                <p className="text-xs text-zinc-450 leading-relaxed pt-2 border-t border-zinc-900 w-full max-w-[200px]">
                    Member of DigiCraft digital distribution console. Standard commercial license authorization.
                </p>
            </div>

            {/* Edit Profile right column */}
            <div className="lg:col-span-8 rounded-xl border border-zinc-850 bg-zinc-900/5 p-6">
                <div className="flex items-center space-x-2 pb-4 border-b border-zinc-900">
                    <Key className="h-4.5 w-4.5 text-emerald-500" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                        Account Management Credentials
                    </h3>
                </div>

                <form onSubmit={handleUpdate} className="mt-6 space-y-4">
                    {success && (
                        <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/15 p-3 flex items-center space-x-2 text-xs text-emerald-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Identity credentials updated successfully.</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="profile-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                                Full Display Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserIcon className="h-4 w-4 text-zinc-600" />
                                </div>
                                <input
                                    id="profile-name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-md border border-zinc-850 bg-zinc-950 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="profile-email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                                Corporate Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-4 w-4 text-zinc-600" />
                                </div>
                                <input
                                    id="profile-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-md border border-zinc-850 bg-zinc-950 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Simulated password input */}
                        <div className="space-y-2">
                            <label htmlFor="profile-role" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                                Assigned Platform Role
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Shield className="h-4 w-4 text-zinc-600" />
                                </div>
                                <input
                                    id="profile-role"
                                    type="text"
                                    disabled
                                    value={user?.role?.toUpperCase() || 'USER'}
                                    className="w-full rounded-md border border-zinc-850 bg-zinc-900/40 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-zinc-500 focus:outline-none cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Date Joined */}
                        <div className="space-y-2">
                            <label htmlFor="profile-date" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                                Credentials Created
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Calendar className="h-4 w-4 text-zinc-600" />
                                </div>
                                <input
                                    id="profile-date"
                                    type="text"
                                    disabled
                                    value="Jul 2026 (Live Platform Session)"
                                    className="w-full rounded-md border border-zinc-850 bg-zinc-900/40 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-zinc-500 focus:outline-none cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-900 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-5 py-2 text-xs font-bold text-white transition-colors"
                        >
                            {loading ? 'Saving Changes...' : 'Save Profile Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileCard;
