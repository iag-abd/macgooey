const getConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
const path = require("path");
const fs = require("fs");

const packagesDir = path.resolve(__dirname, "..", "packages");
const packages = fs.readdirSync(packagesDir);

module.exports = (baseConfig, env) => {
  const config = getConfig(baseConfig, env);

  /**
   * By default, Storybook.js only excludes the top level node_modules folder
   * and not the folder for the `packages` directory
   */
  config.module.rules[0].exclude = [/node_modules/];

  /**
   * Aliasing the package name to the ES directory. This is where Webpack will
   * pull the code from during development using the Storybook.
   */
  for (const package of packages) {
    config.resolve.alias[`@macgyver-team/${package}`] = path.resolve(
      packagesDir,
      package,
      "dist",
      "es"
    );
  }

  /**
   * Adding the flow preset here before all the other presets so that we can
   * use flow types in our Storybook if required. This isn't essential as we
   * can still get type hints without it, however this should stop any nasty
   * surprises if we we want to declare types and expect it to be there.
   */
  config.module.rules[0].query.presets.unshift("babel-preset-flow");

  return config;
};
