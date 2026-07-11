'use client';

import React, { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Cell,
    PieChart,
    Pie
} from 'recharts';
import { BarChart3, TrendingUp, DollarSign, Archive, Compass } from 'lucide-react';
import { Product } from '@/types';

interface AnalyticsChartProps {
    products: Product[];
}

const AnalyticsChart = ({ products }: AnalyticsChartProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMounted(true);
        }, 0);
    }, []);

    // Calculate dynamic stats
    const totalProductsCount = products.length;
    const totalRevenueMock = products.reduce((acc, p) => acc + p.price * (p.ratingCount + 10), 0); // Simulated download sales

    // Group products by category
    const categoriesMap = products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categoryData = Object.entries(categoriesMap).map(([name, value]) => ({
        name,
        value,
    }));

    // Scaled revenue history data to align beautifully with the specific products of the seller
    const baseScale = totalProductsCount > 0 ? (totalRevenueMock / 11500) : 0;
    const revenueHistory = [
        { name: 'Jan', revenue: Math.round(1800 * baseScale) },
        { name: 'Feb', revenue: Math.round(2400 * baseScale) },
        { name: 'Mar', revenue: Math.round(2100 * baseScale) },
        { name: 'Apr', revenue: Math.round(3600 * baseScale) },
        { name: 'May', revenue: Math.round(3100 * baseScale) },
        { name: 'Jun', revenue: Math.round(4200 * baseScale) },
        { name: 'Jul', revenue: Math.round(totalRevenueMock * 0.45) },
    ];

    const COLORS = ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ec4899'];

    if (!mounted) {
        return (
            <div className="space-y-6 animate-pulse">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="h-[100px] rounded-xl bg-zinc-900 border border-zinc-850" />
                    <div className="h-[100px] rounded-xl bg-zinc-900 border border-zinc-850" />
                    <div className="h-[100px] rounded-xl bg-zinc-900 border border-zinc-850" />
                </div>
                <div className="h-[250px] rounded-xl bg-zinc-900 border border-zinc-850" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Total catalog products */}
                <div className="rounded-xl border border-zinc-850 bg-zinc-900/20 p-5 flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">Live Catalog Size</span>
                        <p className="text-2xl font-black text-white">{totalProductsCount} Assets</p>
                        <p className="text-[10px] text-emerald-400">Published in directories</p>
                    </div>
                    <div className="rounded-md bg-zinc-950 p-2.5 border border-zinc-800 text-emerald-500">
                        <Archive className="h-5 w-5" />
                    </div>
                </div>

                {/* Total simulated earnings */}
                <div className="rounded-xl border border-zinc-850 bg-zinc-900/20 p-5 flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">Cumulative Sales Volume</span>
                        <p className="text-2xl font-black text-white">${totalRevenueMock.toLocaleString()}</p>
                        <p className="text-[10px] text-emerald-400">+12.4% from last quarter</p>
                    </div>
                    <div className="rounded-md bg-zinc-950 p-2.5 border border-zinc-800 text-emerald-500">
                        <DollarSign className="h-5 w-5" />
                    </div>
                </div>

                {/* Categories count */}
                <div className="rounded-xl border border-zinc-850 bg-zinc-900/20 p-5 flex items-center justify-between">
                    <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-zinc-500">Core Directory Nodes</span>
                        <p className="text-2xl font-black text-white">{categoryData.length} Categories</p>
                        <p className="text-[10px] text-zinc-400">Unified layout spacing</p>
                    </div>
                    <div className="rounded-md bg-zinc-950 p-2.5 border border-zinc-800 text-emerald-500">
                        <Compass className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Recharts Displays */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Trend LineChart */}
                <div className="rounded-xl border border-zinc-850 bg-zinc-900/5 p-5 space-y-4">
                    <div className="flex items-center space-x-2 pb-3 border-b border-zinc-850/60">
                        <TrendingUp className="h-4.5 w-4.5 text-emerald-500" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                            Monthly Platform Performance
                        </h3>
                    </div>
                    <div className="h-[220px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                                <XAxis dataKey="name" stroke="#52525b" fontSize={11} />
                                <YAxis stroke="#52525b" fontSize={11} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }}
                                    labelStyle={{ color: '#a1a1aa' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#10b981"
                                    strokeWidth={2.5}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Share BarChart */}
                <div className="rounded-xl border border-zinc-850 bg-zinc-900/5 p-5 space-y-4">
                    <div className="flex items-center space-x-2 pb-3 border-b border-zinc-850/60">
                        <BarChart3 className="h-4.5 w-4.5 text-cyan-450" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                            Product Distribution by Category
                        </h3>
                    </div>
                    <div className="h-[220px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                                <XAxis dataKey="name" stroke="#52525b" fontSize={11} />
                                <YAxis stroke="#52525b" fontSize={11} allowDecimals={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }}
                                    labelStyle={{ color: '#a1a1aa' }}
                                />
                                <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]}>
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalyticsChart;