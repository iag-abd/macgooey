// @flow

import * as React from "react";
import styled from "styled-components";
import { themeColorShade } from '../theme/colors';

type OptionGroupProps = {|
  children: React.Node
|};

const OptionGroupDiv = styled.div`
  position: absolute;
  background: ${themeColorShade("lighterGray")};
  margin-top: 12px;
  border: 1px solid ${themeColorShade("gray")};
  left: -1px;
  right: -1px;
  max-height: 280px;
  overflow-y: auto;
`;

const OptionGroup = ({ children, ...props }: OptionGroupProps) => (
  <OptionGroupDiv {...props}>{children}</OptionGroupDiv>
);

export default OptionGroup;
export { OptionGroupDiv as style };
