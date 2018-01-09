import React from "react";
import SvgIcon from "../SvgIcon";

const CornerRightDown = props => (
  <SvgIcon {...props}>
    <polyline points="10 15 15 20 20 15" />
    <path d="M4 4h7a4 4 0 0 1 4 4v12" />
  </SvgIcon>
);

export default CornerRightDown;