import { SDK, BLOCKCHAIN_NAME, Configuration, CHAIN_TYPE, OnChainTradeType, OnChainTrade, EvmOnChainTrade } from "rubic-sdk"
import { TabsContent } from "../../ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { SelectSeparator } from "../../ui/select"

import general from "../../../data/lang/en/general.json"
import swap from "../../../data/lang/en/swap.json"
import { SelectBlockchain } from "../input/select-blockchain"

const configuration: Configuration = {
    rpcProviders: {
        [BLOCKCHAIN_NAME.ETHEREUM]: {
            rpcList: [
                "https://ethereum.publicnode.com",
            ]
        },
        [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
            rpcList: [
                "https://bsc.publicnode.com",
            ]
        },
        [BLOCKCHAIN_NAME.POLYGON]: {
            rpcList: [
                "https://polygon-bor.publicnode.com",
            ]
        }
    },
    providerAddress: {
        [CHAIN_TYPE.EVM]: {
            crossChain: "0x0000000000000000000000000000000000000000",
            onChain: "0x0000000000000000000000000000000000000000"
        }
    }
}
const terms = general["terms"]

export default async function ContentOnchain() {

    return (
        <TabsContent value="onchain">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${swap["content"]["onchain"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${swap["content"]["onchain"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div>
                        <SelectBlockchain />
                    </div>
                </CardContent>
                <CardFooter className="text-xs">
                    {`${terms.powered_by} ${terms.rubic_onchain}`}
                </CardFooter>
            </Card>
        </TabsContent>
    )
}