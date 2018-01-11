// @flow

import {
  colorOrShade,
  complementOrShade,
  colorOr,
  complementOr
} from "../colors";
import { themeBase as theme } from "..";

describe("colorOrShade", () => {
  test("it should return the default shade of the theme", () => {
    expect(colorOrShade()({ color: "foo", theme })).toBe("#ddd");
  });
});

describe("complementOrShade", () => {
  test("it should return the default shade of the theme", () => {
    expect(complementOrShade()({ color: "foo", theme })).toBe("#ddd");
  });
});

describe("colorOr", () => {
  test("it should return the primary theme color defined in props", () => {
    expect(colorOr("#eee")({ color: "primary", theme })).toBe("#4375E8");
  });
});

describe("complementOr", () => {
  test("it should return the primary theme color complement defined in props", () => {
    expect(complementOr("#eee")({ color: "primary", theme })).toBe("#FFF");
  });
});
