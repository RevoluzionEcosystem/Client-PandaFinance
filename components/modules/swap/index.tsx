"use client"

import { Suspense, useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { Skeleton } from "../../ui/skeleton"

import BackHomeButton from "../button/back-home"
import GoExplorerButton from "../button/go-explorer"
import Pandaswap from "./pandaswap"

import general from "../../../data/lang/en/general.json"
import swap from "../../../data/lang/en/swap.json"
    
const terms = general["terms"]

export default function Swap() {
    const [mounted, setMounted] = useState(false)
    const { address } = useAccount()
     
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <header>
                <p className="mb-2 text-sm font-semibold text-primary">
                    <Suspense fallback={
                        <Skeleton className="h-4 w-1/6 mb-1"/>
                    }>
                        {`${swap.kicker_1}`}
                    </Suspense>
                </p>
                <h1 className="block text-2xl font-bold text-foreground sm:text-3xl">
                    <Suspense fallback={
                        <Skeleton className="h-12 w-full max-w-[450px] mb-6"/>
                    }>
                        {`${swap.headline_1}`}
                    </Suspense>
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    <Suspense fallback={
                        <Skeleton className="h-6 w-3/4 mb-3"/>
                    }>
                        {`${swap.subheadline_1}.`}
                    </Suspense>
                </p>

                <div className="mt-5 flex flex-row flex-wrap items-center gap-2 sm:flex-row sm:gap-3">
                    <GoExplorerButton
                        type="primary"
                        explorer="etherscan.io"
                        address={mounted ? address : ""}
                        text={terms.view_ethereum}
                    />
                    <GoExplorerButton
                        type="primary"
                        explorer="bscscan.com"
                        address={mounted ? address : ""}
                        text={terms.view_binance}
                    />
                    <GoExplorerButton
                        type="primary"
                        explorer="polygonscan.com"
                        address={mounted ? address : ""}
                        text={terms.view_polygon}
                    />
                    <BackHomeButton
                        type="basic"
                    />
                </div>
            </header>

            <div className="m-12" />

            <Pandaswap />
        </div>
    )
}