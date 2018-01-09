import React from "react";
import { Button } from "..";
import "jest-styled-components";


import renderer from "react-test-renderer";
import { themeBase } from "../../theme";

describe("<Button />", () => {
  test("it should render", () => {
    const component = renderer.create(
      <Button theme={themeBase}>Test Button</Button>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  test("it should render the primary button", () => {
    const component = renderer.create(
      <Button theme={themeBase} color="primary">Test Button</Button>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  test("it should render the secondary button", () => {
    const component = renderer.create(
      <Button theme={themeBase} color="secondary">Test Button</Button>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  test("it should render the tertiary button", () => {
    const component = renderer.create(
      <Button theme={themeBase} color="tertiary">Test Button</Button>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
