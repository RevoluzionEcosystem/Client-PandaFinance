"use client"

import { Widget } from "@kyberswap/widgets"
import { useConnectWallet } from "@web3-onboard/react"
import { ethers } from "ethers"
import { Mounted } from "../../../lib/client"
import { KyberTheme } from "../../../lib/helpers"
import { Skeleton } from "../../ui/skeleton"
import { Separator } from "../../ui/separator"

import Web3Connect from "../button/web3-onboard"
import Header from "../header"

import bgImg from "../../../public/asset/img/background-swap.png"
import data from "../../../data/general.json"
import swap from "../../../data/swap.json"

export default function KyberSwap() {    
    const [{ wallet }] = useConnectWallet()
    
    const theme = KyberTheme()
    const isMounted = Mounted()
    
    let ethersProvider: any    
    if (wallet) {
        ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    }

    return (
        <div className="p-3 text-center items-center justify-center">
            { isMounted ? (
                <div>
                    <Header minHeight={300} headline={swap.headline} subheadline={swap.subheadline} invert={true} background={`url(${bgImg.src})`} />
                </div>
            ) : <Skeleton className="m-1 min-h-[300px] w-full" /> }

            <br />
            <Web3Connect />

            <div className="p-3 flex justify-center">
                {isMounted ? (
                    <Widget
                        client="Revoluzion dApp for Ronin Casino"
                        theme={theme}
                        tokenList={[]}
                        enableRoute={true}
                        provider={ethersProvider}
                        defaultTokenOut={data["smart_contract"].token}
                        feeSetting={{
                            feeAmount: 100,
                            feeReceiver: data["development"]["support"].address,
                            chargeFeeBy: "currency_in",
                            isInBps: true,
                        }}
                    />
                ) : (
                    <div className="p-3 text-left justify-center min-w-[343px] min-h-[577px] rounded-md bg-border">
                        <Skeleton className="m-2 mt-3 h-6" />
                        <div className="p-1 mt-5 bg-accent rounded-md">
                            <Skeleton className="m-2 h-6" />
                            <Skeleton className="m-2 h-10" />
                        </div>
                        <Skeleton className="m-2 mt-7 h-6" />
                        <div className="p-1 mt-5 bg-accent rounded-md">
                            <Skeleton className="m-2 h-6" />
                            <Skeleton className="m-2 h-10" />
                        </div>
                        <div className="p-1 mt-4 bg-accent border border-primary-foreground rounded-md">
                            <Skeleton className="m-2 h-6" />
                            <Separator className="mx-2 w-90 bg-primary-foreground" />
                            <Skeleton className="m-2 h-5" />
                            <Skeleton className="m-2 h-5" />
                            <Skeleton className="m-2 h-5" />
                        </div>
                        <div className="p-1 mt-5 bg-primary rounded-md">
                            <Skeleton className="m-2 h-6" />
                        </div>
                        <Skeleton className="m-2 mt-3 h-6" />
                    </div>
                )}
            </div>
        </div>
    )
}