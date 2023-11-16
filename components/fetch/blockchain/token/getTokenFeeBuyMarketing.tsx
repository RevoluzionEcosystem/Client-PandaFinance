"use client"

import { useContractRead } from "wagmi"
import { useEffect, useState } from "react"
import { Skeleton } from "../../../ui/skeleton"
import { nAmount } from "../../../../lib/helpers"

import tokenAbi from "../../../../data/abi.json"

const tokenContract = "0xeFb9513A007F17A89bF6550b6Aa85c27F216C348"

export function GetTokenFeeBuyMarketing(formatted?: boolean, className?: string) {
    const [mounted, setMounted] = useState(false)
     
    useEffect(() => {
        setMounted(true)
    }, [])

    
    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "BUYFEEMARKETING"
    })

    if (isError) {
        return <>{ error }</>
    }

    if (formatted) {
        const format = Number(Number(data) / Number(Math.pow(10, 2)))
        return <>{ mounted ? nAmount(format, 3) : <Skeleton className={className} /> }</>
    }
    return <>{ mounted ? Number(data) : <Skeleton className={className} /> }</>
}