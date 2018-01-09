import React from "react";
import SvgIcon from "../SvgIcon";

const XCircle = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </SvgIcon>
);

export default XCircle;