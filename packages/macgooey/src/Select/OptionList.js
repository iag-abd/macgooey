// @flow

import * as R from "ramda";
import React from "react";

import { KEYS } from "../events/keys";
import { type SelectOption } from "./Select";
import { noPropagate, keyEvent } from "../events/utils";

import Option from "./Option";
import OptionGroup from "./OptionGroup";

type Props = {|
  options: SelectOption[],
  selected: number,
  focused: number,
  updateValue: number => void,
  updateFocus: number => void
|};

export const OptionList = ({
  options,
  selected,
  focused,
  updateValue,
  updateFocus
}: Props) => (
  <OptionGroup>
    {options.map((opt, index) => (
      <Option
        key={opt.value}
        data-selected={index === selected}
        innerRef={element => {
          if (element !== null) {
            if (index === focused) {
              element.focus();
            }
            if (index === selected && focused === -1) {
              element.scrollIntoView(false);
            }
          }
        }}
        onFocus={R.pipe(noPropagate, () => updateFocus(index))}
        onMouseUp={() => updateValue(index)}
        onKeyDown={keyEvent([KEYS.ENTER, KEYS.SPACE], () => updateValue(index))}
      >
        {opt.text}
      </Option>
    ))}
  </OptionGroup>
);
