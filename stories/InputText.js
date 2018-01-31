// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import { InputText } from "@macgyver-team/macgooey";

storiesOf("InputText", module)
  .addDecorator(knobs.withKnobs)
  .add(
    "Default",
    withInfo(`
    A simple input text field.
    `)(() => <InputText />)
  )
  .add(
    "Placeholder",
    withInfo(`
    A text input field with a placeholder.
    `)(() => (
      <InputText placeholder={knobs.text("Placeholder", "My Placeholder")} />
    ))
  );
