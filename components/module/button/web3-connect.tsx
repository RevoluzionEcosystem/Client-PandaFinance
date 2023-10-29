"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { Button } from '../../ui/button'
import { Mounted } from '../../../lib/client'
import { getNavIcon } from '../../../lib/helpers'

import data from "../../../data/general.json"
import { Skeleton } from '../../ui/skeleton'

export default function Web3Connect() {
    const { isOpen, open } = useWeb3Modal()
    const { isConnected } = useAccount()

    const isMounted = Mounted()

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {isMounted ? (
                        <Button variant="secondary" className="border border-transparent justify-start hover:text-foreground hover:bg-transparent hover:border-primary" onClick={() => open()}>
                            {
                                isOpen ? (
                                    getNavIcon("loading")
                                ) : (
                                    !isConnected ? (
                                        getNavIcon("connect")
                                    ) : (
                                        getNavIcon("disconnect")
                                    )
                                )
                            }
                            <span className="hidden ml-2 md:block">
                                {
                                    isOpen ? (
                                        data.loading
                                    ) : (
                                        !isConnected ? (
                                            data.connect
                                        ) : (
                                            data.disconnect
                                        )
                                    )
                                }
                            </span>
                        </Button>
                    ) : (
                        <Button variant="secondary" className="border border-transparent justify-start hover:text-foreground hover:bg-transparent hover:border-primary" onClick={() => open()}>
                            <Skeleton className="h-4 w-full" />
                        </Button>
                    )}
                </TooltipTrigger>
                <TooltipContent className="mt-1 h-9 px-4 py-2 bg-primary rounded-md text-sm text-primary-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring block sm:h-8 sm:rounded-md sm:px-3 sm:text-xs md:hidden lg:h-10 lg:rounded-md lg:px-8">
                    <p>
                        {
                            isOpen ? (
                                data.loading
                            ) : (
                                !isConnected ? (
                                    data.connect
                                ) : (
                                    data.disconnect
                                )
                            )
                        }
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}