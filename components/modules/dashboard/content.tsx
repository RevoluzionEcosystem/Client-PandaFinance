"use client"

import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import ContentStats from "./content-stats"

import dashboard from "../../../data/lang/en/dashboard.json"

export default function DashboardContent() {
    return (
        <Tabs defaultValue="stats" className="">
            {/**<TabsList className="grid w-full grid-cols-1 max-w-fit">
                {dashboard["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>**/}
            <ContentStats />
        </Tabs>
    )
}
