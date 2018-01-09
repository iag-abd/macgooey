import React from "react";
import SvgIcon from "../SvgIcon";

const Grid = props => (
  <SvgIcon {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </SvgIcon>
);

export default Grid;