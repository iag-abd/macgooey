import React from "react";
import SvgIcon from "../SvgIcon";

const HelpCircle = props => (
  <SvgIcon {...props}>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </SvgIcon>
);

export default HelpCircle;