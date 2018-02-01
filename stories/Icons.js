// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import * as Icons from "@macgyver-team/macgooey-icons";

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
  .add(
    "Feather Icons",
    withInfo({
      source: false,
      inline: false,
      text: `
      Svg icons are available by importing the Icon component. They will
      eventually be moved into their own package, but for the time being are
      available here.

      ~~~js
      import { AlertCircle } from "@macgyver-team/macgooey-icons";

      <AlertCircle />
      ~~~
      `
    })(() => (
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
    ))
  );
