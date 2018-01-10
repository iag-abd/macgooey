import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowLeft = props => (
  <SvgIcon {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </SvgIcon>
);

export default ArrowLeft;