import { Suspense } from "react"

import NotFound from "../components/modules/error/not-found"
import Loader from "../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <NotFound />
        </Suspense>
    )
}