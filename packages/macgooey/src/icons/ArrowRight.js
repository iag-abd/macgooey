import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowRight = props => (
  <SvgIcon {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </SvgIcon>
);

export default ArrowRight;