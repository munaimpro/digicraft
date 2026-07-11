'use client';

import { PlusCircle, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import ProductForm from '../products/ProductForm';

const AddProduct = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user

    const isAuthorized = user?.role === 'admin' || user?.role === 'seller';

    if (!isAuthorized) {
        return (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/10 p-12 text-center flex flex-col items-center justify-center space-y-4 min-h-[350px]">
                <div className="rounded-full bg-zinc-900 p-4 border border-zinc-800 text-rose-500">
                    <ShieldAlert className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-white">Access Unauthorized</h2>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                    Your current account tier does not have clearance to publish digital items. Only registered Sellers and Administrators can upload assets.
                </p>
                <Link
                    href="/dashboard"
                    className="rounded bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
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
                    <PlusCircle className="h-4 w-4" />
                    <span>Upload Center</span>
                </div>
                <h1 className="text-3xl font-black text-white leading-tight">
                    Publish New Digital Asset
                </h1>
                <p className="text-zinc-500 text-sm max-w-xl">
                    Enter metadata metrics, secure file package pathways, and full developer documentation to release your product in directories.
                </p>
            </div>

            {/* Main product publisher form */}
            <ProductForm />
        </div>
    );
}

export default AddProduct;