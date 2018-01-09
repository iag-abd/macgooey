import React from "react";
import SvgIcon from "../SvgIcon";

const CreditCard = props => (
  <SvgIcon {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </SvgIcon>
);

export default CreditCard;