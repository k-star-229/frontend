import { InjectedConnector } from '@web3-react/injected-connector'

const SUPPORTED_CHAIN_IDS = [
  56, //for bsc mainnet
  97 ,//for bsc testnet
];

export const injected = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_IDS })

