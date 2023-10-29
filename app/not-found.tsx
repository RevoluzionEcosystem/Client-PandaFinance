import type { Metadata } from "next"
import { Suspense } from "react"

import Loading from "../components/module/loading"
import NotFound from "../components/module/not_found"

import data from "../data/general.json"

export const metadata: Metadata = {
    title: data.notFound,
    description: data.notFoundExplanation,
}

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <NotFound />
        </Suspense>
    )
}