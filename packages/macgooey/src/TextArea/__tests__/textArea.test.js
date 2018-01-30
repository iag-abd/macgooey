// @flow

import React from "react";
import { TextArea } from "..";
import { themeBase as theme } from "../../theme";
import "jest-styled-components";

import renderer from "react-test-renderer";

describe("<TextArea />", () => {
  test("it should render", () => {
    const component = renderer.create(<TextArea theme={theme} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("<TextArea placeholder />", () => {
  test("it should render", () => {
    const component = renderer.create(
      <TextArea placeholder="foo" theme={theme} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
