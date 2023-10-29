import type { Metadata } from "next"
import { Suspense } from "react"

import Loading from "../../components/module/loading"
import Roulette from "../../components/module/roulette"

import data from "../../data/roulette.json"

export const metadata: Metadata = {
    title: data.headline,
    description: data.subheadline,
}

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Roulette />
        </Suspense>
    )
}