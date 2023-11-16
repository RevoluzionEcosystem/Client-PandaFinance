import { Configuration, BLOCKCHAIN_NAME, CHAIN_TYPE } from "rubic-sdk"

export const configuration: Configuration = {
    rpcProviders: {
        [BLOCKCHAIN_NAME.ETHEREUM]: {
            rpcList: [
                "https://ethereum.publicnode.com",
            ]
        },
        [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
            rpcList: [
                "https://bsc.publicnode.com",
            ]
        },
        [BLOCKCHAIN_NAME.POLYGON]: {
            rpcList: [
                "https://polygon-bor.publicnode.com",
            ]
        }
    },
    providerAddress: {
        [CHAIN_TYPE.EVM]: {
            crossChain: "0x0000000000000000000000000000000000000000",
            onChain: "0x0000000000000000000000000000000000000000"
        }
    }
}