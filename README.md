# _Obey Ziga_

This package provides heavily **opinionated** rules, in a shared config.

> The idea for the package name branched out from an internal joke at my office. I hold strong opinions about writing code and my teammates were indifferent.
> So it became a running joke to just "obey what Ziga says."

## Installation

```
$ npm i -D eslint eslint-config-obey-ziga
```

`obey-ziga` turns on `eslint:all`. Rules I hold no opinion about are deactivated.

## Usage

Once the package is installed, add `obey-ziga` to your `extend` prop in either `package.json` or `.eslintrc`.

```js
{
  "extends": [
    "obey-ziga"
  ]
}
```

## Warning equals error

It is a hot topic in the dev world whether to treat warnings as errors or just something that can be safely ignored.

I am on the side of "treat warnings as errors". That is a personal preference. I want a clean output console when I run my linter.

## Roadmap

Upcoming versions:

- `1.1.X`
    - Rules for React (`eslint-plugin-react`).
    - Rules for A11Y JSX (`eslint-plugin-jsx-a11y`).
- `1.2.X`
    - Rules for TypeScript (`@typescript-eslint/eslint-plugin`).
    - Disabling of ESLint rules hijacked for TypeScript compatibility.
