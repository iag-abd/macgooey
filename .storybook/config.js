import React from "react";
import * as storybook from "@storybook/react";
import * as addonInfo from "@storybook/addon-info";
import { withKnobs, select } from "@storybook/addon-knobs";
import { setOptions } from "@storybook/addon-options";
import {
  ThemeProvider,
  themeBase,
  themeAerith,
  themeSephiroth
} from "@macgyver-team/macgooey";

const themes = {
  Default: themeBase,
  Aerith: themeAerith,
  Sephiroth: themeSephiroth
};

const themeDecorator = story => {
  const theme = select("Theme", Object.keys(themes), "Aerith");
  const content = story();

  return (
    <ThemeProvider theme={themes[theme]}>
      <div>{content}</div>
    </ThemeProvider>
  );
};

addonInfo.setDefaults({
  header: false,
  inline: true,
  propTables: false
});

storybook.addDecorator(themeDecorator);
storybook.addDecorator(withKnobs);

setOptions({
  name: "MacGooey",
  url: "#",
});

storybook.configure(() => {
  require("../stories/Button");
  require("../stories/InputText");
}, module);
