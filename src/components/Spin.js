import React from "react";
import { ReactComponent as TailSpin } from "../assets/tail-spin.svg"

const Spin = ({ size }) => {
  return (
    <TailSpin className="animate-spin w-24 h-24 mx-auto my-20"/>
  );
};

export default Spin;
