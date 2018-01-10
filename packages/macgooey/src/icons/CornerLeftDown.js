import React from "react";
import SvgIcon from "../SvgIcon";

const CornerLeftDown = props => (
  <SvgIcon {...props}>
    <polyline points="14 15 9 20 4 15" />
    <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  </SvgIcon>
);

export default CornerLeftDown;