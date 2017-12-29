// @flow

import * as React from "react";
import styled from "styled-components";
import { StyledButton, Button } from "./Button";

const StyledDiv = styled.div`
  > ${StyledButton} {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 1px;
      border-left-style: solid;
    }
    &:not(:last-child) {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

type Props = {
  children: React.ChildrenArray<React.Element<typeof Button>>
};

export const ButtonGroup = ({ children, ...props }: Props) => (
  <StyledDiv {...props}>{children}</StyledDiv>
);
