// @flow

import * as React from "react";
import styled from "styled-components";
import { inputFieldMixin } from "../mixins";

import { type Styles } from "../theme";
import { themeColorShade } from "../theme/colors";

import { KEYS } from "../events/keys";

import { noImmediatePropagate, keyEvent } from "../events/utils";

import { OptionList } from "./OptionList";

export type SelectOption = {|
  text: string,
  value: string | number
|};

type State = {|
  open: boolean,
  focusedIndex: number,
  selectedIndex: number,
  value: mixed
|};

type Props = {|
  options: SelectOption[],
  placeholder?: string,
  theme?: Styles,
  defaultValue?: mixed
|};

const getDisplayText = (options: SelectOption[], index: number, defaultText) =>
  options[index] ? options[index].text : defaultText;

const getValue = (options: SelectOption[], index: number) =>
  options[index] ? options[index].text : undefined;

const getIndexByValue = (options: SelectOption[], value) =>
  options.findIndex(x => x.value === value);

const WrapperDiv = styled.div`
  ${inputFieldMixin};
  background: ${themeColorShade("lighterGray")};
  position: relative;
  user-select: none;
  &[data-selected="false"] {
    color: ${themeColorShade("gray")};
  }
`;

export class Select extends React.Component<Props, State> {
  state = {
    open: false,
    focusedIndex: -1,
    selectedIndex: -1,
    value: null
  };

  ref = null;

  componentDidMount() {
    // Close the Select Input when mouse is down outside the component
    window.addEventListener("mousedown", this.closeSelect);

    if (this.props.defaultValue) {
      this.setState({
        selectedIndex: getIndexByValue(
          this.props.options,
          this.props.defaultValue
        ),
        value: this.props.defaultValue
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.closeSelect);
  }

  componentDidUpdate() {
    // Focus the element whenever there is an update and the focusedIndex is -1
    if (this.ref !== null && this.state.focusedIndex === -1) {
      this.ref.focus();
    }
  }

  toggleOpen = () => {
    this.setState({
      focusedIndex: this.state.open ? -1 : this.state.focusedIndex,
      open: !this.state.open
    });
  };

  openSelect = () => this.setState({ open: true });

  closeSelect = () => this.setState({ open: false, focusedIndex: -1 });

  updateIndex = (index: number) => {
    this.setState({
      open: false,
      focusedIndex: -1,
      selectedIndex: index,
      value: getValue(this.props.options, index)
    });
  };

  updateFocusedIndex = (index: number) => {
    if (index < this.props.options.length && index >= -1) {
      this.setState({ focusedIndex: index });
    }
  };

  onKeyDown = (event: SyntheticKeyboardEvent<EventTarget>) => {
    if (!this.state.open) {
      keyEvent([KEYS.ARROW_DOWN, KEYS.ARROW_UP], this.openSelect)(event);
    }

    if (this.state.open) {
      keyEvent([KEYS.ARROW_DOWN], () =>
        this.updateFocusedIndex(this.state.focusedIndex + 1)
      )(event);
      keyEvent([KEYS.ARROW_UP], () =>
        this.updateFocusedIndex(this.state.focusedIndex - 1)
      )(event);
    }

    keyEvent([KEYS.SPACE], this.toggleOpen)(event);
    keyEvent([KEYS.ESCAPE], this.closeSelect)(event);
  };

  render() {
    const { options, placeholder = "Please select", ...props } = this.props;

    return (
      <WrapperDiv
        data-selected={this.state.selectedIndex >= 0}
        innerRef={e => (this.ref = e)}
        onClick={this.toggleOpen}
        onKeyDown={this.onKeyDown}
        onMouseDown={noImmediatePropagate}
        tabIndex={0}
        {...props}
      >
        <span>
          {getDisplayText(options, this.state.selectedIndex, placeholder)}
        </span>
        {this.state.open ? (
          <OptionList
            options={options}
            focused={this.state.focusedIndex}
            selected={this.state.selectedIndex}
            updateFocus={this.updateFocusedIndex}
            updateValue={this.updateIndex}
          />
        ) : null}
      </WrapperDiv>
    );
  }
}
