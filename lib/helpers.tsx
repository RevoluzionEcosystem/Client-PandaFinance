"use client"

import { ColorWheelIcon, DashboardIcon, EnterIcon, ExitIcon, HomeIcon, LockClosedIcon, MixIcon, SizeIcon, UpdateIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { GetTokenSupplyTotal } from "../components/fetch/blockchain/token/getTokenSupplyTotal"
import { GetTokenSupplyCirculating } from "../components/fetch/blockchain/token/getTokenSupplyCirculating"
import { GetTokenSupplyBurned } from "../components/fetch/blockchain/token/getTokenSupplyBurned"
import { GetLiquiditySupplyToken } from "../components/fetch/blockchain/liquidity/getLiquiditySupplyToken"
import { GetLiquidityAvailability } from "../components/fetch/blockchain/liquidity/getLiquidityAvailability"
import { GetTokenIsSwapEnabled } from "../components/fetch/blockchain/token/getTokenIsSwapEnabled"
import { GetTokenIsFeeActive } from "../components/fetch/blockchain/token/getTokenIsFeeActive"
import { GetTokenIsTradeEnabled } from "../components/fetch/blockchain/token/getTokenIsTradeEnabled"
import { GetTokenFeeBuy } from "../components/fetch/blockchain/token/getTokenFeeBuy"
import { GetTokenFeeSell } from "../components/fetch/blockchain/token/getTokenFeeSell"
import { GetTokenFeeTransfer } from "../components/fetch/blockchain/token/getTokenFeeTransfer"
import { GetTokenFeeAntisnipe } from "../components/fetch/blockchain/token/getTokenFeeAntisnipe"
import { GetTokenMinSwap } from "../components/fetch/blockchain/token/getTokenMinSwap"
import { GetTokenTotalBuybackBurn } from "../components/fetch/blockchain/token/getTokenTotalBuybackBurn"
import { GetTokenTotalFeeCollected } from "../components/fetch/blockchain/token/getTokenTotalFeeCollected"
import { GetTokenTotalFeeRedeemed } from "../components/fetch/blockchain/token/getTokenTotalFeeRedeemed"
import { GetRouletteUserPlayRecord } from "../components/fetch/blockchain/roulette/user/getRouletteUserPlayRecord"
import { GetRouletteUserBetRecord } from "../components/fetch/blockchain/roulette/user/getRouletteUserBetRecord"
import { GetRouletteUserProfitRecord } from "../components/fetch/blockchain/roulette/user/getRouletteUserProfitRecord"

import imgBlackjack from "../public/asset/img/game-blackjack.png"
import imgCoinFlip from "../public/asset/img/game-coinflip.png"
import imgJackpot from "../public/asset/img/game-jackpot.png"
import imgRoulette from "../public/asset/img/game-roulette.png"
import imgDice from "../public/asset/img/game-dice.png"
import imgLuckyWheel from "../public/asset/img/game-luckywheel.png"
import imgDiamonds from "../public/asset/img/game-diamonds.png"
import imgHiLo from "../public/asset/img/game-hilo.png"

export function getCssValue(name: string) {
    const [val, setVal] = useState("")

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const value = rootStyles.getPropertyValue(name)
        setVal(value)
    }, [])

    return val
}

export function KyberTheme() {
    return {
        primary: getCssValue("--border"),
        secondary: getCssValue("--primary-25"),
        dialog: getCssValue("--secondary"),
        borderRadius: getCssValue("--radius"),
        buttonRadius: getCssValue("--radius"),
        stroke: getCssValue("--primary-foreground"),
        boxShadow: getCssValue("--foreground"),
        interactive: getCssValue("--primary"),
        accent: getCssValue("--primary-foreground"),
        success: getCssValue("--success"),
        warning: getCssValue("--warning"),
        error: getCssValue("--error"),
        text: getCssValue("--primary-foreground"),
        subText: getCssValue("--secondary-foreground"),
        fontFamily: "inherit",
    }
}

export function getNavIcon(id: string) {
    if (id === "loading") {
        return <UpdateIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "connect") {
        return <EnterIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "disconnect") {
        return <ExitIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "home") {
        return <HomeIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "dashboard") {
        return <DashboardIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "roulette") {
        return <ColorWheelIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "swap") {
        return <SizeIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "staking") {
        return <LockClosedIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
    if (id === "sports-betting") {
        return <MixIcon className="mr-2 h-[1.2rem] w-[1.2rem] " />
    }
}

export function getDashboardData(address: any, data: Number, formatted?: boolean, className?: string) {
    if (data === 0) {
        return GetTokenSupplyTotal(address, formatted, className)
    }
    if (data === 1) {
        return GetTokenSupplyCirculating(address, formatted, className)
    }
    if (data === 2) {
        return GetTokenSupplyBurned(address, formatted, className)
    }
    if (data === 3) {
        return GetLiquiditySupplyToken(address, formatted, className)
    }
    if (data === 4) {
        return GetLiquidityAvailability(address, className)
    }
    if (data === 5) {
        return GetTokenIsSwapEnabled(address, className)
    }
    if (data === 6) {
        return GetTokenIsFeeActive(address, className)
    }
    if (data === 7) {
        return GetTokenIsTradeEnabled(address, className)
    }
    if (data === 8) {
        return GetTokenFeeBuy(address, formatted, className)
    }
    if (data === 9) {
        return GetTokenFeeSell(address, formatted, className)
    }
    if (data === 10) {
        return GetTokenFeeTransfer(address, formatted, className)
    }
    if (data === 11) {
        return GetTokenFeeAntisnipe(address, formatted, className)
    }
    if (data === 12) {
        return GetTokenMinSwap(address, formatted, className)
    }
    if (data === 13) {
        return GetTokenTotalBuybackBurn(address, formatted, className)
    }
    if (data === 14) {
        return GetTokenTotalFeeCollected(address, formatted, className)
    }
    if (data === 15) {
        return GetTokenTotalFeeRedeemed(address, formatted, className)
    }
}

export function getRouletteData(gameAddress: any, userAddress: any, data: number, formatted?: boolean, className?: string) {
    if (data === 0) {
        return GetRouletteUserPlayRecord(gameAddress, userAddress, formatted, className)
    }
    if (data === 1) {
        return GetRouletteUserBetRecord(gameAddress, userAddress, formatted, className)
    }
    if (data === 2) {
        return GetRouletteUserProfitRecord(gameAddress, userAddress, formatted, className)
    }
}

export function getCarouselImage(data: number) {
    if (data === 0) {
        return imgBlackjack.src
    }
    if (data === 1) {
        return imgCoinFlip.src
    }
    if (data === 2) {
        return imgJackpot.src
    }
    if (data === 3) {
        return imgRoulette.src
    }
    if (data === 4) {
        return imgDice.src
    }
    if (data === 5) {
        return imgLuckyWheel.src
    }
    if (data === 6) {
        return imgDiamonds.src
    }
    if (data === 7) {
        return imgHiLo.src
    }
}

export function capitalizeFirst(word: string) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    return capitalized
}