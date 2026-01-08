import type { DividendResponse, Dividend } from "@/types/dividendApi";
import type { NewsItem } from "@/features/news/types";

const API_KEY = import.meta.env.VITE_MASSIVE_API_KEY;
const BASE_URL = import.meta.env.VITE_MASSIVE_API_BASE;

export const dividendApi = {
    async getRecentDividends(limit: number = 20): Promise<Dividend[]> {
        try {
            // Construct URL to fetch recent dividends
            // The user provided example: https://api.massive.com/v3/reference/dividends?apiKey=...
            // We'll append some params if needed, but for now just basic fetch
            const response = await fetch(
                `${BASE_URL}/reference/dividends?apiKey=${API_KEY}&limit=${limit}`
            );

            if (!response.ok) {
                throw new Error(`Dividend API Error: ${response.statusText}`);
            }

            const data: DividendResponse = await response.json();
            return data.results || [];
        } catch (error) {
            console.error("Error fetching dividends:", error);
            return [];
        }
    },

    // Adapter to convert Dividend -> NewsItem for UI compatibility
    adaptToNewsItem(dividend: Dividend): NewsItem {
        return {
            id: dividend.id,
            title: `${dividend.ticker} Declares Dividend`,
            summary: `Cash Amount: ${dividend.cash_amount} ${dividend.currency} | Pay Date: ${dividend.pay_date} | Ex-Div Date: ${dividend.ex_dividend_date}`,
            category: "Dividends",
            // Use a generic financial placeholder image
            imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=" + dividend.ticker,
            timestamp: dividend.ex_dividend_date,
            author: dividend.ticker
        };
    }
};
