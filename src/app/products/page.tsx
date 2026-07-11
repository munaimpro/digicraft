import React, { Suspense } from 'react';
import { Compass } from 'lucide-react';
import ExploreProducts from '@/components/products/ExploreProducts';

const PorductPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 py-12 sm:py-16 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
                    {/* Headline title block */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                            <Compass className="h-4 w-4" />
                            <span>Full Asset Indexes</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                            Explore Our Digital Catalog
                        </h1>
                        <p className="text-zinc-400 text-sm max-w-xl">
                            Filter by category, search by term, or sort by rating to locate the perfect vetted boilerplate or design asset for your current cycle.
                        </p>
                    </div>

                    <Suspense
                        fallback={
                            <div className="text-center py-12 text-xs font-mono text-zinc-500">
                                Loading Search Engines...
                            </div>
                        }
                    >
                        <ExploreProducts />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}

export default PorductPage