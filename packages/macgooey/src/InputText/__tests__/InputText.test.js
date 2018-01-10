// @flow

import React from "react";
import { InputText } from "..";
import { themeBase as theme } from "../../theme";
import "jest-styled-components";

import renderer from "react-test-renderer";

describe("<InputText />", () => {
  test("it should render", () => {
    const component = renderer.create(<InputText theme={theme} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("<InputText placeholder />", () => {
  test("it should render", () => {
    const component = renderer.create(
      <InputText placeholder="foo" theme={theme} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
