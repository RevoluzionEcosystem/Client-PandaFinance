import { useContractRead } from "wagmi"

import rouletteAbi from "../../../../data/abi/roulette.json"

export function GetRouletteSpinPrice(gameContract: any) {
    const { data, error, isError } =  useContractRead({
        address: gameContract,
        abi: rouletteAbi,
        functionName: "spinPrice"
    })

    if (isError) {
        console.log(error)
    }

    return data
}