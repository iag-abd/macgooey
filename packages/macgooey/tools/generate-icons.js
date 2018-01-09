"use strict";

const R = require("ramda");
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const rimraf = require("rimraf");
const xml2js = require("xml2js");

const camelcase = str =>
  str
    .split("-")
    .map((x, i) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");

const lowerFirst = str => str.charAt(0).toLowerCase() + str.slice(1);

const parser = new xml2js.Parser({
  attrNameProcessors: [camelcase, lowerFirst]
});

const builder = new xml2js.Builder({
  headless: true,
});

const IN_DIR = path.resolve(__dirname, "..", "static", "svg");
const OUT_DIR = path.resolve(__dirname, "..", "src", "icons");
const TEMPLATE_FILE = path.resolve(
  __dirname,
  "templates",
  "icon-component.js"
);

rimraf.sync(OUT_DIR);
mkdirp.sync(OUT_DIR);

/**
 * Create the name of the component from the filename.
 *
 * @param {*} filename
 */
const createComponentName = filename =>
  camelcase(filename.replace(".svg", ""));

/**
 * Create the component file from the template.
 *
 * @param {*} name
 * @param {*} content
 */
const renderComponentTemplate = (name, content) =>
  componentTemplate
    .replace(/__COMPONENT_NAME__/g, name)
    .replace(/__COMPONENT_CONTENT__/g, content);

// Read in the list of svg icons to create exports for.
const svgIconFiles = fs.readdirSync(IN_DIR).filter(x => x.endsWith(".svg"));

// Read and cache the template file.
const componentTemplate = fs.readFileSync(TEMPLATE_FILE).toString();

svgIconFiles.forEach(filename => {
  const svg = fs.readFileSync(path.resolve(IN_DIR, filename));

  parser.parseString(svg, (err, result) => {
    if (err) {
      console.error("Failed to parse file.", err, filename);
      throw err;
    }

    const xml = builder.buildObject({ SvgIcon: R.omit(["$"], result.svg) });
    const componentName = createComponentName(filename);
    const output = renderComponentTemplate(
      componentName,
      xml
        .replace(/\n/g, "\n  ")
        .replace("<SvgIcon>", "<SvgIcon {...props}>")
        .replace(/\/>/g, " />")
    );

    fs.writeFile(path.resolve(OUT_DIR, `${componentName}.js`), output, err => {
      if (err) {
        console.error(err);
        throw err;
      }
    });
  });
});

const exportsFile = svgIconFiles
  .map(filename => camelcase(filename.replace(".svg", "")))
  .map(x => `export { default as ${x} } from "./${x}";\n`)
  .join("");

fs.writeFileSync(path.resolve(OUT_DIR, "index.js"), exportsFile);

console.log(`Components written to the '${OUT_DIR}' folder.`);
