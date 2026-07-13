'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-products`);
                const data = await response.json();
                console.log(data);
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

    return (
        <section className="bg-zinc-950 py-16 sm:py-20 border-b border-zinc-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div className="space-y-3">
                        <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                            <Sparkles className="h-4 w-4" />
                            <span>Premium Drop</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Featured Source Assets
                        </h2>
                        <p className="text-zinc-450 text-sm max-w-xl">
                            Explore our highest rated engineering architectures, curated Figma files, and development resources. Verified for immediate deployment.
                        </p>
                    </div>
                    <Link
                        href="/products"
                        className="inline-flex items-center space-x-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors self-start md:self-auto"
                    >
                        <span>Explore Full Catalog</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl border border-zinc-850 bg-zinc-900/30 overflow-hidden animate-pulse flex flex-col h-[380px] space-y-4 p-5"
                            >
                                <div className="w-full aspect-video bg-zinc-800/40 rounded-lg" />
                                <div className="h-5 bg-zinc-800/40 rounded w-2/3" />
                                <div className="space-y-2">
                                    <div className="h-3.5 bg-zinc-800/40 rounded w-full" />
                                    <div className="h-3.5 bg-zinc-800/40 rounded w-4/5" />
                                </div>
                                <div className="h-10 bg-zinc-800/40 rounded-md w-full mt-auto" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default FeaturedProducts;
