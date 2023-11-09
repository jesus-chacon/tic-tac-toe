/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:import/typescript",
    "plugin:storybook/recommended",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
        },
      },
    ],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    "vue/multi-word-component-names": 0,
    "prettier/prettier": [
      "error",
      {
        printWidth: 110,
      },
      {
        usePrettierrc: true,
      },
    ],
    "vue/no-dupe-keys": [0, { groups: [] }],
    "vue/require-toggle-inside-transition": 0,
  },
  overrides: [
    // Playwright rules
    {
      files: ["./src/E2E/*.spec.ts"],
      extends: ["plugin:playwright/recommended"],
    },
    // **.ts
    {
      files: ["*.ts"],
      extends: ["plugin:import/typescript"],
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
  ],
};
