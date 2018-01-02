import React from "react";
import { InputText } from "..";
import { withBaseTheme } from "../../theme/utils";
import "jest-styled-components";

import renderer from "react-test-renderer";

describe("<InputText />", () => {
  test("it should render", () => {
    const component = renderer.create(withBaseTheme(<InputText />));

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
