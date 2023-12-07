import { Suspense } from "react"
import { Metadata } from "next"

import Swap from "../../components/modules/swap"
import Loader from "../../components/modules/loader"

import meta from "../../data/lang/en/metadata.json"

const site_url = process.env.SITE_URL

export const metadata: Metadata = {
    title: meta["swap"].title,
    description: meta["swap"].description,
    alternates: {
        canonical: `${site_url}/swap`,
    },
}

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Swap />
        </Suspense>
    )
}