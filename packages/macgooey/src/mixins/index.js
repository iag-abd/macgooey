// @flow

import { css } from "styled-components";

export const fontBody = css`
  font-family: ${p => p.theme.fontFamily};
`;

export const buttonMixin = css`
  border-radius: ${p => p.theme.button.borderRadius};
  border: none;
  font-family: ${p => p.theme.fontFamilyHeading};
  font-size: 0.9em;
  padding: 12px 14px;
  cursor: pointer;
  outline: none;
`;

export const inputFieldMixin = css`
  padding: 10px;
  font-size: 1em;
  border-width: ${p => p.theme.input.borderWidth};
  border-color: ${p => p.theme.colorShades.lightGray};
  border-style: solid;
  outline: none;
  width: 100%;

  &:focus {
    border-color: ${p => p.theme.color.primary};
  }
`;
