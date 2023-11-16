"use client"

import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"
    
export default function SectionHome() {
    const router = useRouter()

    return (
        <div className="">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
                <div className="flex justify-center">
                    <a
                        className="group inline-block bg-muted text-foreground hover:text-secondary-foreground hover:bg-secondary border border-border p-1 ps-4 rounded-full shadow-md"
                        href={general["link"].presale}
                        target="_blank"
                    >
                        <p className="me-2 inline-block text-sm">
                            {home.kicker_1}
                        </p>
                        <span className="border border-foreground bg-muted group-hover:border-transparent group-hover:bg-muted py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full text-foreground font-semibold text-sm">
                            <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                        </span>
                    </a>
                </div>

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
                        className="cursor-pointer inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg shadow-transparent hover:shadow-muted border border-transparent text-panda-white text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-muted py-3 px-6"
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