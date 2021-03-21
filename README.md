# _Obey Ziga_

This package provides heavily **opinionated** rules, in a shared config.

> The idea for the package name branched out from an internal joke at my office. I hold strong opinions about writing code and my teammates were indifferent.
> So it became a running joke to just "obey what Ziga says."

## Installation

```
$ npm i -D eslint-config-obey-ziga
```

## Usage

Once the package is installed, add `obey-ziga` to your `extend` prop in either `package.json` or `.eslintrc`.

This package relies on `eslint:all` to be on. `obey-ziga` will deactivate and change rules based on the opinionated config.

```js
{
  "extends": [
    "eslint:all",
    "obey-ziga"
  ]
}
```

## Warning equals error

It is a hot topic in the dev world whether to treat warnings as errors or just something that can be safely ignored.

This package on the side of "treat warnings as errors". Only `warning-comments` (e.g. `// TODO`, `// FIX`) will yield warnings.
Everything else will yield errors.

## Roadmap

Upcoming versions:

- `1.1.X`
    - Rules for React (`eslint-plugin-react`).
    - Rules for A11Y JSX (`eslint-plugin-jsx-a11y`).
- `1.2.X`
    - Rules for TypeScript (`@typescript-eslint/eslint-plugin`).
    - Disabling of ESLint rules hijacked for TypeScript compatibility.
