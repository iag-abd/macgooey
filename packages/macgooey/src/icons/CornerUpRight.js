import React from "react";
import SvgIcon from "../SvgIcon";

const CornerUpRight = props => (
  <SvgIcon {...props}>
    <polyline points="15 14 20 9 15 4" />
    <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
  </SvgIcon>
);

export default CornerUpRight;