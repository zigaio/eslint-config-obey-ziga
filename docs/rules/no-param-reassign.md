# no-param-reassign

## Details

```javascript
'no-param-reassign': [2, {
  props: true,
}]
```

## Reason

Function parameters are often defined to be used as-is with data passed in as arguments.

Reassigning a parameter is a bad practice. Instead, aim for having scoped variables that are set based on the parameters.

Often, functions are used for object manipulation. In those cases it is best to create new objects, using `Object.assign` or object literal spreading, to assign the properties their new value.

## Docs

<https://eslint.org/docs/rules/no-param-reassign>
