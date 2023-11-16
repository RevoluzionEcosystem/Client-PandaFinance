"use client"

import { usePathname, useRouter } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"
import { getNavIcon } from "../../../lib/helpers"

import general from "../../../data/lang/en/general.json"

export default function SidebarNav() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <ul className="space-y-1.5">
            {general["menu"].map((item, index) => (
                <li key={`menu-${index}`}>
                    {item.type === "internal" ? (
                        <div key={`link-${index}`} className={`cursor-pointer font-semibold flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-muted-foreground rounded-md hover:bg-primary hover:text-primary-foreground ${pathname === item.link ? "bg-secondary text-secondary-foreground" : ""}`} onClick={() => router.push(item.link)}>
                            <Suspense fallback={
                                <Skeleton className="h-6 w-full max-w-[180px]"/>
                            }>
                                {getNavIcon(item.id)}
                                {`${item.name}`}
                            </Suspense>
                        </div>
                    ) : (
                        <a key={`link-${index}`} className={`font-semibold flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-muted-foreground rounded-md hover:bg-primary hover:text-primary-foreground ${pathname === item.link ? "bg-secondary text-secondary-foreground" : ""}`} href={`${item.link}`} target="_blank">
                            <Suspense fallback={
                                <Skeleton className="h-6 w-full max-w-[180px]"/>
                            }>
                                {getNavIcon(item.id)}
                                {`${item.name}`}
                            </Suspense>
                        </a>
                    )}
                </li>
            ))}
        </ul>
    )
}