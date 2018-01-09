// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import { Icons } from "@macgyver-team/macgooey";
import { __ } from "../packages/macgooey/node_modules/ramda";

const iconHolderStyle = {
  padding: "40px",
  display: "inline-block",
  fontFamily: "'Open Sans', sans-serif",
  position: "relative"
};

const titleStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  textAlign: "center",
  fontSize: "10px",
  bottom: "20px"
};

storiesOf("Icons", module)
  .addDecorator(knobs.withKnobs)
  .add("Feather Icons", () => (
    <div>
      {Object.keys(Icons).map(k => {
        const Icon = Icons[k];
        return (
          <div style={iconHolderStyle}>
            <Icon key={k} />
            <span style={titleStyle}>{k}</span>
          </div>
        );
      })}
    </div>
  ));
