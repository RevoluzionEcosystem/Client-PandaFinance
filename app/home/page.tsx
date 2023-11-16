import { Suspense } from "react"

import Home from "../../components/modules/home"
import Loader from "../../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Home />
        </Suspense>
    )
}