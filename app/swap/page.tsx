import type { Metadata } from "next"
import { Suspense } from "react"

import Loading from "../../components/module/loading"
import Swap from "../../components/module/swap"

import data from "../../data/swap.json"

export const metadata: Metadata = {
    title: data.headline,
    description: data.subheadline,
}

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Swap />
        </Suspense>
    )
}