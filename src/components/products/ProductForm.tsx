'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const ProductForm = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    // State variables for form fields
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [category, setCategory] = useState('Template');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [fileFormat, setFileFormat] = useState('ZIP');
    const [fileSize, setFileSize] = useState('15 MB');

    // Status indicators
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Pre-fill sample values to make testing incredibly pleasant
    const handlePreFill = () => {
        setTitle('React Tailwind Multi-SaaS Boilerplate');
        setShortDescription('Next.js 15 starter package with multi-tenant workspaces, Stripe billing, and database schemas.');
        setFullDescription('A production-ready SaaS boilerplate crafted with React, Next.js 15, and Tailwind CSS. Comes fully configured with secure multi-tenant path routing, modular workspace dashboards, robust transactional emails, and Stripe checkout webhooks out-of-the-box. Includes strict TypeScript typings and Jest unit test suites.');
        setCategory('Template');
        setPrice('49');
        setImageUrl('https://picsum.photos/seed/prefilled/600/400');
        setDownloadUrl('https://example.com/download/saas-boilerplate.zip');
        setFileFormat('ZIP');
        setFileSize('14.2 MB');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        if (!title || !shortDescription || !fullDescription || !category || !price || !imageUrl || !downloadUrl) {
            setError('Please fill in all required fields');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/digicraft-product`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    shortDescription,
                    fullDescription,
                    category,
                    price: Number(price),
                    imageUrl,
                    downloadUrl,
                    fileFormat,
                    fileSize,
                }),
            });

            const data = await res.json();
            if (res.ok && data.success) {
                setSuccess(true);
                setTimeout(() => {
                    router.push('/dashboard/products/manage');
                    router.refresh();
                }, 1500);
            } else {
                setError(data.error || 'Failed to publish asset');
            }
        } catch (e) {
            setError('An unexpected communication error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const categories = ['Template', 'UI Kit', 'E-book', 'Icon Pack', 'Font'];

    return (
        <div className="space-y-6">
            {/* Upper Pre fill alert block */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-500 tracking-wider flex items-center gap-1 justify-center sm:justify-start">
                        <Sparkles className="h-3.5 w-3.5" />
                        Product Testing Sandbox
                    </span>
                    <p className="text-xs text-zinc-400">
                        Click the testing helper button to auto-fill the product form with valid asset documentation in one click.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handlePreFill}
                    className="rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3.5 py-1.5 text-xs font-bold text-zinc-200 transition-colors flex-shrink-0"
                >
                    Auto-fill Sample Asset
                </button>
            </div>

            {/* Main Form container */}
            <form onSubmit={handleSubmit} className="rounded-xl border border-zinc-900 bg-zinc-900/5 p-6 space-y-6">
                {error && (
                    <div className="rounded-lg border border-rose-500/20 bg-rose-950/15 p-4 flex items-center space-x-2 text-xs font-semibold text-rose-400">
                        <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/15 p-4 flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Asset published successfully! Transferring to manager...</span>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title Field */}
                    <div className="space-y-2">
                        <label htmlFor="form-title" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Asset Title <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-title"
                            type="text"
                            required
                            placeholder="e.g. Modern Admin Dashboard"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="space-y-2">
                        <label htmlFor="form-category" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Core Category <span className="text-rose-500">*</span>
                        </label>
                        <select
                            id="form-category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none appearance-none"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Short Description */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="form-short-desc" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Short Summary Description <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-short-desc"
                            type="text"
                            required
                            placeholder="e.g. Responsive templates with clean code structures (max 120 characters)"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                            maxLength={120}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Full Description */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="form-full-desc" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Full Overview Documentation <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                            id="form-full-desc"
                            required
                            rows={4}
                            placeholder="Detail full specifications, package integrations, installation guides, and licensing terms."
                            value={fullDescription}
                            onChange={(e) => setFullDescription(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Price Field */}
                    <div className="space-y-2">
                        <label htmlFor="form-price" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Price (USD) <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-price"
                            type="number"
                            required
                            min={0}
                            placeholder="e.g. 29"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* File Format */}
                    <div className="space-y-2">
                        <label htmlFor="form-format" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            File Format <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-format"
                            type="text"
                            required
                            placeholder="e.g. ZIP, PDF, FIG, OTF"
                            value={fileFormat}
                            onChange={(e) => setFileFormat(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* File Size */}
                    <div className="space-y-2">
                        <label htmlFor="form-size" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            File Package Size <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-size"
                            type="text"
                            required
                            placeholder="e.g. 15.4 MB"
                            value={fileSize}
                            onChange={(e) => setFileSize(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Preview Image URL */}
                    <div className="space-y-2">
                        <label htmlFor="form-image" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Preview Image URL <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-image"
                            type="url"
                            required
                            placeholder="e.g. https://picsum.photos/seed/dashboard/600/400"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Download URL */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="form-download" className="block text-xs font-bold uppercase tracking-wider text-zinc-450 font-mono">
                            Secure Asset Download URL <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="form-download"
                            type="url"
                            required
                            placeholder="e.g. https://example.com/download/saas-boilerplate.zip"
                            value={downloadUrl}
                            onChange={(e) => setDownloadUrl(e.target.value)}
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-zinc-900 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-md bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-6 py-2.5 text-sm font-semibold text-white shadow transition-colors flex items-center space-x-2"
                    >
                        <PlusCircle className="h-4 w-4" />
                        <span>{loading ? 'Publishing...' : 'Publish Digital Asset'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;