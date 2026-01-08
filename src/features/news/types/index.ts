export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    category: string;
    imageUrl: string;
    timestamp: string;
    author?: string;
    isPremium?: boolean;
}

export interface NewsCategory {
    id: string;
    name: string;
    slug: string;
}
