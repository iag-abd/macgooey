import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowDownRight = props => (
  <SvgIcon {...props}>
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </SvgIcon>
);

export default ArrowDownRight;