import React from "react";
import SvgIcon from "../SvgIcon";

const CornerUpLeft = props => (
  <SvgIcon {...props}>
    <polyline points="9 14 4 9 9 4" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </SvgIcon>
);

export default CornerUpLeft;