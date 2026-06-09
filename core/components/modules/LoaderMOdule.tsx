"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const LoaderMOdule = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return <div>{isLoading && <Loader />}</div>;
};

export default LoaderMOdule;
