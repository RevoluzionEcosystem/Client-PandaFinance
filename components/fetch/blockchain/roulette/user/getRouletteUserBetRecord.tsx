"use client"

import { useContractRead } from "wagmi"
import { Mounted } from "../../../../../lib/client"
import { Skeleton } from "../../../../ui/skeleton"
import { nFormatter } from "../../../../../lib/formatter"

import rouletteAbi from "../../../../../data/abi/roulette.json"
import info from "../../../../../data/general.json"

export function GetRouletteUserBetRecord(gameContract: any, userAddress: any, formatted?: boolean, className?: string) {
    const isMounted = Mounted()
    
    const { data: dataPlayed, error: errorPlayed, isError: isErrorPlayed } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "played",
        args: [
            userAddress
        ]
    })

    const { data: dataTotal, error: errorTotal, isError: isErrorTotal } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "playerTotalBet",
        args: [
            userAddress
        ]
    })

    if (isErrorPlayed) {
        return <>{ errorPlayed}</>
    }

    if (isErrorTotal) {
        return <>{ errorTotal}</>
    }

    if (formatted) {
        const formatTotal = Number(Number(dataTotal) / Number(Math.pow(10, 18)))
        return <>{ 
            isMounted ? (
                dataPlayed ? (
                    <>
                        {`${nFormatter(formatTotal, Number(dataTotal) >= Number(Math.pow(10, 21)) ? 2 : 0)} ${info.project_acronym}`}
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
                        {`${Number(dataTotal)} ${info.project_acronym}`}
                    </>
                ) : info.neverPlay
            ) : <Skeleton className={className} /> }
        </>
    )
}