import React from "react";
import { ThemeProvider } from "styled-components";
import { themeBase } from "..";

export const withBaseTheme = component => (
  <ThemeProvider theme={themeBase}>{component}</ThemeProvider>
);
