"use client"

import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { Suspense } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../ui/button"
import { Skeleton } from "../../ui/skeleton"

import general from "../../../data/lang/en/general.json"

export default function BackHomeButton({type}) {
    const router = useRouter()

    return (
        <Button
            variant={type}
            className="py-6 px-3"
            onClick={() => router.push("/home")}
        >
            <Suspense fallback={
                <Skeleton className="h-6 w-[150px]"/>
            }>
                <ChevronLeftIcon className="mr-1 h-4 w-4" /> {`${general["terms"].go_home}`}
            </Suspense>
        </Button>
    )
}