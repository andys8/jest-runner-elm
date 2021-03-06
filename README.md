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
➜  jest-runner-elm git:(master) ✗ npm test

> jest-runner-elm@0.0.0-development test /repository/jest-runner-elm
> jest -c jest-elm.config.js

 PASS   test:elm  src/example/tests/TestsPassing.elm
  ✓  (3404ms)

 FAIL   test:elm  src/example/tests/TestsFailing.elm
  ✕  (3931ms)

Success! Compiled 0 modules.
Successfully generated /dev/null
Success! Compiled 1 module.
Successfully generated /repository/jest-runner-elm/elm-stuff/generated-code/elm-community/elm-test/elmTestOutput.js

elm-test 0.18.10
----------------

Running 1 test. To reproduce these results, run: elm-test --fuzz 100 --seed 1620139978 /repository/jest-runner-elm/src/example/tests/TestsFailing.elm

↓ TestsFailing
✗ the ultimate answer is 41

    42
    ╷
    │ Expect.equal
    ╵
    41



TEST RUN FAILED

Duration: 310 ms
Passed:   0
Failed:   1


Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        4.209s
Ran all test suites.
npm ERR! Test failed.  See above for more details.

```
