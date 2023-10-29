"use client"

import { useEffect } from "react"
import Error from "./error"
 
export default function GlobalError({
    error,
    reset,
} : {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
            <body>
                <Error error={error} reset={reset} />
            </body>
        </html>
    )
}