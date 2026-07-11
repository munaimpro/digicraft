// Product interface
export interface Product {
    id: string;
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