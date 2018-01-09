import React from "react";
import SvgIcon from "../SvgIcon";

const GitPullRequest = props => (
  <SvgIcon {...props}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </SvgIcon>
);

export default GitPullRequest;