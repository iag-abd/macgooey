![MacGooey Header](https://iag-abd.github.io/macgooey/assets/images/macgooey-header.svg)

MacGooey
========

[![build status](https://img.shields.io/travis/iag-abd/macgooey.svg)](https://travis-ci.org/iag-abd/macgooey)
[![npm version](https://img.shields.io/npm/v/@macgyver-team/macgooey.svg)](https://www.npmjs.com/package/@macgyver-team/macgooey)
[![npm download total](https://img.shields.io/npm/dt/macgooey.svg)](https://www.npmjs.com/package/macgooey)
[![coverage status](https://coveralls.io/repos/github/iag-abd/macgooey/badge.svg?branch=master)](https://coveralls.io/github/iag-abd/macgooey?branch=master)

Home of the MacGooey Mono Repo.

MacGooey is a collection of components that can be used to quickly build a
consistently themed application using reusable components. By extracting
components that solve consistent problems across our suite of applications,
we can prevent doubling up on components.

### Storybook

Coming soon...


### Usage

Run `npm i -S @macgyver-team/macgooey` and then you can import components and
use them in your applications.

```javascript
import { Button } from "@macgyver-team/macgooey";

const MyButton = () => <Button>My Button</Button>;
```

### Contributing

1. Start by cloning this repository into a folder on your computer.
2. Install node modules by running `npm i` at the project root and in the
directory `packages/macgooey`.
3. In the `packages/macgooey` directory, run `npm run watch` to compile and
watch the source files for the UI (Any changes to make to the files under
`packages/macgooey/src` will now cause the files to be rebuilt/recompiled
automatically). Hot releading will be reflected in the storybook.
4. In the root directory, run `npm run storybook`. This will start the
storybook on port 9002 (by default), which will load any "stories" that are
configured in the `stories` directory.
5. Open a web browser to http://localhost:9002.
6. Change files in the `packages/macgooey/src` directory and see your changes
appear automatically.

### This project uses

- [React](https://reactjs.org)
- [Styled Components](https://www.styled-components.com/) for CSS styling
- [Flow](https://flow.org/) for types
- [Jest](https://facebook.github.io/jest/) & [Enzyme](http://airbnb.io/enzyme/) for tests
- [Rollup](https://rollupjs.org/) for bundling the UI distributable
- [Storybook JS](https://storybook.js.org/) & [Webpack](https://webpack.js.org/) for running and building the storybook
- [Feather Icons](https://feathericons.com/)
