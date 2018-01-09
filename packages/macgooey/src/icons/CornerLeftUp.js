import React from "react";
import SvgIcon from "../SvgIcon";

const CornerLeftUp = props => (
  <SvgIcon {...props}>
    <polyline points="14 9 9 4 4 9" />
    <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
  </SvgIcon>
);

export default CornerLeftUp;