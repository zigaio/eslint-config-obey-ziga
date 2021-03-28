# array-element-newline

## Details

```javascript
'array-element-newline'
:
[2, {
  ArrayExpression: 'always',
  ArrayPattern: {
    multiline: true,
    minItems: 4,
  },
}]
```

## Reason

Generally I treat arrays and objects the same. Only difference is I'm okay with single-item arrays without newlines.

When destructuring an array I'm okay with multiple variable names on the same line. However when we reach `> 3` I like
multiline for readability.

### Example

```js
// Single item.
const a = [];
const b = ['single item'];
const c = [{
  propA: 'a',
}];

// Multiple items.
const a = [
  'a',
  'b',
];
const b = [
  {
    propA: 'a',
  },
  {
    propA: 'a',
  }
];

// Destructuring.
const [a] = someArray;
const [a, b, c] = someArray;
const [
  a,
  b,
  c,
  d,
] = someArray;
```

## Docs

<https://eslint.org/docs/rules/array-element-newline>
