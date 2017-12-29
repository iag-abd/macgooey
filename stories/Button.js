// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import * as knobs from "@storybook/addon-knobs";

import { Button, ButtonGroup } from "@macgyver-team/macgooey";

const buttonColors = ["default", "primary", "secondary", "tertiary"];

storiesOf("Button", module)
  .addDecorator(knobs.withKnobs)
  .add(
    "Default",
    withInfo(`
    A simple button component.
    `)(() => (
      <Button
        onClick={action("clicked")}
        color={knobs.select("Color", buttonColors, "default")}
      >
        {knobs.text("Label", "Label")}
      </Button>
    ))
  )

  .add(
    "Group",
    withInfo(`
    Group together buttons using the ButtonGroup component. This
    ensures that the individual buttons are styled nicely side-by-side.
    `)(() => (
      <ButtonGroup>
        {knobs
          .array("Buttons", ["Label", "Button", "Submit"])
          .map((label, i) => (
            <Button key={i} onClick={action("clicked")}>
              {label}
            </Button>
          ))}
      </ButtonGroup>
    ))
  );
