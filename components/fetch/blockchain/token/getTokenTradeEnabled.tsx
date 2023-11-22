"use client"

import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { Skeleton } from "../../../ui/skeleton"

import tokenAbi from "../../../../data/abi.json"

const tokenContract = "0x08A5144632330eD24CC56a839427dc9C1bFc73b2"

export function GetTokenTradeEnabled(className?: string) {
    const [mounted, setMounted] = useState(false)
     
    useEffect(() => {
        setMounted(true)
    }, [])

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "tradeEnabled"
    })

    if (isError) {
        return <>{ error }</>
    }

    return <>{ mounted ? (data ? "Yes" : "No") : <Skeleton className={className} /> }</>
}