"use client"

import { DashboardIcon, HomeIcon, ReaderIcon, SizeIcon } from "@radix-ui/react-icons"
import { TbBellCheck, TbChartHistogram, TbDeviceImacStar, TbEaseInOutControlPoints, TbFileDescription, TbReportMoney, TbShieldCheckFilled, TbUserCheck, TbUsersGroup } from "react-icons/tb"
import { FaFacebook, FaGithubAlt, FaReddit, FaTelegram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { GetTokenSupplyCirculating } from "../components/fetch/blockchain/token/getTokenSupplyCirculating"
import { GetTokenSupplyTotal } from "../components/fetch/blockchain/token/getTokenSupplyTotal"
import { GetTokenMinSwap } from "../components/fetch/blockchain/token/getTokenMinSwap"
import { GetTokenTradeEnabled } from "../components/fetch/blockchain/token/getTokenTradeEnabled"
import { GetTokenFeeActive } from "../components/fetch/blockchain/token/getTokenFeeActive"
import { GetTokenSwapEnabled } from "../components/fetch/blockchain/token/getTokenSwapEnabled"
import { GetTokenTotalAutoBuyback } from "../components/fetch/blockchain/token/getTokenTotalAutoBuyback"
import { GetTokenTotalCollectedFee } from "../components/fetch/blockchain/token/getTokenTotalCollectedFee"
import { GetTokenTotalCollectedFeeBurn } from "../components/fetch/blockchain/token/getTokenTotalCollectedFeeBurn"
import { GetTokenTotalCollectedFeeMarketing } from "../components/fetch/blockchain/token/getTokenTotalCollectedFeeMarketing"
import { GetTokenTotalCollectedFeeStaking } from "../components/fetch/blockchain/token/getTokenTotalCollectedFeeStaking"
import { GetTokenTotalRedeemedFee } from "../components/fetch/blockchain/token/getTokenTotalRedeemedFee"
import { GetTokenTotalRedeemedFeeBurn } from "../components/fetch/blockchain/token/getTokenTotalRedeemededFeeBurn"
import { GetTokenTotalRedeemedFeeMarketing } from "../components/fetch/blockchain/token/getTokenTotalRedeemededFeeMarketing"
import { GetTokenTotalRedeemedFeeStaking } from "../components/fetch/blockchain/token/getTokenTotalRedeemededFeeStaking"
import { GetTokenFeeBuyBurn } from "../components/fetch/blockchain/token/getTokenFeeBuyBurn"
import { GetTokenFeeBuyMarketing } from "../components/fetch/blockchain/token/getTokenFeeBuyMarketing"
import { GetTokenFeeBuyStaking } from "../components/fetch/blockchain/token/getTokenFeeBuyStaking"
import { GetTokenFeeSellBurn } from "../components/fetch/blockchain/token/getTokenFeeSellBurn"
import { GetTokenFeeSellMarketing } from "../components/fetch/blockchain/token/getTokenFeeSellMarketing"
import { GetTokenFeeSellStaking } from "../components/fetch/blockchain/token/getTokenFeeSellStaking"
import { GetTokenFeeTransferBurn } from "../components/fetch/blockchain/token/getTokenFeeTransferBurn"
import { GetTokenFeeTransferMarketing } from "../components/fetch/blockchain/token/getTokenFeeTransferMarketing"
import { GetTokenFeeTransferStaking } from "../components/fetch/blockchain/token/getTokenFeeTransferStaking"

var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"]
var VALUE = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion"];

export const nFormatter = (number: number) => {
    var tier = Math.log10(Math.abs(number)) / 3 | 0

    if(tier <= 0) return Number(number).toFixed(3)
    
    var suffix = SI_SYMBOL[tier]
    var scale = Math.pow(10, tier * 3)

    var scaled = number / scale

    return scaled.toFixed(3) + " " + suffix
}

export const nAmount = (number: number, decimals: number, fixed?: number) => {
    var tier = Math.log10(Math.abs(number)) / 3 | 0

    if(tier <= 0) return Number(number).toFixed(decimals)
    
    var suffix = VALUE[tier]
    var scale = Math.pow(10, tier * 3)

    var scaled = number / scale

    if(fixed > 0) return scaled.toFixed(fixed) + " " + suffix

    return scaled.toFixed(3) + " " + suffix
}

export function getCssValue(name: string) {
    const [val, setVal] = useState("")

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const value = rootStyles.getPropertyValue(name)
        setVal(value)
    }, [])

    return val
}

