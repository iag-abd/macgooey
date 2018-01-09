import React from "react";
import SvgIcon from "../SvgIcon";

const ArrowUp = props => (
  <SvgIcon {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </SvgIcon>
);

export default ArrowUp;