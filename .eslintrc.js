module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    "no-case-declarations": 0,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    // TODO: make the option capIsNewExceptions work
    "new-cap": 0,
    "@typescript-eslint/explicit-member-accessibility": 0
  }
};
