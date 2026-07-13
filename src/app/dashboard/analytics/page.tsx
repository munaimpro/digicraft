'use client';

import React, { useState, useEffect } from 'react';
import { BarChart3, ShieldAlert, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';

const AnalyticsPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/digicraft-products`);
                const data = await response.json();
                if (data) {
                    setProducts(data);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const isAuthorized = user?.role === 'admin' || user?.role === 'seller';

    // Filter products: sellers only see their own, admins see everything
    const filteredProducts = user?.role === 'admin'
        ? products
        : products.filter(p => p.sellerId === user?.id);

    if (!isAuthorized) {
        return (
            <div className="rounded-xl border border-zinc-850 bg-zinc-900/10 p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-[350px]">
                <div className="rounded-full bg-zinc-900 p-4 border border-zinc-800 text-rose-500">
                    <ShieldAlert className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-white">Access Unauthorized</h2>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                    Your current account level does not have clearance to view enterprise analytics. Only validated Sellers and Administrators can review marketing statistics.
                </p>
                <Link
                    href="/dashboard"
                    className="rounded bg-zinc-850 hover:bg-zinc-800 border border-zinc-800 px-4 py-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
                >
                    Return to Console Home
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Title block */}
            <div className="space-y-3">
                <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                    <BarChart3 className="h-4 w-4" />
                    <span>Real-time Metrics</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h1 className="text-3xl font-black text-white leading-tight">
                        System Analytics & Insights
                    </h1>
                    {user?.role === 'seller' ? (
                        <span className="inline-flex items-center rounded border border-emerald-500/10 bg-emerald-950/20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400 self-start sm:self-auto">
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Seller View (Your Items Only)
                        </span>
                    ) : (
                        <span className="inline-flex items-center rounded border border-cyan-500/10 bg-cyan-950/20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-400 self-start sm:self-auto">
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            Admin View (All Items)
                        </span>
                    )}
                </div>
                <p className="text-zinc-440 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    {user?.role === 'seller'
                        ? 'Review dynamic performance parameters, cumulative sales volumes, and category trends specifically for your uploaded digital assets.'
                        : 'Review enterprise-wide dynamic performance metrics, platform transactional volumes, and absolute product count distributions across all catalog providers.'}
                </p>
            </div>

            {/* Main Charts View */}
            <AnalyticsChart products={filteredProducts} />
        </div>
    );
}

export default AnalyticsPage;