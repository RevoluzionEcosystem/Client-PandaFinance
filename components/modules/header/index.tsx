"use client"

import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useRouter } from "next/navigation"
import { ModeToggle } from "../../mode-toggle"

import general from "../../../data/lang/en/general.json"

const terms = general["terms"]

export default function Header() {
    const { open, close } = useWeb3Modal()
    const router = useRouter()

    return (        
        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-background border border-b-primary text-sm py-2.5 sm:py-4 lg:pl-64">
            <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label={terms.global}>
                <div className="mr-5 lg:mr-0 lg:hidden">
                    <div
                        className="cursor-pointer flex text-xl font-semibold text-primary content-center items-center"
                        onClick={() => router.push("/home")}
                    >
                        <img src="/assets/logo.png" className="max-w-[60px] -m-2" alt={general.project_title} />
                    </div>
                </div>

                <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
                    <div className="flex flex-row items-center justify-end ml-auto gap-2">
                        <ModeToggle />
                        <w3m-button />
                    </div>
                </div>
            </nav>
        </header>
    )
}