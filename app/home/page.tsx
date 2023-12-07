import { Suspense } from "react"
import { Metadata } from "next"

import Home from "../../components/modules/home"
import Loader from "../../components/modules/loader"

import meta from "../../data/lang/en/metadata.json"

const site_url = process.env.SITE_URL

export const metadata: Metadata = {
    title: meta["home"].title,
    description: meta["home"].description,
    alternates: {
        canonical: `${site_url}/home`,
    },
}

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Home />
        </Suspense>
    )
}