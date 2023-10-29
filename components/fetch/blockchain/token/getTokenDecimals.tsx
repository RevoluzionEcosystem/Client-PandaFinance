import { useContractRead } from "wagmi"

import tokenAbi from "../../../../data/abi/token.json"

export function GetTokenDecimals(tokenContract: any) {
    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "decimals"
    })

    if (isError) {
        console.log(error)
    }

    return data
}