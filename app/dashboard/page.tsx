import { Suspense } from "react"
import { Metadata } from "next"

import Dashboard from "../../components/modules/dashboard"
import Loader from "../../components/modules/loader"

import meta from "../../data/lang/en/metadata.json"

const site_url = process.env.SITE_URL

export const metadata: Metadata = {
    title: meta["dashboard"].title,
    description: meta["dashboard"].description,
    alternates: {
        canonical: `${site_url}/dashboard`,
    },
}

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Dashboard />
        </Suspense>
    )
}