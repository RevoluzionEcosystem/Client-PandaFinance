"use client"

import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"

import general from "../../../data/lang/en/general.json"

export default function SidebarLogoSmall() {
    const router = useRouter()

    return (
        <div className="flex-none text-xl font-semibold cursor-pointer" onClick={() => router.push("/home")}>
            <Suspense fallback={
                <Skeleton className="h-9 w-full max-w-[180px]"/>
            }>
                <img src="/assets/logo.png" className="mx-auto max-w-[50%]" alt={general.project_title} />
                {/**general.project_title**/}
            </Suspense>
        </div>
    )
}