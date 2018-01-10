import React from "react";
import SvgIcon from "../SvgIcon";

const Square = props => (
  <SvgIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </SvgIcon>
);

export default Square;