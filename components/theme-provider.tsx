"use client"

import * as React from "react"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Web3OnboardProvider } from "@web3-onboard/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import web3Onboard from "../web3-onboard"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {    
    return (
        <NextThemesProvider {...props}>
            <Web3OnboardProvider web3Onboard={web3Onboard}>
                {children}
            </Web3OnboardProvider>
        </NextThemesProvider>
    )
}