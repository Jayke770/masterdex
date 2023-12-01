import useSWR from "swr";
import type { Trending } from '@/types'
const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function Trending(): { trending?: Trending; trendingLoading: boolean; trendingError: boolean; } {
    const { data, error, isLoading } = useSWR(`/api/coins/trending`, fetcher,
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
        trending: data,
        trendingLoading: isLoading,
        trendingError: error,
    };
}