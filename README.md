# _Obey Ziga_

This package provides heavily **opinionated** rules, in a shared config.

> The idea for the package name branched out from an internal joke at my office. I hold strong opinions about writing code, and my teammates were indifferent.
> So it became a running joke to just "obey what Ziga says."

`obey-ziga` aims to make your code make more sense to your future self and its future readers.

## Installation

```
$ npm i -D eslint-config-obey-ziga
```

### With React

```
$ npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

### With TypeScript

```
$ npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

Once the package is installed, add `obey-ziga` to your `extends` prop in either `package.json` or `.eslintrc.*`.

```js
{
  "extends": [
    "eslint:all",
    "obey-ziga"
  ]
}
```

### With React

```js
{
  "extends": [
    // ...
    "plugin:react/all",
    "plugin:jsx-a11y/recommended",
    "obey-ziga/react"
  ]
}
```

**NB**: `plugin:react-hooks/recommended` is actively excluded as it only has two rules which are both set to "error" by `obey-ziga/react`.

### With TypeScript

```js
{
  "extends": [
    // ...
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [
        "plugin:@typescript-eslint/all",
        "obey-ziga/typescript"
      ],
      "parserOptions": {
        "project": [
          "./tsconfig.json"
        ]
      }
    }
  ]
}
```

## Philosophy

> Even though you might be indifferent about some rules, there are things that are worth being assisted in remembering.

I would rather explicitly take a position on a rule than leave it potentially undecided.

As a default, I recommend you turn on `eslint:all` in your linting, and let this config explicitly disable or modify rules. The recommendation also applies for `plugin:react/all`, `plugin:jsx-a11y/recommended`, and `plugin:@typescript-eslint/all`.

### Warning equals error

It is a hot topic in the dev world whether to treat warnings as errors or just something that can be safely ignored.

This package is on the side of "_treat warnings as errors_". Only `no-warning-comments` (e.g. `// TODO`, `// FIX`) will yield warnings. Everything else will yield errors.

Rather explicitly disable rules case-by-case than be just warned and have an option to ignore it.

#### TODO, FIX, etc. comments

`obey-ziga` warns about these rather than yield errors because I recognize that development is a complex thing, and some logic requirements can be extensive, so you implement them in stages.

`obey-ziga` warns rather than leave this rule off to make sure these type of comments are not forgotten as is usually the case.
