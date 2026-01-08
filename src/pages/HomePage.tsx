import { HeroNews } from "@/features/news/components/HeroNews";
import { NewsGrid } from "@/features/news/components/NewsGrid";
import { HERO_NEWS, LATEST_NEWS } from "@/features/news/data/mockData";
import { NewsCard } from "@/features/news/components/NewsCard";

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-6">
            <HeroNews news={HERO_NEWS} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <NewsGrid news={LATEST_NEWS} title="Latest News" />
                    <NewsGrid news={LATEST_NEWS} title="Sports" />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-4 border-l-4 border-primary pl-2">Most Read</h3>
                        <div className="flex flex-col gap-4">
                            {LATEST_NEWS.slice(0, 3).map(news => (
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
