import { Suspense } from "react"

import Dashboard from "../../components/modules/dashboard"
import Loader from "../../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Dashboard />
        </Suspense>
    )
}