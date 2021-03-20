# _Obey Ziga_

This package provides my personal convictions for how to write proper JavaScript, in a shared config.

Rules for React and TypeScript plugins are included.

This library's rules are meant for vanilla JS, React, or React with TypeScript projects. Not TypeScript as standalone.

## Installation

Full support:

```
$ npm i -D eslint eslint-plugin-react eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-config-obey-ziga
```

Vanilla JS only:

```
$ npm i -D eslint eslint-config-obey-ziga
```

With JSX support:

```
$ npm i -D eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-obey-ziga
```

## Usage

Once the package is installed, add `obey-ziga/recommended` to your `extend` prop in either `package.json` or `.eslintrc`.

```js
{
  "extends": [
    "eslint:recommended", // or eslint:all
    "obey-ziga/recommended"
  ]
}
```

> I strongly suggest including `eslint:recommended` as `obey-ziga` does not alter any of the recommended rules from `eslint`.

The package is shipped with 5 configurations:

- `obey-ziga/recommended`
- `obey-ziga/dev`
- `obey-ziga/dev-ts`
- `obey-ziga/jsx`
- `obey-ziga/tsx`

### Recommended

`obey-ziga/recommended` contains all ESLint rules, including ES6.

Requires:

- `eslint`

#### Development

While `obey-ziga/dev` is its own configuration, it is in fact `obey-ziga/recommended` but with less strict rules.

See the [Warning equals error](#warning-equals-error) section below.

### React (JSX)

`obey-ziga/jsx` extends on `obey-ziga/recommended` with `plugin:react` + `plugin:jsx-a11y`.

Requires

- `eslint-plugin-react`
- `eslint-plugin-jsx-a11y`

### TypeScript (TSX)

`obey-ziga/tsx` extends on `obey-ziga/jsx` with `plugin:@typescript-eslint`.

Requires:

- `@typescript-eslint/eslint-plugin`

#### TypeScript development

If you want to use less strict rules while developing your React with TypeScript, add `obey-ziga/common-ts` after `obey-ziga/tsx` in the `extends` prop.

`obey-ziga/dev-ts` is identical to `obey-ziga/dev` with the exception that it disables rules that `@typescript-eslint` overrides.

```js
{
  "extends": [
    "eslint:recommended",
    "obey-ziga/tsx",
    "obey-ziga/common-ts"
  ]
}
```

## Warning equals error

> I **strongly** recommend that you use the `obey-ziga/recommended` configuration.

It is a hot topic in the dev world whether to treat warnings as errors or just something that can be safely ignored.

I am on the side of "treat warnings as errors". That is a personal preference. I want a clean output console when I run my linter.

However, I concede that during development most people, myself included, wants to be able to do whatever they want to get a proof-of-concept going. Then do cleanup afterwards.

That is why I have included the `obey-ziga/dev` configuration, to be loose with rules such as `semi`, `no-console`, `no-alert`, and `no-shadow`.

I will however **strongly** recommend that you use the `obey-ziga/recommended` configuration regardless.
That way you will learn to write your code in the right manner from the get-go, and eventually it will be natural for you to write code that way.
