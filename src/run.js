const { pass, fail } = require("create-jest-runner");
const exec = require('child-process-promise').exec;
const throat = require('throat')(1);

module.exports = ({ testPath, config, globalConfig }) => {
  const start = new Date();

  if (!config.throat) {
    config.throat = throat;
  }

  return config.throat(() => {
    return exec('./node_modules/.bin/elm-test ' + testPath)
      .then(() => Promise.resolve(
        pass({
          start,
          end: new Date(),
          test: {
            path: testPath
          }
        }))
      )
      .catch((result) =>
        Promise.resolve(
          fail({
            start,
            end: new Date(),
            test: {
              path: testPath,
              errorMessage: result.stderr ? result.stderr : result.stdout
            }
          }))
      );
  });

};
