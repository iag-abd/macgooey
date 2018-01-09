import { colorOrShade, complimentOrShade } from "../colors";
import { themeBase } from "..";

describe("colorOrShade", () => {
  test("it should return the default shade of the theme", () => {
    expect(colorOrShade()({ theme: themeBase })).toBe("#ddd");
  });
});

describe("complimentOrShade", () => {
  test("it should return the default shade of the theme", () => {
    expect(complimentOrShade()({ theme: themeBase })).toBe("#ddd");
  });
});