import { type NextRequest, NextResponse } from "next/server";
import { SUPPORTED_CHAINS } from '@lib/constants'
import { type IListToken } from '@/types'
export async function GET(req: NextRequest) {
    const chainId = req.nextUrl.searchParams.get("chainId") ?? "1"
    try {
        const isValidChain = !!SUPPORTED_CHAINS.find(x => x === chainId)
        const tokenListEndpoint = isValidChain ? process.env?.[`TOKEN_LIST_CHAINID_${chainId}`]! : process.env?.TOKEN_LIST_CHAINID_1!
        const data: { tokens: IListToken[] } = await fetch(tokenListEndpoint).then(res => res.json())
        return NextResponse.json(data?.tokens)
    } catch (e: any) {
        return NextResponse.json({ messsage: e.message }, { status: 500 })
    }
} 