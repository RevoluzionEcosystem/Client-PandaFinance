"use client"

import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { Skeleton } from "../../../ui/skeleton"
import { nAmount } from "../../../../lib/helpers"

import tokenAbi from "../../../../data/abi.json"

const tokenContract = "0x08A5144632330eD24CC56a839427dc9C1bFc73b2"

export function GetTokenTotalRedeemedFeeStaking(formatted?: boolean, className?: string) {
    const [mounted, setMounted] = useState(false)
     
    useEffect(() => {
        setMounted(true)
    }, [])

    
    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "totalStakingFeeRedeemed"
    })

    if (isError) {
        return <>{ error }</>
    }

    if (formatted) {
        const format = Number(Number(data) / Number(Math.pow(10, 18)))
        return <>{ mounted ? nAmount(format, 3) : <Skeleton className={className} /> }</>
    }
    return <>{ mounted ? Number(data) : <Skeleton className={className} /> }</>
}