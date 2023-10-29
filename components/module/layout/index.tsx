"use client"

import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { goerli } from "wagmi/chains"

import Sidebar from "../sidebar"
import data from "../../../data/general.json"

const chains = [goerli]
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({ autoConnect: true, connectors: w3mConnectors({ projectId, chains }), publicClient })
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function Layout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div>
            <WagmiConfig config={wagmiConfig}>
                <div className="block space-y-6">
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-2 lg:space-y-0">
                        <aside className="bg-black/5 dark:bg-white/5 overflow-auto overscroll-contain">
                            <Sidebar items={data["navigation"]} />
                        </aside>
                        <div className="flex-1 relative lg:h-screen lg:overflow-scroll">
                            {children}
                        </div>
                    </div>
                </div>
            </WagmiConfig>

            <Web3Modal
                projectId={projectId}
                ethereumClient={ethereumClient}
                themeVariables={{
                    "--w3m-accent-color": "#B000B2FF",
                    "--w3m-background-color": "#B000B2FF",
                    "--w3m-background-border-radius": "0.6rem",
                    "--w3m-container-border-radius": "0.6rem",
                    "--w3m-wallet-icon-border-radius": "0.6rem",
                    "--w3m-wallet-icon-large-border-radius": "0.6rem",
                    "--w3m-wallet-icon-small-border-radius": "0.6rem",
                    "--w3m-input-border-radius": "0.6rem",
                    "--w3m-notification-border-radius": "0.6rem",
                    "--w3m-button-border-radius": "0.6rem",
                    "--w3m-secondary-button-border-radius": "0.6rem",
                    "--w3m-icon-button-border-radius": "0.6rem",
                    "--w3m-button-hover-highlight-border-radius": "0.6rem"
                }}                
            />
        </div>
    )
}