"use client"

import { useContractRead } from "wagmi"
import { Mounted } from "../../../../../lib/client"
import { Skeleton } from "../../../../ui/skeleton"
import { nFormatter } from "../../../../../lib/formatter"

import rouletteAbi from "../../../../../data/abi/roulette.json"
import info from "../../../../../data/general.json"

export function GetRouletteUserPlayRecord(gameContract: any, userAddress: any, formatted?: boolean, className?: string) {
    const isMounted = Mounted()
    
    const { data: dataPlayed, error: errorPlayed, isError: isErrorPlayed } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "played",
        args: [
            userAddress
        ]
    })

    const { data: dataWin, error: errorWin, isError: isErrorWin } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "playerWinAmount",
        args: [
            userAddress
        ]
    })

    const { data: dataLose, error: errorLose, isError: isErrorLose } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "playerLoseAmount",
        args: [
            userAddress
        ]
    })

    if (isErrorPlayed) {
        return <>{ errorPlayed}</>
    }

    if (isErrorWin) {
        return <>{ errorWin}</>
    }

    if (isErrorLose) {
        return <>{ errorLose}</>
    }

    if (formatted) {
        const formatWin = Number(Number(dataWin) / Number(Math.pow(10, Number(dataWin) >= 1000 ? 2 : 0)))
        const formatLose = Number(Number(dataLose) / Number(Math.pow(10, Number(dataLose) >= 1000 ? 2 : 0)))
        return <>{ 
            isMounted ? (
                dataPlayed ? (
                    <>
                        {`Win: ${nFormatter(formatWin, Number(dataWin) >= 1000 ? 2 : 0)} ${info.times}`}
                        <br />
                        {`Lose: ${nFormatter(formatLose, Number(dataLose) >= 1000 ? 2 : 0)} ${info.times}`}
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
                        {`Win: ${Number(dataWin)} ${info.times}`}
                        <br />
                        {`Lose: ${Number(dataLose)} ${info.times}`}
                    </>
                ) : info.neverPlay
            ) : <Skeleton className={className} /> }
        </>
    )
}