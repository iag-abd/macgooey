// @flow

import React from "react";
import { Select } from "..";
import { themeBase as theme } from "../../theme";
import { mountStyled, withBaseTheme } from "../../theme/__tests__/utils";
import "jest-styled-components";

import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("<Select />", () => {
  test("it should render", () => {
    const component = renderer.create(<Select options={[]} theme={theme} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("<Select options />", () => {
  const testOptions = [{ text: "foo", value: 1 }, { text: "bar", value: 2 }];

  test("it should open after a click event on the closed select input", () => {
    const component = shallow(<Select options={testOptions} theme={theme} />);
    component.simulate("click");

    expect(component.find("OptionList").length).toEqual(1);
  });
  test("it should NOT open after a keydown of the Right Arrow when the select input has focus", () => {
    const component = shallow(<Select options={testOptions} theme={theme} />);
    component.simulate("keydown", { keyCode: 39 });

    expect(component.find("OptionList").length).toEqual(0);
  });
  test("it should open after a keydown of the Down Arrow when the select input has focus", () => {
    const component = shallow(<Select options={testOptions} theme={theme} />);
    component.simulate("keydown", { keyCode: 40 });

    expect(component.find("OptionList").length).toEqual(1);
  });
  test("it should open after a keydown of the Up Arrow when the select input has focus", () => {
    const component = shallow(<Select options={testOptions} theme={theme} />);
    component.simulate("keydown", { keyCode: 38 });

    expect(component.find("OptionList").length).toEqual(1);
  });

  test("it should render all of the options in the list", () => {
    const component = mount(withBaseTheme(<Select options={testOptions} />));
    component.simulate("keydown", { keyCode: 38 });
    const options = component.find("Option");

    expect(options.length).toEqual(2);
  });

  test("it should focus on the first option when Arrow Down key is pressed a second time", () => {
    const component = mount(withBaseTheme(<Select options={testOptions} />));

    component.simulate("keydown", { keyCode: 40 });
    component.simulate("keydown", { keyCode: 40 });

    const options = component.find("Option");

    expect(options.first().prop("data-focused")).toEqual(true);
  });

  test("it should close the select when an option is selected and the select text should update", () => {
    const component = mount(withBaseTheme(<Select options={testOptions} />));

    component.simulate("click");
    component.find("Option").at(0).simulate("mouseup");

    expect(component.find("Option").length).toEqual(0);
    expect(component.find("span").text()).toEqual("foo");
  });

  test("it should scroll the element into view when the select is opened with a value set", () => {
    const component = mount(withBaseTheme(<Select defaultValue={1} options={testOptions} />));

    // We'll mock this temporarily
    const sivMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = sivMock;

    component.simulate("click");

    expect(sivMock.mock.calls.length).toBe(1);

    // undo mocking in case we screw something else up
    delete window.HTMLElement.prototype.scrollIntoView;
  });
});

describe("<Select placeholder />", () => {
  const testOptions = [{ text: "foo", value: 1 }, { text: "bar", value: 2 }];

  test("it should display the default placeholder when nothing is selected", () => {
    const component = renderer.create(
      <Select options={testOptions} theme={theme} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("it should display the custom placeholder when nothing is selected", () => {
    const component = renderer.create(
      <Select
        placeholder="Foo Placeholder"
        options={testOptions}
        theme={theme}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
