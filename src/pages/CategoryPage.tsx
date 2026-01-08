import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsGrid } from "@/features/news/components/NewsGrid";
import { dividendApi } from "@/services/dividendApi";
import type { NewsItem } from "@/features/news/types";
import { Loader2 } from "lucide-react";

export default function CategoryPage() {
    const { id } = useParams();
    const title = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Category';
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryNews = async () => {
            // Note: The Dividend API doesn't strictly support category search like NewsAPI.
            // We will fetch recent dividends to ensure content is shown.

            try {
                setLoading(true);
                const dividends = await dividendApi.getRecentDividends();
                const newsItems = dividends.map(dividendApi.adaptToNewsItem);
                setNews(newsItems);
            } catch (err) {
                console.error("Failed to fetch dividends:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryNews();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold border-b pb-4">{title} Dividends</h1>
            </div>

            {news.length > 0 ? (
                <>
                    <NewsGrid news={news} />
                    <div className="mt-8">
                        {/* Load more button or pagination could go here */}
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-500 py-10">
                    No dividends found.
                </div>
            )}
        </div>
    );
}
