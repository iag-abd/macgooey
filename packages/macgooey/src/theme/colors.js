// @flow

import { type ColorPalette, type ColorShade, type Styles } from "../theme";

type ThemeUtil = {|
  theme: Styles
|};

type ColorUtil = {
  ...ThemeUtil,
  color: string
};

// TODO remove the `Object` type declarations
export const themeColor = (color: $Keys<ColorPalette> = "primary") => ({
  theme
}: ThemeUtil) => theme.color[color];

export const themeColorComplement = (
  complement: $Keys<ColorPalette> = "primary"
) => ({ theme }: ThemeUtil) => theme.colorComplement[complement];

export const themeColorShade = (shade: $Keys<ColorShade> = "gray") => ({
  theme
}: ThemeUtil) => theme.colorShade[shade];

// If the element takes a `color` prop
export const colorOr = (defaultColor: string = "#000") => ({
  color,
  theme
}: ColorUtil) => theme.color[color] || defaultColor;

export const complementOr = (defaultColor: string = "#fff") => ({
  color,
  theme
}: ColorUtil) => theme.colorComplement[color] || defaultColor;

export const colorOrShade = (shade: $Keys<ColorShade> = "lightGray") => ({
  color,
  theme
}: ColorUtil) => theme.color[color] || themeColorShade(shade)({ theme });

export const complementOrShade = (shade: $Keys<ColorShade> = "lightGray") => ({
  color,
  theme
}: ColorUtil) =>
  theme.colorComplement[color] || themeColorShade(shade)({ theme });
