"use client"
import { Sheet, } from "@/components/ui/sheet"
import { Dialog, } from "@/components/ui/dialog"
import DefaultHeader from '@/components/Header'
import MobileHeader from '@/components/Header/mobile'
import Trade from "./trade";
import { useMediaQuery } from 'usehooks-ts'
export default function Header() {
    const isPc = useMediaQuery("(min-width: 768px)")
    return (
        isPc ? (
            <Dialog>
                <DefaultHeader>
                    <Trade />
                </DefaultHeader>
            </Dialog>
        ) : (
            <Sheet>
                <MobileHeader>
                    <Trade />
                </MobileHeader>
            </Sheet>
        )
    )
}