import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowDownLeft = props => (
  <SvgIcon {...props}>
    <line x1="17" y1="7" x2="7" y2="17" />
    <polyline points="17 17 7 17 7 7" />
  </SvgIcon>
);

export default ArrowDownLeft;