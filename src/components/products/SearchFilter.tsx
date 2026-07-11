'use client';

import { Search, SlidersHorizontal, ArrowUpDown, Tag, CircleDollarSign } from 'lucide-react';

interface SearchFilterProps {
    search: string;
    setSearch: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    priceRange: string;
    setPriceRange: (val: string) => void;
    sortBy: string;
    setSortBy: (val: string) => void;
    categories: string[];
}

const SearchFilter = ({
    search,
    setSearch,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    categories,
}: SearchFilterProps) => {
    return (
        <div className="rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
            {/* Header title */}
            <div className="flex items-center space-x-2 text-zinc-400 pb-3 border-b border-zinc-900">
                <SlidersHorizontal className="h-4.5 w-4.5 text-emerald-500" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Filter Assets Catalog
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Search bar Column */}
                <div className="md:col-span-4 relative">
                    <label htmlFor="search-input" className="sr-only">Search assets</label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="h-4 w-4 text-zinc-500" />
                    </div>
                    <input
                        id="search-input"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search assets by title or keyword..."
                        className="w-full rounded-md border border-zinc-900 bg-zinc-950/80 py-2.5 pl-9 pr-4 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 focus:outline-none transition-all duration-200"
                    />
                </div>

                {/* Category Selection Column */}
                <div className="md:col-span-3 relative">
                    <label htmlFor="category-select" className="sr-only">Filter by category</label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Tag className="h-4 w-4 text-zinc-500" />
                    </div>
                    <select
                        id="category-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-md border border-zinc-900 bg-zinc-950/80 py-2.5 pl-9 pr-4 text-xs sm:text-sm text-zinc-100 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 focus:outline-none appearance-none transition-all duration-200"
                    >
                        <option value="All">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price filter Column */}
                <div className="md:col-span-2 relative">
                    <label htmlFor="price-select" className="sr-only">Filter by price</label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <CircleDollarSign className="h-4 w-4 text-zinc-500" />
                    </div>
                    <select
                        id="price-select"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full rounded-md border border-zinc-900 bg-zinc-950/80 py-2.5 pl-9 pr-4 text-xs sm:text-sm text-zinc-100 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 focus:outline-none appearance-none transition-all duration-200"
                    >
                        <option value="All">Any Price</option>
                        <option value="Under25">Under $25</option>
                        <option value="25to50">$25 to $50</option>
                        <option value="Over50">Over $50</option>
                    </select>
                </div>

                {/* Sorting Column */}
                <div className="md:col-span-3 relative">
                    <label htmlFor="sort-select" className="sr-only">Sort products</label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <ArrowUpDown className="h-4 w-4 text-zinc-500" />
                    </div>
                    <select
                        id="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full rounded-md border border-zinc-900 bg-zinc-950/80 py-2.5 pl-9 pr-4 text-xs sm:text-sm text-zinc-100 focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/40 focus:outline-none appearance-none transition-all duration-200"
                    >
                        <option value="newest">Newest Releases</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;
