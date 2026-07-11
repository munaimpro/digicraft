'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AlertCircle, CheckCircle, UserPlus } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const SignupForm = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    const router = useRouter();

    // Inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'user' | 'seller'>('user');

    // Status indicators
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError('Please fill in all details');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const result = await register(name, email, password, role);
            if (result.success) {
                setSuccess('Account created successfully! Preparing dashboard...');
                setTimeout(() => {
                    router.push('/dashboard');
                    router.refresh();
                }, 1200);
            } else {
                setError(result.error || 'Failed to register account');
            }
        } catch (e) {
            setError('An unexpected server communication failure occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md space-y-8">
            {/* Auth status block */}
            {error && (
                <div className="rounded-lg border border-rose-500/20 bg-rose-950/15 p-3 flex items-center space-x-2 text-xs font-semibold text-rose-400">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{error}</span>
                </div>
            )}

            {success && (
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/15 p-3 flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{success}</span>
                </div>
            )}

            {/* Form panel */}
            <form onSubmit={handleSubmit} className="rounded-xl border border-zinc-900 bg-zinc-900/5 p-6 space-y-4">
                <div className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1">
                        <label htmlFor="reg-name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Full Name</label>
                        <input
                            id="reg-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Sarah Connor"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label htmlFor="reg-email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Email Address</label>
                        <input
                            id="reg-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="sarah@example.com"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label htmlFor="reg-password" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Password</label>
                        <input
                            id="reg-password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min 6 characters"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Role Selection */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Profile Role</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setRole('user')}
                                className={`rounded border py-2 text-xs font-bold transition-all cursor-pointer ${role === 'user'
                                        ? 'bg-emerald-950/20 border-emerald-500 text-emerald-400'
                                        : 'bg-zinc-950 border-zinc-800 text-zinc-450 hover:border-zinc-700'
                                    }`}
                            >
                                Developer User
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('seller')}
                                className={`rounded border py-2 text-xs font-bold transition-all cursor-pointer ${role === 'seller'
                                        ? 'bg-emerald-950/20 border-emerald-500 text-emerald-400'
                                        : 'bg-zinc-950 border-zinc-800 text-zinc-455 hover:border-zinc-700'
                                    }`}
                            >
                                Asset Seller
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 disabled:opacity-50 py-2.5 text-xs font-bold shadow-lg transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                    <UserPlus className="h-4 w-4" />
                    <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
                </button>
            </form>

            {/* Redirect */}
            <div className="text-center text-xs text-zinc-500">
                <span>Already have an account? </span>
                <Link href="/login" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    Sign In Here
                </Link>
            </div>
        </div>
    );
}

export default SignupForm;