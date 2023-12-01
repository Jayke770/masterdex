import { z } from 'zod'
import type { TrendingResponse, TrendingItem } from 'coingecko-api-v3'
const MainPageSettings = z.object({
    currency: z.string().optional()
})
export type IMainPageSettings = z.infer<typeof MainPageSettings>
export type TrendingNft = {
    id: string,
    name: string,
    symbol: string,
    thumb: string,
    nft_contract_id: number,
    native_currency_symbol: string,
    floor_price_in_native_currency: number
    floor_price_24h_percentage_change: number
}
interface TrendingCoin extends TrendingItem {
    price_btc: number
}
export interface Trending extends TrendingResponse {
    coins: { item?: TrendingCoin }[],
    nfts: TrendingNft[]
}