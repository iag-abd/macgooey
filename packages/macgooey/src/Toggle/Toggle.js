// @flow

import { darken } from "polished";
import * as React from "react";
import styled from "styled-components";

import { type Styles } from "../theme";
import { colorOrShade, complementOrShade } from "../theme/colors";

export const StyledInput = styled.input`
  background: ${colorOrShade("lighterGray")};
  border-color: ${p => darken(0.1, colorOrShade("lighterGray")(p))};
  border-style: solid;
  border-width: ${p => p.theme.button.borderWidth};
  color: ${complementOrShade("darkGray")};
  &:hover {
    background: ${p => darken(0.1, colorOrShade("lighterGray")(p))};
  }
`;

export type Props = {
  children: string,
  color?: string,
  theme?: Styles
};

export const Toggle = ({ children, color = "default", ...props }: Props) => (
  // don't let the user override the type!
  <StyledInput color={color} {...props} type="checkbox">
    {children}
  </StyledInput>
);
