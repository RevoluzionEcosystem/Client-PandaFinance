"use client"

import { useWeb3Modal } from "@web3modal/wagmi/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { TabsContent, } from "../../ui/tabs"
import { SelectSeparator } from "../../ui/select"

import general from "../../../data/lang/en/general.json"
import dashboard from "../../../data/lang/en/dashboard.json"
import { Button } from "../../ui/button"

export default function ContentStatsError() {
    const { open } = useWeb3Modal()

    return (
        <TabsContent value="stats">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${dashboard["content"]["stats"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${dashboard["content"]["stats"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div className="">
                        {general["terms"].change_network}
                    </div>
                    <w3m-network-button />
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}