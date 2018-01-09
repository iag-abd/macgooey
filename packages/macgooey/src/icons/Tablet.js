import React from "react";
import SvgIcon from "../SvgIcon";

const Tablet = props => (
  <SvgIcon {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </SvgIcon>
);

export default Tablet;