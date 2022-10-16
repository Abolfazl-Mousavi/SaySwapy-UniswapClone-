import React from "react";

import { useEthers } from "@usedapp/core";

import style from "./styles";
import { Exchange, Loader, WalletButton } from "./components";
import { usePools } from "./hooks";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <header className={style.header}>
          <div></div>
          <WalletButton />
        </header>

        <div className={style.exchangeContainer}>
          <h1 className={style.headTitle}>SaySwapy</h1>
          <p className={style.subTitle}>Exchenge crypto across the WORLD</p>

          <div className={style.exchangeBoxWrapper}>
            <div className={style.exchangeBox}>
              <div className="pink_gradient" />
              <div className={style.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
