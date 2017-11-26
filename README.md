# Jest Runner Elm - Experimental POC

This is a proof of concept to integrate `elm-test` into `jest` as test runner. The repository is based on the work done to use jest with prettier in [jest-runner-prettier](https://github.com/keplersj/jest-runner-prettier). There is also [pyjest](https://github.com/cpojer/pyjest) to execute python tests. This repository itself is highly experimental.

## Usage

```sh
npm install
npm test
```

The expected result is that the tests are executed using `elm-test`. One file is passing and one is failing.
The first run triggers download and installation of files and can potentially fail. Try executing multiple times.

```sh
TEST RUN FAILED

Duration: 2047 ms
Passed:   0
Failed:   9
Todo:     3


Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        6.02s
Ran all test suites.
```
