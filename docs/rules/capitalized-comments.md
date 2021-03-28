# capitalized-comments

## Details

```javascript
'capitalized-comments': [2, 'always', {
  ignoreInlineComments: true,
  ignoreConsecutiveComments: true,
}]
```

## Reason

For grammatical correctness I like to enforce that comments start capitalized.

Inline comments are ignored as it is common practice to reference camelCased variable names as the first word in an inline comment.

Consecutive comments are ignored because some people like to write paragraphs without using starred comment syntax.

### Example

```js
// This is a comment showcasing
// what this rule config permits.
const lowerCaseAllowed = true;
const obj = {
  propA: 'a',
  propB: lowerCaseAllowed ? 'b' : 'B', // lowerCaseAllowed decides if it's b or B.
  propC: 'c',
}
```

## Docs

<https://eslint.org/docs/rules/capitalized-comments>
