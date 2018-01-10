import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowUpRight = props => (
  <SvgIcon {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </SvgIcon>
);

export default ArrowUpRight;