"use client"
 
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Skeleton } from "../components/ui/skeleton"
import { Button } from "../components/ui/button"

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
            Something wrong
        </div>
    )
}