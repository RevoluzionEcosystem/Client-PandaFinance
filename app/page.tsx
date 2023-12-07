import { Suspense } from "react"
import { Metadata } from "next"

import Loader from "../components/modules/loader"
import Splash from "../components/modules/splash"

import meta from "../data/lang/en/metadata.json"

const site_url = process.env.SITE_URL

export const metadata: Metadata = {
    title: meta["root"].title,
    description: meta["root"].description,
    alternates: {
        canonical: `${site_url}`,
    },
}

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Splash />
        </Suspense>
    )
}