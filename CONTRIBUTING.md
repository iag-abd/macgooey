### Contributing

1. Start by cloning this repository into a folder on your computer.

2. Install node modules by running `npm i` at the project root.

3. Run `npm run bootstrap` in the project root. This will install
node_modules for all the individual packages as well as flow types for
dependencies.

4. Again, in the root directory run `npm run watch` to do an initial
compile/transpile and begin watching the source files for each of the
packages (Any changes you make to the files under `packages/*/src` will now
cause the files source to be recompiled automatically). Hot reloading (see
next step) will then cause your changes to be reflected in the storybook.

5. In another terminal in the root directory, run `npm run storybook`. This
will start the storybook on port 9002 (by default), which will load any
"stories" that are configured in the `stories` directory. You can develop
your component using the storybook.

6. Open a web browser to http://localhost:9002.

7. Change files in the `packages/*/src` directories and see your changes
appear automatically in the storybook in your browser.



### Creating your first MacGooey component

1. Add a new component folder under `packages/macgooey/src`. Name this folder
the name of your component (e.g. `MenuButton`).

2. Add tests inside your component folder under a folder called `__tests__`.
These must end in `.test.js` for them to be run by the test runner.

3. Export your new component inside `packages/macgoeey/src/index.js`. Ensure
that your component is being exported from the `index.js` file inside your
components main folder as named export(s). You can export more than one,
just make sure that your component doesn't conflict with a component that
is already being exported.

4. Add component story inside `stories/<ComponentName>.js`.

5. Import new component inside `.storybook/config.js` at bottom of the file.
use `require` (e.g. `require("../stories/MenuButton")`).
