import * as R from "ramda";

export const colorOrShade = (defaultShade = "lightGray") => p =>
  R.pathOr(
    R.pathOr("lightGray", ["theme", "colorShades", defaultShade], p),
    ["theme", "color", p.color],
    p
  );

export const complimentOrShade = (defaultShade = "lightGray") => p =>
  R.pathOr(
    R.pathOr("lightGray", ["theme", "colorShades", defaultShade], p),
    ["theme", "colorCompliment", p.color],
    p
  );
