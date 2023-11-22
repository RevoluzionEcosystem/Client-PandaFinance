"use client"

import { useWeb3ModalState } from "@web3modal/wagmi/react"
import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import Loader from "../loader"
import ContentStatsError from "./content-stats-error"
import ContentStats from "./content-stats"

import dashboard from "../../../data/lang/en/dashboard.json"

export default function DashboardContent() {
    const [mounted, setMounted] = useState(false)
    const { selectedNetworkId } = useWeb3ModalState()

    useEffect(() => {
        setMounted(true)
    }, [])
    
    console.log(selectedNetworkId)
    
    return (
        <Tabs defaultValue="stats" className="">
            {/**<TabsList className="grid w-full grid-cols-1 max-w-fit">
                {dashboard["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>**/}
            {mounted ? (
                Number(selectedNetworkId) !== 1 ? (
                    <ContentStatsError />
                ) : (
                    <ContentStats />
                )
            ) : null}
        </Tabs>
    )
}
