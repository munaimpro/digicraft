import React from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';
import RegisterForm from '@/src/components/auth/SignupForm';

const SignupPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex items-center justify-center bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo and Header */}
                    <div className="text-center space-y-3">
                        <Link href="/" className="inline-flex items-center space-x-2 text-emerald-400">
                            <Terminal className="h-8 w-8 stroke-[2.5]" />
                            <span className="font-mono text-2xl font-black tracking-tight text-white">
                                DIGI<span className="text-emerald-500">CRAFT</span>
                            </span>
                        </Link>
                        <h2 className="text-2xl font-black tracking-tight text-white">
                            Join the Marketplace
                        </h2>
                        <p className="text-xs text-zinc-400">
                            Register your developer profile to browse or distribute certified premium assets.
                        </p>
                    </div>

                    <RegisterForm />
                </div>
            </main>
        </div>
    );
}

export default SignupPage