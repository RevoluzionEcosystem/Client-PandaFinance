"use client"

import { useRouter } from "next/navigation"
import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"
import { getCarouselImage } from "../../../lib/helpers"
import { Button } from "../../ui/button"
import { Separator } from "../../ui/separator"

import data from "../../../data/home.json"
import info from "../../../data/general.json"

export default function Carousel() {
    const isMounted = Mounted()
    const router = useRouter()

    return (
        <div className="p-3 mt-6 text-left items-center justify-center">
            <div className="">
                {isMounted ? (
                    <h2 className="text-2xl font-bold mb-2">{info.ourGames}</h2>
                ) : (
                    <Skeleton className="m-2 h-12 w-1/4" />
                )}
                
                <Separator className="mb-6" />

                {isMounted ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data["game"].length > 0 ? data["game"].map((item, index) => (
                            <div className="bg-cover bg-center rounded-md hover:scale-105 hover:animate-pulse transition-transform" key={index} style={{backgroundImage: `url(${getCarouselImage(item.imgLink)})`}}>
                                <div className="text-primary-foreground border border-accent dark:border-secondary w-full h-full rounded-md bg-gradient-to-t from-border dark:from-background from-15% pt-[25%] md:pt-[50%] px-3 pb-3" key={`div-${index}`}>
                                    <h3 className="mb-3 text-xl font-extrabold" key={`h3-${index}`}>{item.name}</h3>
                                    <p className="text-sm text-primary-foreground-12_5 pb-3" key={`p-${index}`}>{item.description}</p>
                                    {item.available ? (
                                        <Button variant={item.available ? "default" : "outline"} disabled={item.available ? false : true} className="border border-primary justify-start hover:text-primary-foreground hover:bg-transparent hover:border-primary" onClick={() => router.push(item.link)}>
                                            {info.playNow}
                                        </Button>
                                    ) : null}
                                </div>
                            </div>
                        )) : (
                            <h2 className="text-2xl text-center font-bold mb-6">{info.noGames}</h2>
                        )}
                    </div>
                ) : (
                    <div className="flex">
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                    </div>
                )}
            </div>
        </div>
    )
}