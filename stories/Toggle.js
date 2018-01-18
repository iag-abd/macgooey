// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import { Toggle } from "@macgyver-team/macgooey";

storiesOf("Toggle", module)
  .addDecorator(knobs.withKnobs)
  .add(
    "Default",
    withInfo(`
    A simple toggle.
    `)(() => <Toggle />)
  );
