import React from "react";
import SvgIcon from "../SvgIcon";

const Voicemail = props => (
  <SvgIcon {...props}>
    <circle cx="5.5" cy="11.5" r="4.5" />
    <circle cx="18.5" cy="11.5" r="4.5" />
    <line x1="5.5" y1="16" x2="18.5" y2="16" />
  </SvgIcon>
);

export default Voicemail;