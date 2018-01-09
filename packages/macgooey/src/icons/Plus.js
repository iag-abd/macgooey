import React from "react";
import SvgIcon from "../SvgIcon";

const Plus = props => (
  <SvgIcon {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </SvgIcon>
);

export default Plus;