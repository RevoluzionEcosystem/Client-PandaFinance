import { useContractRead } from "wagmi"
import { Mounted } from "../../../../lib/client"
import { Skeleton } from "../../../ui/skeleton"
import { nAmount } from "../../../../lib/formatter"

import tokenAbi from "../../../../data/abi/token.json"

export function GetTokenTotalBuybackBurn(tokenContract: any, formatted?: boolean, className?: string) {
    const isMounted = Mounted()

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "totalFeeCollected"
    })

    if (isError) {
        return <>{ error }</>
    }

    if (formatted) {
        const format = Number(Number(data) / Number(Math.pow(10, 18)))
        return <>{ isMounted ? nAmount(format, 3) : <Skeleton className={className} /> }</>
    }
    return <>{ isMounted ? Number(data) : <Skeleton className={className} /> }</>
}