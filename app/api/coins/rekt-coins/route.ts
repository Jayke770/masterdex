import { type NextRequest, NextResponse } from "next/server";
import { coingeckoClient } from '@lib/coingecko'
const { REKT_COINS } = process.env
export async function GET(req: NextRequest) {
    try {
        const currency = req.nextUrl.searchParams.get("currency") ?? "usd"
        const data = await coingeckoClient.coinMarket({
            vs_currency: currency,
            ids: REKT_COINS,
            order: "market_cap_asc",
            price_change_percentage: '1h,24h,7d'
        })
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 })
    }
}   