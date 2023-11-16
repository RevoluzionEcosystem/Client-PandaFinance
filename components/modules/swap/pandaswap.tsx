import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import ContentOnchain from "./content-onchain"

import swap from "../../../data/lang/en/swap.json"

export default function Pandaswap() {
    return (
        <Tabs defaultValue="onchain" className="">
            {/**<TabsList className="grid w-full grid-cols-1 max-w-fit">
                {swap["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>**/}
            <ContentOnchain />
        </Tabs>
    )
}
