MacGyver UI
===========

The MacGyver UI is a collection of components can be used to quickly build a
consistently themed application using reusable components. By extracting
components that solve consistent problems across our suite of applications,
we can prevent doubling up on component use uneccessarily.

### Storybook

Coming soon...


### Usage

Run `npm i -S @macgyver-team/macgooey` and then you can import components and
use them in your applications.

```javascript
import { Button } from "@macgyver-team/macgooey";

const component = <Button>My Button</Button>
```

### Contributing

1. Start by cloning this repository into a folder on your computer.
2. In the `packages/macgooey` directory, run `npm run watch` to compile and
watch the source files for the UI (Any changes to make to the files under
`packages/macgooey/src` will now cause the files to be rebuild/recompiled
automatically)
3. In the root directory, run `npm run storybook`. This will start the
storybook on port 9002 (by default), which will load any "stories" that are
configured in the `stories` directory.
4. Open a web browser to http://localhost:9002.
5. Change files in the `packages/macgooey/src` directory and see your changes
appear automatically.

### This project uses

- [React](https://reactjs.org)
- [Styled Components](https://www.styled-components.com/) for CSS styling
- [Flow](https://flow.org/) for types
- [Jest](https://facebook.github.io/jest/) & [Enzyme](http://airbnb.io/enzyme/) for tests
- [Rollup](https://rollupjs.org/) for bundling the UI distributable
- [Storybook JS](https://storybook.js.org/) & [Webpack](https://webpack.js.org/) for running and building the storybook