import React from "react";
import SvgIcon from "../SvgIcon";

const VolumeX = props => (
  <SvgIcon {...props}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </SvgIcon>
);

export default VolumeX;