import React from "react";
import SvgIcon from "../SvgIcon";

const BatteryCharging = props => (
  <SvgIcon {...props}>
    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
    <line x1="23" y1="13" x2="23" y2="11" />
    <polyline points="11 6 7 12 13 12 9 18" />
  </SvgIcon>
);

export default BatteryCharging;