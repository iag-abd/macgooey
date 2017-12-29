import React from "react";
import { Button } from "..";
import { withBaseTheme } from "../../theme/utils";

import renderer from "react-test-renderer";

describe("<Button />", () => {
  test("it should render", () => {
    const component = renderer.create(
      withBaseTheme(<Button>Test Button</Button>)
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
