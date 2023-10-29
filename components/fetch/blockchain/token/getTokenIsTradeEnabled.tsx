import { useContractRead } from "wagmi"
import { Skeleton } from "../../../ui/skeleton"
import { Mounted } from "../../../../lib/client"

import tokenAbi from "../../../../data/abi/token.json"

export function GetTokenIsTradeEnabled(tokenContract: any, className?: string) {
    const isMounted = Mounted()
    
    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "inSwap"
    })

    if (isError) {
        return <>{ error }</>
    }
    
    return <>{ isMounted ? (data ? "Yes" : "No") : <Skeleton className={className} /> }</>
}