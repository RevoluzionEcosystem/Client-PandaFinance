import { Suspense } from "react"

import Swap from "../../components/modules/swap"
import Loader from "../../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Swap />
        </Suspense>
    )
}