import useSWR from "swr";
import type { IListToken } from '@/types'
const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function ListTokens(chainId?: number): { listTokens?: IListToken[]; listTokensLoading: boolean; listTokensError: boolean; } {
    const { data, error, isLoading } = useSWR(`/api/list/tokens?chainId=${chainId ?? 1}`, fetcher,
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
        listTokens: data,
        listTokensLoading: isLoading,
        listTokensError: error,
    };
}