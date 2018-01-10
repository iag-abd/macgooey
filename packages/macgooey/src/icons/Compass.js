import React from "react";
import SvgIcon from "../SvgIcon";

const Compass = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </SvgIcon>
);

export default Compass;