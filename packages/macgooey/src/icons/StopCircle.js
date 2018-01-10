import React from "react";
import SvgIcon from "../SvgIcon";

const StopCircle = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <rect x="9" y="9" width="6" height="6" />
  </SvgIcon>
);

export default StopCircle;