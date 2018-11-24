module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  preset: "jest-puppeteer",
  testRegex: "./*\\.test\\.js$",
  setupTestFrameworkScriptFile: "./tests/setupVisualTests.js",
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"]
};
