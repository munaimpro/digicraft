import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Terminal, Home } from 'lucide-react';
import { getSession } from 'better-auth/api';
import DashboardSidebar from '@/components/shared/DashboardSidebar';

const DashboardLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const session = await getSession();

    // If not logged in, redirect securely on server side
    if (!session) {
        redirect('/login');
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-zinc-950 text-zinc-100">
            {/* Lateral Dashboard Sidebar navigation */}
            <DashboardSidebar />

            {/* Main dashboard content container */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Upper mini control bar */}
                <header className="h-14 border-b border-zinc-900 bg-zinc-950/40 backdrop-blur flex items-center justify-between px-6">
                    <div className="flex items-center space-x-2">
                        <Terminal className="h-4 w-4 text-emerald-500" />
                        <span className="font-mono text-xs font-semibold text-zinc-400">
                            DigiCraft Terminal v2.1
                        </span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Link
                            href="/"
                            className="flex items-center space-x-1 px-3 py-1.5 rounded border border-zinc-850 bg-zinc-900/60 text-[10px] font-bold font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                        >
                            <Home className="h-3.5 w-3.5" />
                            <span>Back to Store</span>
                        </Link>
                    </div>
                </header>

                {/* Scrollable interior viewport */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;