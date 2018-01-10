// @flow

import {
  colorOrShade,
  complimentOrShade,
  colorOr,
  complimentOr
} from "../colors";
import { themeBase as theme } from "..";

describe("colorOrShade", () => {
  test("it should return the default shade of the theme", () => {
    expect(colorOrShade()({ color: "foo", theme })).toBe("#ddd");
  });
});

describe("complimentOrShade", () => {
  test("it should return the default shade of the theme", () => {
    expect(complimentOrShade()({ color: "foo", theme })).toBe("#ddd");
  });
});

describe("colorOr", () => {
  test("it should return the primary theme color defined in props", () => {
    expect(colorOr("#eee")({ color: "primary", theme })).toBe("#4375E8");
  });
});

describe("complimentOr", () => {
  test("it should return the primary theme color compliment defined in props", () => {
    expect(complimentOr("#eee")({ color: "primary", theme })).toBe("#FFF");
  });
});