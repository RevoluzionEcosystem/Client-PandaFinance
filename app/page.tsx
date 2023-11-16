import { Suspense } from "react"

import Loader from "../components/modules/loader"
import Splash from "../components/modules/splash"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Splash />
        </Suspense>
    )
}