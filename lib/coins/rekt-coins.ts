import useSWR from "swr";
import type { CoinMarket } from 'coingecko-api-v3'
const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function RektCoins(): { rektCoins?: CoinMarket[]; rektCoinsLoading: boolean; rektCoinsError: boolean; } {
    const { data, error, isLoading } = useSWR(`/api/coins/rekt-coins`, fetcher,
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
        rektCoins: data,
        rektCoinsLoading: isLoading,
        rektCoinsError: error,
    };
}