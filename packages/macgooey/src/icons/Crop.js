import React from "react";
import SvgIcon from "../SvgIcon";

const Crop = props => (
  <SvgIcon {...props}>
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
    <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
  </SvgIcon>
);

export default Crop;