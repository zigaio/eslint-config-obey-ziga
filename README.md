# _Obey Ziga_

This package provides heavily **opinionated** rules, in a shared config.

> The idea for the package name branched out from an internal joke at my office. I hold strong opinions about writing code, and my teammates were indifferent.
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

```json
{
  "extends": [
    "eslint:all",
    "obey-ziga"
  ]
}
```

> This package expects `eslint:all` to be on.

### With React (JSX & JSX-A11Y)

For opinionated React rules:

```json
{
  "extends": [
    "plugin:react/all",
    "plugin:jsx-a11y/recommended",
    "obey-ziga/react"
  ]
}
```

> This package expects `plugin:react/all` and `plugin:jsx-a11y/recommended` to be on.

### With TypeScript

For opinionated TypeScript rules:

```json
{
  "extends": [
    "plugin:@typescript-eslint/all",
    "obey-ziga/typescript"
  ]
}
```

> This package expects `plugin:@typescript-eslint/all` to be on. 

## Warning equals error

It is a hot topic in the dev world whether to treat warnings as errors or just something that can be safely ignored.

This package is on the side of "_treat warnings as errors_". Only `warning-comments` (e.g. `// TODO`, `// FIX`) will yield warnings.
Everything else will yield errors.

## Roadmap

Upcoming versions:

- `3.x.x`
  - Docs for disabled rules.
  - Docs modified rules

### Checklist

- [x] ESLint base (v1.x)
- [x] React (v2.x)
  - [x] Base
  - [x] Hooks
  - [x] JSX
  - [x] JSX-A11Y
- [x] TypeScript (v3.X)
- [ ] Docs
  - [ ] Doc disabled rules
  - [ ] Doc modified rules
