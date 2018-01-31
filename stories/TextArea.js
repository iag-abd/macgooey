// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import { TextArea } from "@macgyver-team/macgooey";

storiesOf("TextArea", module)
  .addDecorator(knobs.withKnobs)
  .add(
    "Default",
    withInfo(`
    A simple text area field.
    `)(() => <TextArea />)
  )
  .add(
    "Placeholder",
    withInfo(`
    A text area field with a placeholder.
    `)(() => <TextArea placeholder={knobs.text("Placeholder", "My Placeholder")} />)
  );
