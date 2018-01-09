import React from "react";
import SvgIcon from "../SvgIcon";

const ShoppingBag = props => (
  <SvgIcon {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M16 10a4 4 0 0 1-8 0" />
    <line x1="3" y1="6" x2="21" y2="6" />
  </SvgIcon>
);

export default ShoppingBag;