# How to use ?

Install the package:

```bash
$ yarn add git+https://git@github.com/derniercri/eslint-config-derniercri.git
```

Create or edit a `.eslintrc` file at project's root :

```js
{
  "extends": [
    "derniercri"
  ]
}
```

And a `.prettierrc` (`prettier` can't read `eslint` configuration) :

```js
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
```

And voilà !


