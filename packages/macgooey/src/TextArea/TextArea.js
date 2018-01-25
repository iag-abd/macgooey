// @flow

import * as React from "react";
import styled from "styled-components";
import { inputFieldMixin } from "../mixins";
import { themeColorShade } from "../theme/colors";

import { type Styles } from "../theme";

export const StyledTextArea = styled.textarea`
  ${inputFieldMixin};
  &::placeholder {
    color: ${themeColorShade("gray")};
  }
`;

export type Props = {|
  theme?: Styles,
  placeholder?: string
|};

export const TextArea = (props: Props) => <StyledTextArea {...props} />;
