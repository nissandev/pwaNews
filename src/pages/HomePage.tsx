import { useEffect, useState } from "react";
import { HeroNews } from "@/features/news/components/HeroNews";
import { NewsGrid } from "@/features/news/components/NewsGrid";
import { NewsCard } from "@/features/news/components/NewsCard";
import { dividendApi } from "@/services/dividendApi";
import type { NewsItem } from "@/features/news/types";
import { Loader2 } from "lucide-react";

export default function HomePage() {
    const [heroNews, setHeroNews] = useState<NewsItem | null>(null);
    const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                // Fetch recent dividends
                const dividends = await dividendApi.getRecentDividends();
                const newsItems = dividends.map(dividendApi.adaptToNewsItem);

                if (newsItems.length > 0) {
                    setHeroNews(newsItems[0]);
                    setLatestNews(newsItems.slice(1));
                }
            } catch (err) {
                console.error("Failed to fetch dividends:", err);
                setError("Failed to load dividends. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (error || !heroNews) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] text-red-500">
                {error || "No dividends available at the moment."}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <HeroNews news={heroNews} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <NewsGrid news={latestNews} title="Recent Dividends" />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-4 border-l-4 border-primary pl-2">Top Yields</h3>
                        <div className="flex flex-col gap-4">
                            {latestNews.slice(0, 3).map(news => (
                                <NewsCard key={news.id} news={news} variant="horizontal" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg">
                        <img
                            src="https://placehold.co/300x250?text=Advertisement"
                            alt="Ad"
                            className="w-full mix-blend-multiply"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
