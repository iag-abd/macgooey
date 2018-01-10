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

export const themeColorCompliment = (
  compliment: $Keys<ColorPalette> = "primary"
) => ({ theme }: ThemeUtil) => theme.colorCompliment[compliment];

export const themeColorShade = (shade: $Keys<ColorShade> = "gray") => ({
  theme
}: ThemeUtil) => theme.colorShade[shade];

// If the element takes a `color` prop
export const colorOr = (defaultColor: string = "#000") => ({
  color,
  theme
}: ColorUtil) => theme.color[color] || defaultColor;

export const complimentOr = (defaultColor: string = "#fff") => ({
  color,
  theme
}: ColorUtil) => theme.colorCompliment[color] || defaultColor;

export const colorOrShade = (shade: $Keys<ColorShade> = "lightGray") => ({
  color,
  theme
}: ColorUtil) => theme.color[color] || themeColorShade(shade)({ theme });

export const complimentOrShade = (shade: $Keys<ColorShade> = "lightGray") => ({
  color,
  theme
}: ColorUtil) =>
  theme.colorCompliment[color] || themeColorShade(shade)({ theme });
