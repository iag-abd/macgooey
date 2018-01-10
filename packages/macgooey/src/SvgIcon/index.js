import React from "react";

const style = {
  width: "24px",
  display: "inline-block"
};

const SvgIcon = ({ children, ...props }) => (
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
