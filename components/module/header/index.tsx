"use client"

import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"

export default function Header({minHeight, headline, subheadline, invert, background}) {
    const isMounted = Mounted()

    const min = (Number(minHeight) / 3 * 2).toString()

    return (
        <div className={`min-h-[${minHeight}px] content-center bg-cover bg-center rounded-md`} style={{backgroundImage: background}}>
            <div className={`grid min-h-[${minHeight}px] text-primary-foreground w-full h-full rounded-md ${invert ? `content-end bg-gradient-to-t pt-[${minHeight}px] md:pt-[${min}px] pt-6 pb-6` : `content-start bg-gradient-to-b pb-[${min}px] md:pb-[${minHeight}px] pb-6 pt-6`} from-border dark:from-background from-10% px-3`}>
                { isMounted ? (
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        { headline }
                    </h1>
                ) : <Skeleton className="m-2 h-12 w-1/4" /> }

                { isMounted ? (
                    <p className="leading-7 [&:not(:first-child)]:mt-3">
                        { subheadline }
                    </p>
                ) : <Skeleton className="m-2 mt-6 h-6 w-11/12" /> }
            </div>
        </div>
    )
}