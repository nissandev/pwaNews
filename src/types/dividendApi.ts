export interface Dividend {
    id: string;
    ticker: string;
    ex_dividend_date: string;
    pay_date: string;
    record_date: string;
    cash_amount: number;
    currency: string;
    dividend_type: string;
    frequency: number;
}

export interface DividendResponse {
    results: Dividend[];
    status: string;
    request_id: string;
    next_url?: string;
}
