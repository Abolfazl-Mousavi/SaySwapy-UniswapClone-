import { abis } from "../contracts";

export const getRouterInfo = async (routerAddress, web3) => {
  const router = new web3.eth.Contract(abis.router02, routerAddress);
  
  return {
    factory: await router.methods.factory().call(),
  };
}