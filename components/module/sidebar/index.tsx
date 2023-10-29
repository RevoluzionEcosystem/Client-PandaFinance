"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { usePathname } from "next/navigation"
import { cn } from "../../../lib/utils"
import { Mounted } from "../../../lib/client"
import { buttonVariants } from "../../ui/button"
import { getNavIcon } from "../../../lib/helpers"
import { Skeleton } from "../../ui/skeleton"
import { ModeToggle } from "../mode-toggle"

import Link from "next/link"
import Web3Connect from "../button/web3-connect"

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        id: string,
        name: string,
        description: string,
        link: string
    }[]
}

export default function Sidebar({ className, items, ...props }: SidebarProps) {
    const pathname = usePathname()
    const isMounted = Mounted()
    
    return (
        <nav
            className={cn(
                "px-0 py-2 flex space-x-1 space-y-0 sm:space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2 lg:h-screen lg:px-2",
                className
            )}
            {...props}
        >
            {items.map((item, index) => (
                <TooltipProvider key={`nav-${index}`}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {isMounted ? (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className={cn(
                                        buttonVariants({ variant: "link" }),
                                        pathname === item.link ? (
                                            "bg-primary text-primary-foreground hover:bg-accent hover:text-background hover:text-primary-foreground"
                                        ) : (
                                            "hover:bg-transparent"
                                        ), "justify-start border border-transparent hover:border-primary hover:no-underline"
                                    )}
                                >
                                    {getNavIcon(item.id)}
                                    <span className="hidden ml-2 md:block">{item.name}</span>
                                </Link>
                            ) : (
                                <Link
                                    key={item.link}
                                    href=""
                                    aria-disabled={true}
                                    className={cn(
                                        buttonVariants({ variant: "default" }),
                                        "bg-transparent justify-start border border-transparent hover:border-primary hover:no-underline"
                                    )}
                                >
                                    <Skeleton className="inline-flex w-[9rem] h-4" />
                                </Link>
                            )}
                        </TooltipTrigger>
                        <TooltipContent className="mt-1 h-9 px-4 py-2 bg-primary rounded-md text-sm text-primary-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring block sm:h-8 sm:rounded-md sm:px-3 sm:text-xs md:hidden lg:h-10 lg:rounded-md lg:px-8">
                            <p>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
            <Web3Connect />
            <ModeToggle />
        </nav>
    )
}