import React from "react";
import SvgIcon from "../SvgIcon";

const Image = props => (
  <SvgIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </SvgIcon>
);

export default Image;