import type { NewsItem } from "@/features/news/types";
import { NewsCard } from "./NewsCard";

interface NewsGridProps {
    news: NewsItem[];
    title?: string;
}

export function NewsGrid({ news, title }: NewsGridProps) {
    return (
        <div className="py-6">
            {title && (
                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
                    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary -mb-2.5 pb-2 inline-block">
                        {title}
                    </h2>
                    <a href="#" className="text-sm text-primary font-medium hover:underline">
                        View All
                    </a>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {news.map((item) => (
                    <NewsCard key={item.id} news={item} />
                ))}
            </div>
        </div>
    );
}
