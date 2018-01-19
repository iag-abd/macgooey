// @flow

import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import { Toggle } from "..";
import { themeBase as theme } from "../../theme";

describe("<Toggle />", () => {
  test("it should render", () => {
    const component = renderer.create(<Toggle theme={theme} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
