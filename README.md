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

To use a package from this repo you will first need to install the package into your project.

For an example we will try to use the `@{{kebab}}/card` component.

```sh
npm i @{{kebab}}/card
# or with yarn
yarn add @{{kebab}}/card
```

## 🤝 Contributing

To create a new package:

```sh
yarn run create
```

Follow the prompts and you will have a new sub-package for your component!

```sh
# First link the package
yarn
# Then start developing
cd packages/<Package Name>
yarn run dev
```

Before submitting a pull request ensure that all of the following work:

1. `yarn build`
2. `yarn lint`
3. `yarn test`

### How to use the `scripts`

Inside the package.json there are a bunch of scripts that this repo uses to run the project in development and to build the project.

Below you can read a description of scripts you should use while developing in this project.

- `yarn start`: Build all packages
- `yarn test`: Run `jest` over the test files
- `yarn lint`: Lint all files using `eslint`
- `yarn clean`: Remove all dependencies, build files, and generated files from the project
- `yarn create`: Create a new package withing the repo
- `yarn size`: Determine how your changes effect the size of all sub-packages

#### Package Level `scripts`

Every command works at both the monorepo and package level. The means you can run some script from just the package for a faster development experience.

- `yarn dev`: Build any dependency in the monorepo the package depends on, and build the package
- `yarn test`: Test just the package
- `yarn lint`: Lint just the package
- `yarn clean`: Clean the generated files for just the package
- `yarn size`: Determine how your changes effect the size of the package
