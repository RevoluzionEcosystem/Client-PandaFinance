import { useContractRead } from "wagmi"
import { Skeleton } from "../../../ui/skeleton"
import { Mounted } from "../../../../lib/client"

import pairAbi from "../../../../data/abi/pair.json"

export function GetLiquidityAvailability(tokenContract: any, className?: string) {
    const isMounted = Mounted()

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: pairAbi,
        functionName: "totalSupply"
    })

    if (isError) {
        return <>{ error }</>
    }

    return <>{ isMounted ? (Number(data) > 0 ? "Yes" : "No") : <Skeleton className={className} /> }</>

}