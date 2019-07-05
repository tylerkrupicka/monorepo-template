# @{{kebab}}/babel-preset

Automatically load the css for the @{{kebab}} design system.

## Installation

```sh
npm i --save-dev @{{kebab}}/babel-preset
# or
yarn add -D @{{kebab}}/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@{{kebab}}/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@{{kebab}}/card';
```

Output:

```js
import Card from '@{{kebab}}/card';
import '@{{kebab}}/card/dist/main.css';
```
