"use client"

import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { Skeleton } from "../../../ui/skeleton"

import tokenAbi from "../../../../data/abi.json"

const tokenContract = "0xeFb9513A007F17A89bF6550b6Aa85c27F216C348"

export function GetTokenName(className?: string) {
    const [mounted, setMounted] = useState(false)
     
    useEffect(() => {
        setMounted(true)
    }, [])

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "name"
    })

    if (isError) {
        return <>{ error }</>
    }

    return <>{ mounted ? data : <Skeleton className={className} /> }</>
}