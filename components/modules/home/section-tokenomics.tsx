"use client"

import { Alert, AlertDescription, AlertTitle } from "../../ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"
import { nAmount } from "../../../lib/helpers"

import DoughnutChart from "../doughnut-chart"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"

const terms = general["terms"]
const chartData = home["chart"]

export default function SectionTokenomics() {

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
                <div className="grid gap-12">
                    <div className="sm:text-left lg:text-center">
                        <h2 className="text-3xl text-secondary font-bold lg:text-4xl">
                            {home.headline_5}
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            {`${home.subheadline_5}.`}
                        </p>
                    </div>

                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-[400px_1fr]">
                        <DoughnutChart data={chartData} />
                        <div>
                            {chartData.map((item, index) => (
                                <Alert key={`alert-${index}`} className="mb-3 cursor-pointer hover:scale-[105%]" style={{border: "solid 1px", borderColor: item.color}}>
                                    <AlertTitle key={`title-${index}`} className="font-bold text-foreground">
                                        {`${item.title}`}
                                    </AlertTitle>
                                    <AlertDescription key={`description-${index}`} className="text-muted-foreground">
                                        <span className="font-bold" style={{color: item.color}}>{`${terms.amount}: `}</span>{`${nAmount(item.value, 2, 1)} ${terms.tokens}`}
                                        <br />
                                        <span className="font-bold" style={{color: item.color}}>{`${terms.vest_lock}: `}</span>{`${item.lock}`}
                                    </AlertDescription>
                                </Alert>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}