import type { Metadata } from "next"
import { Suspense } from "react"

import Loading from "../../components/module/loading"
import Dashboard from "../../components/module/dashboard"

import data from "../../data/dashboard.json"

export const metadata: Metadata = {
    title: data.headline,
    description: data.subheadline,
}

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Dashboard />
        </Suspense>
    )
}