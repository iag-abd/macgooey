// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import { Select } from "@macgyver-team/macgooey";

storiesOf("Select", module)
  .addDecorator(knobs.withKnobs)
  .add(
    "Default",
    withInfo(`
    A simple input text field.
    `)(() => (
      <Select
        options={knobs.object("Options", [
          { text: "ACT", value: "ACT" },
          { text: "NSW", value: "NSW" },
          { text: "NT", value: "NT" },
          { text: "QLD", value: "QLD" },
          { text: "SA", value: "SA" },
          { text: "TAS", value: "TAS" },
          { text: "VIC", value: "VIC" },
          { text: "WA", value: "WA" },
        ])}
      />
    ))
  );
