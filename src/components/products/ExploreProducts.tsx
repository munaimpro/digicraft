'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '@/types';
import SearchFilter from './SearchFilter';
import ProductGrid from './ProductGrid';

const ExploreProducts = () => {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';

    // State managers
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Filter States
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState('All');
    const [sortBy, setSortBy] = useState('newest');

    // Load category from url parameters if changed
    useEffect(() => {
        const catParam = searchParams.get('category');
        if (catParam) {
            setTimeout(() => {
                setCategory(catParam);
            }, 0);
        }
    }, [searchParams]);

    // Fetch product list
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-products`);
                const data = await response.json();
                if (data) {
                    setProducts(data);
                    setFilteredProducts(data);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    // Handle client-side filtering and sorting reactively
    useEffect(() => {
        let result = [...products];

        // 1. Filter by Category
        if (category !== 'All') {
            result = result.filter(
                (p) => p.category.toLowerCase() === category.toLowerCase()
            );
        }

        // 2. Filter by Search string
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.shortDescription.toLowerCase().includes(q) ||
                    p.fullDescription.toLowerCase().includes(q)
            );
        }

        // 3. Filter by Price Range
        if (priceRange !== 'All') {
            if (priceRange === 'Under25') {
                result = result.filter((p) => p.price < 25);
            } else if (priceRange === '25to50') {
                result = result.filter((p) => p.price >= 25 && p.price <= 50);
            } else if (priceRange === 'Over50') {
                result = result.filter((p) => p.price > 50);
            }
        }

        // 4. Sort results
        if (sortBy === 'newest') {
            result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        } else if (sortBy === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        setTimeout(() => {
            setFilteredProducts(result);
        }, 0);
    }, [products, search, category, priceRange, sortBy]);

    const categories = ['Template', 'UI Kit', 'E-book', 'Icon Pack', 'Font'];

    return (
        <div className="space-y-8">
            {/* SearchFilter Controls */}
            <SearchFilter
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
                categories={categories}
            />

            {/* Grid displaying filtered items */}
            <ProductGrid products={filteredProducts} loading={loading} />
        </div>
    );
}

export default ExploreProducts;