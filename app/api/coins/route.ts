import { coingeckoClient } from '@lib/coingecko'
import { NextResponse, NextRequest } from 'next/server';
export const revalidate = 60 * 120;
export async function GET(req: NextRequest) {
    try {
        const currency = req.nextUrl.searchParams.get("currency") ?? "usd"
        const per_page = parseInt(req.nextUrl.searchParams.get("per_page") ?? "100")
        const page = parseInt(req.nextUrl.searchParams.get("page") ?? "1")
        const data = await coingeckoClient.coinMarket({
            vs_currency: currency,
            order: "market_cap_desc",
            per_page: per_page,
            page: page,
            price_change_percentage: '1h,24h,7d'
        })
        return NextResponse.json(data)
    } catch (e) {
        console.error(e)
        return NextResponse.json({ message: e }, { status: 500 })
    }
}