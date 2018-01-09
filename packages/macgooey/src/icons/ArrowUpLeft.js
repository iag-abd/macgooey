import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowUpLeft = props => (
  <SvgIcon {...props}>
    <line x1="17" y1="17" x2="7" y2="7" />
    <polyline points="7 17 7 7 17 7" />
  </SvgIcon>
);

export default ArrowUpLeft;