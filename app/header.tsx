import { Button } from '@components/ui/button'
import Link from 'next/link'
import { cn } from '@lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    User,
    Settings,
    LogOut,
    Menu
} from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
export default function Header() {
    return (
        <Sheet>
            <header className={cn("p-2 z-10 sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>
                <nav className='px-2 py-1 justify-between flex items-center'>
                    <div className='flex gap-2 items-center'>
                        <Link href={"/"}>
                            <h1 className='font-bold text-xl'>MasterDex</h1>
                        </Link>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <SheetTrigger asChild>
                            <Button variant={"default"} size={"sm"}>Trade</Button>
                        </SheetTrigger>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size={'icon'} className='!rounded-full'>
                                    <Avatar>
                                        <AvatarFallback>M</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align='end'
                                className=' w-56'>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <Link href={"/logout"}>
                                        <DropdownMenuItem>
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Logout</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </header>
            {/* @ts-ignore */}
            <SheetContent side={"bottom"}>
                <SheetHeader>
                    <SheetTitle>Trade</SheetTitle>
                </SheetHeader>
                <div >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ex maxime cupiditate nisi aspernatur, voluptates quibusdam iste consequuntur, a amet, enim dolore quasi voluptatibus maiores porro aut magnam? Velit, eius!
                </div>
            </SheetContent>
        </Sheet>
    )
}