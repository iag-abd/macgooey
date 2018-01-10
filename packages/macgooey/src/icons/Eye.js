import React from "react";
import SvgIcon from "../SvgIcon";

const Eye = props => (
  <SvgIcon {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </SvgIcon>
);

export default Eye;