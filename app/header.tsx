"use client"
import { Sheet, } from "@/components/ui/sheet"
import { Dialog, } from "@/components/ui/dialog"
import { useMediaMatch } from "rooks";
import DefaultHeader from '@/components/Header'
import MobileHeader from '@/components/Header/mobile'
import Trade from "./trade";
export default function Header() {
    const isPc = useMediaMatch("(min-width: 768px)")
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