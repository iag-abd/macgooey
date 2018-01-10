import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowLeftCircle = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 8 8 12 12 16" />
    <line x1="16" y1="12" x2="8" y2="12" />
  </SvgIcon>
);

export default ArrowLeftCircle;