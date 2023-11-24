"use client"

import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { getCssValue } from "../../../lib/helpers"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"
    
export default function SectionHome() {
    const router = useRouter()

    return (
        <div className="">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
                <div className="blob-c min-h-[90vh] overflow-hidden absolute mx-auto max-w-[85rem] w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] lg:w-[calc(100%-24rem)]">
                    <div className="blob one absolute bg-secondary h-[150px] w-[200px]" />
                    <div className="blob two absolute bg-secondary h-[150px] w-[150px]" />
                    <div className="blob three absolute bg-primary h-[150px] w-[150px]" />
                    <div className="blob four absolute bg-secondary h-[100px] w-[100px]" />
                    <div className="blob five absolute bg-primary h-[100px] w-[80px]" />
                    <div className="blob six absolute bg-primary h-[70px] w-[100px]" />
                    <div className="blob seven absolute bg-secondary h-[70px] w-[100px]" />
                </div>

                <a
                    href={general["link"].presale}
                    target="_blank"
                >
                    <div className="group flex border animate-bounce w-fit mx-auto justify-center bg-muted text-foreground hover:text-secondary-foreground hover:bg-secondary rounded-full shadow-md">
                        <img className="w-full max-w-[150px] border border-transparent border-r-foreground" src={getCssValue("--background") === "#fafafa" ? general["pinksale"]["img-light"] : general["pinksale"]["img-dark"]} alt={general["pinksale"].title} />
                        <div className="inline-block text-foreground group:hover:text-secondary-foreground p-1 ps-4">
                            <p className="me-2 inline-block text-sm">
                                {home.kicker_1}
                            </p>
                            <span className="border border-foreground bg-muted group-hover:border-transparent group-hover:bg-muted py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full text-foreground font-semibold text-sm">
                                <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </a>

                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        {home.headline_1}
                    </h1>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                    <p className="text-lg text-muted-foreground">
                        {home.subheadline_1}
                    </p>
                </div>

                <div className="text-center">
                    <div
                        className="cursor-pointer inline-flex justify-center items-center gap-x-2 text-center bg-gradient-to-tl from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg shadow-transparent hover:shadow-muted border border-transparent text-panda-white text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-muted py-3 px-4"
                        onClick={() => router.push("/dashboard")}
                    >
                        {general["terms"].get_started}
                        <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
