import useSWR from "swr";
import type { CoinMarket } from 'coingecko-api-v3'
const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function CoinMarket(param: { currency?: string, page?: number, per_page?: number }): { coins?: CoinMarket[]; coinsLoading: boolean; coinsError: boolean; } {
    const { data, error, isLoading } = useSWR(`/api/coins?currency=${param?.currency ?? "usd"}`, fetcher,
        {
            shouldRetryOnError: true,
            revalidateOnMount: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            refreshWhenHidden: false,
            refreshWhenOffline: false
        }
    );
    return {
        coins: data,
        coinsLoading: isLoading,
        coinsError: error,
    };
}