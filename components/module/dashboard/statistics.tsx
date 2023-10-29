"use client"

import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { getDashboardData } from "../../../lib/helpers"
import { Separator } from "../../ui/separator"

import data from "../../../data/dashboard.json"
import info from "../../../data/general.json"

export default function Statistics() {
    const isMounted = Mounted()

    return (
        <div className="p-3 mt-6 text-left items-center justify-center">
            <div className="">
                {isMounted ? (
                    <h2 className="text-2xl font-bold mb-2">{info.statistics}</h2>
                ) : (
                    <Skeleton className="m-2 h-12 w-1/4" />
                )}
                
                <Separator className="mb-6" />

                <Card>
                    <CardContent className="pt-6 space-y-2">
                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {data["card"].length > 0 ? data["card"].map((item, index) => (
                                <Card key={index} className="bg-muted hover:scale-105 border-transparent hover:border-primary border-2 transition-transform">
                                    <CardHeader key={"h-" + index} className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        { isMounted ? (
                                            <CardTitle key={"t-" + index} className="text-sm text-muted-foreground dark:text-primary font-medium">
                                                { item.title }
                                            </CardTitle>
                                        ) : <Skeleton className="mx-2 h-6 w-full" /> }
                                    </CardHeader>
                                    <CardContent key={"c-" + index}>
                                        <div key={"cd-" + index} className="text-left text-2xl font-bold">
                                            { getDashboardData(item.data === 4 ? info["smart_contract"].pair : info["smart_contract"].token, item.data, true, "mx-2 h-9 w-full") }
                                        </div>
                                    </CardContent>
                                </Card>
                            )) : (
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <Skeleton className="mx-2 h-6 w-full" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            <Skeleton className="mx-2 h-9 w-full" />
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}