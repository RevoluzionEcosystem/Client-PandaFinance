"use client"

import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"
import { Card, CardContent, CardHeader } from "../../ui/card"

import Statistics from "./statistics"
import Header from "../header"

import bgImg from "../../../public/asset/img/background-dashboard.png"
import data from "../../../data/dashboard.json"

export default function Dashboard() {
    const isMounted = Mounted()

    return (
        <div className="p-3 text-center items-center justify-center">
            { isMounted ? (
                <Header minHeight={300} headline={data.headline} subheadline={data.subheadline} invert={true} background={`url(${bgImg.src})`} />
            ) : <Skeleton className="m-1 min-h-[300px] w-full" /> }

            { isMounted ? (
                <Statistics />
            ) : (
                <div className="mt-6">
                    <Skeleton className="m-2 h-12 w-1/4" />
                    <Card>
                        <CardContent className="pt-6 space-y-2">
                            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}