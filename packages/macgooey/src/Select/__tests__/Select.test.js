// @flow

import React from "react";
import { Select } from "..";
import { themeBase } from "../../theme";
import "jest-styled-components";

import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("<Select />", () => {
  test("it should render", () => {
    const component = renderer.create(
      <Select options={[]} theme={themeBase} />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("<Select options />", () => {
  test("it should render the list of options after a click event", () => {
    const component = shallow(<Select options={[{ text: "foo", value: 1 }, { text: "bar", value: 2 }]} theme={themeBase} />);
    component.simulate("click");

    expect(component.find("OptionList").length).toEqual(1);
  });
});

describe("<Select placeholder />", () => {
  const testOptions = [{ text: "foo", value: 1 }, { text: "bar", value: 2 }];

  test("it should display the placeholder when nothing is selected", () => {
    const component = shallow(<Select options={testOptions} theme={themeBase} />);
    expect(component.find('span').text()).toBe("Please select");
  });

  test("it should display the custom placeholder when nothing is selected", () => {
    const component = shallow(<Select placeholder="Foo Placeholder" options={testOptions} theme={themeBase} />);
    expect(component.find('span').text()).toBe("Foo Placeholder");
  });
});
