// @flow

import * as React from "react";
import styled from "styled-components";
import { inputFieldMixin } from "../mixins";

import { type Styles } from "../theme";

export const StyledInput = styled.input`
  ${inputFieldMixin};
`;

export type Props = {
  theme?: Styles
};

export const InputText = (props: Props) => <StyledInput {...props} />;
