import type { NewsItem } from "@/features/news/types";
import { Clock } from "lucide-react";

interface NewsCardProps {
    news: NewsItem;
    variant?: "default" | "compact" | "horizontal";
}

export function NewsCard({ news, variant = "default" }: NewsCardProps) {
    if (variant === "horizontal") {
        return (
            <div className="flex gap-4 group cursor-pointer">
                <div className="flex-1 order-2 md:order-1">
                    <h3 className="text-lg font-bold group-hover:text-primary leading-tight mb-2">
                        {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3 mb-2">
                        {news.summary}
                    </p>
                    <div className="flex items-center text-xs text-gray-400 gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{news.timestamp}</span>
                    </div>
                </div>
                <div className="w-1/3 order-1 md:order-2">
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full aspect-video object-cover rounded bg-gray-100"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="group cursor-pointer flex flex-col h-full">
            <div className="mb-3 overflow-hidden rounded relative">
                <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500 bg-gray-100"
                />
                {news.category && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        {news.category}
                    </span>
                )}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary leading-tight">
                {news.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-1">
                {news.summary}
            </p>
            <div className="flex items-center text-xs text-gray-400 gap-1 mt-auto">
                <Clock className="w-3 h-3" />
                <span>{news.timestamp}</span>
            </div>
        </div>
    );
}
