import React from "react";
import SvgIcon from "../SvgIcon";

const CornerDownLeft = props => (
  <SvgIcon {...props}>
    <polyline points="9 10 4 15 9 20" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </SvgIcon>
);

export default CornerDownLeft;