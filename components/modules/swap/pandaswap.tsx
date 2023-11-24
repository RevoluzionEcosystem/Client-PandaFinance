import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import SwapEthereum from "./swap-ethereum"
import SwapPolygon from "./swap-polygon"
import SwapBinance from "./swap-binance"

import swap from "../../../data/lang/en/swap.json"

export default function Pandaswap() {
    return (
        <Tabs defaultValue="ethereum" className="">
            <TabsList className="grid w-full grid-cols-3 max-w-fit">
                {swap["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <SwapEthereum />
            <SwapPolygon />
            <SwapBinance />
        </Tabs>
    )
}