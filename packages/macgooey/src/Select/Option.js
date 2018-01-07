// @flow

import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { themeColorCompliment, themeColor, themeColorShade } from "../theme/colors";
import { focusableMixin } from "../mixins";

const OptionDiv = styled.div`
  ${focusableMixin};
  padding: 10px;
  user-select: none;
  transition: background 150ms;
  color: ${p => p.theme.textColorBody};
  &:hover {
    background: ${themeColorShade("lightGray")};
  }
  &:focus {
    background: ${p => darken(0.1, themeColorShade("lightGray")(p))};
  }
  &[data-selected="true"] {
    background: ${themeColor("primary")};
    color: ${themeColorCompliment("primary")};
  }
`;

type Props = {
  children: string,
};

const Option = ({ children: text, ...props }: Props) => (
  <OptionDiv tabIndex={0} {...props}>
    {text}
  </OptionDiv>
);

export default Option;
export { OptionDiv as style };
