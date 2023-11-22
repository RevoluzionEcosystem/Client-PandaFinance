"use client"

import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { Skeleton } from "../../../ui/skeleton"

import tokenAbi from "../../../../data/abi.json"

const tokenContract = "0x08A5144632330eD24CC56a839427dc9C1bFc73b2"

export function GetTokenDecimals(className?: string) {
    const [mounted, setMounted] = useState(false)
     
    useEffect(() => {
        setMounted(true)
    }, [])

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "decimals"
    })

    if (isError) {
        return <>{ error }</>
    }

    return <>{ mounted ? Number(data) : <Skeleton className={className} /> }</>
}