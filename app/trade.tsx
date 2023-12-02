"use client"
import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, MoveLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { IListToken } from '@/types'
import ListTokens from "@/lib/list/tokens"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
interface IData {
    tokenA?: IListToken,
    tokenB?: IListToken,
    chainId?: number,
    tab: "select-token" | "trade"
}
export default function Trade() {
    const [data, setData] = useState<IData>({ tab: "trade" })
    const { listTokens, listTokensLoading } = ListTokens(data?.chainId)
    const onToggleTab = () => setData(e => ({ ...e, tab: e.tab === "select-token" ? "trade" : "select-token" }))
    return (
        <>
            <div className={`${data.tab === "trade" ? "flex" : "hidden"} flex-col mt-3`}>
                <div className="flex flex-col gap-3.5">
                    <div className="flex flex-col gap-1">
                        <div className="block">
                            <Button
                                variant="ghost"
                                size={"sm"}
                                onClick={onToggleTab}
                                aria-expanded={data?.tab === "trade"}
                                className="justify-between !w-auto" >
                                Token A
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </div>
                        <Input
                            type="number"
                            inputMode="numeric"
                            placeholder="0.0" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="block">
                            <Button
                                variant="ghost"
                                size={"sm"}
                                onClick={onToggleTab}
                                aria-expanded={data?.tab === "select-token"}
                                className="justify-between !w-auto" >
                                Token B
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </div>
                        <Input
                            type="number"
                            inputMode="numeric"
                            placeholder="0.0" />
                    </div>
                </div>
                <div className="my-3">
                    <div className="flex justify-between items-baseline">
                        <span className="text-sm font-thin">Slippage Tolerance</span>
                        <span className="text-base text-primary">0.5%</span>
                    </div>
                </div>
                <Button>Swap</Button>
            </div>
            <div className={`${data.tab === "select-token" ? "flex" : "hidden"} w-full h-full flex flex-col mt-3`}>
                <div className="py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="relative">
                        <Input
                            type="search"
                            className="pl-11"
                            placeholder="Search Token" />
                        <div className="absolute top-0 left-0">
                            <Button
                                onClick={onToggleTab}
                                variant={"ghost"}
                                size={"icon"}>
                                <MoveLeft />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 max-h-[60vh] overflow-auto px-2">
                    {(listTokensLoading || !listTokens) && (
                        Array.from({ length: 10 }).map((_, i) => (
                            <Button
                                key={i}
                                disabled
                                variant={"ghost"}
                                className="!px-2 h-12">
                                <div className="flex items-center gap-2 w-full justify-start py-2">
                                    <Skeleton className=" h-8 w-8 rounded-full" />
                                    <div className="flex flex-col gap-1 justify-start items-start">
                                        <Skeleton className="h-3 w-10" />
                                        <Skeleton className="h-2 w-5" />
                                    </div>
                                </div>
                            </Button>
                        ))
                    )}
                    {listTokens?.slice(0, 100)?.map(token => (
                        <Button
                            key={token.address}
                            variant={"ghost"}
                            className="!px-2 h-12">
                            <div className="flex items-center gap-2 w-full justify-start py-2">
                                <Image
                                    src={token.logoURI}
                                    alt={token.name}
                                    width={300}
                                    height={300}
                                    loading="lazy"
                                    className=" h-8 w-8 rounded-full" />
                                <div className="flex flex-col gap-1 justify-start items-start">
                                    <span className="text-base">{token.name}</span>
                                    <span className=" uppercase text-xs text-muted-foreground">{token.symbol}</span>
                                </div>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </>
    )
}