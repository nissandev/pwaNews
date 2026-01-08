import { useParams } from "react-router-dom";
import { NewsGrid } from "@/features/news/components/NewsGrid";
import { LATEST_NEWS } from "@/features/news/data/mockData";

export default function CategoryPage() {
    const { id } = useParams();
    const title = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Category';

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold border-b pb-4">{title} News</h1>
            </div>
            <NewsGrid news={LATEST_NEWS} />
            <div className="mt-8">
                <NewsGrid news={LATEST_NEWS} />
            </div>
        </div>
    );
}
