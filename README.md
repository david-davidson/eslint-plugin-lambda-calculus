# eslint-plugin-lambda-calculus
#### “The eslint rule you never asked for!”

Looking to enforce Church encoding in production? This plugin will help you catch those pesky numbers and booleans.

**Usage:**
```
yarn add eslint-plugin-lambda-calculus --dev
```
Then, in your .eslintrc:
```
module.exports = {
    ...
    plugins: ["lambda-calculus"],
    rules: {
        "lambda-calculus/no-booleans": 2,
        "lambda-calculus/no-numbers": 2
    }
};
```
