import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import ContentOnchain from "./content-onchain"
import ContentCrosschain from "./content-crosschain"

import swap from "../../../data/lang/en/swap.json"

export default function Pandaswap() {
    return (
        <Tabs defaultValue="onchain" className="">
            <TabsList className="grid w-full grid-cols-2 max-w-fit">
                {swap["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <ContentOnchain />
            <ContentCrosschain />
        </Tabs>
    )
}