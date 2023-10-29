"use client"

import { useContractRead } from "wagmi"
import { Mounted } from "../../../../../lib/client"
import { Skeleton } from "../../../../ui/skeleton"
import { nFormatter } from "../../../../../lib/formatter"

import rouletteAbi from "../../../../../data/abi/roulette.json"
import info from "../../../../../data/general.json"

export function GetRouletteUserProfitRecord(gameContract: any, userAddress: any, formatted?: boolean, className?: string) {
    const isMounted = Mounted()
    
    const { data: dataPlayed, error: errorPlayed, isError: isErrorPlayed } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "played",
        args: [
            userAddress
        ]
    })

    const { data: dataReceived, error: errorReceived, isError: isErrorReceived } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "playerTotalReceived",
        args: [
            userAddress
        ]
    })

    if (isErrorPlayed) {
        return <>{ errorPlayed}</>
    }

    if (isErrorReceived) {
        return <>{ errorReceived}</>
    }

    if (formatted) {
        const formatReceived = Number(Number(dataReceived) / Number(Math.pow(10, 18)))
        return <>{ 
            isMounted ? (
                dataPlayed ? (
                    <>
                        {`${nFormatter(formatReceived, Number(dataReceived) >= Number(Math.pow(10, 21)) ? 2 : 0)} ${info.project_acronym}`}
                    </>
                ) : info.neverPlay
                ) : <Skeleton className={className} />
        }</>
    }
    
    return (
        <>
            { isMounted ? (
                dataPlayed ? (
                    <>
                        {`${Number(dataReceived)} ${info.project_acronym}`}
                    </>
                ) : info.neverPlay
            ) : <Skeleton className={className} /> }
        </>
    )
}