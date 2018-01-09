import React from "react";
import SvgIcon from "../SvgIcon";

const Speaker = props => (
  <SvgIcon {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <circle cx="12" cy="14" r="4" />
    <line x1="12" y1="6" x2="12" y2="6" />
  </SvgIcon>
);

export default Speaker;