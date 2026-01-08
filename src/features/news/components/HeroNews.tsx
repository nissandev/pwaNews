import type { NewsItem } from "@/features/news/types";
import { Clock, Share2 } from "lucide-react";

interface HeroNewsProps {
    news: NewsItem;
}

export function HeroNews({ news }: HeroNewsProps) {
    return (
        <div className="relative group cursor-pointer mb-8">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
                <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full md:w-3/4 text-white">
                    <span className="bg-primary px-2 py-1 text-xs font-bold uppercase tracking-wider mb-3 inline-block rounded">
                        {news.category}
                    </span>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                        {news.title}
                    </h1>
                    <p className="text-gray-200 text-sm md:text-lg mb-4 line-clamp-2 md:line-clamp-none">
                        {news.summary}
                    </p>
                    <div className="flex items-center gap-4 text-xs md:text-sm text-gray-300">
                        <span className="font-semibold text-white">{news.author}</span>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{news.timestamp}</span>
                        </div>
                        <button className="ml-auto md:ml-0 hover:text-white">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
