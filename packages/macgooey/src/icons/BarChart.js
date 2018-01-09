import React from "react";
import SvgIcon from "../SvgIcon";

const BarChart = props => (
  <SvgIcon {...props}>
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </SvgIcon>
);

export default BarChart;