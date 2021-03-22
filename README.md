# _Obey Ziga_

This package provides heavily **opinionated** rules, in a shared config.

> The idea for the package name branched out from an internal joke at my office. I hold strong opinions about writing code and my teammates were indifferent.
> So it became a running joke to just "obey what Ziga says."

It is expected, when using this library to extend your ESLint, you turn on all rules by default (`eslint:all`).

`obey-ziga` will deactivate and change rules based on an opinionated config.

**Philosophy** _Even though you might be indifferent about some rules, there are things that are worth being assisted to remember._

## Installation

```
$ npm i -D eslint-config-obey-ziga
```

## Usage

Once the package is installed, add `obey-ziga` to your `extends` prop in either `package.json` or `.eslintrc`.

```js
{
  "extends": [
    "eslint:all",
    "obey-ziga"
  ]
}
```

> This package expects `eslint:all` to be on.

### With React (JSX)

For opinionated React rules:

```js
{
  "extends": [
    // ...
    "plugin:react/all",
    "obey-ziga/react",
  ]
}
```

> This package expects `plugin:react/all` to be on.

## Warning equals error

It is a hot topic in the dev world whether to treat warnings as errors or just something that can be safely ignored.

This package is on the side of "_treat warnings as errors_". Only `warning-comments` (e.g. `// TODO`, `// FIX`) will yield warnings.
Everything else will yield errors.

## Roadmap

Upcoming versions:

- `2.x`
    - Rules for React (`eslint-plugin-react`).
    - Rules for React Hooks (`eslint-plugin-react-hooks`).
    - Rules for JSX, including A11Y (`eslint-plugin-jsx-a11y`).
- `3.x`
    - Rules for TypeScript (`@typescript-eslint/eslint-plugin`).
    - Disabling of ESLint rules hijacked for TypeScript compatibility.

### Checklist

- [x] ESLint base (v1.x)
- [ ] React (v2.x)
  - [x] Base
  - [x] Hooks
  - [ ] JSX
  - [ ] JSX-A11Y
- [ ] TypeScript (v3.X)
