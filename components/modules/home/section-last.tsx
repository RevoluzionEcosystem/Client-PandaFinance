"use client"

import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"

export default function SectionLast() {
    const router = useRouter()

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="relative text-center py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-tl from-primary to-secondary rounded-xl">
                <h1 className="block text-2xl font-bold text-panda-white sm:text-4xl">
                    {`${home.headline_4}`}
                </h1>
                <p className="mt-3 text-lg text-panda-white">
                    {`${home.subheadline_4}.`}
                </p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <div 
                        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-background text-foreground hover:bg-foreground hover:text-background cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        onClick={() => router.push("/dashboard")}
                    >
                        {general["terms"].get_started}
                        <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                    </div>
                </div>
                <span className="wrap" aria-hidden="true">
                    <span className="particle one" />
                    <span className="particle two" />
                    <span className="particle three" />
                    <span className="particle four" />
                    <span className="particle five" />
                    <span className="particle six" />
                    <span className="particle seven" />
                    <span className="particle eight" />
                    <span className="particle nine" />
                    <span className="particle ten" />
                    <span className="particle eleven" />
                    <span className="particle twelve" />
                </span>
            </div>
        </div>
    )
}