export function getNavIcon(id: string) {
    if (id === "home") {
        return <HomeIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "dashboard") {
        return <DashboardIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "swap") {
        return <SizeIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "documentation") {
        return <ReaderIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
}

export function getHomeOptionIcon(index: number, index2: number) {
    if (index === 0 && index2 === 0) {
        return <TbEaseInOutControlPoints className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 0 && index2 === 1) {
        return <TbShieldCheckFilled className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 1 && index2 === 0) {
        return <TbUsersGroup className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 1 && index2 === 1) {
        return <TbBellCheck className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 2 && index2 === 0) {
        return <TbChartHistogram className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 3 && index2 === 0) {
        return <TbReportMoney className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 4 && index2 === 0) {
        return <TbFileDescription className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 4 && index2 === 1) {
        return <TbUserCheck className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
    if (index === 4 && index2 === 2) {
        return <TbDeviceImacStar className="text-[60px] text-foreground bg-muted w-[60px] h-[60px] rounded-full p-3" />
    }
}

export function getDashboardInfo(id: number) {
    if (id === 0) {
        return GetTokenSupplyTotal(true, "w-full h-9 bg-muted")
    }
    if (id === 1) {
        return GetTokenSupplyCirculating(true, "w-full h-9 bg-muted")
    }
    if (id === 2) {
        return GetTokenMinSwap(true, "w-full h-9 bg-muted")
    }
    if (id === 3) {
        return GetTokenTradeEnabled("w-full h-9 bg-muted")
    }
    if (id === 4) {
        return GetTokenSwapEnabled("w-full h-9 bg-muted")
    }
    if (id === 5) {
        return GetTokenFeeActive("w-full h-9 bg-muted")
    }
    if (id === 6) {
        return GetTokenTotalAutoBuyback(true, "w-full h-9 bg-muted")
    }
    if (id === 7) {
        return GetTokenTotalCollectedFee(true, "w-full h-9 bg-muted")
    }
    if (id === 8) {
        return GetTokenTotalCollectedFeeBurn(true, "w-full h-9 bg-muted")
    }
    if (id === 9) {
        return GetTokenTotalCollectedFeeMarketing(true, "w-full h-9 bg-muted")
    }
    if (id === 10) {
        return GetTokenTotalCollectedFeeStaking(true, "w-full h-9 bg-muted")
    }
    if (id === 11) {
        return GetTokenTotalRedeemedFee(true, "w-full h-9 bg-muted")
    }
    if (id === 12) {
        return GetTokenTotalRedeemedFeeBurn(true, "w-full h-9 bg-muted")
    }
    if (id === 13) {
        return GetTokenTotalRedeemedFeeMarketing(true, "w-full h-9 bg-muted")
    }
    if (id === 14) {
        return GetTokenTotalRedeemedFeeStaking(true, "w-full h-9 bg-muted")
    }
    if (id === 15) {
        return GetTokenFeeBuyBurn(true, "w-full h-9 bg-muted")
    }
    if (id === 16) {
        return GetTokenFeeBuyMarketing(true, "w-full h-9 bg-muted")
    }
    if (id === 17) {
        return GetTokenFeeBuyStaking(true, "w-full h-9 bg-muted")
    }
    if (id === 18) {
        return GetTokenFeeSellBurn(true, "w-full h-9 bg-muted")
    }
    if (id === 19) {
        return GetTokenFeeSellMarketing(true, "w-full h-9 bg-muted")
    }
    if (id === 20) {
        return GetTokenFeeSellStaking(true, "w-full h-9 bg-muted")
    }
    if (id === 21) {
        return GetTokenFeeTransferBurn(true, "w-full h-9 bg-muted")
    }
    if (id === 22) {
        return GetTokenFeeTransferMarketing(true, "w-full h-9 bg-muted")
    }
    if (id === 23) {
        return GetTokenFeeTransferStaking(true, "w-full h-9 bg-muted")
    }
}

export function getSocialIcon(id: string) {
    if (id === "twitter") {
        return <FaXTwitter className="h-[2rem] w-[2rem] " />
    }
    if (id === "telegram") {
        return <FaTelegram className="h-[2rem] w-[2rem] " />
    }
    if (id === "youtube") {
        return <FaYoutube className="h-[2rem] w-[2rem] " />
    }
    if (id === "facebook") {
        return <FaFacebook className="h-[2rem] w-[2rem] " />
    }
    if (id === "reddit") {
        return <FaReddit className="h-[2rem] w-[2rem] " />
    }
    if (id === "github") {
        return <FaGithubAlt className="h-[2rem] w-[2rem] " />
    }
}

export const truncateAddress = (address: string, first: number, last: number, filler?: string) => {
    return address.substring(0, first) + (filler ? filler : "...")  + address.substring(address.length - last)
}