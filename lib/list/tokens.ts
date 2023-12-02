import useSWR from "swr";
import type { IListToken } from '@/types'
import { TOKEN_LIST } from '@lib/constants'
const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function ListTokens(chainId?: number): { listTokens?: IListToken[]; listTokensLoading: boolean; listTokensError: boolean; } {
    const { data, error, isLoading } = useSWR(TOKEN_LIST[`${chainId ?? 1}`], fetcher,
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
        listTokens: data?.tokens,
        listTokensLoading: isLoading,
        listTokensError: error,
    };
}