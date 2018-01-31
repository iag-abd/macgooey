"use strict";

const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const rimraf = require("rimraf");

const camelcase = str =>
  str
    .split("-")
    .map((x, i) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");

const IN_DIR = path.resolve(__dirname, "..", "static", "svg");
const OUT_DIR = path.resolve(__dirname, "..", "src");
const TEMPLATE_FILE = path.resolve(__dirname, "templates", "icon-component.js");

rimraf.sync(path.resolve(OUT_DIR, "*.js"));

// Create the name of the component from the filename.
const createComponentName = filename => camelcase(filename.replace(".svg", ""));

// Create the component file from the template.
const renderComponentTemplate = (name, content) =>
  componentTemplate
    .replace(/__COMPONENT_NAME__/g, name)
    .replace(/__COMPONENT_CONTENT__/g, content);

// Read in the list of svg icons to create exports for.
const svgIconFiles = fs.readdirSync(IN_DIR).filter(x => x.endsWith(".svg"));

// Read and cache the template file.
const componentTemplate = fs.readFileSync(TEMPLATE_FILE).toString();

const svgContentRegExp = new RegExp("<svg.*?>(.*)</svg>");

const generateIconSourceFiles = () =>
  Promise.all(
    svgIconFiles.map(
      (filename, index) =>
        new Promise((resolve, reject) => {
          const componentName = createComponentName(filename);
          const [, svg] = fs
            .readFileSync(path.resolve(IN_DIR, filename))
            .toString()
            .match(svgContentRegExp);

          const output = renderComponentTemplate(componentName, svg);

          fs.writeFile(
            path.resolve(OUT_DIR, `${componentName}.js`),
            output,
            err => {
              if (err) {
                console.error("ERROR creating icon source file:", err);
                return reject(err);
              }
              console.log("Generated icon:", componentName);
              resolve();
            }
          );
        })
    )
  );

const generateIndexFile = () => {
  const exportsFile = svgIconFiles
    .map(filename => camelcase(filename.replace(".svg", "")))
    .map(x => `export { default as ${x} } from "./${x}";\n`)
    .join("");

  fs.writeFileSync(path.resolve(OUT_DIR, "index.js"), exportsFile);
};

module.exports = generateIconSourceFiles()
  .then(generateIndexFile)
  .then(() =>
    console.log(`Finished Icon Generation: Written to the '${OUT_DIR}' folder.`)
  );
