"use client"

import { useRouter } from "next/navigation"
import { Skeleton } from "../../components/ui/skeleton"
import { Mounted } from "../../lib/client"
import { Button } from "../ui/button"

import Header from "./header"
import Dice from "./dice"

import bgImg from "../../public/asset/img/background-found.png"
import data from "../../data/general.json"

export default function NotFound() {
    const isMounted = Mounted()
    const router = useRouter()

    return (
        <div className="p-3 text-center items-center justify-center overflow-hidden">
            { isMounted ? (
                <Header minHeight={300} headline={data.notFound} subheadline={data.notFoundExplanation} invert={true} background={`url(${bgImg.src})`} />
            ) : <Skeleton className="m-1 min-h-[300px] w-full" /> }
            
            {isMounted ? (
                <Button
                    variant="secondary"
                    className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                    onClick={() => router.push("/")}
                >
                    {data.goBackHome}
                </Button>
            ) : (
                <Button
                    variant="secondary"
                    className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                >
                    <Skeleton className="h-4 min-w-full" />
                </Button>
            )}

            <Dice />
        </div>
    )
}