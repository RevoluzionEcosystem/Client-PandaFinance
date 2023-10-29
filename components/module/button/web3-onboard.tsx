"use client"

import { useConnectWallet } from '@web3-onboard/react'
import { Button } from '../../ui/button'
import { Mounted } from '../../../lib/client'
import { getNavIcon } from '../../../lib/helpers'
import { Skeleton } from '../../ui/skeleton'

import data from "../../../data/general.json"

export default function Web3Connect() {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    const isMounted = Mounted()

    return (
        <>
            {isMounted ? (
                <Button disabled={connecting} variant="secondary" className="border border-transparent justify-start hover:text-foreground hover:bg-transparent hover:border-primary" onClick={() => (wallet ? disconnect(wallet) : connect())}>
                    {
                        !wallet ? (
                            getNavIcon("connect")
                        ) : (
                            getNavIcon("disconnect")
                        )
                    }
                    <span className="hidden ml-2 md:block">
                        {
                            connecting ? (
                                data.loading
                            ) : (
                                !wallet ? (
                                    `${data.connect} ${data.wallet} ${data.for} ${data.kyberswap}`
                                ) : (
                                    `${data.disconnect} ${data.wallet} ${data.for} ${data.kyberswap}`
                                )
                            )
                        }
                    </span>
                </Button>
            ) : (
                <Button variant="secondary" className="min-w-[90px] border border-transparent justify-start hover:text-foreground hover:bg-transparent hover:border-primary">
                    <Skeleton className="h-4 w-full" />
                </Button>
            )}
        </>
    )
}