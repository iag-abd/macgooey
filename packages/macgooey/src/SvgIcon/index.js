// @flow

import * as React from "react";

const style = {
  width: "24px",
  display: "inline-block"
};

type Props = {
  children: React.Node
};

const SvgIcon = ({ children, ...props }: Props) => (
  <svg
    style={style}
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    {children}
  </svg>
);

export default SvgIcon;
