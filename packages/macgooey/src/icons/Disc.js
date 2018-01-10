import React from "react";
import SvgIcon from "../SvgIcon";

const Disc = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
  </SvgIcon>
);

export default Disc;