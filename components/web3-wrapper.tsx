"use client"

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, bsc } from 'wagmi/chains'

import info from "../data/lang/en/general.json"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const siteUrl = process.env.SITE_URL

const chains = [ mainnet, polygon, bsc ]
const metadata = {
    name: info.project_title,
    description: info.project_description,
    url: siteUrl,
    icons: [
        siteUrl + "assets/images/wdym.webp"
    ]
}
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

export default function Web3Wrapper({
    children, mode
}) {
    createWeb3Modal({
        defaultChain: mainnet,
        wagmiConfig,
        projectId,
        chains,
        themeMode: mode,
        themeVariables: {
            "--w3m-accent": "#F30700FF",
            "--w3m-color-mix": "#E59C3AFF",
            "--w3m-color-mix-strength": 15,
            "--w3m-border-radius-master": "1px"
        }
    })
    
    return (
        <div>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>
        </div>
    )
}