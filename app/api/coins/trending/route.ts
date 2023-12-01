import { type NextRequest, NextResponse } from "next/server";
import { coingeckoClient } from '@lib/coingecko'
export const revalidate = 60 * 120;
export async function GET(req: NextRequest) {
    try {
        const data = await coingeckoClient.trending()
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 })
    }
}   
