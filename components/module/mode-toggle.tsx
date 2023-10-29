"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Mounted } from "../../lib/client"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import { capitalizeFirst } from "../../lib/helpers"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

import data from "../../data/general.json"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const isMounted = Mounted()

    return (
        <TooltipProvider>
            <Tooltip>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <TooltipTrigger asChild className="w-auto">
                            {isMounted ? (
                                <Button className="justify-start px-4 py-2" variant="outline" size="icon">
                                    {theme === "light" ? (
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    ) : (
                                        theme === "dark" ? (
                                            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                                        ) : (
                                            <DesktopIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                                        )
                                    )}
                                    <span className="hidden ml-2 md:block">{data.theme}</span>
                                </Button>
                            ) : (
                                <Button className="justify-start px-4 py-2" variant="outline" size="icon">
                                    <Skeleton className="h-4 w-full" />
                                </Button>
                            )}
                        </TooltipTrigger>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background" align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            <SunIcon className="mr-1.5" /> {data.light}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            <MoonIcon className="mr-1.5" /> {data.dark}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            <DesktopIcon className="mr-1.5" /> {data.system}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <TooltipContent className="mt-1 h-9 px-4 py-2 bg-primary rounded-md text-sm text-primary-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring block sm:h-8 sm:rounded-md sm:px-3 sm:text-xs md:hidden lg:h-10 lg:rounded-md lg:px-8">
                    <p>{data.theme + (theme ? ": " + capitalizeFirst(theme) : null)}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}