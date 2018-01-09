import React from "react";
import SvgIcon from "../SvgIcon";

const CornerDownRight = props => (
  <SvgIcon {...props}>
    <polyline points="15 10 20 15 15 20" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </SvgIcon>
);

export default CornerDownRight;