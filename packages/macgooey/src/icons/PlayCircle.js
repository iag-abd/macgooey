import React from "react";
import SvgIcon from "../SvgIcon";

const PlayCircle = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </SvgIcon>
);

export default PlayCircle;