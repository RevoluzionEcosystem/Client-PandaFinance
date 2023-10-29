import type { Metadata } from "next"
import { Suspense } from "react"

import Loading from "../../components/module/loading"
import SportsBettingDisplay from "../../components/module/sports-betting"

import data from "../../data/sports-betting.json"

export const metadata: Metadata = {
    title: data.headline,
    description: data.subheadline,
}

export default function SportsBetting() {
    return (
        <Suspense fallback={<Loading />}>
            <SportsBettingDisplay />
        </Suspense>
    )
}