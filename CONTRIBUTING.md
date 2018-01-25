### Contributing

1. Start by cloning this repository into a folder on your computer.
2. Install node modules by running `npm i` at the project root and in the
directory `packages/macgooey`.
3. In the `packages/macgooey` directory, run `npm run watch` to compile and
watch the source files for the UI (Any changes to make to the files under
`packages/macgooey/src` will now cause the files to be rebuilt/recompiled
automatically). Hot reloading will be reflected in the storybook.
4. In the root directory, run `npm run storybook`. This will start the
storybook on port 9002 (by default), which will load any "stories" that are
configured in the `stories` directory.
5. Open a web browser to http://localhost:9002.
6. Change files in the `packages/macgooey/src` directory and see your changes
appear automatically.

### Files to Update

1. Add new component folder and files under packages/macgooey/src
2. Export new component inside packages/macgoeey/src/index.js
3. Import new component inside .storybook/config.js
4. Add component story in stories/<Compnent>.js
