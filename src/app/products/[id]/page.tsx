import React from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import ProductDetails from '@/components/products/ProductDetails';

interface ProductDetailPageProps {
    params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailPageProps) => {
    const { id } = await params;

    // Getting product details
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/digicraft-product/${id}`);
    const product = await response.json();
    console.log(product);

    if (!product) {
        return (
            <div className="flex flex-col min-h-screen">
                
                <main className="flex-1 flex items-center justify-center bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
                    <div className="rounded-xl border border-zinc-900 bg-zinc-900/5 p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-md">
                        <div className="rounded-full bg-zinc-900 p-4 border border-zinc-800 text-rose-500">
                            <HelpCircle className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Asset Not Found</h2>
                        <p className="text-xs sm:text-sm text-zinc-400">
                            The digital asset with the specified identifier could not be located in our marketplace indexes.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center space-x-1.5 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Assets Catalog</span>
                        </Link>
                    </div>
                </main>
                
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            
            <main className="flex-1 bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <ProductDetails product={product} />
                </div>
            </main>
            
        </div>
    );
}

export default ProductDetailsPage;