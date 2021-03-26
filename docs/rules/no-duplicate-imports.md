# no-duplicate-imports

## Details

```javascript
'no-duplicate-imports': [2, {
  includeExports: true,
}]
```

## Reason

Single `import` statements per module will make the code clearer because you can see everything being imported from that module on one line.

If re-exporting from an imported module, you should add the imports to the `import`-statement, and export that directly.

## Docs

<https://eslint.org/docs/rules/no-duplicate-imports>
