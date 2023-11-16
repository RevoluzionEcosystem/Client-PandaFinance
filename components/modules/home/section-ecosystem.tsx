"use client"
import { getHomeOptionIcon } from "../../../lib/helpers"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"

const data = home["data"]

export default function SectionEcosystem() {
    return (
        <div className="max-w-[85rem]">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto sm:text-left lg:text-center">
                <h2 className="text-3xl text-secondary font-bold lg:text-4xl">
                    {home.headline_3}
                </h2>
                <p className="mt-3 text-muted-foreground">
                    {`${home.subheadline_3}.`}
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 pb-6 mx-auto">
                {data.slice(0, 4).map((item, index) => (
                    <div key={`div-${index}`}>
                        <h2 key={`h-${index}`} className="gradient text-3xl font-bold lg:text-4xl mb-6">
                            {item.title}
                        </h2>

                        <div key={`c-${index}`} className="space-y-6 lg:space-y-10">
                            {item["data"].map((content, index2) => (
                                <div key={`c-${index2}`} className="flex">
                                    {getHomeOptionIcon(index, index2)}
                                    <div key={`cdiv-${index2}`} className="ms-5 sm:ms-8">
                                        <h3 key={`ch-${index2}`} className="text-base sm:text-lg font-semibold text-foreground">
                                            {`${content.header}`}
                                        </h3>
                                        <p key={`cp-${index2}`} className="mt-1 text-muted-foreground">
                                            {`${content.content}.`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid gap-12 px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 pt-6 mx-auto">
                {data.slice(4, 5).map((item, index) => (
                    <div key={`div-${index}`} className="md:max-w-[50%] mx-auto">
                        <h2 key={`h-${index}`} className="gradient text-3xl font-bold lg:text-4xl mb-6">
                            {item.title}
                        </h2>

                        <div key={`c-${index}`} className="space-y-6 lg:space-y-10">
                            {item["data"].map((content, index2) => (
                                <div key={`c-${index2}`} className="flex">
                                    {getHomeOptionIcon(Number(Number(index) + 4), index2)}
                                    <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                                            {`${content.header}`}
                                        </h3>
                                        <p className="mt-1 text-muted-foreground">
                                            {`${content.content}.`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}