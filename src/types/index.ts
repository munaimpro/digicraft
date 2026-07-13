// Product interface
export interface Product {
    _id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: string;
    price: number;
    imageUrl: string;
    downloadUrl: string;
    fileFormat: string;
    fileSize: string;
    rating: number;
    ratingCount: number;
    createdAt: string;
    sellerId?: string;
}

// User Interface
export interface User {
    _id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: 'user' | 'seller' | 'admin';
    createdAt: string;
}