import React from "react";
import SvgIcon from "../SvgIcon";

const Clock = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </SvgIcon>
);

export default Clock;