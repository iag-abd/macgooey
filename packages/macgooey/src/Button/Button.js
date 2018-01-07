// @flow

import * as React from "react";
import styled from "styled-components";
import { buttonMixin } from "../mixins";
import { darken } from "polished";

import { type Styles } from "../theme";
import { colorOrShade, complimentOrShade } from "../theme/colors";

export const StyledButton = styled.button`
  ${buttonMixin};
  background: ${colorOrShade("lighterGray")};
  border-color: ${p => darken(0.1, colorOrShade("lighterGray")(p))};
  border-style: solid;
  border-width: ${p => p.theme.button.borderWidth};
  color: ${complimentOrShade("darkGray")};
  &:hover {
    background: ${p => darken(0.1, colorOrShade("lighterGray")(p))};
  }
`;

export type Props = {
  children: string,
  color?: string,
  theme?: Styles
};

export const Button = ({ children, color = "default", ...props }: Props) => (
  <StyledButton color={color} {...props}>
    {children}
  </StyledButton>
);
