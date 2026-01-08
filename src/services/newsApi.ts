import type { NewsApiResponse, Article } from "@/types/newsApi";
import type { NewsItem } from "@/features/news/types";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;

if (!API_KEY) {
    console.error("VITE_NEWS_API_KEY is not set in environment variables");
}

export const newsApi = {
    async getTopHeadlines(category: string = "general", page: number = 1): Promise<Article[]> {
        try {
            const response = await fetch(
                `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`News API Error: ${response.statusText}`);
            }

            const data: NewsApiResponse = await response.json();
            return data.articles;
        } catch (error) {
            console.error("Error fetching top headlines:", error);
            return [];
        }
    },

    async searchNews(query: string, page: number = 1): Promise<Article[]> {
        try {
            const response = await fetch(
                `${BASE_URL}/everything?q=${query}&sortBy=publishedAt&page=${page}&apiKey=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`News API Error: ${response.statusText}`);
            }

            const data: NewsApiResponse = await response.json();
            return data.articles;
        } catch (error) {
            console.error("Error searching news:", error);
            return [];
        }
    },

    // Helper to adapt API article to our internal NewsItem format
    // usage: articles.map(adaptToNewsItem)
    adaptToNewsItem(article: Article): NewsItem { // Using any temporarily or need to import NewsItem type
        return {
            id: article.url,
            title: article.title,
            summary: article.description || "",
            category: article.source.name,
            imageUrl: article.urlToImage || "https://placehold.co/600x400?text=News",
            timestamp: new Date(article.publishedAt).toLocaleDateString(),
            author: article.author || "Unknown"
        };
    }
};
