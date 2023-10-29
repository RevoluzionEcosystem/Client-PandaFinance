import { useContractRead } from "wagmi"

import tokenAbi from "../../../../data/abi/token.json"

export function GetTokenSymbol(tokenContract: any) {
    const { data, error, isError } =  useContractRead({
        address: tokenContract,
        abi: tokenAbi,
        functionName: "symbol"
    })

    if (isError) {
        console.log(error)
    }

    return data
}