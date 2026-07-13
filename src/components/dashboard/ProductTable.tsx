'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { Eye, Trash2, ShieldAlert, FolderHeart } from 'lucide-react';

interface ProductTableProps {
    products: Product[];
    onDeleteSuccess: (_id: string) => void;
}

const ProductTable = ({ products, onDeleteSuccess }: ProductTableProps) => {
    const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState('');

    const handleDeleteConfirm = async () => {
        if (!deleteTargetId) return;

        setDeleting(true);
        setError('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/digicraft-products/${deleteTargetId}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            if (response.ok && data.success) {
                onDeleteSuccess(deleteTargetId);
                setDeleteTargetId(null);
            } else {
                setError(data.error || 'Failed to remove product');
            }
        } catch (e) {
            setError('An unexpected error occurred during asset removal.');
        } finally {
            setDeleting(false);
        }
    };

    if (products.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-850 bg-zinc-900/10 p-12 text-center flex flex-col items-center justify-center space-y-3 min-h-62.5">
                <div className="rounded-full bg-zinc-900 p-3 border border-zinc-800 text-zinc-500">
                    <FolderHeart className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-white">No Assets Available</h3>
                <p className="text-xs text-zinc-400">
                    You have not published any digital items yet. Click &quot;Add Product&quot; to launch your first asset.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Table grid wrapper */}
            <div className="overflow-x-auto rounded-xl border border-zinc-850 bg-zinc-900/5 shadow-lg shadow-black/30">
                <table className="w-full min-w-160 text-left border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-850 bg-zinc-900/20 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            <th className="py-4 px-5">Preview</th>
                            <th className="py-4 px-5">Asset Details</th>
                            <th className="py-4 px-5">Category</th>
                            <th className="py-4 px-5">Format & Size</th>
                            <th className="py-4 px-5">Price</th>
                            <th className="py-4 px-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900/40 text-sm">
                        {products.map((product) => (
                            <tr key={product._id} className="hover:bg-zinc-900/10 transition-colors">
                                {/* Thumbnail Image column */}
                                <td className="py-3.5 px-5">
                                    <div className="relative h-11 w-16 rounded border border-zinc-800 bg-zinc-950 overflow-hidden">
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.title}
                                            fill
                                            className="object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </td>

                                {/* Title & Short description column */}
                                <td className="py-3.5 px-5 max-w-60">
                                    <p className="font-bold text-white truncate">{product.title}</p>
                                    <p className="text-xs text-zinc-450 truncate">{product.shortDescription}</p>
                                </td>

                                {/* Category tag column */}
                                <td className="py-3.5 px-5">
                                    <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-mono text-[10px] uppercase font-semibold text-emerald-400">
                                        {product.category}
                                    </span>
                                </td>

                                {/* File size & format metadata column */}
                                <td className="py-3.5 px-5 font-mono text-xs text-zinc-400">
                                    <span className="text-zinc-300 font-bold">{product.fileFormat}</span>
                                    <span className="text-zinc-550 block text-[10px]">{product.fileSize}</span>
                                </td>

                                {/* Price column */}
                                <td className="py-3.5 px-5 font-mono font-black text-white text-base">
                                    ${product.price}
                                </td>

                                {/* Direct buttons Column */}
                                <td className="py-3.5 px-5 text-right space-x-1">
                                    <Link
                                        href={`/products/${product._id}`}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                                        title="View details"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => setDeleteTargetId(product._id)}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded border border-rose-950/25 bg-rose-950/10 text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 transition-colors"
                                        title="Delete product"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Elegant Deletion Confirmation Modal Overlay */}
            {deleteTargetId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-6 space-y-4 shadow-xl">
                        <div className="flex items-center space-x-2 text-rose-400">
                            <ShieldAlert className="h-5 w-5" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-wider">
                                Remove Asset Confirmation
                            </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            Are you absolutely sure you want to remove this digital asset from the catalog directory? This action is irreversible.
                        </p>

                        {error && (
                            <p className="text-xs text-rose-400 font-semibold">{error}</p>
                        )}

                        <div className="flex justify-end space-x-2 pt-2 border-t border-zinc-900">
                            <button
                                onClick={() => setDeleteTargetId(null)}
                                className="rounded border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
                                disabled={deleting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="rounded bg-rose-600 hover:bg-rose-500 disabled:opacity-50 px-4 py-1.5 text-xs font-bold text-white transition-colors"
                                disabled={deleting}
                            >
                                {deleting ? 'Removing...' : 'Confirm Remove'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductTable;