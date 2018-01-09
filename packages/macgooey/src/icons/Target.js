import React from "react";
import SvgIcon from "../SvgIcon";

const Target = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </SvgIcon>
);

export default Target;