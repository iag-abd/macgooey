import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowUpCircle = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="16" x2="12" y2="8" />
  </SvgIcon>
);

export default ArrowUpCircle;