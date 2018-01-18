// @flow

import "./global";

import * as Icons from "./icons";

export * from "./Button";
export * from "./InputText";
export * from "./Select";
export * from "./Toggle";

export * from "./theme";

// It's unlikely the icons that aren't used will be removed via tree shaking /
// dead-code removal with this pattern. We're going to need to go a different
// route. We should go through the mines of Moria!
export { Icons };
