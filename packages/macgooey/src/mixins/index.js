// @flow

import { css } from "styled-components";
import { themeColorShade } from "../theme/colors";

export const fontBody = css`
  font-family: ${p => p.theme.fontFamily};
`;

export const focusableMixin = css`
  outline-color: ${p => p.theme.color.primary};
`;

export const buttonMixin = css`
  border-radius: ${p => p.theme.button.borderRadius};
  border: none;
  font-family: ${p => p.theme.fontFamilyHeading};
  font-size: 0.9em;
  padding: 12px 14px;
  cursor: pointer;
  outline: none;
  transition: background 150ms;
`;

export const inputFieldMixin = css`
  padding: 10px;
  font-family: ${p => p.theme.fontFamilyHeading};
  font-size: 1em;
  border-width: ${p => p.theme.input.borderWidth};
  border-color: ${themeColorShade("lightGray")};
  border-style: solid;
  outline: none;
  width: 100%;
  transition: border-color 150ms;

  &:focus {
    border-color: ${p => p.theme.color.primary};
  }
`;
