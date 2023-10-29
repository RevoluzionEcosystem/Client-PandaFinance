var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"]
var VALUE = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion"];

export const nAmount = (number: number, decimals: number) => {
    var tier = Math.log10(Math.abs(number)) / 3 | 0

    if(tier <= 0) return Number(number).toFixed(decimals)
    
    var suffix = VALUE[tier]
    var scale = Math.pow(10, tier * 3)

    var scaled = number / scale

    return scaled.toFixed(3) + " " + suffix
}

export const nFormatter = (number: number, decimal: number) => {
    var tier = Math.log10(Math.abs(number)) / 3 | 0

    if(tier <= 0) return Number(number).toFixed(3)
    
    var suffix = SI_SYMBOL[tier]
    var scale = Math.pow(10, tier * 3)

    var scaled = number / scale

    return scaled.toFixed(decimal) + " " + suffix
}

export const reformatAddress = (address: string) => {
    const reformatted = address.slice(2)
    return reformatted
}