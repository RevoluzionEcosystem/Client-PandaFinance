"use client"
 
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Skeleton } from "../components/ui/skeleton"
import { Button } from "../components/ui/button"
import { Mounted } from "../lib/client"

import Header from "../components/module/header"
import Dice from "../components/module/dice"

import bgImg from "../public/asset/img/background-loading.png"
import data from "../data/general.json"

export default function Error({
    error,
    reset,
} : {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const isMounted = Mounted
    const router = useRouter()

    useEffect(() => {
        console.error(error)
    }, [error])
 
    return (

        <div className="p-3 text-center items-center justify-center overflow-hidden">
            { isMounted ? (
                <Header minHeight={250} headline={data.somethingWrong} subheadline={data.notFoundExplanation} invert={true} background={`url(${bgImg.src})`} />
            ) : <Skeleton className="m-1 min-h-[300px] w-full" /> }
            
            {isMounted ? (
                <div>
                    <Button
                        variant="secondary"
                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                        onClick={() => router.push("/")}
                    >
                        {data.goBackHome}
                    </Button>
                    <Button
                        variant="secondary"
                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                        onClick = {() => reset()}
                    >
                        {data.tryAgain}
                    </Button>
                </div>
            ) : (
                <div>
                    <Button
                        variant="secondary"
                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                    >
                        <Skeleton className="h-4 min-w-full" />
                    </Button>
                    <Button
                        variant="secondary"
                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                    >
                        <Skeleton className="h-4 min-w-full" />
                    </Button>
                </div>
            )}

            <Dice />
        </div>
    )
}