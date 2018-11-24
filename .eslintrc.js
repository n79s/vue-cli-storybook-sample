module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    jquery: true
  },
  //puppeteerで使うグローバル変数
  globals: {
    page: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
