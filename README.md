# How to use ?

Install the package:

```bash
# Install DernierCri's config
$ yarn add git+https://git@github.com/derniercri/eslint-config-derniercri.git -D

# Install dependencies
$ yarn add eslint-plugin-prettier prettier eslint-config-prettier -D
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

Finally the following script to your `package.json`

```json
"lint": "eslint 'src/**/*.{t,j}s{,x}'"
```

And voilà !

Check the **sample** folder of this repository for a concrete example.
