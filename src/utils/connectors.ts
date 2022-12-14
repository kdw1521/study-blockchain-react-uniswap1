import { InjectedConnector } from "@web3-react/injected-connector";

// 1: mainnet, 5: goerli
export const injected = new InjectedConnector({
    supportedChainIds: [1, 5]
})