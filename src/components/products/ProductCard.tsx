'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, FileCode, ShoppingBag, Eye, Calendar } from 'lucide-react';
import { Product } from '@/types';


interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    // Extract month and year from ISO date
    const formatDate = (isoString: string) => {
        try {
            const date = new Date(isoString);
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        } catch (e) {
            return 'Recent';
        }
    };

    return (
        <div className="group flex flex-col h-full rounded-xl border border-zinc-900 bg-zinc-900/10 overflow-hidden hover:border-emerald-500/30 hover:bg-zinc-900/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.08)] relative">
            {/* Category Tag on Card */}
            <span className="absolute top-3 left-3 z-20 rounded bg-zinc-950/90 border border-zinc-900 px-2.5 py-1 text-[9px] font-mono font-black tracking-wider uppercase text-emerald-400 backdrop-blur-md shadow-md">
                {product.category}
            </span>

            {/* Image Preview Container */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-900/80 bg-zinc-950">
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes="(max-w-720px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                />
                {/* Hover overlay with a fast action icon */}
                <div className="absolute inset-0 bg-zinc-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-emerald-600/90 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                        <Eye className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-5 space-y-3.5">
                <div className="space-y-1">
                    <h3 className="text-base font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {product.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed min-h-[36px]">
                        {product.shortDescription}
                    </p>
                </div>

                {/* Rating and File Format specifications */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-zinc-900/60">
                    <div className="flex items-center space-x-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
                        <span className="font-bold text-zinc-300">{product.rating}</span>
                        <span className="text-[10px]">({product.ratingCount})</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="rounded-md border border-zinc-900 bg-zinc-950 px-1.5 py-0.5 text-zinc-400">
                            {product.fileFormat}
                        </span>
                        <span className="text-zinc-500">{product.fileSize}</span>
                    </div>
                </div>

                {/* Price, Release Date, and Button Section */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-900/60 mt-auto">
                    <div className="flex flex-col">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 flex items-center gap-0.5">
                            <Calendar className="h-2.5 w-2.5" />
                            {formatDate(product.createdAt)}
                        </span>
                        <span className="font-mono text-lg font-black text-white">
                            ${product.price}
                        </span>
                    </div>

                    <Link
                        href={`/products/${product._id}`}
                        id={`btn-view-${product._id}`}
                        className="inline-flex items-center space-x-1 rounded bg-zinc-950 hover:bg-emerald-500 border border-zinc-900 hover:border-emerald-400 px-3.5 py-2.5 text-xs font-bold text-zinc-300 hover:text-zinc-950 transition-all duration-300 shadow shadow-black"
                    >
                        <span>View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;