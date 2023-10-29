"use client"

import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"

import info from "../../../data/general.json"
import { Separator } from "../../ui/separator"

export default function Disclaimer() {
    const isMounted = Mounted()

    return (
        <div className="p-3 text-left items-center justify-center">
            {isMounted ? (
                <h2 className="text-2xl font-bold mb-1">{info.disclaimer}</h2>
            ) : (
                <Skeleton className="m-2 h-12 w-1/4" />
            )}
            
            <Separator className="mb-6" />

            { isMounted ? (
                <p className="text-xs text-muted-foreground [&:not(:first-child)]:mt-3">
                    { info.disclaimerText }
                </p>
            ) : <Skeleton className="m-2 mt-6 h-6 w-11/12" /> }
        </div>
    )
}