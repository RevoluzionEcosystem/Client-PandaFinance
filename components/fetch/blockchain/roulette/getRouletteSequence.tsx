import { useContractRead } from "wagmi"

import rouletteAbi from "../../../../data/abi/roulette.json"

export function GetRouletteSequence(gameContract: any) {
    const { data, error, isError } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "getRouletteSequence"
    })

    if (isError) {
        console.log(error)
    }

    return data
}