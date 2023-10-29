"use client"

import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"

import info from "../../../data/general.json"
import { Separator } from "../../ui/separator"

export default function History() {
    const isMounted = Mounted()

    return (
        <div className="p-3 mt-6 text-left items-center justify-center">
            <div className="">
                {isMounted ? (
                    <h2 className="text-2xl font-bold mb-2">{info.playHistory}</h2>
                ) : (
                    <Skeleton className="m-2 h-12 w-1/4" />
                )}
                
                <Separator className="mb-6" />

                {isMounted ? ("a") : ("ab")}
            </div>
        </div>

    )
}