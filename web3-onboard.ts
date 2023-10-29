import { init } from "@web3-onboard/react"

import injectedModule from "@web3-onboard/injected-wallets"
import walletConnectModule from "@web3-onboard/walletconnect"
import data from "./data/general.json"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

const wcV2InitOptions = {
    projectId: projectId,
    requiredChains: [data["network"].id]
}

const injected = injectedModule()
const walletConnect = walletConnectModule(wcV2InitOptions)

export default init({
    theme: {
        "--w3o-background-color": "var(--background)",
        "--w3o-foreground-color": "var(--muted)",
        "--w3o-text-color": "var(--foreground)",
        "--w3o-border-color": "var(--foreground)", 
        "--w3o-action-color": "var(--foreground)", 
        "--w3o-border-radius": "var(--radius)", 
        "--w3o-font-family": "inherit", 
    },
    wallets: [
        injected,
        walletConnect,
    ],
    chains: [
        {
            id: data["network"].chainId,
            namespace: "evm",
            token: data["network"].token,
            label: data["network"].label,
            rpcUrl: data["network"].rpc
        },
    ],
    appMetadata: {
        name: data.project_title,
        icon: "<svg></svg>",
        logo: "<svg></svg>",
        description: data.project_description,
        explore: data["network"].explorer,
    }
})