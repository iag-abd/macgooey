import React from "react";
import SvgIcon from "../SvgIcon";

const ZoomOut = props => (
  <SvgIcon {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </SvgIcon>
);

export default ZoomOut;