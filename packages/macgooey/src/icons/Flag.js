import React from "react";
import SvgIcon from "../SvgIcon";

const Flag = props => (
  <SvgIcon {...props}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </SvgIcon>
);

export default Flag;