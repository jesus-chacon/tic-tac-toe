export default {
  root: true,
  extends: ["eslint:recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 110,
      },
      {
        usePrettierrc: true,
      },
    ],
  },
};
