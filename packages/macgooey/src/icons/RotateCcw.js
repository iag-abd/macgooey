import React from "react";
import SvgIcon from "../SvgIcon";

const RotateCcw = props => (
  <SvgIcon {...props}>
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </SvgIcon>
);

export default RotateCcw;