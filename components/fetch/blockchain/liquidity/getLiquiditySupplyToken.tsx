import { useContractRead } from "wagmi"
import { Skeleton } from "../../../ui/skeleton"
import { Mounted } from "../../../../lib/client"
import { nAmount } from "../../../../lib/formatter"

import tokenAbi from "../../../../data/abi/token.json"
import info from "../../../../data/general.json"

export function GetLiquiditySupplyToken(tokenContract: any, formatted?: boolean, className?: string) {
    const isMounted = Mounted()

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "balanceOf",
        args: [
            info["smart_contract"].pair
        ]
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