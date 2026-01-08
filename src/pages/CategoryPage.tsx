import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsGrid } from "@/features/news/components/NewsGrid";
import { newsApi } from "@/services/newsApi";
import type { NewsItem } from "@/features/news/types";
import { Loader2 } from "lucide-react";

export default function CategoryPage() {
    const { id } = useParams();
    const title = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Category';
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryNews = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const articles = await newsApi.searchNews(id);
                const newsItems = articles.map(newsApi.adaptToNewsItem);
                setNews(newsItems);
            } catch (err) {
                console.error("Failed to fetch category news:", err);
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
                <h1 className="text-3xl font-bold border-b pb-4">{title} News</h1>
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
                    No news found for this category.
                </div>
            )}
        </div>
    );
}
