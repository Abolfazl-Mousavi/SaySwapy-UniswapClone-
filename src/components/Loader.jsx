import React from "react";

import style from "../styles";
import { ethereumLogo } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className={style.loader}>
      <img
        src={ethereumLogo}
        alt="ethereum logo"
        className={style.loaderImg}
      />
      <p className={style.loaderText}>{title}</p>
    </div>
  );
};

export default Loader;