import { useContractRead } from "wagmi"
import { Mounted } from "../../../../lib/client"
import { Skeleton } from "../../../ui/skeleton"
import { nAmount } from "../../../../lib/formatter"

import tokenAbi from "../../../../data/abi/token.json"

export function GetTokenFeeAntisnipe(tokenContract: any, formatted?: boolean, className?: string) {
    const isMounted = Mounted()

    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "ANTISNIPEFEE"
    })

    if (isError) {
        return <>{ error }</>
    }

    if (formatted) {
        const format = Number(Number(data) / Number(Math.pow(10, 2)))
        return <>{ isMounted ? nAmount(format, 2) : <Skeleton className={className} /> }</>
    }
    return <>{ isMounted ? Number(data) : <Skeleton className={className} /> }</>
}