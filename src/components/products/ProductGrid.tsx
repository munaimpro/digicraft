'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, Ban } from 'lucide-react';

interface ProductGridProps {
    products: Product[];
    loading: boolean;
}

const ProductGrid = ({ products, loading }: ProductGridProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Reset pagination if the total list changes (like from filters)
    React.useEffect(() => {
        setTimeout(() => {
            setCurrentPage(1);
        }, 0);
    }, [products.length]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            window.scrollTo({ top: 180, behavior: 'smooth' });
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo({ top: 180, behavior: 'smooth' });
        }
    };

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-zinc-900 bg-zinc-900/30 overflow-hidden animate-pulse flex flex-col h-[380px] space-y-4 p-5"
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
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/10 p-12 text-center flex flex-col items-center justify-center space-y-3 min-h-75">
                <div className="rounded-full bg-zinc-900 p-3.5 border border-zinc-800 text-zinc-500">
                    <Ban className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">No Assets Found</h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                    No matching products were found based on your current filters or search terms. Try loosening your specifications or search keyword.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Search results status */}
            <div className="flex items-center justify-between font-mono text-[11px] text-zinc-550 border-b border-zinc-900 pb-3">
                <span>Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, products.length)} of {products.length} verified assets</span>
                <span>Page {currentPage} of {totalPages || 1}</span>
            </div>

            {/* Grid of Product Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {paginatedProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {/* Pagination component */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 pt-6 border-t border-zinc-900">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="flex h-9 items-center space-x-1 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 disabled:opacity-30 transition-all duration-150"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Prev</span>
                    </button>

                    {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => {
                                    setCurrentPage(pageNum);
                                    window.scrollTo({ top: 180, behavior: 'smooth' });
                                }}
                                className={`h-9 w-9 rounded-md border text-xs font-bold transition-all duration-150 ${currentPage === pageNum
                                        ? 'bg-emerald-600 border-emerald-500 text-white'
                                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="flex h-9 items-center space-x-1 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 disabled:opacity-30 transition-all duration-150"
                    >
                        <span>Next</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    );
}


export default ProductGrid;