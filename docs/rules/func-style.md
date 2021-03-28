# func-style

## Details

```javascript
'func-style': [2, 'declaration', {
  allowArrowFunctions: true,
}]
```

## Reason

Declaring function expressions seems like a detour if you ask me. Why not just declare the function?

Yes, you avoid hoisting by using function expressions, but if you have [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) enabled (which you should), that won't be a problem.

`allowArrowFunctions` is enabled because you of course should be able to benefit from that ES6 feature.

## Docs

<https://eslint.org/docs/rules/func-style>
