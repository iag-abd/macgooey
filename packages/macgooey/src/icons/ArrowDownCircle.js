import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowDownCircle = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 12 16 16 12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </SvgIcon>
);

export default ArrowDownCircle;