import React from "react";
import SvgIcon from "../SvgIcon";

const Layers = props => (
  <SvgIcon {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </SvgIcon>
);

export default Layers;