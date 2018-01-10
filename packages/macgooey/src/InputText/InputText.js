// @flow

import * as React from "react";
import styled from "styled-components";
import { inputFieldMixin } from "../mixins";
import { themeColorShade } from "../theme/colors";

import { type Styles } from "../theme";

export const StyledInput = styled.input`
  ${inputFieldMixin};
  &::placeholder {
    color: ${themeColorShade("gray")};
  }
`;

export type Props = {|
  theme?: Styles,
  placeholder?: string
|};

export const InputText = (props: Props) => <StyledInput {...props} />;
