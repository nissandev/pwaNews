import type { NewsItem } from "@/features/news/types";

export const HERO_NEWS: NewsItem = {
    id: '1',
    title: "Economic reforms showing positive signs, report says",
    summary: "The latest economic indicators suggest a steady recovery path as new policies take effect across the banking and industrial sectors.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timestamp: "2 hours ago",
    author: "Business Desk"
};

export const LATEST_NEWS: NewsItem[] = [
    {
        id: '2',
        title: "National cricket team announces squad for upcoming series",
        summary: "Several young players have been included in the 15-man squad for the tour next month.",
        category: "Sports",
        imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        timestamp: "4 hours ago"
    },
    {
        id: '3',
        title: "New metro rail station opens for public commute",
        summary: "Commuters express relief as the new station at the city center becomes operational starting today.",
        category: "Bangladesh",
        imageUrl: "https://images.unsplash.com/photo-1556382363-8967ac2b36f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        timestamp: "5 hours ago"
    },
    {
        id: '4',
        title: "Winter festival begins in Chittagong Hill Tracts",
        summary: "Thousands of tourists flock to the hills to witness the vibrant cultural festivities.",
        category: "Lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1544641974-9f76a0d4c803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        timestamp: "6 hours ago"
    },
    {
        id: '5',
        title: "Global tech giants invest in local startups",
        summary: "Venture capital funding hits a new high in the technology sector this quarter.",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        timestamp: "8 hours ago"
    }
];
