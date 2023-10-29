import type { Metadata } from "next"
import { Suspense } from "react"

import Loading from "../components/module/loading"
import Home from "../components/module/home"

import data from "../data/home.json"

export const metadata: Metadata = {
    title: data.headline,
    description: data.subheadline,
}

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Home />
        </Suspense>
    )
}