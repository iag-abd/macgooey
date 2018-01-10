import React from "react";
import SvgIcon from "../SvgIcon";

const CheckSquare = props => (
  <SvgIcon {...props}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </SvgIcon>
);

export default CheckSquare;