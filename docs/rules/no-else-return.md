# no-else-return

## Details

```javascript
'no-else-return': [2, {
  allowElseIf: false,
}]
```

## Reason

Often `else` blocks in if-statements are unnecessary or outright redundant.

Additionally `else if` blocks complicates readability of your code. Rather break it up into multiple consecutive if-statements.

If you find the need for `else if` statement blocks, consider using a `switch/case` instead.

## Docs

<https://eslint.org/docs/rules/no-else-return>
