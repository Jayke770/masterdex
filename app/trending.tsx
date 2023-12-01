"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import TrendingCoins from "@/lib/coins/trending"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from 'next/link'
export default function Trending() {
    const { trending, trendingLoading } = TrendingCoins()
    return (
        <div className="flex flex-col gap-3">
            {/* coins */}
            <div className="flex flex-col gap-1">
                <div className=" leading-7 text-xl font-bold">Coins</div>
                <div className='rounded-md border'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Coin</TableHead>
                                <TableHead className=" whitespace-nowrap">Price (BTC)</TableHead>
                                <TableHead>Score</TableHead>
                                <TableHead className=" whitespace-nowrap">Market Cap Rank</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Loading */}
                            {(trendingLoading || !trending) && (
                                Array.from({ length: 20 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className='flex items-center gap-2'>
                                                <Skeleton className="h-10 w-10 rounded-full" />
                                                <div className='flex flex-col gap-1'>
                                                    <Skeleton className="h-3.5 w-10" />
                                                    <Skeleton className="h-3 w-5" />
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-10" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-10" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-10" />
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                            {/* trending coins */}
                            {trending?.coins?.map(coin => (
                                <TableRow key={coin.item?.id}>
                                    <TableCell >
                                        <Link
                                            className='flex gap-2'
                                            href={`/coin?id=${coin.item?.id}`}>
                                            <Avatar className="h-10 w-10 rounded-full overflow-hidden">
                                                <AvatarImage
                                                    loading="lazy"
                                                    src={coin.item?.large}
                                                    alt={coin.item?.name} />
                                                <AvatarFallback>{coin.item?.symbol?.toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <div className='flex flex-col'>
                                                <span className='text-base whitespace-nowrap'>{coin.item?.name}</span>
                                                <span className='text-xs text-muted-foreground uppercase'>{coin.item?.symbol}</span>
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell className=" whitespace-nowrap">{coin.item?.price_btc.toFixed(18)}</TableCell>
                                    <TableCell>{coin.item?.market_cap_rank}</TableCell>
                                    <TableCell className="text-center">{coin.item?.score}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            {/* nfts */}
            <div className="flex flex-col gap-1">
                <div className=" leading-7 text-xl font-bold">{"NFT's"}</div>
                <div className='rounded-md border'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className=" whitespace-nowrap">24h Price Change</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Loading */}
                            {(trendingLoading || !trending) && (
                                Array.from({ length: 20 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className='flex items-center gap-2'>
                                                <Skeleton className="h-10 w-10 rounded-full" />
                                                <div className='flex flex-col gap-1'>
                                                    <Skeleton className="h-3.5 w-10" />
                                                    <Skeleton className="h-3 w-5" />
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-10" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-4 w-10" />
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                            {/* trending coins */}
                            {trending?.nfts?.map(nft => (
                                <TableRow key={nft.id}>
                                    <TableCell >
                                        <div className='flex gap-2'>
                                            <Avatar className="h-10 w-10 rounded-full overflow-hidden">
                                                <AvatarImage
                                                    loading="lazy"
                                                    src={nft.thumb}
                                                    alt={nft.name} />
                                                <AvatarFallback>{nft?.symbol?.toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <div className='flex flex-col'>
                                                <span className='text-base whitespace-nowrap'>{nft?.name}</span>
                                                <span className='text-xs text-muted-foreground uppercase'>{nft?.symbol}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className=" whitespace-nowrap">{nft?.floor_price_in_native_currency?.toFixed(2)} {nft.native_currency_symbol?.toUpperCase()}</TableCell>
                                    {nft.floor_price_24h_percentage_change < 0 ? (
                                        <TableCell className="text-red-500">
                                            <div className='flex gap-0.5'>
                                                <ChevronDown className=' h-5 w-5' />
                                                <span>{nft?.floor_price_24h_percentage_change.toFixed(2)}%</span>
                                            </div>
                                        </TableCell>
                                    ) : (
                                        <TableCell className="text-teal-500 ">
                                            <div className='flex gap-0.5'>
                                                <ChevronUp className=' h-5 w-5' />
                                                <span>{nft?.floor_price_24h_percentage_change.toFixed(2)}%</span>
                                            </div>
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}