'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Heart, Download, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

// API response matching the exact data format provided
interface PurchasedProduct {
    _id: string;
    productId: string;
    productTitle: string;
    imageUrl: string;
    totalAmount: number;
    downloadUrl: string;
    sellerId: string;
    buyerId: string;
    purchaseDate: string;
}

const DashboardOverview = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    
    const [products, setProducts] = useState<PurchasedProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            if (!user?.id) return;
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/purchase-history/${user?.id}`);
                const data = await response.json();
                console.log(data);
                if (data) {
                    setProducts(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [user?.id]);

    const isSellerOrAdmin = user?.role === 'seller' || user?.role === 'admin';

    return (
        <div className="space-y-8">
            {/* Visual greeting card with user identity */}
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 p-6 sm:p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-1/2 right-10 -translate-y-1/2 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />

                <div className="space-y-3.5 relative z-10">
                    <div className="inline-flex items-center space-x-1 font-mono text-[9px] uppercase font-bold tracking-widest text-emerald-450">
                        <Sparkles className="h-3 w-3" />
                        <span>Session active</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                        Welcome Back, <span className="text-emerald-400">{user?.name}</span>
                    </h1>

                    <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                        Manage your digital assets, download secure codebases, and view platform metrics inside your authenticated developer workspace.
                    </p>
                </div>
            </div>

            {/* Segmented controls based on user roles */}
            {isSellerOrAdmin ? (
                <div className="space-y-6">
                    <div className="flex items-center space-x-2 border-b border-zinc-900 pb-3">
                        <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
                        <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                            Quick Console Shortcuts
                        </h2>
                    </div>

                    {/* Quick Actions grids */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/dashboard/products/add"
                            className="group rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700/80 hover:bg-zinc-900/40 transition-all duration-200 flex flex-col justify-between h-[140px]"
                        >
                            <span className="font-mono text-[9px] uppercase text-emerald-500 font-bold">Upload Center</span>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">Add Digital Product &rarr;</h3>
                                <p className="text-xs text-zinc-500 mt-1">Publish new code templates, design libraries, or master guides.</p>
                            </div>
                        </Link>

                        <Link
                            href="/dashboard/products/manage"
                            className="group rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700/80 hover:bg-zinc-900/40 transition-all duration-200 flex flex-col justify-between h-[140px]"
                        >
                            <span className="font-mono text-[9px] uppercase text-cyan-500 font-bold">Catalog Directory</span>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Manage Products &rarr;</h3>
                                <p className="text-xs text-zinc-500 mt-1">List, review details, or safely delete items from live catalog databases.</p>
                            </div>
                        </Link>

                        <Link
                            href="/dashboard/analytics"
                            className="group rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700/80 hover:bg-zinc-900/40 transition-all duration-200 flex flex-col justify-between h-[140px]"
                        >
                            <span className="font-mono text-[9px] uppercase text-violet-500 font-bold">Business intelligence</span>
                            <div>
                                <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">View Analytics &rarr;</h3>
                                <p className="text-xs text-zinc-500 mt-1">Audit sales summaries, directory statistics, and monthly trends.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Acquisitions */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/5 p-6 space-y-4">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5 pb-2 border-b border-zinc-900">
                            <ShoppingBag className="h-4.5 w-4.5 text-emerald-500" />
                            <span>Purchase History ({products.length})</span>
                        </h3>

                        {loading ? (
                            <div className="text-center py-6 text-zinc-500 text-xs">
                                Verifying licenses...
                            </div>
                        ) : products.length > 0 ? (
                            <div className="space-y-3.5">
                                {/* Mapped products list container */}
                                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
                                    {products.map((item) => (
                                        <div key={item._id} className="flex items-center justify-between p-3 rounded bg-zinc-900/25 border border-zinc-800">
                                            <div>
                                                <h4 className="text-xs font-bold text-white">{item.productTitle}</h4>
                                                <span className="font-mono text-[9px] text-zinc-500 uppercase">
                                                    Amount: ${item.totalAmount} &bull; Standard Developer License
                                                </span>
                                            </div>
                                            <a
                                                href={item.downloadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-8 items-center space-x-1.5 rounded bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 px-3 text-[10px] font-bold text-zinc-300 transition-colors border border-zinc-700 cursor-pointer"
                                            >
                                                <Download className="h-3 w-3" />
                                                <span>Download</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center pt-2">
                                    <Link href="/products" className="inline-flex items-center space-x-1 text-xs text-emerald-450 hover:text-emerald-350">
                                        <span>Acquire More Assets</span>
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-6 text-zinc-500 text-xs">
                                No orders identified in this sandbox session.
                            </div>
                        )}
                    </div>

                    {/* Saved Bookmarks */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/5 p-6 space-y-4">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5 pb-2 border-b border-zinc-900">
                            <Heart className="h-4.5 w-4.5 text-emerald-500" />
                            <span>Saved Bookmarks</span>
                        </h3>

                        <div className="text-center py-8 text-zinc-500 text-xs space-y-3">
                            <p>Bookmark premium dashboard templates and design tools on their detail pages to view them here.</p>
                            <Link
                                href="/products"
                                className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                            >
                                <span>Browse Products Directory</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Useful system guide */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/10 p-5 flex items-start space-x-3.5">
                <HelpCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs space-y-1">
                    <p className="font-bold text-white">Need support regarding customized licenses?</p>
                    <p className="text-zinc-500 leading-relaxed">
                        All sandbox transactions represent simulated distributions. For actual licensing packages, enterprise agreements, or technical support, please lodge an inquiry form on our <Link href="/contact" className="text-emerald-400 hover:underline">Contact Page</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DashboardOverview;