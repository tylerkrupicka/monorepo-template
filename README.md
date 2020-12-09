<div align="center">
  <h1>{{kebab}}</h1>
</div>

> A design system for {{kebab}} UI components, built on [@design-systems/cli](https://github.com/intuit/design-systems-cli).

## 👍 Philosophy

This is a design system intended for UI components currently being built or tested in {{kebab}}.

Included with this repo:

- Scaffolding for shared components and packages.
- Automatic CI/CD pipeline on circleCI.
  - PR canary builds to NPM (using auto).
  - Canary builds of Storybook (guides included in docs).
  - Accessibility audits.
  - Bundle size monitoring.
- An instance of the Storybook documentation site with custom plugins.
- Theme support.
- Advanced development using Typescript.

Components in this repository will ideally not clone functionality from other design systems, unless necessary for a time-boxed experiment.

## 🚀 Usage

To use a component from this repo you will first need to install the component into your project.

For an example we will try to use the `@{{kebab}}/card` component.

```sh
npm i @{{kebab}}/card
# or with yarn
yarn add @{{kebab}}/card
```

Then to use the component in your code just import it!

```js
import Card from "@{{kebab}}/card";
```

### :nail_care: CSS

Our components automatically import CSS files, which should work by default with most UI build tools. The CSS includes any themes we have set up in the project.
If your project only ever needs a single theme,
you can set up your build step to remove unused themes. This can help shave off ~20% of the CSS in the project by removing unneeded theme variables.

1. Install the plugin

```sh
npm i --save-dev @design-systems/babel-plugin-replace-styles
# or
yarn add -D @design-systems/babel-plugin-replace-styles
```

2. Rename your `.babelrc` to `babel.config.json`. This is [required](https://babeljs.io/docs/en/configuration#babelconfigjs) so Babel will process library files.

3. In your babel config add the following plugin. You can change the `use` parameter to any of the available themes.

```json
{
  "plugins": [
    [
      "@design-systems/babel-plugin-replace-styles",
      {
        "scope": "{{kebab}}",
        "use": "some-theme",
        "replace": "main"
      }
    ]
  ]
}
```

4. Make sure your Webpack config runs babel on `@{{kebab}}` packages.

```js
module: {
  rules: [
    {
      include: [
        path.join(__dirname, 'node_modules/@{{kebab}}/'),
        path.join(__dirname, 'src'),
      ],
      test: /\.(js|jsx|mjs|tsx|ts)$/,
      loader: 'babel-loader',
    },
  ],
}
```

#### Manual Imports

If you want to manually import CSS for some reason, it should be possible using the following syntax.

```js
import { Card } from "@{{kebab}}/card";
import "@{{kebab}}/card/dist/main.css";
```

## 🤝 Contributing

To create a new component:

```sh
yarn run create
```

Follow the prompts and you will have a new sub-package for your component!

```sh
# First link the package
yarn
# Then start developing
cd components/<Component Name>
yarn run dev
```

Before submitting a pull request ensure that all of the following work:

1. `yarn build`
2. `yarn lint`
3. `yarn test`

### How to use the `scripts`

Inside the package.json there are a bunch of scripts that this repo uses to run the project in development and to build the project.

Below you can read a description of scripts you should use while developing in this project.

- `yarn dev`: Builds everything and starts a storybook with all components
- `yarn test`: Run `jest` over the test files
- `yarn lint`: Lint all files using `eslint`
- `yarn clean`: Remove all dependencies, build files, and generated files from the project
- `yarn create`: Create a new components withing the repo
- `yarn create:package`: Create a new package withing the repo
- `yarn playroom`: Start a `playroom` with all of your components. This is where `.snippet` files are used
- `yarn size`: Determine how your changes effect the size of all sub-packages

#### Package Level `scripts`

Every command works at both the monorepo and package level. The means you can run some script from just the package/component for a faster development experience.

- `yarn dev`: Build any dependency in the monorepo the component depends on, and start a storybook with just the component
- `yarn test`: Test just the component
- `yarn lint`: Lint just the component
- `yarn clean`: Clean the generated files for just the component
- `yarn size`: Determine how your changes effect the size of the component
