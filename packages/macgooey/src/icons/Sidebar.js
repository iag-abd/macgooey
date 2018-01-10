import React from "react";
import SvgIcon from "../SvgIcon";

const Sidebar = props => (
  <SvgIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </SvgIcon>
);

export default Sidebar;