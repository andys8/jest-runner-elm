# Jest Runner Elm (experimental)

Based on the work done in [jest-runner-prettier](https://github.com/keplersj/jest-runner-prettier).
Currently experimental.

## Usage

### Install

Install `jest`_(it needs Jest 21+)_ and `jest-runner-elm`

```bash
yarn add --dev jest jest-runner-elm

# or with NPM

npm install --save-dev jest jest-runner-elm

```

### Add it to your Jest config

In your `package.json`
```json
{
  "jest": {
    "runner": "jest-runner-elm"
  }
}
```

Or in `jest.config.js`
```js
module.exports = {
  runner: 'jest-runner-elm',
}
```

### Run Jest
```bash
yarn jest
```