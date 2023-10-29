import type { Metadata } from "next"

import Loading from "../components/module/loading"

import data from "../data/general.json"

export const metadata: Metadata = {
    title: data.loading,
    description: data.loadingExplanation,
}

export default function Page() {
    return (
        <Loading />
    )
}