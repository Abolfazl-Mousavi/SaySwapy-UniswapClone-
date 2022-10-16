import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x7eB12a138617ED16796ca6D6b126Aceeb690c670"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    //for developing purpose 
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/97PB2uXZBE4K9v5v5WdOFzZDoe7x0eMT",
  },
};