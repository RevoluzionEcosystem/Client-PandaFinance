"use client"
 
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
} : {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter()

    useEffect(() => {
        console.error(error)
    }, [error])
 
    return (
        <div>
            {"somethingWrong notFoundExplanation"}
        </div>
    )
}