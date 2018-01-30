"use strict";

const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;
const prettyBytes = require("pretty-bytes");
const gzipSize = require("gzip-size");

const exec = (command, extraEnv) =>
  execSync(
    path.resolve(__dirname, "..", "node_modules", ".bin") + `/${command}`,
    {
      stdio: "inherit",
      env: Object.assign({}, process.env, extraEnv)
    }
  );

const DIST_DIR = path.resolve(__dirname, "..");

console.log("Building CommonJS modules ...");
exec(`babel src -d ${DIST_DIR}/lib --ignore **/__tests__`, {
  BABEL_ENV: "cjs",
  NODE_ENV: "production"
});

console.log("\nBuilding ES modules ...");
exec(`babel src -d ${DIST_DIR}/es --ignore **/__tests__`, {
  BABEL_ENV: "es",
  NODE_ENV: "production"
});

console.log("\nBuilding macgooey.js ...");
exec(`rollup -c -f umd -o ${DIST_DIR}/dist/macgooey.js`, {
  BABEL_ENV: "umd",
  NODE_ENV: "development"
});

console.log("\nBuilding macgooey.min.js ...");
exec(`rollup -c -f umd -o ${DIST_DIR}/dist/macgooey.min.js`, {
  BABEL_ENV: "umd",
  NODE_ENV: "production"
});

const size = gzipSize.sync(fs.readFileSync(`${DIST_DIR}/dist/macgooey.min.js`));

console.log("\nGzipped, the UMD build is %s", prettyBytes(size));
