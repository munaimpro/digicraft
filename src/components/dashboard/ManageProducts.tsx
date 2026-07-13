'use client';

import React, { useState, useEffect } from 'react';
import { FolderHeart, ShieldAlert } from 'lucide-react';
import { Product } from '@/types';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import ProductTable from './ProductTable';

const ManageProducts = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch all products
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

    // Update lists reactively upon deletion success
    const handleDeleteSuccess = (_id: string) => {
        setProducts((prev) => prev.filter((p) => p._id !== _id));
    };

    const isAuthorized = user?.role === 'admin' || user?.role === 'seller';

    if (!isAuthorized) {
        return (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/10 p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-87.5">
                <div className="rounded-full bg-zinc-900 p-4 border border-zinc-800 text-rose-500">
                    <ShieldAlert className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-white">Access Unauthorized</h2>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                    Your current account levels do not permit access to our catalogue registry files. Only registered Sellers and Administrators can edit assets.
                </p>
                <Link
                    href="/dashboard"
                    className="rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
                >
                    Return to Console Home
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Title block */}
            <div className="space-y-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-3">
                    <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                        <FolderHeart className="h-4 w-4" />
                        <span>Management Console</span>
                    </div>
                    <h1 className="text-3xl font-black text-white leading-tight">
                        Manage Digital Assets
                    </h1>
                    <p className="text-zinc-500 text-sm max-w-xl">
                        Review live published statistics, trigger specifications details page, or safely delete individual records from catalog indexes.
                    </p>
                </div>

                <Link
                    href="/dashboard/products/add"
                    className="rounded bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-zinc-950 shadow transition-colors self-start sm:self-auto cursor-pointer"
                >
                    + Add New Asset
                </Link>
            </div>

            {/* Main product management matrix table */}
            {loading ? (
                <div className="space-y-4 animate-pulse">
                    <div className="h-10 bg-zinc-900 rounded-lg w-full" />
                    <div className="h-62.5 bg-zinc-900 rounded-xl w-full" />
                </div>
            ) : (
                <ProductTable
                    products={user?.role === 'admin' ? products : products.filter((p) => p.sellerId === user?.id)}
                    onDeleteSuccess={handleDeleteSuccess}
                />
            )}
        </div>
    );
}

export default ManageProducts;