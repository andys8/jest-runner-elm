module.exports = {
  runner: "./src/index.js",
  displayName: "test:elm",
  "moduleFileExtensions": [
    "elm"
  ],
  "testMatch": [
    "**/tests/*.elm"
  ],
  testPathIgnorePatterns: ["/node_modules/", "/src/__fixtures__/", "/coverage/", "/elm-stuff/"],
  verbose: true,
  silent: false
};
