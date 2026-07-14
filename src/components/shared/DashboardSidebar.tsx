'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, PlusCircle, FolderHeart, BarChart3, User, LogOut, Shield, ChevronRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const DashboardSidebar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user

    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        authClient.signOut();
        router.push('/');
        router.refresh();
    };

    const menuItems = [
        {
            name: 'Overview',
            path: '/dashboard',
            icon: LayoutDashboard,
            roles: ['user', 'seller', 'admin'],
        },
        {
            name: 'Add Product',
            path: '/dashboard/products/add',
            icon: PlusCircle,
            roles: ['seller', 'admin'],
        },
        {
            name: 'Manage Products',
            path: '/dashboard/products/manage',
            icon: FolderHeart,
            roles: ['seller', 'admin'],
        },
        {
            name: 'Analytics Insights',
            path: '/dashboard/analytics',
            icon: BarChart3,
            roles: ['seller', 'admin'],
        },
        {
            name: 'My Profile',
            path: '/dashboard/profile',
            icon: User,
            roles: ['user', 'seller', 'admin'],
        },
    ];

    // Filter links by current user's role
    const allowedMenuItems = menuItems.filter(
        (item) => !user || item.roles.includes(user.role)
    );

    const isActive = (path: string) => {
        if (path === '/dashboard') return pathname === '/dashboard';
        return pathname.startsWith(path);
    };

    return (
        <aside className="w-full md:w-64 flex-shrink-0 border-r border-zinc-800 bg-zinc-950 flex flex-col justify-between">
            {/* Upper Navigation section */}
            <div className="p-4 sm:p-6 flex-1">
                <div className="flex items-center space-x-2 pb-6 border-b border-zinc-900">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Live Dashboard
                    </span>
                </div>

                <nav className="mt-6 space-y-1.5">
                    {allowedMenuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`group flex items-center justify-between rounded-md px-3.5 py-2.5 text-sm font-medium transition-all duration-150 ${active
                                    ? 'bg-zinc-900 text-emerald-400 border border-zinc-900'
                                    : 'text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <Icon className={`h-4.5 w-4.5 ${active ? 'text-emerald-500' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                                    <span>{item.name}</span>
                                </div>
                                <ChevronRight className={`h-3.5 w-3.5 text-zinc-600 transition-transform ${active ? 'text-emerald-500/50 translate-x-0.5' : 'opacity-0 group-hover:opacity-100'}`} />
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* User profile capsule at the bottom */}
            <div className="p-4 border-t border-zinc-900 bg-zinc-950/60 flex flex-col space-y-3">
                {user && (
                    <div className="flex items-center space-x-3 p-1.5 rounded-lg bg-zinc-900/20">
                        <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-sm text-emerald-400 uppercase">
                            {user.name.slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-zinc-200 truncate">{user.name}</p>
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-emerald-500 tracking-wider">
                                <Shield className="h-2.5 w-2.5" />
                                {user.role}
                            </span>
                        </div>
                    </div>
                )}

                <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center space-x-2 rounded-md border border-zinc-900 bg-zinc-900 py-2.5 text-xs font-semibold text-rose-400 hover:bg-rose-950/15 hover:border-rose-900/40 transition-all duration-200"
                >
                    <LogOut className="h-4 w-4" />
                    <span>Exit Dashboard</span>
                </button>
            </div>
        </aside>
    );
}

export default DashboardSidebar;