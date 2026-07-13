'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogIn, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const router = useRouter();

    // Getting user data from session
    const { data: session } = authClient.useSession();
    const user = session?.user;

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    // Input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleDemoFill = (role: 'admin' | 'seller' | 'user') => {
        setError('');
        if (role === 'admin') {
            setEmail('admin@fable.com');
            setPassword('Admin@123');
        } else if (role === 'seller') {
            setEmail('seller@fable.com');
            setPassword('Writer@123');
        } else {
            setEmail('reader@fable.com');
            setPassword('Reader@123');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all credentials');
            toast.error('Please specify both email and password.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const { data, error: authError } = await authClient.signIn.email({
                email,
                password,
                rememberMe: false,
            });

            if (data) {
                setSuccess('Authentication approved. Entering dashboard...');
                toast.success('Successfully signed in!');
                setTimeout(() => {
                    router.push('/');
                }, 1200);
            }

            if (authError) {
                setError(authError.message || 'Invalid credentials');
                toast.error(authError.message || 'Login failed.');
            }
        } catch (e) {
            setError('An unexpected communication failure occurred.');
            toast.error('An unexpected communication failure occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md space-y-8">
            {/* Sandbox Pre-fills */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/10 p-4 space-y-3">
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-zinc-500 flex items-center gap-1">
                    <HelpCircle className="h-3.5 w-3.5" />
                    Sandbox Profiles (Single-Click Fill)
                </span>

                <div className="grid grid-cols-3 gap-2">
                    <button
                        type="button"
                        onClick={() => handleDemoFill('admin')}
                        className="rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 py-1.5 text-[10px] font-bold text-emerald-400 font-mono transition-colors cursor-pointer"
                    >
                        Admin Role
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDemoFill('seller')}
                        className="rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 py-1.5 text-[10px] font-bold text-cyan-400 font-mono transition-colors cursor-pointer"
                    >
                        Seller Role
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDemoFill('user')}
                        className="rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 py-1.5 text-[10px] font-bold text-zinc-450 font-mono transition-colors cursor-pointer"
                    >
                        Standard User
                    </button>
                </div>
            </div>

            {/* Auth status block */}
            {error && (
                <div className="rounded-lg border border-rose-500/20 bg-rose-950/15 p-3 flex items-center space-x-2 text-xs font-semibold text-rose-400 animate-shake">
                    <AlertCircle className="h-4 w-4 shrink-0" />
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
                    {/* Email field */}
                    <div className="space-y-1">
                        <label htmlFor="login-email" className="text-[10px] font-bold text-zinc-455 uppercase tracking-widest font-mono">Email Address</label>
                        <input
                            id="login-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                            placeholder="developer@digicraft.com"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Password field */}
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label htmlFor="login-password" className="text-[10px] font-bold text-zinc-455 uppercase tracking-widest font-mono">Secret Password</label>
                        </div>
                        <input
                            id="login-password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(''); }}
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 disabled:opacity-50 py-2.5 text-xs font-bold shadow-lg transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                    <LogIn className="h-4 w-4" />
                    <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
                </button>
            </form>

            {/* Redirect section */}
            <div className="text-center text-xs text-zinc-500">
                <span>Don&apos;t have an account yet? </span>
                <Link href="/signup" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    Join Marketplace
                </Link>
            </div>
        </div>
    );
}

export default LoginForm;