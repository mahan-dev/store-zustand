import React from "react";

import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <ThreeDots
        height={80}
        width={80}
        color="#9d44b5"
        radius={9}
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
      />
    </>
  );
};

export default Loader;
