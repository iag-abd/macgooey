// @flow

export { ThemeProvider } from "styled-components";

type ColorPalette = {|
  primary: string,
  secondary: string,
  tertiary: string
|};

type ColorShades = {|
  lighterGray: string,
  lightGray: string,
  gray: string,
  darkGray: string,
  darkerGray: string
|};

type ElementStyles = {|
  borderRadius: string,
  borderWidth: string
|};

type ButtonStyles = ElementStyles;

type InputStyles = ElementStyles;

export type Styles = {|
  button: ButtonStyles,
  color: ColorPalette,
  colorCompliment: ColorPalette,
  colorShades: ColorShades,
  fontFamilyHeading: string,
  input: InputStyles,
  textColorBody: string
|};

export const themeBase: Styles = {
  fontFamilyHeading: "'Open Sans', sans-serif",
  textColorBody: "#333",

  button: {
    borderRadius: "3px",
    borderWidth: "0"
  },

  input: {
    borderWidth: "1px",
    borderRadius: "0"
  },

  color: {
    primary: "#4375E8",
    secondary: "#FF4448",
    tertiary: "#E8B221"
  },
  colorCompliment: {
    primary: "#FFF",
    secondary: "#FFF",
    tertiary: "#FFF"
  },
  colorShades: {
    lighterGray: "#eee",
    lightGray: "#ddd",
    gray: "#aaa",
    darkGray: "#555",
    darkerGray: "#222"
  }
};

export const themeAerith = {
  ...themeBase,

  fontFamilyHeading: "'Montserrat', sans-serif",
  textColorBody: "#414042",

  input: {
    borderWidth: "1px",
    borderRadius: "0"
  },

  color: {
    default: "#DDD",
    primary: "#0BAB47",
    secondary: "#6D6E71",
    tertiary: "#007BAD"
  },
  colorCompliment: {
    default: "#333",
    primary: "#FFF",
    secondary: "#FFF",
    tertiary: "#FFF"
  }
};

export const themeSephiroth = {
  ...themeBase,

  fontFamilyHeading: "'Source Sans Pro', 'Open Sans', sans-serif",
  textColorBody: "#3B3D40",

  button: {
    borderRadius: "3px",
    borderWidth: "1px"
  },

  color: {
    default: "#F0F0F0",
    primary: "#602f89",
    secondary: "#01B5CC",
    tertiary: "#1E2741"
  },
  colorCompliment: {
    default: "#602F89",
    primary: "#FFF",
    secondary: "#FFF",
    tertiary: "#FFF"
  }
};
