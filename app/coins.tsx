"use client"
import {
    ChevronUp,
    ChevronDown
} from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CoinMarket from '@/lib/coins'
import { useLocalstorageState } from 'rooks'
import type { IMainPageSettings } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Skeleton } from "@/components/ui/skeleton"
export default function Coins() {
    const [settings, setSettings] = useLocalstorageState<IMainPageSettings>("settings", { currency: "usd" })
    const { coins } = CoinMarket({ currency: settings?.currency })
    return (
        <div className='rounded-md border'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Coin</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>1H</TableHead>
                        <TableHead>24H</TableHead>
                        <TableHead>7D</TableHead>
                        <TableHead className=' whitespace-nowrap'>24H Volume</TableHead>
                        <TableHead className=' whitespace-nowrap'>Market Cap</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* loading */}
                    {Array.from({ length: 20 }).map((_, i) => (
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
                    ))}
                    {/* list of coins */}
                    {coins?.map(coin => (
                        <TableRow key={coin.id}>
                            <TableCell >
                                <Link
                                    className='flex gap-2'
                                    href={`/coin?id=${coin.id}`}>
                                    <Avatar>
                                        <AvatarImage src={coin.image} alt={coin.name} />
                                        <AvatarFallback>{coin.symbol?.toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='text-base'>{coin.name}</span>
                                        <span className='text-xs text-muted-foreground uppercase'>{coin.symbol}</span>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>${coin.current_price?.toLocaleString()}</TableCell>

                            {(coin as any).price_change_percentage_1h_in_currency < 0 ? (
                                <TableCell className="text-red-500">
                                    <div className='flex gap-0.5'>
                                        <ChevronDown className=' h-5 w-5' />
                                        <span>{(coin as any).price_change_percentage_1h_in_currency.toFixed(2)}%</span>
                                    </div>
                                </TableCell>
                            ) : (
                                <TableCell className="text-teal-500 ">
                                    <div className='flex gap-0.5'>
                                        <ChevronUp className=' h-5 w-5' />
                                        <span>{(coin as any).price_change_percentage_1h_in_currency.toFixed(2)}%</span>
                                    </div>
                                </TableCell>
                            )}

                            {(coin as any).price_change_percentage_24h_in_currency < 0 ? (
                                <TableCell className="text-red-500">
                                    <div className='flex gap-0.5'>
                                        <ChevronDown className=' h-5 w-5' />
                                        <span>{(coin as any).price_change_percentage_24h_in_currency.toFixed(2)}%</span>
                                    </div>
                                </TableCell>
                            ) : (
                                <TableCell className="text-teal-500 ">
                                    <div className='flex gap-0.5'>
                                        <ChevronUp className=' h-5 w-5' />
                                        <span>{(coin as any).price_change_percentage_24h_in_currency.toFixed(2)}%</span>
                                    </div>
                                </TableCell>
                            )}
                            {(coin as any).price_change_percentage_7d_in_currency < 0 ? (
                                <TableCell className="text-red-500">
                                    <div className='flex gap-0.5'>
                                        <ChevronDown className=' h-5 w-5' />
                                        <span>{(coin as any).price_change_percentage_7d_in_currency.toFixed(2)}%</span>
                                    </div>
                                </TableCell>
                            ) : (
                                <TableCell className="text-teal-500 ">
                                    <div className='flex gap-0.5'>
                                        <ChevronUp className=' h-5 w-5' />
                                        <span>{(coin as any).price_change_percentage_7d_in_currency.toFixed(2)}%</span>
                                    </div>
                                </TableCell>
                            )}
                            <TableCell>${coin.total_volume?.toLocaleString()}</TableCell>
                            <TableCell>${coin.market_cap?.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}